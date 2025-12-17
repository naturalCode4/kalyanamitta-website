import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import ServiceCard from '../components/ServiceCard';
import { offerings, helpList } from '../data/offerings';
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
            <p>I offer EFT (Emotional Freedom Techniques, or Tapping), Reiki Energy Healing, Spiritual Counseling and Practices (Meditation, Yoga, Breathwork, Sound Healing). My guidance and methods are rooted in direct experience and teachings across spiritual traditions.</p>
            <p>I believe that our bodies, hearts, energy, and the universe itself are fundamentally good and possess inherent healing properties. I'll help you realize and activate this in your life. My role is to offer loving presence, transformative modalities, and guidance—supporting you in awakening to the basic goodness already present within you and actualizing your natural capacity for healing, spiritual development, and life transformation.</p>
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
      
      {/* Help List Section */}
      <Section 
        variant="dark" 
        title="What We Can Do Together"
        subtitle="These are my core strengths and areas of focus. We can address them through EFT, energy work, spiritual counseling, or any combination. The beautiful thing is they're all interconnected—transform in one area and you'll often find the rest alchemize and heal together."
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
