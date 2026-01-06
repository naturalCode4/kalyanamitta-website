require('dotenv').config({ path: '/Users/fireowl/Documents/coding/kalyanamitta-website/.env' });
const { google } = require('googleapis'); // Im googleapis library

console.log('Environment Variables:', process.env);

console.log('GOOGLE_OAUTH_CLIENT_ID_LOCAL:', process.env.GOOGLE_OAUTH_CLIENT_ID_LOCAL);
console.log('GOOGLE_OAUTH_CLIENT_SECRET_LOCAL:', process.env.GOOGLE_OAUTH_CLIENT_SECRET_LOCAL);

// Use the local Google OAuth credentials from your .env file
const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID_LOCAL;
const CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET_LOCAL;
const REDIRECT_URI = 'http://localhost:3000'; // Ensure this matches the one in Google Cloud Console

console.log('CLIENT_ID:', CLIENT_ID);
console.log('CLIENT_SECRET:', CLIENT_SECRET);
console.log('Redirect URI:', REDIRECT_URI);

// Create an OAuth2 client
const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

// Generate the URL for user consent
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline', // Ensures a refresh token is returned
  scope: ['https://mail.google.com/'], // Add the scopes you need
});

console.log('Authorize this app by visiting this URL:', authUrl);

// After the user authorizes, they will be redirected to the redirect URI with a code
// Paste the code below to exchange it for tokens
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Enter the code from the page here: ', async (code) => {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('Access Token:', tokens.access_token);
    console.log('Refresh Token:', tokens.refresh_token);
    console.log('Save the refresh token in your .env file!');
    readline.close();
  } catch (error) {
    console.error('Error retrieving access token', error);
    readline.close();
  }
});