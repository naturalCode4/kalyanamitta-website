import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import './ServiceCard.css';

const ServiceCard = ({ 
  title, 
  availability, 
  content = '', 
  benefits = [], 
  description = '',
  learnMoreLink = '',
  variant = 'dark' 
}) => {
  const safeBenefits = Array.isArray(benefits) ? benefits : [];
  return (
    <Card variant={variant} className={variant === 'rainbow' ? 'card-rainbow' : ''}>
      {/* Content Wrapper */}
      <div className="service-content-wrapper">
        {/* Title */}
        <div className="service-header">
          <h3>{title}</h3>
        </div>

        {/* Description */}
        {description && <p className="service-description">{description}</p>}

        {/* Content */}
        {content && (
          <div className="service-content">
            <p className="service-text">
              {content}
            </p>
          </div>
        )}

        {/* Benefits */}
        {safeBenefits.length > 0 && (
          <div className="service-benefits">
            <h4>Benefits Include:</h4>
            <ul className="list-checkmarks">
              {safeBenefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Availability */}
        {availability && <p className="service-availability">{availability}</p>}

        {/* Buttons */}
        <div className="service-actions">
          <Link to="/contact#booking" className="btn btn-outline btn-small">Book a Session</Link>
          {learnMoreLink && (
            <Link to={learnMoreLink} className="btn btn-outline btn-small">Learn More</Link>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;