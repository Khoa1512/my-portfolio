import { z } from 'zod';

/**
 * Shared contact schema — used on BOTH sides:
 * - client: react-hook-form + zodResolver for instant UX feedback
 * - server: re-validated inside the Server Action (never trust the client)
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Please enter your name.' })
    .max(100, { message: 'Name is too long.' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Please enter a valid email.' })
    .max(254, { message: 'Email is too long.' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(5000, { message: 'Message is too long.' }),
});

export type ContactInput = z.infer<typeof contactSchema>;
