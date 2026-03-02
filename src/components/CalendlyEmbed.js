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
        <h2>Book a Session</h2>
        <p>Sessions are currently available only virtually, as I am traveling. All modalities except Energy Healing and Yoga are available. Note: If you're looking for a meeting shorter than 90 minutes, ignore Calendly's meeting length: you can specify when you're booking.</p>
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