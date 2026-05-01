import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import CTA from '../components/CTA';
import './SpiritualPractice.css';
import pic4 from '../assets/pic4.jpg';
import { Helmet } from 'react-helmet';

const SpiritualPractice = () => {
  const [openSections, setOpenSections] = useState({
    practices: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="spiritual-practice">
      <Helmet>
        <title>Spiritual Counseling and Practices | Deep Support for Your Life and Spiritual Path</title>
        <meta name="description" content="Build the wisdom and compassion needed to live well. Be seen and heard as you are. Learn and deepen mind-body practices." />
        <meta property="og:title" content="Spiritual Counseling and Practices | Deep Support for Your Life and Spiritual Path" />
        <meta property="og:description" content="Build the wisdom and compassion needed to live well. Be seen and heard as you are. Learn and deepen mind-body practices." />
        <meta property="og:url" content="https://healing-on-tap.com/spiritual-practice" />
      </Helmet>
      {/* Hero Section */}
      <section className="spiritual-practice-hero">
        <div className="container">
          <div className="spiritual-practice-hero-content">
            <h1>Spiritual Counseling</h1>
            <p className="spiritual-practice-subtitle">
              Cultivate the wisdom, compassion, & authenticity needed to live well. Be fully met and holistically supported. 
            </p>
          </div>
        </div>
      </section>

      {/* About Spiritual Practice Section - Rainbow Background */}
      <section className="about-spiritual-practice section-rainbow">
        <div className="container">
          <div className="about-spiritual-practice-content">
            <h2 className="subtitle-heading">About Spiritual Counseling</h2>
            <div className="offering-book-cta">
              <Link to="/contact#booking" className="btn btn-outline">
                Book a Session
              </Link>
            </div>
            
            {/* UPDATED IMAGE CONTAINER */}
            <div className="spiritual-image-container">
              <img 
                src={pic4}
                alt="Spiritual Counseling Session" 
                className="spiritual-practice-pic" 
              />
            </div>
            <div className="about-spiritual-practice-text">
              <p>
                In this space you will be met unconditionally and holistically supported. This is a space for embodying what's authentic to you, and for spiritual education, exploration, practices, and cultivation. Here are some <a href="/home#what-we-can-do-together" target="_blank">topics</a> I can especially support people in.
              </p>
              <p>
                We can be with whatever is alive in you — your deepest yearnings, your obstacles, your beauty and your pain. Sometimes what we need most is just to be truly heard, without judgment or fixing. I am here to hold that space.
              </p>
              <p>
                I'm here to help you break out of the matrix of harsh realities and limiting beliefs we find ourselves carrying — the inherited belief systems, cultural conditioning, and mindsets that quietly keep you stuck. You know the ones.
              </p>
              <p>
                When direct guidance and teachings serve, we bring them in. This is a ground for cultivating spiritual understanding, deepening or discovering spiritual practices, and actualizing yourself more honestly — with real workshopping, growth, and support in building confidence in yourself and your path.
              </p>
              <p>
                Whether you're newly curious, deep in transformation, or have established practices, sessions are collaborative and responsive to what emerges.
              </p>
            <div className="gold-divider"></div>
              
              {/* Practices - Collapsible */}
              <h3 className="collapsible-header" onClick={() => toggleSection('practices')}>
                <span className={`triangle ${openSections.practices ? 'open' : ''}`}></span>
                Practices
              </h3>
              <div className={`collapsible-content ${openSections.practices ? 'open' : ''}`}>
                <p>
                  I facilitate <b>voice-based sound healing practice, pranayama (breathwork), yoga asana, and meditation.</b> These are all powerful tools that can excel one's wellness and spiritual growth. We can integrate practice into counseling, or they can be the focus of our time together. I offer what I live; all of these have and continue to be of benefit to me.
                </p>
                <p>
                  Spiritual Counseling sessions can also be synthesized with EFT or Energy Healing. EFT is often extremely useful (and recommended) for addressing certain concerns.
                </p>
              </div>
              
              <div className="gold-divider"></div>
              <p>
                <em>I am offering spiritual guidance, not clinical mental health services.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

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

export default SpiritualPractice;