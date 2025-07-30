import { z } from 'zod';


export const signupSchema = z.object({
  name: z
    .string()
    .min(2, 'Name is required')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name must contain only letters and spaces'),

  email: z
    .string()
    .email('Invalid email address')
    .refine((email) => email.endsWith('@example.com'), {
      message: 'Email must be from the domain example.com',
    }),

  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .max(20, 'Password must be less than 20 characters long')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
      message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
    }),
});
