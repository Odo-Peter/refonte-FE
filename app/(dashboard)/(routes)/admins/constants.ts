import * as z from 'zod';
import { isValidPhoneNumber } from 'react-phone-number-input';

export const formSchema = z.object({
  name: z.string().min(3, {
    message: 'Name should be more than 3 characters',
  }),
  contactNumber: z
    .string()
    .refine(isValidPhoneNumber, { message: 'Invalid phone number' })
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

export const editFormSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: 'Name should be more than 3 characters',
    })
    .optional()
    .or(z.literal('')),
  contactNumber: z
    .string()
    .refine(isValidPhoneNumber, { message: 'Invalid phone number' })
    .or(z.literal('')),
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .trim()
    .toLowerCase()
    .optional()
    .or(z.literal('')),
  // currentPassword: z
  //   .string()
  //   .min(3, {
  //     message: 'Current password is above 3 characters',
  //   })
  //   .optional()
  //   .or(z.literal('')),
  // newPassword: z
  //   .string()
  //   .min(3, {
  //     message: 'New password should be above 3 characters',
  //   })
  //   .optional()
  //   .or(z.literal('')),
});
