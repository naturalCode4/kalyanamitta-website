import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CalendlyEmbed.css';

const CalendlyEmbed = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="calendly-embed-container">
      <div className="calendly-header">
        <h2>Book a Session</h2>
        <div className="offering-learn-more-buttons">
          <Link to="/EFT-emotional-freedom-techniques" className="btn btn-outline btn-small" target="_blank">
            Learn more about EFT (Tapping)
          </Link>
          <Link to="/energy-work" className="btn btn-outline btn-small" target="_blank">
            Learn more about Reiki / Energy Healing
          </Link>
          <Link to="/spiritual-practice" className="btn btn-outline btn-small" target="_blank">
            Learn more about Spiritual Counseling
          </Link>
        </div>
        <br></br>
        <br></br>
        <p>All sessions are currently held virtually or in my current location (St. Petersburg, FL)</p>
      </div>
      <div className="calendly-content">
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/healingontap/30min"
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
      </div>
    </div>
  );
};

export default CalendlyEmbed;