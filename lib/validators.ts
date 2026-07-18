import { z } from 'zod';

/**
 * Shared contact schema — used on BOTH sides:
 * - client: react-hook-form + zodResolver for instant UX feedback
 * - server: re-validated inside the Server Action (never trust the client)
 */
export const contactSchema = z.object({
  name: z.string().min(2, { message: 'Please enter your name.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactInput = z.infer<typeof contactSchema>;
