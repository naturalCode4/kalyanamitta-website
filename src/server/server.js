const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: '../../.env'});
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

console.log('env. :', process.env)

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from React frontend
  methods: ['GET', 'POST'], // Allow specific HTTP methods
  credentials: true, // Allow cookies if needed
}));

// Configure OAuth2 client
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_OAUTH_CLIENT_ID_LOCAL,
  process.env.GOOGLE_OAUTH_CLIENT_SECRET_LOCAL,
  'http://localhost:3000' // Ensure this matches the redirect URI in Google Cloud Console
);

// Set the refresh token
oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_OAUTH_REFRESH_TOKEN_LOCAL,
});

// Create a transporter using Nodemailer
const createTransporter = async () => {
  const accessToken = await oauth2Client.getAccessToken();

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_USER,
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID_LOCAL,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET_LOCAL,
      refreshToken: process.env.GOOGLE_OAUTH_REFRESH_TOKEN_LOCAL,
      accessToken: accessToken.token,
    },
  });
};

// Email endpoint
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = await createTransporter();

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Send to your email
      subject: `Web Message from ${name}`,
      text: `${message}\nFrom: ${name} (${email})`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});

// Use environment variable for port or default to 5001
const PORT = process.env.PORT_BACKEND || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors()); // Allow requests from your frontend
// app.use(cors({
//   origin: 'http://localhost:3000', // Allow requests from React frontend
//   methods: ['GET', 'POST'], // Allow specific HTTP methods
//   credentials: true, // Allow cookies if needed
// }));

// // Configure nodemailer
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // Use your email provider
//   auth: {
//     user: process.env.EMAIL_USER, // Use environment variable for email
//     pass: process.env.EMAIL_PASS, // Use environment variable for password
//   },
// });

// // Email endpoint
// app.post('/send-email', async (req, res) => {
//   const { name, email, message } = req.body;

//   const mailOptions = {
//     from: email,
//     to: process.env.EMAIL_USER, // Send to your email, // Replace with your email
//     subject: `Web Message from ${name}`,
//     text: `${message}\nFrom: ${name} (${email})`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).send('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Failed to send email');
//   }
// });

// // Use environment variable for port or default to 5001
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));