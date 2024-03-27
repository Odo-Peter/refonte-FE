import * as z from 'zod';

export const formSchema = z.object({
  name: z.string().min(3, {
    message: 'Name should be more than 3 characters',
  }),
  contactNumber: z
    .string()
    .min(4, {
      message: 'Contact info is recommended',
    })
    .optional()
    .or(z.literal('')),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .trim()
    .toLowerCase(),
  password: z.string().min(3, {
    message: 'Password should be above 3 characters',
  }),
});
