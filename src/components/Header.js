import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleOfferings = () => setIsOfferingsOpen(!isOfferingsOpen);
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);

  // Function to handle navigation and scroll to top
  const handleNavClick = () => {
    setIsMenuOpen(false); // Close mobile menu
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // window.scrollTo(0, 0);
  };
  
  const handleNavClickScroll = () => {
    setIsMenuOpen(false); // Close mobile menu
    window.scrollTo(0, 0);

  };
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <Link to="/" onClick={handleNavClick}>
            <h1>Healing On Tap</h1>
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleNavClick}>Home</Link>
            </li>
            
            {/* About Dropdown */}
            <li className="nav-item dropdown">
              <Link 
                  to="/about" 
                  className="nav-link dropdown-toggle" 
                  onClick={handleNavClick}
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
                <li><Link to="/about#about-adin" className="dropdown-link" onClick={handleNavClick}>About Adin</Link></li>
                <li><Link to="/about#testimonials" className="dropdown-link" onClick={handleNavClick}>Testimonials</Link></li>
              </ul>
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
                <li><Link to="/emotional-processing" className="dropdown-link" onClick={handleNavClick}>EFT</Link></li>
                <li><Link to="/energy-work" className="dropdown-link" onClick={handleNavClick}>Energy Work</Link></li>
                <li><Link to="/spiritual-practice" className="dropdown-link" onClick={handleNavClick}>Spiritual Counseling & Practices</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/rates" className="nav-link" onClick={handleNavClick}>Rates</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={handleNavClick}>Booking & Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;