import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = ({ 
  // title = "Ready to Begin?", 
  // subtitle = "When you're ready, I'm here. Book a session, schedule a free 30-minute consultation, or reach out—I'm happy to answer any questions.",
  primaryButtonText = "Book a Session →",
  primaryButtonLink = "/contact#booking"
}) => {
  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <Link to="/tap-into-freedom" className="btn">Apply for Tap Into Freedom →</Link>
        <Link to={primaryButtonLink} className="btn btn-outline">{primaryButtonText}</Link>
      </div>
      <p className="cta-discovery-call-note">GET IN TOUCH with any questions or to schedule a free 30-minute consultation.</p>
      <div className="cta-discovery-call">
        <Link 
          to="/contact#get-in-touch" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-outline"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default CTA;