import React, { useState, useEffect } from 'react';
import './GoogleReviews.css';

/**
 * @typedef {Object} Review
 * @property {string} author_name
 * @property {number} rating
 * @property {string} text
 * @property {number} time
 * @property {string} [relative_time_description]
 */

const GoogleReviews = () => {
  /** @type {[Review[], function]} */
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  /** @type {[number|null, function]} */
  const [overallRating, setOverallRating] = useState(null);
  // Track expanded state for each review
  const [expandedReviews, setExpandedReviews] = useState({});

  // Function to toggle expanded state for a specific review
  const toggleReview = (index) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Function to truncate text to approximately 3 lines
  const truncateText = (text, maxChars = truncateLength) => {
    if (text.length <= maxChars) return text;
    return text.substring(0, maxChars).trim() + '...';
  };

    useEffect(() => {
      let isMounted = true; // 1. Add a mounted flag

      const fetchReviews = async () => {
        try {
          // ... existing API URL logic ...
          let apiUrl;
          const isDevelopment = process.env.NODE_ENV === 'development';
          const hostname = window.location.hostname;
          
          if (isDevelopment && hostname === 'localhost' && !process.env.REACT_APP_GOOGLE_REVIEWS_API_URL) {
            if (isMounted) { // Check if mounted
              setReviews(getFallbackReviews());
              setLoading(false);
            }
            return;
          }
          
          // ... existing URL detection logic ...
          if (process.env.REACT_APP_GOOGLE_REVIEWS_API_URL) {
            apiUrl = process.env.REACT_APP_GOOGLE_REVIEWS_API_URL;
          } else {
            // ... existing else block ...
            apiUrl = '/api/google-reviews'; // Simplified for brevity
          }

          const response = await fetch(apiUrl);
          
          if (!response.ok) {
            throw new Error(`Failed to fetch reviews: ${response.statusText}`);
          }

          const data = await response.json();
          
          if (data.error) {
            throw new Error(data.error);
          }

          if (isMounted) { // 2. Only update state if component is still mounted
            if (data.reviews && data.reviews.length > 0) {
              // 3. Slice the array to ensure we don't accidentally get a massive list if the API returns too many
              // and strictly REPLACE the state, never append.
              setReviews(data.reviews.slice(0, 5)); 
              setOverallRating(data.overall_rating);
            } else {
              setReviews(getFallbackReviews());
            }
            setLoading(false);
          }
        } catch (err) {
          console.error('Error fetching Google Reviews:', err);
          if (isMounted) {
            setReviews(getFallbackReviews());
            setError(err.message);
            setLoading(false);
          }
        }
      };

      fetchReviews();

      // 4. Cleanup function
      return () => {
        isMounted = false;
      };
    }, []);

  // Fallback reviews if API fails or returns no reviews
  const getFallbackReviews = () => {
    return [
      {
        author_name: "Zac K, Clinical Psychologist",
        rating: 5,
        text: "Adin could see I was struggling deeply with self-judgment, shame, and worry when he offered me my first tapping session. I have to admit, the scientist in me was a little skeptical that it wouldn't work, but I could not have been more wrong. My first session with Adin was so powerful—naming and releasing so much pain I have been dealing with for years—that I have tapped with him every week since then. Each session has been more powerful than the last, and he has provided me with other spiritual guidance and resources that are already bearing fruit in my life. Don't miss out on Adin's talent, kindness, wisdom, and generosity of spirit.",
        time: Date.now()
      },
      {
        author_name: "Owen P, Kundalini Yoga Teacher",
        rating: 5,
        text: "I recently booked a Reiki session with Adin, who I have known for sometime through our shared interest in Yoga. I had done Reiki only once with a different practitioner, and came away as a bit of a skeptic; I didn't feel any different at the end of the session. My experience with Adin was very different. He has a very simple and straightforward way of speaking and explaining the Reiki process, which put me at ease very quickly. We talked for a few minutes then he began the Reiki process. Adin has a wonderful aura about him of contained energy and confidence, with a feeling of intuitively moving and allowing the energy to move, of becoming the 'Hollow Bone' that the ancient healers speak off. I felt the energy within my body and mind, and came away from the session with a wonderful sense of energized peace and well-being that stayed with me for several days. I wholeheartedly recommend him as a naturally gifted Reiki practitioner, and look forward to doing more energy healing work with him.",
        time: Date.now()
      },
      {
        author_name: "Bella S, EFT Practitioner",
        rating: 5,
        text: "Adin made scheduling sessions remarkably easy. During our sessions, I felt deeply heard, and his focused presence allowed me to relax and explore my inner landscape. I felt safe and held with compassion, as he skillfully guided me through my sometimes rambling thoughts, helping me identify and eventually reframe critical focal points. His patience and ability to create a space where I could process emotions at my own pace, rather than rushing past discomfort, were invaluable. The work we did together has helped me shift and dissolve old social triggers and conditioning, empowering me in areas of my life where I need to take leadership so I show up with more confidence and efficacy.",
        time: Date.now()
      },
      {
        author_name: "Gloria R",
        rating: 5,
        text: "I got to receive two sessions with Adin, doing EFT/tapping. Adin brought complete presence, compassion, and technical skill to our sessions. I felt safe and held in our sessions. They were also very impactful, they helped me shift a challenging relationship dynamic that I have been struggling with. I'm actually seeing lasting changes after our session!",
        time: Date.now()
      },
      {
        author_name: "Travis D",
        rating: 5,
        text: "Adin is a kind, caring and spiritually connected person. If you are looking to discover new ways to see life and your soul—or just need someone to talk to—I highly recommend engaging with Adin's deep breadth of experience and modalities that he offers.",
        time: Date.now()
      },
      {
        author_name: "Ethan B, Rabbi",
        rating: 5,
        text: "Adin is a warm, creative, and sagely steward for our times! He is a passionate practitioner of many modalities who has helped me expand my consciousness and deepen my meditation, yoga, and energy practices. Kind and reliable, I trust him from my soul.",
        time: Date.now()
      }
    ];
  };

  const truncateLength = 1500

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  if (loading) {
    return (
      <div className="google-reviews-container">
        <div className="reviews-loading">Loading reviews...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="google-reviews-container">
        <div className="reviews-error">{error}</div>
      </div>
    );
  }

  return (
    <div className="google-reviews-container">
      <div className="google-reviews-header">
        <div className="google-reviews-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </div>
        <div>
          <h3>Google Reviews</h3>
          {overallRating !== null && overallRating !== undefined && (
            <div className="overall-rating">
              <span className="rating-stars">{renderStars(Math.round(overallRating))}</span>
              <span className="rating-number">{Number(overallRating).toFixed(1)}</span>
            </div>
          )}
        </div>
      </div>
      {error && (
        <div className="reviews-warning">
          <p>Note: Using cached reviews. {error}</p>
        </div>
      )}
      <div className="reviews-grid">
        {reviews.map((review, index) => {
          const isExpanded = expandedReviews[index];
          const shouldTruncate = review.text.length > truncateLength;
          const displayText = isExpanded || !shouldTruncate 
            ? review.text 
            : truncateText(review.text);

          return (
            <div key={review.time || index} className="review-card">
              <div className="review-header">
                <div className="review-author">{review.author_name}</div>
                <div className="review-rating" title={`${review.rating} out of 5 stars`}>
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="review-text">"{displayText}"</p>
              {shouldTruncate && (
                <button 
                  className="read-more-btn"
                  onClick={() => toggleReview(index)}
                >
                  {isExpanded ? 'Show less' : 'Read more'}
                </button>
              )}
              {review.relative_time_description && (
                <div className="review-time">{review.relative_time_description}</div>
              )}
            </div>
          );
        })}
      </div>
      <div className="google-reviews-footer">
        <a
          href="https://www.google.com/search?sca_esv=51ce83e25ec719d4&sxsrf=AE3TifNlFbq4AK3zJQnfZYpPXSerqo2omw:1767397300592&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EwyJXTuXVS5aEX0JW1xEL5DvYFwgR7sVZ45kd6I9Bl_SZLxjblPSQzPdEpvH4WxiKlaTGcjhJB0kmY_gPUsN3WHWFsDQ&q=Healing+On+Tap+Reviews&sa=X&ved=2ahUKEwjHn52ChO6RAxWFGlkFHfaOCUQQ0bkNegQIHxAE&biw=1680&bih=962&dpr=2"
          target="_blank"
          rel="noopener noreferrer"
          className="view-all-reviews-btn btn btn-outline"
        >
          View more reviews on Google →
        </a>
      </div>
    </div>
  );
};

export default GoogleReviews;