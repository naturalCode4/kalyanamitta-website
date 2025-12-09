# Email Setup with Gmail and OAuth2

This document outlines the steps to set up email functionality using Gmail and OAuth2 with Nodemailer. It includes the progress we've made so far and the remaining steps to complete the setup.

---

## **Progress So Far**

1. **Google Cloud Project Setup**:
   - Created a Google Cloud project.
   - Generated **OAuth 2.0 Client ID** and **Client Secret**.
   - Added `http://localhost:3000` as an **Authorized Redirect URI** in the Google Cloud Console.

2. **Environment Variables**:
   - Added the following variables to the `.env` file:
     ```properties
     GOOGLE_OAUTH_CLIENT_ID_LOCAL=<your-client-id>
     GOOGLE_OAUTH_CLIENT_SECRET_LOCAL=<your-client-secret>
     REACT_APP_BACKEND_URL=http://localhost:5001
     EMAIL_USER=healingontap963@gmail.com
     ```

3. **Script to Generate Refresh Token**:
   - Created a `generateRefreshToken.js` script to programmatically generate the OAuth refresh token.

4. **Current Status**:
   - The `redirect_uri_mismatch` error is being encountered because Google Cloud Console changes (adding `http://localhost:3000` as a redirect URI) may take a few hours to propagate.

---

## **Steps to Complete the Setup**

### **1. Wait for Google Cloud Changes to Propagate**
- Wait for the `http://localhost:3000` redirect URI to take effect in Google Cloud Console.
- Retry the `generateRefreshToken.js` script after a few hours:
  ```bash
  node generateRefreshToken.js

  -----------

  Follow the steps:
Open the authUrl in your browser.
Log in and authorize the app.
Copy the code from the redirect URI and paste it into the terminal.
Save the generated Refresh Token in your .env file:
2. Alternative Method: Use Google OAuth Playground
If you prefer, you can use the Google OAuth 2.0 Playground to generate the refresh token. This method may also encounter the redirect_uri_m<vscode_annotation details='%5B%7B%22title%22%3A%22incomplete-url-substring-sanitization%22%2C%22description%22%3A%22Unvalidated%20input%20in%20URLs%20risks%20syntax%20or%20behavior%20modification%22%7D%5D'>ismatch</vscode_annotation> issue if the redirect URI (https://developers.google.com/oauthplayground) is not added to the Authorized Redirect URIs in Google Cloud Console.

Steps:
Open the Google OAuth 2.0 Playground.
Click the gear icon in the top-right corner.
Check Use your own OAuth credentials and enter your Client ID and Client Secret.
Select the required scopes (e.g., https://mail.google.com/) and click Authorize APIs.
Log in and authorize the app.
Exchange the authorization code for tokens and copy the Refresh Token.
Save the refresh token in your .env file:
1 vulnerability
3. Programmatically Generate the Refresh Token
You can also use the generateRefreshToken.js script to generate the refresh token programmatically.

Steps:
Ensure your .env file contains the following variables:

Run the script:

Follow the steps:

The script will output a URL.
Open the URL in your browser and log in with your Google account.
After authorizing the app, Google will redirect you to the redirect URI (e.g., http://localhost:3000) with a code parameter in the URL.
Copy the code from the URL and paste it into the terminal.
Save the generated Refresh Token in your .env file:

4. Update Nodemailer Configuration
Once you have the refresh token, update your backend email configuration in server.js:

5. Test Email Functionality
Use the transporter to send a test email:
6. Deploy to Production
Update the Authorized Redirect URIs in Google Cloud Console to match your production domain:
Example:
Update the .env file with the production backend URL:
Troubleshooting
Redirect URI Mismatch
Ensure the REDIRECT_URI in your script matches the one in Google Cloud Console.
Wait for changes in Google Cloud Console to propagate (can take a few hours).
Missing Credentials for "PLAIN"
Ensure the EMAIL_USER, GOOGLE_OAUTH_CLIENT_ID_LOCAL, GOOGLE_OAUTH_CLIENT_SECRET_LOCAL, and OAUTH_REFRESH_TOKEN are correctly set in the .env file.
Access Blocked by Google
Ensure the app is configured correctly in Google Cloud Console.
Check for any security alerts in your Gmail account.

Resources
Google OAuth 2.0 Playground
Google Cloud Console
Nodemailer Documentation