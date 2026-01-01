// import React from 'react';
// import { Link } from 'react-router-dom';
// import './CTA.css';

// const CTA = ({ 
//   title, 
//   description, 
//   buttons = [], 
//   className = '' 
// }) => {
//   return (
//     <div className={`cta-content ${className}`}>
//       {title && <h2>{title}</h2>}
//       {description && <p>{description}</p>}
//       {buttons.length > 0 && (
//         <div className="btn-group">
//           {buttons.map((button, index) => (
//             <Link 
//               key={index}
//               to={button.to} 
//               className={`btn ${button.variant || ''}`}
//             >
//               {button.text}
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CTA;

import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = ({ 
  // title = "Ready to Begin?", 
  // subtitle = "When you're ready, I'm here. Book a session, schedule a free consultation, or reach out—I'm happy to answer any questions.",
  primaryButtonText = "Book a Session",
  primaryButtonLink = "/contact#booking"
}) => {
  return (
    <div className="cta-section">
      <div className="cta-buttons">
        <Link to={primaryButtonLink} className="btn">{primaryButtonText}</Link>
      </div>
      <div className="cta-discovery-call">
        <Link to="/rates" className="btn btn-outline">View Rates</Link>
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