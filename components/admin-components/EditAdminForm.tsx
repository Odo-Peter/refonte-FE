import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { formSchema } from '@/app/(dashboard)/(routes)/admins/constants';

import { useClicked } from '@/contexts/ContextProviders';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const EditAdminForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      contactNumber: '',
      email: '',
      password: '',
    },
  });

  const { handleUpdateClick } = useClicked();

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 mt-4">
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
                  className=" text-[13px] outline-none px-3 md:px-4 py-[8px] focus:border-gray-400 active:border-gray-400 active:outline-none border focus:placeholder:opacity-75 border-gray-300 placeholder:text-gray-400 rounded-md text-gray-700"
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
                  className=" text-[13px] outline-none px-3 md:px-4 py-[8px] focus:border-gray-400 active:border-gray-400 active:outline-none border focus:placeholder:opacity-75 border-gray-300 placeholder:text-gray-400 rounded-md text-gray-700"
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
                  className="text-[13px] outline-none px-3 md:px-4 py-[8px] focus:border-gray-400 active:border-gray-400 active:outline-none border focus:placeholder:opacity-75 border-gray-300 placeholder:text-gray-400 rounded-md text-gray-700"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="font-bold text-sm">Password</FormLabel>
              <FormControl>
                <input
                  type="password"
                  placeholder="Default password was '123456'"
                  className="text-[13px] outline-none px-3 md:px-4 py-[8px] focus:border-gray-400 active:border-gray-400 active:outline-none border focus:placeholder:opacity-75 border-gray-300 placeholder:text-gray-400 rounded-md text-gray-700 lg:w-[60%]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex items-center justify-end gap-x-4 pt-6">
          <Button
            onClick={handleUpdateClick}
            variant={'outline'}
            className="hover:bg-gray-900/10"
            type="button"
          >
            Cancel
          </Button>
          <Button
            className="bg-blue-700 hover:bg-blue-600 text-gray-50 w-full lg:w-[60%]"
            type="submit"
          >
            {true ? (
              'Submit'
            ) : (
              <>
                <span>Submiting...</span>
                <Loader2 className="ml-2 w-4 h-4 font-semibold animate-spin" />
              </>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EditAdminForm;
