# Google Reviews Production Setup Guide

This guide will walk you through setting up Google Reviews to work in production. Follow these steps based on your hosting platform.

## What You Need

You already have these (they're in your `.env` file):
- **Google Places API Key**: `AIzaSyDFOJosV3Aa08yz2osL-6o8M7Lu7eJBJ54`
- **Google Place ID**: `ChIJ5bz9XP_GxokRwQuJbJ82iRE`

## How It Works

1. Your React app tries to fetch reviews from a serverless function/API endpoint
2. The serverless function uses your API key to get reviews from Google
3. Reviews are displayed on your website

**Without setup**: Your site will show static fallback reviews (the 3 testimonials)
**With setup**: Your site will automatically fetch and display real Google Reviews

---

## Setup Instructions by Platform

### Option 1: Vercel (Easiest - Recommended)

Vercel is a popular hosting platform that works great with React apps.

#### Step 1: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your Git repository (GitHub, GitLab, etc.)
4. Vercel will auto-detect it's a React app
5. Click "Deploy"

#### Step 2: Set Up the Serverless Function

The file `api/google-reviews.js` is already in your project. Vercel will automatically detect it and create the endpoint at `/api/google-reviews`.

**No additional code needed!** ✅

#### Step 3: Set Environment Variables

1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Environment Variables"
3. Add these two variables:

   **Variable 1:**
   - Name: `GOOGLE_PLACES_API_KEY`
   - Value: `AIzaSyDFOJosV3Aa08yz2osL-6o8M7Lu7eJBJ54`
   - Environment: Production, Preview, Development (check all)

   **Variable 2:**
   - Name: `GOOGLE_PLACE_ID`
   - Value: `ChIJ5bz9XP_GxokRwQuJbJ82iRE`
   - Environment: Production, Preview, Development (check all)

4. Click "Save"

#### Step 4: Redeploy

1. Go to "Deployments" tab
2. Click the three dots (⋯) on your latest deployment
3. Click "Redeploy"

#### Step 5: Test

Visit your deployed site and go to the `/about` page. You should see real Google Reviews loading!

---

### Option 2: Netlify

#### Step 1: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Click "Deploy site"

#### Step 2: Create the Serverless Function

1. In your project, create a folder: `netlify/functions/`
2. Create a file: `netlify/functions/google-reviews.js`
3. Copy the Netlify template code from `api/google-reviews-universal.js` (look for the "NETLIFY" section)
4. Or use this code:

```javascript
// netlify/functions/google-reviews.js
exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    const PLACE_ID = process.env.GOOGLE_PLACE_ID;

    if (!GOOGLE_PLACES_API_KEY || !PLACE_ID) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'Google Places API key or Place ID not configured',
        }),
      };
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${GOOGLE_PLACES_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: `Google Places API error: ${data.status}`,
          details: data.error_message || 'Unknown error',
        }),
      };
    }

    const reviews = (data.result.reviews || []).map((review) => ({
      author_name: review.author_name,
      rating: review.rating,
      text: review.text,
      time: review.time,
      relative_time_description: review.relative_time_description,
    }));

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        reviews,
        place_name: data.result.name,
        overall_rating: data.result.rating,
      }),
    };
  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Failed to fetch reviews',
        message: error.message,
      }),
    };
  }
};
```

#### Step 3: Set Environment Variables

1. In Netlify dashboard, go to your site
2. Click "Site settings" → "Environment variables"
3. Add:

   **Variable 1:**
   - Key: `GOOGLE_PLACES_API_KEY`
   - Value: `AIzaSyDFOJosV3Aa08yz2osL-6o8M7Lu7eJBJ54`

   **Variable 2:**
   - Key: `GOOGLE_PLACE_ID`
   - Value: `ChIJ5bz9XP_GxokRwQuJbJ82iRE`

4. Click "Save"

#### Step 4: Redeploy

1. Go to "Deployments" tab
2. Click "Trigger deploy" → "Clear cache and deploy site"

#### Step 5: Test

Visit your deployed site and check the `/about` page for Google Reviews.

---

### Option 3: Other Platforms (AWS, Azure, Cloudflare, etc.)

#### Step 1: Create Serverless Function

1. Look at `api/google-reviews-universal.js` for templates
2. Find the template for your platform (AWS Lambda, Azure Functions, Cloudflare Workers, etc.)
3. Copy the code and adapt it to your platform's requirements

#### Step 2: Set Environment Variables

Set these in your platform's environment variable settings:
- `GOOGLE_PLACES_API_KEY` = `AIzaSyDFOJosV3Aa08yz2osL-6o8M7Lu7eJBJ54`
- `GOOGLE_PLACE_ID` = `ChIJ5bz9XP_GxokRwQuJbJ82iRE`

#### Step 3: Get Your API Endpoint URL

After deploying your function, you'll get a URL like:
- `https://your-function.aws.amazon.com/reviews`
- `https://your-app.azurewebsites.net/api/google-reviews`
- etc.

#### Step 4: Set React App Environment Variable

In your React app's environment variables (on your hosting platform), set:
- `REACT_APP_GOOGLE_REVIEWS_API_URL` = `https://your-api-endpoint-url.com`

#### Step 5: Deploy and Test

Deploy your React app and test the `/about` page.

---

## Troubleshooting

### Reviews Not Showing?

1. **Check browser console** (F12 → Console tab)
   - Look for error messages
   - Check what URL it's trying to fetch from

2. **Check your serverless function logs**
   - Vercel: Deployments → Click deployment → Functions tab
   - Netlify: Functions tab in dashboard
   - AWS: CloudWatch logs
   - Azure: Function App logs

3. **Verify environment variables are set**
   - Make sure both `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` are set
   - Check they're set for the correct environment (Production, not just Development)

4. **Test your API key directly**
   - Visit this URL (replace with your values):
   ```
   https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ5bz9XP_GxokRwQuJbJ82iRE&fields=name,rating,reviews&key=AIzaSyDFOJosV3Aa08yz2osL-6o8M7Lu7eJBJ54
   ```
   - You should see JSON with reviews. If you see an error, check your API key.

5. **Check CORS errors**
   - Make sure your serverless function includes CORS headers
   - The templates in `api/google-reviews-universal.js` include CORS headers

### Still Seeing Static Reviews?

- This means the API call is failing and falling back to static reviews
- Check the browser console for errors
- Verify your serverless function is deployed and accessible
- Make sure environment variables are set correctly

### API Quota Exceeded?

- Google gives you $200/month free credit (about 11,000+ requests)
- Check your usage in [Google Cloud Console](https://console.cloud.google.com/)
- If you exceed, you'll be charged $17 per 1,000 additional requests

---

## Quick Checklist

Before deploying, make sure:

- [ ] You've chosen your hosting platform
- [ ] Serverless function is created (or `api/google-reviews.js` exists for Vercel)
- [ ] Environment variables are set on your hosting platform:
  - [ ] `GOOGLE_PLACES_API_KEY` = `AIzaSyDFOJosV3Aa08yz2osL-6o8M7Lu7eJBJ54`
  - [ ] `GOOGLE_PLACE_ID` = `ChIJ5bz9XP_GxokRwQuJbJ82iRE`
- [ ] If using a custom platform, `REACT_APP_GOOGLE_REVIEWS_API_URL` is set
- [ ] You've redeployed after setting environment variables
- [ ] You've tested on the `/about` page

---

## Need Help?

1. Check the browser console for errors
2. Check your serverless function logs
3. Verify your API key works by testing the direct URL above
4. Make sure environment variables are set for the correct environment (Production)

---

## Summary

**For Vercel (Easiest):**
1. Deploy to Vercel
2. Set 2 environment variables
3. Redeploy
4. Done! ✅

**For Other Platforms:**
1. Create serverless function using template
2. Set 2 environment variables on function
3. Set `REACT_APP_GOOGLE_REVIEWS_API_URL` on React app (if needed)
4. Deploy
5. Test

Your API key and Place ID are already configured in your `.env` file for local development. You just need to set them on your hosting platform for production!

