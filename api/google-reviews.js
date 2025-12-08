// Vercel Serverless Function to fetch Google Reviews
// This function fetches reviews from Google Places API

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
    const PLACE_ID = process.env.GOOGLE_PLACE_ID; // Your Google Business Place ID

    if (!GOOGLE_PLACES_API_KEY || !PLACE_ID) {
      res.status(500).json({
        error: 'Google Places API key or Place ID not configured',
      });
      return;
    }

    // Fetch place details including reviews
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${GOOGLE_PLACES_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      res.status(400).json({
        error: `Google Places API error: ${data.status}`,
        details: data.error_message || 'Unknown error',
      });
      return;
    }

    // Format the reviews data
    const reviews = (data.result.reviews || []).map((review) => ({
      author_name: review.author_name,
      rating: review.rating,
      text: review.text,
      time: review.time,
      relative_time_description: review.relative_time_description,
    }));

    res.status(200).json({
      reviews,
      place_name: data.result.name,
      overall_rating: data.result.rating,
    });
  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    res.status(500).json({
      error: 'Failed to fetch reviews',
      message: error.message,
    });
  }
}

