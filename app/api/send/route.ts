import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;


    const emailHtml = `
      <html>
        <head></head>
        <body style="font-family: Arial, sans-serif; padding: 20px;">
          <div>
            <h1 style="color: #333;">New Contact From Portfolio</h1>
            <p style="font-size: 16px; margin-bottom: 10px;">
              You have received a new message from your portfolio website contact form:
            </p>
            <p style="font-size: 16px; margin-bottom: 5px;">
              <strong>Name:</strong> ${name}
            </p>
            <p style="font-size: 16px; margin-bottom: 5px;">
              <strong>Email:</strong> ${email}
            </p>
            <p style="font-size: 16px; margin-bottom: 5px;">
              <strong>Subject:</strong> ${subject}
            </p>
            <p style="font-size: 16px; margin-bottom: 5px;">
              <strong>Message:</strong> ${message}
            </p>
          </div>
        </body>
      </html>
    `;


    // Configure transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kelvintran1512.dev@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Configure email content
    const mailOptions = {
      from: "kelvintran1512.dev@gmail.com",
      to: "danggkhoaa1512@gmail.com",
      subject: subject || "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      html: emailHtml,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
