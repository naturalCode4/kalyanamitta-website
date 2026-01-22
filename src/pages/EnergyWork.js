import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import CTA from '../components/CTA';
import './EnergyWork.css';
import pic6 from '../assets/pic6.jpg';
import pic9 from '../assets/pic9.jpg';
import { Helmet } from 'react-helmet';

const EnergyWork = () => {
  const [openSections, setOpenSections] = useState({
    benefits: false,
    whatIsReiki: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="energy-work">
      <Helmet>
        <title>Reiki Energy Healing | Universal Life Force Energy is on Tap</title>
        <meta name="description" content="Receive universal life force energy to promote healing, relaxation, balance, and transformation" />
        <meta property="og:title" content="Reiki Energy Healing | Universal Life Force Energy is on Tap" />
        <meta property="og:description" content="Receive universal life force energy to promote healing, relaxation, balance, and transformation" />
        <meta property="og:url" content="https://healing-on-tap.com/energy-work" />
      </Helmet>
      {/* Hero Section */}
      <section className="energy-work-hero">
        <div className="container">
          <div className="energy-work-hero-content">
            <h1>Reiki-Based Energy Healing</h1>
            <p className="energy-work-subtitle">Treatment of universal life force energy for health, relaxation, vitality, emotional healing, connection, clarity, and more.</p>
          </div>
        </div>
      </section>

      {/* About energy healing Section - Rainbow Background */}
      <section className="about-energy-work section-rainbow">
        <div className="container">
          <div className="about-energy-work-content">
            <h2>About Energy Healing</h2>
            
            {/* Image Container with Credit - Cleanly placed inside the main content div */}
            <div className="energy-image-container">
              <img 
                src={pic6}
                alt="energy healing Session" 
                className="energy-work-pic" 
              />
              <p className="photo-credit">Image by Wirestock on Freepik</p>
            </div>

            <div className="about-energy-work-text">
              <p>
                Reiki-based Energy Healing treatment restores and optimizes your energy field to bring many wonderful benefits (see "Benefits of Energy Healing" below).
              </p>
              <p>
                I attune to your whole being and address any specific concerns– whether they be physical, emotional, energetic, or spiritual.
              </p>
              <p>
                Grounded in safe and compassionate presence, I hold space for whatever arises with acceptance and care.
              </p>
              <p>
                In addition to Reiki, I may incorporate other modes of energy work, focused pressure on specific energy points, or share information when it is helpful to you. When requested, I offer guidance and discussion to help you integrate your experience and move forward with clarity.
              </p>
              {window.innerWidth > 768 && <br />}
              <div className="gold-divider"></div>
              
              {/* Benefits of Energy Healing - Collapsible */}
              <h3 className="collapsible-header" onClick={() => toggleSection('benefits')}>
                <span className={`triangle ${openSections.benefits ? 'open' : ''}`}></span>
                Benefits of Energy Healing
              </h3>
              <div className={`collapsible-content ${openSections.benefits ? 'open' : ''}`}>
                <p>
                  Reiki transmits vital energy to your whole being, helps remove blockages and deficiencies, and restores your natural healing intelligence. Practitioners can help guide Reiki to address particular deficiencies. By restoring balance to your body's energy field, you may experience:
                </p>
                <p>
                  Deeper sense of peace, love, and connectedness • Enhanced vitality • Improvements in health conditions, immune function, and sleep quality • Relief from physical pain and tension and accelerated recovery from injuries • Deep relaxation and reduced stress and anxiety • Emotional release, clarity, and resolution to psychological issues • More positive thinking • Mental clarity and reduced brain fog • Enhanced intuition, third eye activation, and increased energetic awareness • Intuitive downloads, messages, and deepened connection to supernal consciousness.
                </p>
                <p>
                  Reiki has been successfully used to <a href="https://centerforreikiresearch.com/our-research/" target="_blank">address many kinds of physical and mental health conditions</a>.
                </p>
                <p>
                  How quickly you experience benefits can vary based on individual factors and the nature of your concerns. Some people feel immediate relief and relaxation, while others may notice gradual improvements over time. Multiple sessions may be recommended for deeper or ongoing issues.
                </p>
              </div>
              
              <div className="gold-divider"></div>
              
              {/* What is Reiki? - Collapsible */}
              <h3 className="collapsible-header" onClick={() => toggleSection('whatIsReiki')}>
                <span className={`triangle ${openSections.whatIsReiki ? 'open' : ''}`}></span>
                What is Reiki?
              </h3>
              <div className={`collapsible-content ${openSections.whatIsReiki ? 'open' : ''}`}>
                {/* --- NEW IMAGE pic9 (Float Left) --- */}
                <div className="energy-image-left">
                  <img 
                    src={pic9}
                    alt="Reiki Symbols or Energy" 
                    className="energy-work-pic" 
                  />
                  <p className="photo-credit">Image from International End-of-Life Doula Association</p>
                </div>
                <p>
                  Reiki is an ancient Japanese healing art in which a practitioner channels this beneficent, spiritually conscious, self-intelligent, omnipresent (Rei) life force energy (Ki) to optimize a recipient's bio-energetic field. Reiki works on multiple dimensions simultaneously, supporting the recipient on the physical, emotional, mental, energetic, and spiritual planes.
                </p>
                <p>
                  When one's energy field becomes stagnant, depleted, or disrupted through negative thinking, stress, illness, disconnection, etc., we experience dis-ease.
                </p>
                <p>
                  Sessions address not just symptoms but the underlying energetic patterns that contribute to imbalance. Practitioners act as a conduit for Reiki to trasmit to you. This practice participates with your body's innate wisdom– allowing healing to unfold from within. Reiki meets you where you are and supports your system in gaining balance.
                </p>
              </div>
              
              <div className="gold-divider"></div>
            </div>

            {/* What to Expect - Now inside the rainbow section */}
            <div className="what-to-expect-card">
              <h3>What to Expect from a Session</h3>
              
              <div className="expect-sections">
                <div className="expect-item">
                  <h4>Arrival & Discussion</h4>
                  <p>
                    We'll greet each other, settle into the space, and can discuss any specific concerns you'd like addressed.
                  </p>
                </div>
                
                <div className="expect-item">
                  <h4>Energy Healing Session</h4>
                  <p>
                    You'll lie comfortably on a table or mat and receive Reiki. I may integrate other healing modalities as well. Hands-off treatment is available upon request. Each session and person is unique. You may experience shifts in sensation. It is often a very pleasant and relaxing experience.
                  </p>
                </div>

                <div className="expect-item">
                  <h4>Closing & Integration</h4>
                  <p>
                    After the session, we'll take time to ground and integrate. If you'd like, we can discuss anything that arose—experiences, energy, insights, or questions. Spiritual counseling is available if desired. Subtle shifts tend to become more apparent after the session, and one may continue to notice positive shifts for several days.
                  </p>
                </div>

                <div className="expect-item">
                  <h4>During the Session You May Notice</h4>
                  <p>
                    <strong>Physical:</strong> Deep relaxation • Warmth, coolness, or tingling • Gentle pulsing • Muscles releasing tension • Some clients fall asleep
                    <br/>
                    <strong>Emotional:</strong> Feelings of peace and calm • Emotional release • A sense of being held or supported • Some clients may cry, laugh, sigh, cough, tremble
                    <br/>
                    <strong>Mental:</strong> Meditative or dreamlike state • Thoughts slowing down • Mild drowsiness or floaty feeling • Insights and downloads
                    <br/>
                    <strong>Energetic:</strong> Bliss • Awareness of energy moving • Feeling lighter or more open • Sense of blockages releasing
                  </p>
                </div>

                <div className="expect-item">
                  <h4>After the Session You May Notice</h4>
                  <p>
                    <strong>Physical:</strong> Enhanced vitality • Improvements in health conditions, immune function, and sleep quality • Relief from physical pain and tension and accelerated recovery from injuries • Deep relaxation
                    <br/>
                    <strong>Emotional:</strong> Deeper sense of peace, love, and connectedness • Reduced stress and anxiety • Emotional release, clarity, and resolution to psychological issues
                    <br/>
                    <strong>Mental/Energetic:</strong> More positive thinking • Mental clarity and reduced brain fog • Increased vitality and energetic awareness
                    <br/>
                    <strong>Spiritual:</strong> • Enhanced intuition and third eye activation • Intuitive downloads, messages, and deepened connection to supernal consciousness
                  </p>
                </div>
              </div>
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

export default EnergyWork;