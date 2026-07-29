// api/alignment-form.js
//
// Handles Alignment Form submissions. Google Sheets is the source of truth:
// its write is attempted first and defines overall success. The email
// notification to Adin is attempted independently right after — its
// success/failure never blocks or is blocked by the Sheets write, so a
// broken mailbox never loses a real submission and a broken Sheet never
// silently eats one without at least trying to notify Adin by email.
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

// Small and isolated on purpose: dropping in Sentry later is a one-line
// change in each catch block (see the TODO comments below).
async function tryWriteToSheet(answers, timestamp) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        // Service account private keys are stored in env vars with escaped
        // "\n" sequences instead of real newlines — swap them back.
        private_key: (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // One column per answer, in the order the client sent them, plus a
    // leading timestamp column. Adding a new form field later just means a
    // wider row — nothing here assumes there's exactly one question.
    const row = [timestamp, ...Object.values(answers)];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:A',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: [row] },
    });

    return { success: true };
  } catch (err) {
    console.error('Alignment Form: Sheets write failed:', err);
    // TODO: Sentry.captureException(err)
    return { success: false, error: err };
  }
}

async function trySendEmail(answers, timestamp) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const rowsHtml = Object.entries(answers)
      .map(([question, answer]) => `<p><strong>${question}:</strong> ${String(answer).replace(/\n/g, '<br>')}</p>`)
      .join('\n');
    const rowsText = Object.entries(answers)
      .map(([question, answer]) => `${question}: ${answer}`)
      .join('\n');

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Alignment Form submission',
      html: `${rowsHtml}\n<p><strong>Submitted:</strong> ${timestamp}</p>`,
      text: `${rowsText}\n\nSubmitted: ${timestamp}`,
    });

    return { success: true };
  } catch (err) {
    console.error('Alignment Form: email notification failed:', err);
    // TODO: Sentry.captureException(err)
    return { success: false, error: err };
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { answers } = req.body;
  if (!answers || typeof answers !== 'object') {
    return res.status(400).json({ error: 'Missing answers' });
  }

  const timestamp = new Date().toISOString();

  // Two independent attempts — neither try/catch wraps the other, so a
  // thrown Sheets error can never prevent the email from being tried, and
  // vice versa.
  const sheetsResult = await tryWriteToSheet(answers, timestamp);
  const emailResult = await trySendEmail(answers, timestamp);

  return res.status(200).json({
    success: sheetsResult.success, // Sheets write is the source of truth
    sheetsOk: sheetsResult.success,
    emailOk: emailResult.success,
  });
}
