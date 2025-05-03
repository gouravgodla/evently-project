// "use client"

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { getAllCategories } from "@/lib/actions/category.actions";
// import { ICategory } from "@/lib/database/models/category.model";
// import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const CategoryFilter = () => {
//   const [categories, setCategories] = useState<ICategory[]>([]);
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const getCategories = async () => {
//       const categoryList = await getAllCategories();

//       categoryList && setCategories(categoryList as ICategory[])
//     }

//     getCategories();
//   }, [])

//   const onSelectCategory = (category: string) => {
//       let newUrl = '';

//       if(category && category !== 'All') {
//         newUrl = formUrlQuery({
//           params: searchParams.toString(),
//           key: 'category',
//           value: category
//         })
//       } else {
//         newUrl = removeKeysFromQuery({
//           params: searchParams.toString(),
//           keysToRemove: ['category']
//         })
//       }

//       router.push(newUrl, { scroll: false });
//   }

//   return (
//     <Select onValueChange={(value: string) => onSelectCategory(value)}>
//       <SelectTrigger className="select-field">
//         <SelectValue placeholder="Category" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectItem value="All" className="select-item p-regular-14">All</SelectItem>

//         {categories.map((category) => (
//           <SelectItem value={category.name} key={category._id} className="select-item p-regular-14">
//             {category.name}
//           </SelectItem>
//         ))}
//       </SelectContent>
//     </Select>
//   )
// }

// export default CategoryFilter
// "use client";

// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { getAllCategories } from "@/lib/actions/category.actions";
// import { ICategory } from "@/lib/database/models/category.model";
// import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Button } from "@/components/ui/button";

// const CategoryFilter = () => {
//   const [categories, setCategories] = useState<ICategory[]>([]);
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   useEffect(() => {
//     const getCategories = async () => {
//       const categoryList = await getAllCategories();
//       if (categoryList) setCategories(categoryList as ICategory[]);
//     };
//     getCategories();
//   }, []);

//   const toggleCategory = (category: string) => {
//     let updatedCategories;
//     if (selectedCategories.includes(category)) {
//       updatedCategories = selectedCategories.filter((c) => c !== category);
//     } else {
//       updatedCategories = [...selectedCategories, category];
//     }
//     setSelectedCategories(updatedCategories);

//     let newUrl = "";
//     if (updatedCategories.length > 0) {
//       newUrl = formUrlQuery({
//         params: searchParams.toString(),
//         key: "category",
//         value: updatedCategories.join(","),
//       });
//     } else {
//       newUrl = removeKeysFromQuery({
//         params: searchParams.toString(),
//         keysToRemove: ["category"],
//       });
//     }
//     router.push(newUrl, { scroll: false });
//   };

//   return (
//     <div className="flex flex-row gap-5 p-1 bg-gray-100 rounded-lg shadow-lg w-full max-w-1xl justify-between items-center">
//       <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800">
//         Filter by Category
//       </h2>
//       <Popover>
//         <PopoverTrigger asChild>
//           <Button
//             variant="outline"
//             className="w-full flex justify-between border border-gray-300 bg-white text-gray-700 hover:bg-gray-200 rounded-lg p-3 text-lg focus:ring-2 focus:ring-blue-500"
//           >
//             {selectedCategories.length > 0
//               ? selectedCategories.join(", ")
//               : "Select Categories"}
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-80 p-5 bg-white border border-gray-300 shadow-lg rounded-lg max-h-72 overflow-y-auto">
//           <div className="flex flex-col gap-3">
//             <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-3 rounded-md text-lg">
//               <Checkbox
//                 checked={selectedCategories.length === categories.length}
//                 onCheckedChange={() => toggleCategory("All")}
//               />
//               <span className="text-gray-700">All</span>
//             </label>
//             {categories.map((category) => (
//               <label
//                 key={category._id}
//                 className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-3 rounded-md text-lg"
//               >
//                 <Checkbox
//                   checked={selectedCategories.includes(category.name)}
//                   onCheckedChange={() => toggleCategory(category.name)}
//                 />
//                 <span className="text-gray-700">{category.name}</span>
//               </label>
//             ))}
//           </div>
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// };

// export default CategoryFilter;

"use client";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { getAllCategories } from "@/lib/actions/category.actions";
import { ICategory } from "@/lib/database/models/category.model";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const CategoryFilter = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await getAllCategories();
      if (categoryList) setCategories(categoryList as ICategory[]);
    };
    getCategories();
  }, []);

  const toggleCategory = (category: string) => {
    let updatedCategories;
    if (selectedCategories.includes(category)) {
      updatedCategories = selectedCategories.filter((c) => c !== category);
    } else {
      updatedCategories = [...selectedCategories, category];
    }
    setSelectedCategories(updatedCategories);

    let newUrl = "";
    if (updatedCategories.length > 0) {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: updatedCategories.join(","),
      });
    } else {
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: ["category"],
      });
    }
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="flex flex-row gap-3 p-2 bg-gray-100 rounded-lg shadow-lg w-full max-w-2xl items-center">
      <h2 className="text-md font-semibold text-gray-800 whitespace-nowrap">
        Filter by Category
      </h2>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="flex-grow border border-gray-300 bg-white text-gray-700 hover:bg-gray-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500"
          >
            {selectedCategories.length > 0
              ? selectedCategories.join(", ")
              : "Select Categories"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-2 bg-white border border-gray-300 shadow-lg rounded-lg max-h-48 overflow-y-auto">
          <div className="flex flex-col gap-1">
            {categories.map((category) => (
              <label
                key={category._id}
                className="flex items-center gap-1 cursor-pointer hover:bg-gray-100 p-1 rounded-md text-sm"
              >
                <Checkbox
                  checked={selectedCategories.includes(category.name)}
                  onCheckedChange={() => toggleCategory(category.name)}
                />
                <span className="text-gray-700">{category.name}</span>
              </label>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CategoryFilter;
