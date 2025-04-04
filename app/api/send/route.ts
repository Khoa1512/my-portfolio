// app/api/send/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/email-template';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Contact Form <contact@portfolio.i0.com>",
      to: "danggkhoaa1512@gmail.com",
      subject: "New Contact Form Submission",
      react: React.createElement(EmailTemplate, {
        name,
        email,
        subject,
        message,
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
