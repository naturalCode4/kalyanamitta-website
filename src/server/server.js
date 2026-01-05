const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '../../.env'});
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true,
}));

// Simple SMTP transporter (for Gmail) - NO OAUTH2
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD // Use App Password, not regular password
    }
  });
};

// Email endpoint
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = createTransporter(); // Remove 'await' here

    const mailOptions = {
      from: process.env.EMAIL_USER, // Use your email as sender
      to: process.env.EMAIL_USER,   // Send to your email
      replyTo: email,               // Allow replying to the original sender
      subject: `${name} sent a web message`,
      html: `
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `${message}\n\nFrom: ${name}\nEmail: ${email}\nSubject: ${subject}`
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email. Please try again.' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

// Use environment variable for port or default to 5001
const PORT = process.env.PORT_BACKEND || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require('express');
// const cors = require('cors');
// require('dotenv').config({ path: '../../.env'});
// const nodemailer = require('nodemailer');
// const { google } = require('googleapis');

// const app = express();
// app.use(express.json());
// app.use(cors({
//   origin: 'http://localhost:3000', // Allow requests from React frontend
//   methods: ['GET', 'POST'], // Allow specific HTTP methods
//   credentials: true, // Allow cookies if needed
// }));

// // Configure OAuth2 client
// const oauth2Client = new google.auth.OAuth2(
//   process.env.GOOGLE_OAUTH_CLIENT_ID_LOCAL,
//   process.env.GOOGLE_OAUTH_CLIENT_SECRET_LOCAL,
//   'http://localhost:3000' // Ensure this matches the redirect URI in Google Cloud Console
// );

// // Set the refresh token
// oauth2Client.setCredentials({
//   refresh_token: process.env.GOOGLE_OAUTH_REFRESH_TOKEN_LOCAL,
// });

// // Create a transporter using Nodemailer
// const createTransporter = async () => {
//   const accessToken = await oauth2Client.getAccessToken();

//   return nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       type: 'OAuth2',
//       user: process.env.EMAIL_USER,
//       clientId: process.env.GOOGLE_OAUTH_CLIENT_ID_LOCAL,
//       clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET_LOCAL,
//       refreshToken: process.env.GOOGLE_OAUTH_REFRESH_TOKEN_LOCAL,
//       accessToken: accessToken.token,
//     },
//   });
// };

// // Email endpoint
// app.post('/send-email', async (req, res) => {
//   const { name, email, message } = req.body;

//   try {
//     const transporter = await createTransporter();

//     const mailOptions = {
//       from: email,
//       to: process.env.EMAIL_USER, // Send to your email
//       subject: `Web Message from ${name}`,
//       text: `${message}\n\nFrom: ${name}\nEmail:(${email})`,
//     };

//     await transporter.sendMail(mailOptions);
//     res.status(200).send('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Failed to send email');
//   }
// });

// // Use environment variable for port or default to 5001
// const PORT = process.env.PORT_BACKEND || 5001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));