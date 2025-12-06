import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleOfferings = () => {
    setIsOfferingsOpen(!isOfferingsOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Healing On Tap</h1>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
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
                <ul className={`dropdown-menu ${isOfferingsOpen ? 'show' : ''}`}>
                  <li><Link to="/energy-work" className="dropdown-link">Energy Work</Link></li>
                  <li><Link to="/life-coaching" className="dropdown-link">Life Coaching</Link></li>
                  <li><Link to="/spiritual-practice" className="dropdown-link">Spiritual Practice</Link></li>
                  <li><Link to="/emotional-processing" className="dropdown-link">Emotional Processing</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/rates" className="nav-link">Rates</Link>
              </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            </ul>
          </nav>
          
          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
