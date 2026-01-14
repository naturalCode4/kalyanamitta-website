import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsAboutOpen(false);
      setIsOfferingsOpen(false);
    }
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Toggle Offerings (Text Click)
  const toggleOfferings = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOfferingsOpen(!isOfferingsOpen);
    if (!isMobile && isAboutOpen) setIsAboutOpen(false);
  };

  // Toggle About Dropdown (Arrow Click)
  const toggleAboutDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAboutOpen(!isAboutOpen);
    if (!isMobile && isOfferingsOpen) setIsOfferingsOpen(false);
  };

  const handleNavClick = (e, targetId) => {
    setIsMenuOpen(false); 
    setIsAboutOpen(false);
    setIsOfferingsOpen(false);
    
    if (targetId) {
      return; 
    }

    const targetPath = e.currentTarget.getAttribute('href'); 
    const isSamePage = location.pathname === targetPath;

    if (isSamePage) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  };
    
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <Link to="/" onClick={(e) => handleNavClick(e, null)}>
            <h1>Healing On Tap</h1>
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <div 
          className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={(e) => handleNavClick(e, null)}>Home</Link>
            </li>
            
            {/* About Dropdown */}
            <li className="nav-item dropdown">
              <div className="nav-link-wrapper">
                <Link 
                    to="/about" 
                    className="nav-link" 
                    onClick={(e) => handleNavClick(e, null)}
                  >
                    About
                </Link>
                <button 
                  className={`dropdown-arrow ${isAboutOpen ? 'active' : ''}`}
                  onClick={toggleAboutDropdown}
                  aria-label="Toggle About Menu"
                >
                  ▼
                </button>
              </div>
              
              <ul className={`dropdown-menu ${isAboutOpen ? 'show' : ''}`}>
                <li>
                  <Link 
                    to="/about#about-adin" 
                    className="dropdown-link" 
                    onClick={(e) => handleNavClick(e, 'about-adin')}
                  >
                    About Adin
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about#testimonials" 
                    className="dropdown-link" 
                    onClick={(e) => handleNavClick(e, 'testimonials')}
                  >
                    Testimonials
                  </Link>
                </li>
              </ul>
            </li>

            {/* Offerings Dropdown - UPDATED TO MATCH ABOUT STRUCTURE */}
            <li className="nav-item dropdown">
              <div className="nav-link-wrapper">
                <button
                  className="nav-link" 
                  onClick={toggleOfferings}
                  style={{ cursor: 'pointer' }}
                >
                  Offerings
                </button>
                <button 
                  className={`dropdown-arrow ${isOfferingsOpen ? 'active' : ''}`}
                  onClick={toggleOfferings}
                  aria-label="Toggle Offerings Menu"
                >
                  ▼
                </button>
              </div>

              <ul className={`dropdown-menu ${isOfferingsOpen ? 'show' : ''}`}>
                <li><Link to="/EFT-emotional-freedom-techniques" className="dropdown-link" onClick={(e) => handleNavClick(e, null)}>EFT</Link></li>
                <li><Link to="/energy-work" className="dropdown-link" onClick={(e) => handleNavClick(e, null)}>Energy Work</Link></li>
                <li><Link to="/spiritual-practice" className="dropdown-link" onClick={(e) => handleNavClick(e, null)}>Spiritual Counseling & Practices</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/rates" className="nav-link" onClick={(e) => handleNavClick(e, null)}>Rates</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={(e) => handleNavClick(e, null)}>Booking & Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;