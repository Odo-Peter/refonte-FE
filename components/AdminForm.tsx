import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { formSchema } from '@/app/(dashboard)/(routes)/admins/constants';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from './ui/button';

const AdminForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      contactNumber: '',
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 mt-6 ml-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="font-bold text-sm">Name</FormLabel>
              <FormControl>
                <input
                  type="text"
                  placeholder="Name e.g Arya Stark"
                  className=" text-[13px] outline-none px-3 md:px-4 py-[10px] focus:border-gray-300 active:border-gray-300 active:outline-none border focus:placeholder:opacity-75 border-gray-300 placeholder:text-gray-400 rounded-md text-gray-700 md:w-[70%] lg:w-[60%]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactNumber"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="font-bold text-sm">Contact</FormLabel>
              <FormControl>
                <input
                  type="text"
                  placeholder="Contact number e.g +234 9068101500"
                  className=" text-[13px] outline-none px-3 md:px-4 py-[10px] focus:border-gray-300 active:border-gray-300 active:outline-none border focus:placeholder:opacity-75 border-gray-300 placeholder:text-gray-400 rounded-md text-gray-700 md:w-[70%] lg:w-[60%]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="font-bold text-sm">Email</FormLabel>
              <FormControl>
                <input
                  type="text"
                  placeholder="Email e.g aryastark@gmail.com"
                  className=" text-[13px] outline-none px-3 md:px-4 py-[10px] focus:border-gray-300 active:border-gray-300 active:outline-none border focus:placeholder:opacity-75 border-gray-300 placeholder:text-gray-400 rounded-md text-gray-700 md:w-[70%] lg:w-[60%]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="bg-blue-700 hover:bg-blue-600 text-gray-50 md:w-[70%] lg:w-[60%]"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AdminForm;
