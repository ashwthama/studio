"use server";

import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function handleContactSubmit(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: "Failed to send message. Please check the errors.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { name, email, message } = validatedFields.data;
  const smtpHost = process.env.SMTP_HOST??'smtp.gmail.com';
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);
  const smtpUser = process.env.SMTP_USER??'ashwanikumarnt@gmail.com';
  const smtpPassword = process.env.SMTP_PASSWORD ??'zeff slbo kkto qgpn';
  const smtpFrom = process.env.SMTP_FROM ?? smtpUser;
  const smtpTo = process.env.SMTP_TO ?? 'ashwanikumarnt@gmail.com';

  if (!smtpHost || !smtpUser || !smtpPassword || !smtpFrom) {
    return {
      message: "SMTP is not configured yet. Please set SMTP_HOST, SMTP_USER, SMTP_PASSWORD, and SMTP_FROM.",
      success: false,
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      from: smtpFrom,
      to: smtpTo,
      replyTo: email,
      subject: `Portfolio contact message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <h2>New portfolio contact message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    });
  } catch (error) {
    console.error("Failed to send contact email:", error);

    return {
      message: "Failed to send message right now. Please try again later or email me directly.",
      success: false,
    };
  }

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    success: true,
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
