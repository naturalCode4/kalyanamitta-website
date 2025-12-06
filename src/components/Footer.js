import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Healing On Tap</h3>
            <p>Healing, coaching, and spiritual guidance to help you transform your life and connect with your true self.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/offerings">Offerings</a></li>
              <li><a href="/rates">Rates</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: hello@Healing On Tap.com</p>
            <p>Phone: (301) 641-2855</p>
            <p>Location: Virtual & In-Person Sessions</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Healing On Tap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
