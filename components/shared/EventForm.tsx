"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { eventFormSchema } from "@/lib/validator";
import * as z from "zod";
import { eventDefaultValues } from "@/constants";
import Dropdown from "./Dropdown";
<<<<<<< HEAD
import { Textarea } from "@/components/ui/textarea";
import FileUploader from "./FileUploader";

=======
import { Textarea } from "@/components/ui/textarea"
import FileUploader from "./FileUploader";


>>>>>>> ec21b564e99913ddf4e4158036753aa8ac30f42b
type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
};

const EventForm = ({ userId, type }: EventFormProps) => {
  const initialValues = eventDefaultValues;
  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
<<<<<<< HEAD
    defaultValues: {
      ...initialValues,
      endDateTime: initialValues.endDateTime.toISOString(), // Convert Date to string
    },
=======
    defaultValues: initialValues,
>>>>>>> ec21b564e99913ddf4e4158036753aa8ac30f42b
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof eventFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
<<<<<<< HEAD
                  <Input
                    placeholder="Event title"
                    {...field}
                    className="input-field"
                  />
=======
                  <Input placeholder="Event title" {...field} className="input-field" />
>>>>>>> ec21b564e99913ddf4e4158036753aa8ac30f42b
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
<<<<<<< HEAD
                  <Dropdown
                    onChangeHandler={field.onChange}
                    value={field.value}
                  />
=======
                  <Dropdown onChangeHandler={field.onChange} value={field.value}/>
>>>>>>> ec21b564e99913ddf4e4158036753aa8ac30f42b
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
<<<<<<< HEAD
          <FormField
=======
        <FormField
>>>>>>> ec21b564e99913ddf4e4158036753aa8ac30f42b
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
<<<<<<< HEAD
                  <Textarea
                    placeholder="Description"
                    {...field}
                    className="textarea rounded-2xl"
                  />
=======
                  <Textarea placeholder="Description" {...field} className="textarea rounded-2xl" />
>>>>>>> ec21b564e99913ddf4e4158036753aa8ac30f42b
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
<<<<<<< HEAD
                  <FileUploader />
=======
                  <FileUploader/>
>>>>>>> ec21b564e99913ddf4e4158036753aa8ac30f42b
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
<<<<<<< HEAD

=======
        
>>>>>>> ec21b564e99913ddf4e4158036753aa8ac30f42b
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default EventForm;
