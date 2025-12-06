import React from 'react';
import { Link } from 'react-router-dom';
import './LifeCoaching.css';

const LifeCoaching = () => {
  const services = [
    {
      title: 'Life Guidance',
      description: 'Navigate life transitions, make important decisions, and create a clear path forward with compassionate support and practical wisdom.',
      benefits: [
        'Clarity on life direction and purpose',
        'Support through major transitions',
        'Decision-making frameworks',
        'Goal setting and achievement',
        'Personal accountability and motivation'
      ]
    },
    {
      title: 'Spiritual Education and Tools',
      description: 'Learn practical spiritual tools and practices that can be integrated into daily life for greater peace, wisdom, and connection.',
      benefits: [
        'Meditation and mindfulness techniques',
        'Understanding of spiritual principles',
        'Daily practice integration',
        'Spiritual tradition exploration',
        'Inner wisdom development'
      ]
    },
    {
      title: 'Understanding Spiritual Traditions',
      description: 'Explore various spiritual traditions in a healthy, balanced way that honors their wisdom while avoiding dogma and extremism.',
      benefits: [
        'Balanced approach to spirituality',
        'Wisdom from multiple traditions',
        'Avoiding spiritual bypassing',
        'Healthy spiritual boundaries',
        'Integration of diverse practices'
      ]
    },
    {
      title: 'Authenticity Coaching',
      description: 'Break free from limiting beliefs, societal conditioning, and false identities to live as your authentic self.',
      benefits: [
        'Identity and belief exploration',
        'Breaking limiting patterns',
        'Authentic self-expression',
        'Personal sovereignty',
        'Matrix-breaking techniques'
      ]
    },
    {
      title: 'Men\'s Issues & Relationships',
      description: 'Specialized support for men navigating modern masculinity, relationships, sexual energy, and personal growth.',
      benefits: [
        'Healthy masculine expression',
        'Relationship dynamics',
        'Sexual energy transmutation',
        'Emotional intelligence',
        'Divine masculinity integration'
      ]
    },
    {
      title: 'Psychedelic Support & Integration',
      description: 'Safe, grounded support for psychedelic experiences, preparation, and integration work.',
      benefits: [
        'Pre-journey preparation',
        'Integration support',
        'Meaning-making from experiences',
        'Grounding techniques',
        'Safe container for processing'
      ]
    },
    {
      title: 'Deep Friendship & Holistic Support',
      description: 'Ongoing relationship-based support that goes beyond traditional coaching to provide genuine friendship and alliance.',
      benefits: [
        'Long-term supportive relationship',
        'Holistic life support',
        'Genuine care and friendship',
        'Consistent presence',
        'Deep understanding and acceptance'
      ]
    }
  ];

  return (
    <div className="life-coaching">
      {/* Hero Section */}
      <section className="life-coaching-hero">
        <div className="container">
          <div className="life-coaching-hero-content">
            <h1>Life Coaching</h1>
            <p className="life-coaching-subtitle">
              Transform your life through authentic guidance, spiritual wisdom, and deep supportive friendship
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="life-coaching-services">
        <div className="container">
          <div className="services-intro">
            <h2>Coaching Services</h2>
            <p>
              My approach to life coaching combines practical guidance with spiritual wisdom, 
              offering you a unique blend of support that addresses both your immediate needs 
              and your deeper spiritual growth.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-benefits">
                  <h4>Benefits Include:</h4>
                  <ul>
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach-section section-light">
        <div className="container">
          <h2>My Approach</h2>
          <div className="approach-grid">
            <div className="approach-item">
              <h3>Authentic Connection</h3>
              <p>
                I believe in genuine human connection. Our work together is based on real friendship 
                and authentic care for your wellbeing, not just professional boundaries.
              </p>
            </div>
            <div className="approach-item">
              <h3>Spiritual Integration</h3>
              <p>
                I integrate wisdom from multiple spiritual traditions while helping you find your 
                own authentic spiritual path, free from dogma or extremism.
              </p>
            </div>
            <div className="approach-item">
              <h3>Practical Wisdom</h3>
              <p>
                Every session includes practical tools and actionable steps you can implement 
                immediately to create real change in your life.
              </p>
            </div>
            <div className="approach-item">
              <h3>Holistic Support</h3>
              <p>
                I address all aspects of your being - physical, emotional, mental, and spiritual - 
                recognizing that true transformation happens on all levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="life-coaching-cta section-dark">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Life?</h2>
            <p>
              Begin your journey of authentic transformation with a coach who truly understands 
              the depths of human experience and spiritual growth.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn">Book Your Session</Link>
              <Link to="/rates" className="btn btn-secondary">View Rates</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeCoaching;
