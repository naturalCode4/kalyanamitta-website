import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import { offerings } from '../data/offerings';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>A Friend on the Path</h1>
            <p className="hero-subtitle">
              Healing & Guidance Rooted in Love and Wisdom
            </p>
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
            <p>This work supports healing, empowerment, embodied well-being, and alignment with your deepest wisdom.</p>
            <p>I use EFT to help people break free from a wide range of deep-seated issues quickly, affordably, and effectively—issues that might otherwise take months or years to address.</p>
            {/* <p>I work with modalities EFT (Emotional Freedom Techniques, or Tapping), Reiki Energy Healing, Meditation, Yoga, Breathwork, Sound Healing, and universal wisdom across spiritual traditions.</p> */}
            <p>I believe that our bodies, hearts, energy, and the universe itself are fundamentally good and possess inherent healing properties. My role is to help awaken this basic goodness and support your natural capacity for self-healing through loving presence, transformative practices, and guidance.</p>
            <p>My mission is to support beings in any way I can. If you're curious about how we can work together, so am I!</p>
            <div className="btn-group">
              <Link to="/about" className="btn">Learn More</Link>
            </div>
          </div>
          <div className="about-photos">
            <div className="photo-container">
              <div className="placeholder-image">
                <span>Healing On Tap Photo</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Offerings Section */}
      <Section 
        variant="dark" 
        title="Offerings"
        subtitle="Comprehensive healing, guidance, and support services designed to help you transform your life and connect with your authentic self."
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
            </div>
          </div>
          <div className="about-photos">
            <div className="photo-container">
              <div className="placeholder-image">
                <span>Adin Photo</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section 
        variant="dark" 
        title="Ready to Begin Your Transformation?"
        subtitle="Take the first step towards healing, growth, and spiritual connection. Book a session today and discover the peace and clarity you've been seeking."
      >
        {/* <div className="btn-group">
          <Link to="/contact" className="btn">Book Now</Link>
          <Link to="/rates" className="btn btn-secondary">View Rates</Link>
        </div>
        <div>
          <Link to="/contact" className="btn">Book a 20 Minute Discovery Call</Link>
        </div> */}
        <div className="cta-section">
          <div className="cta-buttons">
            <Link to="/book-now" className="btn">Book Now</Link>
            <Link to="/view-rates" className="btn btn-outline">View Rates</Link>
          </div>
          <div className="cta-discovery-call">
            <Link to="/discovery-call" className="btn btn-small">Book a Free 20 Minute Call</Link>
          </div>
        </div>
      </Section>

    </div>
  );
};

export default Home;
