import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Healing On Tap</h3>
            <p>Healing & Guidance Rooted in Love and Wisdom. EFT, Energy Healing, & Spiritual Counseling</p>
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
            <h4>Get in Touch</h4>
            <p>Email: healingontap963@gmail.com</p>
            <p>Phone: +1 (301) 641-2855</p>
            <p>Location: West Philadelphia, Pennsylvania. In-Person or Virtual</p>
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
