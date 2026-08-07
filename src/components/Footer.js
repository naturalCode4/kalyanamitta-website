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
            <p>Healing & Guidance Rooted in Love and Wisdom. EFT & Spiritual Counseling</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/tap-into-freedom">Tap Into Freedom Program</Link></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/EFT-emotional-freedom-techniques">EFT</Link></li>
              {/* Reiki / Energy Healing temporarily removed from nav — page still live at /energy-work for direct links */}
              {/* <li><Link to="/energy-work">Energy Healing</Link></li> */}
              <li><Link to="/spiritual-practice">Spiritual Counseling</Link></li>
              <li><Link to="/about#testimonials">Testimonials</Link></li>
              <li><Link to="/about#about-adin">About Adin</Link></li>
              <li><Link to="/rates">Rates</Link></li>
              <li><Link to="/contact">Book Your Session →</Link></li>
              <li><Link to="/contact#get-in-touch">Get in Touch</Link></li>
              {/* <li><Link to="/devportfolio" target='_blank'>Web Development Portfolio</Link></li> */}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <p>Phone: +1 (301) 641-2855</p>
            <p>Email me: <Link to="/contact#get-in-touch" className="footer-inline-link">Click here</Link></p>
            <p>Location: Worldwide — I work with clients virtually and in person where I visit.</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Healing On Tap. All rights reserved.
          </div>
          <div className="developer-credit">
            <p>
              Lovingly Crafted by <a href="/devportfolio" className="dev-link">Adin</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
