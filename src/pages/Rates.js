import React from 'react';
import { Link } from 'react-router-dom';
import './Rates.css';

const Rates = () => {
  const pricingTiers = [
    {
      name: 'Standard Sliding Scale',
      description: 'Flexible pricing based on your financial situation',
      sessions: 'Per hour',
      price: '$100-200',
      features: [
        'All services available',
        'Personalized healing session',
        'Initial consultation included',
        'Integration guidance',
        'Email support for 48 hours'
      ],
      popular: true
    },
    {
      name: 'Dharma & Service Pricing',
      description: 'Special rates for those deeply committed to spiritual practice and service',
      sessions: 'Per hour',
      price: '$50-125',
      features: [
        'All services available',
        'For Dharma practitioners',
        'For those helping others',
        'Same quality of care',
        'Honor-based pricing'
      ],
      popular: false
    }
  ];

  const packages = [
    {
      name: '3-Session Combo',
      description: 'Dive deeper into your practice',
      price: '$240-480',
      originalPrice: '$300-600',
      discount: '20% OFF',
      duration: '3 sessions',
      features: [
        '20% discount on total price',
        'Any combination of services',
        'Personalized approach',
        'Integration support',
        'Ongoing support and guidance'
      ]
    },
    {
      name: '5-Session Combo',
      description: 'Commit to your showing up for your life',
      price: '$500-1000',
      originalPrice: '$750-1500',
      discount: '33% OFF',
      duration: '5 sessions',
      features: [
        '33% discount on total price',
        'Any combination of services',
        'Personalized approach',
        'Comprehensive healing journey',
        'Ongoing support and guidance'
      ]
    }
  ];

  const sessionTypes = [
    'Reiki & Energy Work',
    'Applied Kinesiology', 
    'Life Coaching & Self-Empowerment',
    'Spiritual Education & Perspective Shifter',
    'Spiritual Guidance',
    'Deep Listening & Support',
    'Emotional Processing & Upgrading',
    'Acupressure & Massage',
    'Meditation Teaching',
    'Yoga Teaching',
    'Sound Healing Teaching',
    'Breathwork Teaching',
    'Piano Improvisation Teaching',
    'Men\'s Work & Issues',
    'Psychedelic Education & Integration',
    'Sexual Energy Practices',
    'Connecting to Nature',
    'Software Engineering'
  ];

  return (
    <div className="rates">

      {/* Pricing Timeline */}
      <section className="pricing-timeline-section">
        <div className="container">
          <h2>Sliding Scale for Accessibility</h2>
          <div className="flexible-pricing">
            <div className="flexible-content">
              <h3>Open Reciprocity Pricing</h3>
              <p className="flexible-label">Honor-Based</p>
              <p className="flexible-description">To make this work available to anyone with a desire for transformation, the sliding scale allows those with greater financial capacity to support those with more need. This open reciprocity model is based on generosity and honors the exchange of energy between us, supports awareness work in the world, and allows this work to be accessible to more individuals.</p>
            </div>
          </div>
          <div className="pricing-timeline">
            <div className="timeline-point">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>$50</h3>
                <p className="timeline-label">Dharma Practitioners</p>
                <p className="timeline-description">Special beginning rate for those deeply committed to Dharma and/or helping others. I know many of us have prioritized other things in our lives over $!</p>
              </div>
            </div>
            
            <div className="timeline-point">
              <div className="timeline-number">2</div>
            </div>
            
            <div className="timeline-point">
              <div className="timeline-number">3</div>
            </div>

            <div className="timeline-point">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>$200</h3>
                <p className="timeline-label">Supporting Value</p>
                <p className="timeline-description">For those at a financially secure stage who wish to support this work's sacred value and accessibility for others.</p>
              </div>
            </div>
          </div>
          
          <div className="timeline-middle-text">
            <div className="middle-text-content">
              <h3>$100-150</h3>
              <p className="middle-text-label">Main Rate Range</p>
              <p className="middle-text-description">The recommended rate range for most clients</p>
            </div>
          </div>
          
        </div>
      </section>


      {/* Packages Section */}
      <section className="packages-section">
        <div className="container">
          <h2>Combo Packages</h2> th
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div key={index} className="package-card">
                <div className="package-header">
                  <h3>{pkg.name}</h3>
                  <p className="package-description">{pkg.description}</p>
                  <div className="package-price">
                    <span className="price">{pkg.price}</span>
                    <span className="original-price">{pkg.originalPrice}</span>
                    <span className="discount">{pkg.discount}</span>
                  </div>
                  <p className="package-duration">{pkg.duration}</p>
                </div>
                
                <div className="package-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="rates-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Begin?</h2>
            <p>
              You can schedule a session with me directly, or get in touch if you'd like to discuss anything. 
              I'm more than happy to answer any questions and help you find step for your path.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn">Book Your Session</Link>
              <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rates;
