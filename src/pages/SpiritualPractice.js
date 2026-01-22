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
              Build the wisdom & compassion needed to live well. Be seen and supported as you are. Enter your truth and spiritual depths. 
            </p>
          </div>
        </div>
      </section>

      {/* About Spiritual Practice Section - Rainbow Background */}
      <section className="about-spiritual-practice section-rainbow">
        <div className="container">
          <div className="about-spiritual-practice-content">
            <h2>About Spiritual Counseling</h2>
            
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
                Together we will cultivate well-being, wisdom, love, freedom, and what matters most to you.
              </p>
              <p>
                This is a space for being met, unconditionally supported, exploring, healing, spiritual education, finding direction, and growing—especially in <a href="/home#what-we-can-do-together" target="_blank">these areas</a>.
              </p>
              <p>
                We can be with whatever is alive in you. We can navigate your deepest yearnings and any obstacles to your fulfillment. We can sit with both beauty and pain. Sometimes what we need most is just to be truly heard—to share presence with someone who compassionately validates your experience without judgment or fixing. I am here to hold that space for you.
              </p>
              <p>
                When direct guidance and teachings serve, we will bring them in. This space may be a ground for cultivating spiritual understanding and virtue, actualizing yourself more deeply– with honest workshopping and growth. I'll help you look more deeply, contemplate what's important, and build critical confidence in yourself.
              </p>
              <p>
                Whether you're newly curious, deep in transformation, or have established practice(s), I hold grounded and compassionate presence and guidance. Sessions are collaborative and responsive to what emerges.
              </p>
              <div className="gold-divider"></div>
              
              {/* Practices - Collapsible */}
              <h3 className="collapsible-header" onClick={() => toggleSection('practices')}>
                <span className={`triangle ${openSections.practices ? 'open' : ''}`}></span>
                Practices
              </h3>
              <div className={`collapsible-content ${openSections.practices ? 'open' : ''}`}>
                <p>
                  I teach breathwork, voice-based sound healing, yoga, and meditation. More information provided upon inquiry. These are all powerful multi-tools we can integrate into counseling, or they can be the whole focus of our time together.
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