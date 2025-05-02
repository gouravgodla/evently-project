import React from "react";
import Image from "next/image"; // Import Image component for Next.js (if using Next.js)

// const About = () => {
//   return (
//     <section className="relative bg-white py-16 px-6 sm:px-16 lg:px-32 font-poppins">
//       <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

//         {/* Left Section (Text Content) */}
//         <div className="lg:w-1/2 text-center lg:text-left">
//           <h1 className="h1-bold  font-bold text-black mb-4 animate__animated animate__fadeIn animate__delay-1s">
//             About
//           </h1>
//           <p className="text-xl p-regular-20 md:p-regular-24 text-gray-700 mb-6 animate__animated animate__fadeIn animate__delay-2s">
//             Localeventfinder is your go-to platform for discovering a wide range of local events, from tech meetups to fun and entertainment events. Our goal is to bring people together for exciting opportunities to learn, connect, and enjoy.
//           </p>
//           <p className="p-regular-20 md:p-regular-24 text-lg  text-gray-600 mb-8 animate__animated animate__fadeIn animate__delay-3s">
//             Whether you're looking to attend a tech talk, participate in a hackathon, or have fun at a concert, Localeventfinder helps you find the best events near you.
//           </p>
//           <a
//             href="#explore"
//             className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white rounded-full text-lg font-semibold hover:bg-gradient-to-l transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-4s"
//           >
//             Explore Events Now
//           </a>
//         </div>

//         {/* Right Section (Image / Graphic) */}
//         <div className="lg:w-1/2 relative bg-white p-6  shadow-xl rounded-full  z-0">
//           <Image
//             src="/assets/images/main-image.png"  // Using the uploaded image (make sure the path is correct)
//             alt="Event Illustration"
//             width={1000}
//             height={1000}
//             className="w-full rounded-full object-cover animate__animated animate__fadeIn animate__delay-5s"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

const About = () => {
  return (
    <section className="relative bg-[url(/assets/images/bg3.jpg)] bg-cover bg-center bg-no-repeat py-20 px-6 sm:px-16 lg:px-32 font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Section (Text Content) */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 mb-6 animate__animated animate__fadeIn animate__delay-1s drop-shadow-lg">
            About
          </h1>
          <p className="p-regular-20 md:p-regular-24">
            Localeventfinder is your go-to platform for discovering a wide range
            of local events, from tech meetups to fun and entertainment events.
            Our goal is to bring people together for exciting opportunities to
            learn, connect, and enjoy.
          </p>
          <p className="p-regular-20 md:p-regular-24">
            Whether you're looking to attend a tech talk, participate in a
            hackathon, or have fun at a concert, Localeventfinder helps you find
            the best events near you.
          </p>
          <br />
          <a
            href="#"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white rounded-full text-lg font-semibold hover:bg-gradient-to-l transition duration-300 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-4s shadow-md"
          >
            Explore Events Now
          </a>
        </div>

        {/* Right Section (Image / Graphic) */}
        <div className="lg:w-1/2 relative bg-white p-6 rounded-full shadow-2xl transition duration-500 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-5s">
          <Image
            src="/assets/images/main-image.png"
            alt="Event Illustration"
            width={1000}
            height={1000}
            className="w-full h-auto rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
