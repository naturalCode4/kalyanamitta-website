import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isMethodsOpen, setIsMethodsOpen] = useState(false);
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
      setIsProgramsOpen(false);
      setIsMethodsOpen(false);
      setIsAboutOpen(false);
    }
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle Offerings/Programs Dropdown (Text Click)
  const togglePrograms = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsProgramsOpen(!isProgramsOpen);
    if (!isMobile) {
      setIsMethodsOpen(false);
      setIsAboutOpen(false);
    }
  };

  // Toggle Methods Dropdown (Text Click)
  const toggleMethods = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMethodsOpen(!isMethodsOpen);
    if (!isMobile) {
      setIsProgramsOpen(false);
      setIsAboutOpen(false);
    }
  };

  // Toggle About Dropdown (Arrow Click)
  const toggleAboutDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAboutOpen(!isAboutOpen);
    if (!isMobile) {
      setIsProgramsOpen(false);
      setIsMethodsOpen(false);
    }
  };

  const handleNavClick = (e, targetId) => {
    setIsMenuOpen(false);
    setIsProgramsOpen(false);
    setIsMethodsOpen(false);
    setIsAboutOpen(false);

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

            {/* Offerings Dropdown - the four program pages */}
            <li className="nav-item dropdown">
              <div className="nav-link-wrapper">
                <button
                  className="nav-link"
                  onClick={togglePrograms}
                  style={{ cursor: 'pointer' }}
                >
                  Offerings
                </button>
                <button
                  className={`dropdown-arrow ${isProgramsOpen ? 'active' : ''}`}
                  onClick={togglePrograms}
                  aria-label="Toggle Offerings Menu"
                >
                  ▼
                </button>
              </div>

              <ul className={`dropdown-menu ${isProgramsOpen ? 'show' : ''}`}>
                <li><Link to="/freedom-dojo" className="dropdown-link" onClick={(e) => handleNavClick(e, null)}>Freedom Dojo</Link></li>
                <li><Link to="/gypabteip" className="dropdown-link" onClick={(e) => handleNavClick(e, null)}>GYPABTEIP!</Link></li>
                <li><Link to="/jews" className="dropdown-link" onClick={(e) => handleNavClick(e, null)}>JEWS</Link></li>
                <li><Link to="/the-practitioners-companion" className="dropdown-link" onClick={(e) => handleNavClick(e, null)}>The Practitioner's Companion</Link></li>
              </ul>
            </li>

            {/* Methods Dropdown - EFT and Spiritual Counseling */}
            <li className="nav-item dropdown">
              <div className="nav-link-wrapper">
                <button
                  className="nav-link"
                  onClick={toggleMethods}
                  style={{ cursor: 'pointer' }}
                >
                  Sessions
                </button>
                <button
                  className={`dropdown-arrow ${isMethodsOpen ? 'active' : ''}`}
                  onClick={toggleMethods}
                  aria-label="Toggle Sessions Menu"
                >
                  ▼
                </button>
              </div>

              <ul className={`dropdown-menu ${isMethodsOpen ? 'show' : ''}`}>
                <li><Link to="/EFT-emotional-freedom-techniques" className="dropdown-link" onClick={(e) => handleNavClick(e, null)}>EFT (Tapping)</Link></li>
                {/* Reiki / Energy Healing temporarily removed from nav — page still live at /energy-work for direct links */}
                {/* <li><Link to="/energy-work" className="dropdown-link" onClick={(e) => handleNavClick(e, null)}>Energy Healing</Link></li> */}
                <li><Link to="/spiritual-practice" className="dropdown-link" onClick={(e) => handleNavClick(e, null)}>Spiritual Counseling & Practice</Link></li>
              </ul>
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
                    to="/about#testimonials"
                    className="dropdown-link"
                    onClick={(e) => handleNavClick(e, 'testimonials')}
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about#about-adin"
                    className="dropdown-link"
                    onClick={(e) => handleNavClick(e, 'about-adin')}
                  >
                    About Adin
                  </Link>
                </li>
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