import React from 'react';
import { Link } from 'react-router-dom';
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              {/* Updated Offerings Links */}
              <li><Link to="/EFT-emotional-freedom-techniques">EFT</Link></li>
              <li><Link to="/energy-work">Energy Work</Link></li>
              <li><Link to="/spiritual-practice">Spiritual Counseling</Link></li>
              {/* Added Testimonials Link */}
              <li><Link to="/about#testimonials">Testimonials</Link></li>
              <li><Link to="/rates">Rates</Link></li>
              <li><Link to="/contact">Book</Link></li>
              <li><Link to="/contact#get-in-touch">Get in Touch</Link></li>
              <li><Link to="/devportfolio">Software Portfolio</Link></li>
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
          <div className="copyright">
            &copy; {new Date().getFullYear()} Healing On Tap. All rights reserved.
          </div>
          <div className="developer-credit">
            Website by <a href="/devportfolio" className="dev-link">Adin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
