import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false); // Added state for About dropdown

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleOfferings = () => setIsOfferingsOpen(!isOfferingsOpen);
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <Link to="/">
            <h1>Healing On Tap</h1>
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle" 
                onClick={toggleOfferings}
                onMouseEnter={() => setIsOfferingsOpen(true)}
                onMouseLeave={() => setIsOfferingsOpen(false)}
              >
                Offerings
              </button>
              <ul 
                className={`dropdown-menu ${isOfferingsOpen ? 'show' : ''}`}
                onMouseEnter={() => setIsOfferingsOpen(true)}
                onMouseLeave={() => setIsOfferingsOpen(false)}
              >
                <li><Link to="/energy-work" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>Energy Work</Link></li>
                <li><Link to="/life-coaching" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>Life Coaching</Link></li>
                <li><Link to="/spiritual-practice" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>Spiritual Practice</Link></li>
                <li><Link to="/emotional-processing" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>Emotional Processing</Link></li>
              </ul>
            </li>

            {/* About Dropdown */}
            <li className="nav-item dropdown">
              <Link 
                  to="/about" 
                  className="nav-link dropdown-toggle" 
                  onClick={() => setIsMenuOpen(false)} // Close mobile menu on click
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  About
              </Link>
              <ul 
                className={`dropdown-menu ${isAboutOpen ? 'show' : ''}`}
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <li><Link to="/about#about-adin" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>About Adin</Link></li>
                <li><Link to="/about#testimonials" className="dropdown-link" onClick={() => setIsMenuOpen(false)}>Testimonials</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/rates" className="nav-link" onClick={() => setIsMenuOpen(false)}>Rates</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Booking & Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;