// api/send-email.js
import nodemailer from 'nodemailer';

// export default function matches Vercel's requirement
export default async function handler(req, res) {
  // 1. Handle CORS (Vercel specific way)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Or specific domain in production
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // 2. Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 3. Destructure body
  const { name, email, subject, message } = req.body;

  try {
    // 4. Create Transporter (Same as your old server.js)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD 
      }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, 
        to: process.env.EMAIL_USER,   
        replyTo: email,               
        subject: `${name} sent a web message`,
        html: `
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        text: `${message}\n\nFrom: ${name}\nEmail: ${email}\nSubject: ${subject}`
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
}