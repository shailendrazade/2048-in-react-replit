
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { RecaptchaEnterpriseServiceClient } from '@google-cloud/recaptcha-enterprise';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const recaptchaClient = new RecaptchaEnterpriseServiceClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Verify reCAPTCHA
    const projectPath = recaptchaClient.projectPath(process.env.GOOGLE_PROJECT_ID!);
    const assessment = await recaptchaClient.createAssessment({
      parent: projectPath,
      assessment: {
        event: {
          token: req.body.token,
          siteKey: process.env.RECAPTCHA_SITE_KEY,
        },
      },
    });

    if (!assessment[0].tokenProperties?.valid) {
      return res.status(400).json({ message: 'Invalid reCAPTCHA' });
    }

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}
