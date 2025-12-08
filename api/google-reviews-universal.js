// Universal Google Reviews API Endpoint
// This is a generic serverless function template that can be adapted for any platform
// Copy and adapt this code for your specific hosting platform

/**
 * Universal handler for fetching Google Reviews
 * Adapt this function signature to match your platform:
 * 
 * - Netlify: exports.handler = async (event, context) => { ... }
 * - Vercel: export default async function handler(req, res) { ... }
 * - AWS Lambda: exports.handler = async (event, context) => { ... }
 * - Azure Functions: module.exports = async function (context, req) { ... }
 * - Cloudflare Workers: export default { async fetch(request) { ... } }
 */

async function fetchGoogleReviews() {
  try {
    const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    const PLACE_ID = process.env.GOOGLE_PLACE_ID;

    if (!GOOGLE_PLACES_API_KEY || !PLACE_ID) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: 'Google Places API key or Place ID not configured',
        }),
      };
    }

    // Fetch place details including reviews
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${GOOGLE_PLACES_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: `Google Places API error: ${data.status}`,
          details: data.error_message || 'Unknown error',
        }),
      };
    }

    // Format the reviews data
    const reviews = (data.result.reviews || []).map((review) => ({
      author_name: review.author_name,
      rating: review.rating,
      text: review.text,
      time: review.time,
      relative_time_description: review.relative_time_description,
    }));

    return {
      statusCode: 200,
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
      body: JSON.stringify({
        error: 'Failed to fetch reviews',
        message: error.message,
      }),
    };
  }
}

// Platform-specific implementations below - use the one for your platform

// ============================================
// NETLIFY
// ============================================
// File: netlify/functions/google-reviews.js
/*
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

  const result = await fetchGoogleReviews();
  return {
    ...result,
    headers,
  };
};
*/

// ============================================
// VERCEL
// ============================================
// File: api/google-reviews.js
/*
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const result = await fetchGoogleReviews();
  res.status(result.statusCode).json(JSON.parse(result.body));
}
*/

// ============================================
// AWS LAMBDA
// ============================================
// File: lambda/google-reviews.js
/*
exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  const result = await fetchGoogleReviews();
  return {
    ...result,
    headers,
  };
};
*/

// ============================================
// AZURE FUNCTIONS
// ============================================
// File: azure-functions/google-reviews/index.js
/*
module.exports = async function (context, req) {
  context.res = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Content-Type': 'application/json',
    },
  };

  if (req.method === 'OPTIONS') {
    context.res.status = 200;
    return;
  }

  if (req.method !== 'GET') {
    context.res.status = 405;
    context.res.body = { error: 'Method not allowed' };
    return;
  }

  const result = await fetchGoogleReviews();
  const body = JSON.parse(result.body);
  context.res.status = result.statusCode;
  context.res.body = body;
};
*/

// ============================================
// CLOUDFLARE WORKERS
// ============================================
// File: workers/google-reviews.js
/*
export default {
  async fetch(request) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    if (request.method !== 'GET') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    const result = await fetchGoogleReviews();
    return new Response(result.body, {
      status: result.statusCode,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  },
};
*/

