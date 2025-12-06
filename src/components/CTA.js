import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = ({ 
  title, 
  description, 
  buttons = [], 
  className = '' 
}) => {
  return (
    <div className={`cta-content ${className}`}>
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
      {buttons.length > 0 && (
        <div className="btn-group">
          {buttons.map((button, index) => (
            <Link 
              key={index}
              to={button.to} 
              className={`btn ${button.variant || ''}`}
            >
              {button.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CTA;
