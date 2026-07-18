'use server';

import nodemailer from 'nodemailer';

import { contactSchema, type ContactInput } from '@/lib/validators';

export type ContactResult =
  | { ok: true }
  | { ok: false; error: 'validation' | 'send_failed' };

/**
 * Server Action: runs only on the server (the `'use server'` directive), so the
 * SMTP credentials never reach the client bundle. It's called directly as an
 * async function from the client form (type-safe, no manual /api fetch).
 *
 * Validation is repeated here with the same Zod schema — defense in depth: the
 * client can be bypassed, the server cannot.
 */
export async function sendContactMessage(
  input: ContactInput,
): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: 'validation' };
  }

  const { name, email, message } = parsed.data;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kelvintran1512.dev@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: 'kelvintran1512.dev@gmail.com',
      to: 'dangkhoa1512.work@gmail.com',
      replyTo: email,
      subject: `Portfolio contact — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="margin:0 0 12px;">New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return { ok: true };
  } catch (error) {
    console.error('Failed to send contact message:', error);
    return { ok: false, error: 'send_failed' };
  }
}
