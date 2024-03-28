import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { editFormSchema } from '@/app/(dashboard)/(routes)/admins/constants';

import { useMutation } from '@apollo/client';
import { useClicked } from '@/contexts/ContextProviders';

import {
  GET_ADMINS,
  UPDATE_ADMIN_INFO,
} from '@/helpers/graphql-queries/admin-queries/adminQuery';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { PhoneInput } from '../ui/phone-input';

interface AdminIdProps {
  adminId: string;
}

const EditAdminForm = ({ adminId }: AdminIdProps) => {
  const form = useForm<z.infer<typeof editFormSchema>>({
    resolver: zodResolver(editFormSchema),
    defaultValues: {
      name: '',
      contactNumber: '',
      email: '',
    },
  });

  const { handleUpdateClick } = useClicked();
  const [updateAdmin, { error, loading }] = useMutation(UPDATE_ADMIN_INFO, {
    refetchQueries: [GET_ADMINS],
  });

  function onSubmit(values: z.infer<typeof editFormSchema>) {
    // ✅ This will be type-safe and validated.
    // console.log(values);
    try {
      updateAdmin({ variables: { updateAdminId: adminId, ...values } });
    } catch (error: any) {
      console.log(error);
    } finally {
      setTimeout(() => {
        form.reset();
      }, 3000);
    }
  }

  return (
    <Form {...form}>
      {error && <div>Something happened {error.message}</div>}
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
                  className=" text-xs outline-none px-3 md:px-4 py-[10px] focus:border-gray-400 active:border-gray-400 active:outline-none border focus:placeholder:opacity-75 border-gray-300 placeholder:text-gray-400 rounded-md text-gray-700"
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
                  className="text-xs outline-none px-3 md:px-4 py-[10px] focus:border-gray-400 active:border-gray-400 active:outline-none border focus:placeholder:opacity-75 border-gray-300 placeholder:text-gray-400 rounded-md text-gray-700"
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
                <PhoneInput
                  className=""
                  placeholder="e.g +234*******"
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
            className="bg-blue-700 hover:bg-blue-600 text-gray-50"
            type="submit"
          >
            {!loading ? 'Update' : 'Updating...'}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default EditAdminForm;
