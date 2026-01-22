import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import CTA from '../components/CTA';
import ServiceCard from '../components/ServiceCard';
import { offerings, helpList } from '../data/offerings';
import './Home.css';
import pic2 from '../assets/pic2.jpg';
import pic5 from '../assets/pic5.jpg';
import { Helmet } from 'react-helmet';

const Home = () => {
  const { hash } = useLocation();
  
  // -- CAROUSEL STATE --
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Handle scroll to hash
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          const headerOffset = 68;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  // -- CAROUSEL LOGIC --
  /* src/pages/Home.js */

  // -- CAROUSEL LOGIC --
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeItem = container.children[activeIndex];
      
      if (activeItem) {
        // CALCULATE CENTER POSITION
        // We use offsetLeft relative to the container scroll view
        const itemCenter = activeItem.offsetLeft + (activeItem.offsetWidth / 2);
        const containerCenter = container.clientWidth / 2;
        
        // Target scroll = Item Center - Half the Screen Width
        const targetScroll = itemCenter - containerCenter;

        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  // 2. Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault(); // STOP browser from scrolling natively
        scrollLeft();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault(); // STOP browser from scrolling natively
        scrollRight();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollLeft = () => {
    setActiveIndex(prev => (prev > 0 ? prev - 1 : helpList.length - 1));
  };

  const scrollRight = () => {
    setActiveIndex(prev => (prev < helpList.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="home">
      <Helmet>
        <title>Healing On Tap | Integrative Healing & Guidance</title>
        <meta name="description" content="Transform your whole life with EFT Tapping, Reiki Energy Work, and Spiritual Counseling. Based in West Philadelphia & Virtual." />
        <meta property="og:title" content="Healing On Tap | Integrative Healing & Guidance" />
        <meta property="og:description" content="Transform your whole life with EFT Tapping, Reiki Energy Work, and Spiritual Counseling. Based in West Philadelphia & Virtual." />
      </Helmet>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Healing On Tap</h1>
            
            <div className="hero-manifesto">
              <div className="manifesto-item">
                <span className="manifesto-text">Healing is your nature.<br className="desktop-break" />Release stuck emotions.<br className="desktop-break" />Dissolve what limits you.</span>
              </div>
              <div className="manifesto-connector"></div>
              <div className="manifesto-item">
                <span className="manifesto-text">Restore true connection.<br className="desktop-break" />Unveil clarity and intuition.<br className="desktop-break" />Liberate your heart, body, and mind.</span>   
              </div>
              <div className="manifesto-connector"></div>
              <div className="manifesto-item">
                <span className="manifesto-text">Unmute your soul.<br className="desktop-break" />Embody sovereignty.<br className="desktop-break" />Remember your power.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

       {/* About Healing On Tap */}
       <Section 
        variant="rainbow" 
        title="About Healing On Tap"
        subtitle=""
      >
        <div className="grid grid-2">
          <div>
            <p>This work supports embodied well-being, love, empowerment, all kinds of connection, getting desired outcomes, and alignment with clear wisdom.</p>
            <p>I offer EFT (Emotional Freedom Techniques, or Tapping), Reiki Energy Healing, and Spiritual Counseling and Practices (Yoga, Breathwork, Sound Healing, and Meditation). My guidance and modalities are integrative and rooted in direct experience and teachings from spiritual traditions.</p>
            <p>I believe that our bodies, hearts, energy, and the universe itself are fundamentally good and possess inherent healing properties. I'll help you realize and activate this in your life. My role is to offer loving presence, transformative modalities, and guidance—awakening to the basic goodness already present within you and actualizing your natural capacity for healing, love, spiritual insight, and transformation.</p>
            <p>My mission is to support beings in any way I can. If you're curious about how we can work together, so am I!</p>
          </div>
          <div className="about-photos">
            <div className="photo-container">
              <img 
                src={pic2}
                alt="Healing On Tap Pic" 
                className="about-image" 
              />
            </div>
          </div>
        </div>
      </Section>
      
      {/* Help List Section - CAROUSEL */}
      <Section
        id="what-we-can-do-together"
        variant="dark" 
        title="What We Can Do Together"
        subtitle="These are my core strengths and areas of focus. The beautiful thing is they're all interconnected— grow in one area and you'll often find the rest alchemize and heal together"
      >
        <div className="carousel-container">

          {/* Main Featured Card */}
          <div className="featured-display">
            <div className="featured-content">
              <h3>{helpList[activeIndex]}</h3>
            </div>
          </div>

          {/* Navigation Area (Arrows + Strip) */}
          <div className="carousel-navigation-area">
            
            {/* Left Button */}
            <button 
              className="nav-btn prev-btn desktop-only" 
              onClick={scrollLeft}
              aria-label="Previous Item"
            >
              {/* Thicker Entity or SVG */}
              <strong>&#10094;</strong> 
            </button>

            {/* Navigation Strip */}
            <div className="carousel-strip-wrapper">
              <div className="strip-fade-left"></div>
              <div className="strip-fade-right"></div>

              <div className="carousel-strip" ref={scrollContainerRef}>
                {helpList.map((item, index) => (
                  <div 
                    key={index} 
                    className={`strip-item ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="mini-card">
                      <span className="mini-text">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Button */}
            <button 
              className="nav-btn next-btn desktop-only" 
              onClick={scrollRight}
              aria-label="Next Item"
            >
              <strong>&#10095;</strong>
            </button>

          </div>
          
          <p className="carousel-hint"><em>Swipe to explore</em></p>
        </div>
      </Section>

      {/* Offerings Section */}
      <Section 
        variant="dark" 
        title="Offerings"
        subtitle=""
      >
        <div className="grid grid-cards">
          {offerings.map((offering) => (
            <ServiceCard
              key={offering.id}
              title={offering.title}
              availability={offering.availability}
              content={offering.content}
              learnMoreLink={`/${offering.id}`}
              variant="rainbow"
            />
          ))}
        </div>
      </Section>

      {/* About Adin */}
      <Section
        variant="rainbow" 
        title="About Adin"
        subtitle=""
      >

        <div className="about-adin-home-container"> 
          
          <div className="about-text-content">
            <p>Welcome, my name is Adin. It's a joy and honor to support you in this work. I offer 30-minute free consultations and am happy to discuss anything beforehand.</p>
          </div>
          
          <div className="about-photos">
            <div className="photo-container">
              <img 
                src={pic5}
                alt="Adin Portrait" 
                className="about-image"
              />
              <p className="photo-credit">Sarah Bork Hamilton photography. License coming soon.</p>
            </div>
          </div>
          
          <div className="btn-group about-buttons">
            <Link to="/about" className="btn">Learn More</Link>
            <Link 
              to="/contact#get-in-touch" 
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in Touch
            </Link>
          </div>

        </div>
      </Section>
      
      {/* CTA Section */}
      <Section 
        variant="dark" 
        title="Ready to Begin?"
        subtitle="When you're ready, I'm here. Book a session, schedule a free 30-minute consultation, or reach out—I'm happy to answer any questions."
      >
        <CTA />
      </Section>
    </div>
  );
};

export default Home;