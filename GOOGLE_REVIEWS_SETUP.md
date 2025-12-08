# Google Reviews Setup Guide

This guide will help you set up automatic fetching of Google Reviews for your website. **This setup works with any hosting platform** - Netlify, Vercel, AWS, Azure, Cloudflare, or any other platform that supports serverless functions or API endpoints.

## Prerequisites

1. ✅ A Google Cloud Platform account
2. ✅ A Google Places API key (you have this!)
3. A Google Business Profile with reviews
4. Your website deployed on any hosting platform (the code is universal and will work anywhere)

**Note**: Your API key and Place ID have been added to `.env` for local development. ✅

**Next**: When you deploy, make sure to set these same environment variables in your hosting platform.

## Step 1: Get Your Google Places API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Places API**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Places API"
   - Click on it and click "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key
   - (Optional but recommended) Restrict the API key to only allow the Places API

## Step 2: Find Your Google Place ID

You need to find your Google Business Profile's Place ID. Here are a few ways:

### Method 1: Using Google Place ID Finder
1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id#find-id)
2. Search for your business name
3. Copy the Place ID (it looks like: `ChIJN1t_tDeuEmsRUsoyG83frY4`)

### Method 2: From Google Maps
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business
3. Click on your business listing
4. Look at the URL - the Place ID is the long string after `!1s` and before `!8m2`
5. Or use the [Place ID Finder tool](https://developers.google.com/maps/documentation/places/web-service/place-id#find-id)

### Method 3: From Google Business Profile
1. Go to your [Google Business Profile](https://business.google.com/)
2. Your Place ID might be visible in the URL or settings

## Step 3: Set Up Your API Endpoint

You need to create a serverless function or API endpoint that fetches reviews from Google. The component will automatically detect common platforms, but you can also set a custom endpoint.

### Option A: Use Platform-Specific Functions (Recommended)

We've provided function templates for common platforms. Choose the one for your platform:

- **Vercel**: Use `api/google-reviews.js` (already created - works for Vercel)
- **Netlify**: See `api/google-reviews-universal.js` for Netlify template
- **Other platforms**: See `api/google-reviews-universal.js` for templates for AWS, Azure, Cloudflare, Netlify, etc.

### Option B: Set Custom API URL (Universal)

If your API endpoint is at a different URL, set the environment variable:

1. Create a `.env` file in your project root (for local development):
   ```
   REACT_APP_GOOGLE_REVIEWS_API_URL=https://your-api-endpoint.com/reviews
   ```

2. In your hosting platform, set the same environment variable:
   - **Netlify**: Site settings > Environment variables
   - **Vercel**: Project settings > Environment variables
   - **AWS**: Lambda environment variables or Systems Manager
   - **Azure**: Function App settings > Configuration
   - **Any platform**: Set `REACT_APP_GOOGLE_REVIEWS_API_URL` to your API endpoint

## Step 4: Configure Server-Side Environment Variables

Your serverless function needs these environment variables (set in your hosting platform):

- `GOOGLE_PLACES_API_KEY` = Your API key from Step 1
- `GOOGLE_PLACE_ID` = Your Place ID from Step 2

### Platform-Specific Instructions:

#### Netlify:
1. Go to your Netlify dashboard
2. Navigate to your site > "Site settings" > "Environment variables"
3. Add both variables
4. Redeploy your site

#### Vercel:
1. Go to your Vercel dashboard
2. Navigate to your project > "Settings" > "Environment Variables"
3. Add both variables
4. Redeploy your site

#### AWS Lambda:
1. Go to AWS Lambda console
2. Select your function > Configuration > Environment variables
3. Add both variables

#### Azure Functions:
1. Go to Azure Portal > Your Function App
2. Configuration > Application settings
3. Add both variables

#### Any Other Platform:
Set `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` as environment variables in your platform's settings.

### For Local Development:

**Note**: When running locally with `npm start`, the component will try to fetch reviews from your API endpoint. Since you don't have a backend running locally, it will automatically fall back to displaying static reviews. This is fine for development!

When you're ready to test with real Google Reviews locally, you have two options:

1. **Set up a local API server** (Express, etc.) and point `REACT_APP_GOOGLE_REVIEWS_API_URL` to it
2. **Deploy to a platform** that supports serverless functions (Vercel, Netlify, etc.) and test there

For now, your `.env` file is configured with your API key and Place ID. When you deploy, the serverless functions will use these values.

## Step 5: Test the Setup

1. Deploy your site with the environment variables set
2. Visit the `/about` page
3. The reviews should automatically load from Google
4. If you see an error, check:
   - Your API key is correct
   - The Places API is enabled
   - Your Place ID is correct
   - The environment variables are set correctly

## Troubleshooting

### Reviews not showing?

1. **Check the browser console** for any error messages
2. **Verify your API key** is working by testing it directly:
   ```
   https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=name,rating,reviews&key=YOUR_API_KEY
   ```
3. **Check your platform's function/logs** for server-side errors:
   - Netlify: Functions tab in dashboard
   - Vercel: Functions tab in dashboard
   - AWS: CloudWatch logs
   - Azure: Function App logs
4. **Verify environment variables** are set correctly:
   - Server-side: `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID`
   - Client-side (optional): `REACT_APP_GOOGLE_REVIEWS_API_URL` if using custom endpoint
5. **Check the API endpoint URL** - the component will try to auto-detect, but you can set `REACT_APP_GOOGLE_REVIEWS_API_URL` explicitly

### API Quota Exceeded?

Google Places API has usage limits. If you exceed them:
- Check your usage in Google Cloud Console
- Consider upgrading your plan
- Implement caching to reduce API calls

### CORS Errors?

The serverless functions handle CORS automatically. If you see CORS errors:
- Make sure you're using your API endpoint, not calling Google API directly from the browser
- Check that your serverless function includes CORS headers (see the universal template)
- Verify the API endpoint URL is correct (check `REACT_APP_GOOGLE_REVIEWS_API_URL` if set)

## Cost Considerations

Google Places API has a pricing structure:
- First $200/month in credits is free
- After that, it's $17 per 1,000 requests
- Reviews are typically cached, so costs should be minimal

## Security Notes

- **Never commit your API key** to version control
- **Restrict your API key** to only allow the Places API
- **Set up API key restrictions** by domain/IP if possible
- **Monitor your API usage** in Google Cloud Console

## Support

If you encounter issues:
1. Check the browser console for client-side errors
2. Check your hosting platform's function logs for server-side errors
3. Verify all environment variables are set correctly
4. Test your API key directly using the URL in the troubleshooting section

