import React, { useEffect } from 'react';
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
        <h2>Book Your Session</h2>
        <p>Choose from the available sessions below. All sessions available in-person or virtual.</p>
      </div>
      <div className="calendly-content">
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/Healing On Tap-tejas"
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
      </div>
    </div>
  );
};

export default CalendlyEmbed;