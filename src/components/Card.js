import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  className = '', 
  variant = 'light', 
  hover = true
}) => {
  const cardClass = `card ${variant === 'dark' ? 'card-dark' : ''} ${hover ? 'card-hover' : ''} ${className}`.trim();
  
  return (
    <div className={cardClass}>
      {children}
    </div>
  );
};

export default Card;
