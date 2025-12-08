# Universal Deployment Guide

This guide explains how to deploy the Google Reviews functionality on **any hosting platform**.

## How It Works

The Google Reviews component is **platform-agnostic**. It works by:

1. **Auto-detection**: Automatically detects common platforms (Netlify, Vercel) and uses the appropriate endpoint
2. **Environment variable override**: You can set `REACT_APP_GOOGLE_REVIEWS_API_URL` to point to any API endpoint
3. **Fallback**: Falls back to static reviews if the API is unavailable

## Quick Setup for Any Platform

### 1. Create Your API Endpoint

You need a serverless function or API endpoint that:
- Accepts GET requests
- Returns JSON with this structure:
  ```json
  {
    "reviews": [
      {
        "author_name": "John Doe",
        "rating": 5,
        "text": "Great service!",
        "time": 1234567890,
        "relative_time_description": "2 months ago"
      }
    ],
    "overall_rating": 4.8
  }
  ```

### 2. Use the Universal Template

See `api/google-reviews-universal.js` for code templates for:
- Netlify
- Vercel
- AWS Lambda
- Azure Functions
- Cloudflare Workers
- Any Node.js-based platform

### 3. Set Environment Variables

**On your API/serverless function** (server-side):
- `GOOGLE_PLACES_API_KEY` - Your Google Places API key
- `GOOGLE_PLACE_ID` - Your Google Business Place ID

**In your React app** (client-side, optional):
- `REACT_APP_GOOGLE_REVIEWS_API_URL` - Full URL to your API endpoint (if not using auto-detection)

### 4. Deploy

The component will automatically:
- Use `REACT_APP_GOOGLE_REVIEWS_API_URL` if set (recommended)
- Auto-detect Vercel and use `/api/google-reviews`
- Auto-detect Netlify (if deployed there) and use `/.netlify/functions/google-reviews`
- Fall back to `/api/google-reviews` for other platforms
- Show static reviews if the API fails (works great for local development!)

## Platform-Specific Examples

### Netlify
- Create function using template from `api/google-reviews-universal.js`
- Endpoint: `/.netlify/functions/google-reviews` (auto-detected)
- Set env vars in Netlify dashboard

### Vercel
- Function: `api/google-reviews.js` (already created)
- Endpoint: `/api/google-reviews` (auto-detected)
- Set env vars in Vercel dashboard

### AWS (Lambda + API Gateway)
1. Create Lambda function using template from `api/google-reviews-universal.js`
2. Set `REACT_APP_GOOGLE_REVIEWS_API_URL=https://your-api-gateway-url.amazonaws.com/reviews`
3. Set Lambda environment variables

### Azure Functions
1. Create function using template from `api/google-reviews-universal.js`
2. Set `REACT_APP_GOOGLE_REVIEWS_API_URL=https://your-function-app.azurewebsites.net/api/google-reviews`
3. Set function app settings

### Cloudflare Workers
1. Create worker using template from `api/google-reviews-universal.js`
2. Set `REACT_APP_GOOGLE_REVIEWS_API_URL=https://your-worker.your-subdomain.workers.dev`
3. Set worker secrets

### Custom Backend
1. Create API endpoint that matches the expected response format
2. Set `REACT_APP_GOOGLE_REVIEWS_API_URL=https://your-api.com/reviews`
3. Ensure CORS headers are set:
   ```
   Access-Control-Allow-Origin: *
   Access-Control-Allow-Methods: GET, OPTIONS
   Access-Control-Allow-Headers: Content-Type
   ```

## Testing

1. **Local testing**: Set `REACT_APP_GOOGLE_REVIEWS_API_URL` in `.env` file
2. **Production**: Set environment variable in your hosting platform
3. **Verify**: Check browser console and your API logs for any errors

## Troubleshooting

### Component can't find API
- Set `REACT_APP_GOOGLE_REVIEWS_API_URL` explicitly
- Check browser console for the URL it's trying to use
- Verify the endpoint exists and is accessible

### CORS errors
- Ensure your API endpoint sets CORS headers
- Check that you're calling your API, not Google's API directly

### API returns errors
- Check your serverless function logs
- Verify `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` are set correctly
- Test your API key directly with Google's API

## Need Help?

The code is designed to be universal. If you're deploying to a platform not listed:
1. Use the universal template in `api/google-reviews-universal.js`
2. Adapt it to your platform's function signature
3. Set `REACT_APP_GOOGLE_REVIEWS_API_URL` to your endpoint
4. Ensure CORS headers are set

The component will work with any API endpoint that returns the expected JSON format!

