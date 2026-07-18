'use server';

import { headers } from 'next/headers';
import nodemailer from 'nodemailer';

import { contactSchema, type ContactInput } from '@/lib/validators';

export type ContactResult =
  | { ok: true }
  | { ok: false; error: 'validation' | 'rate_limited' | 'send_failed' };

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;

/**
 * Per-IP sliding-window limiter, in-memory. This is a first line of defense
 * against a bypassed client spamming the action directly — it resets on cold
 * start and isn't shared across serverless instances, so it's not a durable
 * guarantee on its own (would need an external store like Upstash Redis for
 * that), but it stops the common single-instance abuse case with zero new deps.
 */
const requestLog = new Map<string, number[]>();

/** Escapes user-controlled text before it's interpolated into the HTML email body. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (requestLog.get(key) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(key, recent);
    return true;
  }
  recent.push(now);
  requestLog.set(key, recent);
  return false;
}

/**
 * Server Action: runs only on the server (the `'use server'` directive), so the
 * SMTP credentials never reach the client bundle. It's called directly as an
 * async function from the client form (type-safe, no manual /api fetch).
 *
 * Validation is repeated here with the same Zod schema — defense in depth: the
 * client can be bypassed, the server cannot. Rate limiting runs first so an
 * abusive caller never reaches Gmail at all.
 */
export async function sendContactMessage(
  input: ContactInput,
): Promise<ContactResult> {
  const headersList = await headers();
  const ip =
    headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    headersList.get('x-real-ip') ??
    'unknown';

  if (isRateLimited(ip)) {
    return { ok: false, error: 'rate_limited' };
  }

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
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return { ok: true };
  } catch (error) {
    console.error('Failed to send contact message:', error);
    return { ok: false, error: 'send_failed' };
  }
}
