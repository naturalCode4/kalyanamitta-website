import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import CTA from '../components/CTA';
import ServiceCard from '../components/ServiceCard';
import { offerings, helpList } from '../data/offerings';
import './Home.css';
import pic2 from '../assets/pic2.png';
import pic5 from '../assets/pic5.png';

const Home = () => {
  const { hash } = useLocation();

  // Handle scroll to hash on load with OFFSET
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          const headerOffset = 68; // Adjust this value if needed
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Healing On Tap</h1>
            
            <div className="hero-manifesto">
              <div className="manifesto-item">
                <span className="manifesto-text">Dissolve what limits you. See your life clearly. {window.innerWidth > 768 && <br />}Restore true connection.</span>
                {/* <span className="manifesto-text">Dissolve what limits you. Awaken your boundless wisdom. Restore true connection.</span> */}
              </div>
              
              <div className="manifesto-connector"></div>
              
              <div className="manifesto-item">
                <span className="manifesto-text">Healing is your nature. Transmute difficult emotions. {window.innerWidth > 768 && <br />}Liberate heart, body, and mind.</span>
              </div>
              
              <div className="manifesto-connector"></div>
              
              <div className="manifesto-item">
                <span className="manifesto-text">Embody sovereignty. Unmute your soul. {window.innerWidth > 768 && <br />}Remember your power.</span>
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
            <p>I believe that our bodies, hearts, energy, and the universe itself are fundamentally good and possess inherent healing properties. I'll help you realize and activate this in your life. My role is to offer loving presence, transformative modalities, and guidance—awakening to the basic goodness already present within you and actualizing your natural capacity for healing, love, spiritual realization, and transformation.</p>
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
      
      {/* Help List Section */}
      <Section
        id="what-we-can-do-together"
        variant="dark" 
        title="What We Can Do Together"
        subtitle="These are my core strengths and areas of focus. We can address them through EFT, energy work, spiritual counseling, practices, or a combination. The beautiful thing is they're all interconnected—transform in one area and you'll often find the rest alchemize and heal together."
      >
        <div className="help-section">
          <ul className="help-list">
            {helpList.map((item, index) => (
              <li key={index} className="help-item">
                {item}
              </li>
            ))}
          </ul>
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
        <div className="grid grid-2">
          <div>
            <p>Welcome, my name is Adin. It's a joy and honor to support you in this work. I offer free consultations and am happy to answer any questions you have beforehand.</p>
            <div className="btn-group">
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
          <div className="about-photos">
            <div className="photo-container">
              <img 
                src={pic5}
                alt="Healing On Tap Pic" 
                className="about-image"
              ></img>
            </div>
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