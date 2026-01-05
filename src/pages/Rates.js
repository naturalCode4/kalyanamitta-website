import React from 'react';
import { Link } from 'react-router-dom';
import './Rates.css';
import Section from '../components/Section';
import CTA from '../components/CTA';

const Rates = () => {

  const packages = [
    {
      name: '4-Session Combo',
      description: "Invest in your healing and goals. Four potent sessions to transform your life and resolve several issues.",
      mainPrice: '$400',
      slidingScale: '. Sliding Scale $224-640',
      originalPrice: '$500. Sliding Scale $280-800',
      discount: '20% OFF',
      features: [
        'Four 90 minute sessions',
        'Any combination of services',
        'Ongoing support and guidance',
        '20% discount on total price'
      ]
    },
    {
      name: '7-Session Combo',
      description: "Change your life, heal major issues, and develop your spiritual toolkit. Commit yourself to being supported with seven powerful sessions.",
      mainPrice: '$656',
      slidingScale: '. Sliding Scale $368-1050',
      originalPrice: '$875. Sliding Scale $490-1400',
      discount: '25% OFF',
      features: [
        'Seven 90 minute sessions',
        'Any combination of services',
        'Ongoing support and guidance',
        '25% discount on total price'
      ]
    },
  ];

  return (
    <div className="rates">

      {/* Hero Section */}
      <section className="rates-hero">
        <div className="container">
          <div className="rates-hero-content">
            <h1>Rates & Packages</h1>
            <p className="rates-subtitle">
              Flexible pricing
            </p>
          </div>
        </div>
      </section>
      {/* Pricing Timeline */}
      <section className="pricing-timeline-section">
        <div className="container">
          {/* <h2>Open Reciprocity Pricing</h2> */}
          <div className="flexible-pricing">
            <div className="flexible-content">
              <h3>Open Reciprocity Sliding Scale</h3>
              <p className="flexible-label">$70-200 for 90 minutes</p>
              <p className="subtitle">I offer flexible pricing so that this work is accessible to everyone. Choose an amount that feels aligned—honoring this work and what's sustainable for you. All amounts are welcome and honored.</p>
              <p className="subtitle">For those with financial ease, giving generously honors the exchange of energy between us, allows me to thrive doing what I love, supports this work in the world, and makes it accessible to others.</p>
              {/* <br></br><p className="flexible-description"><em>Rates for 90 minute sessions</em></p> */}
            </div>
          </div>
          <div className="pricing-timeline">
            <div className="timeline-point">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>$70</h3>
                <p className="timeline-label">Affordable Range</p>
                <p className="timeline-description">Accessible rate— your presence and commitment matter most</p>
              </div>
            </div>
            
            <div className="timeline-point">
              <div className="timeline-number">2</div>
            </div>

            <div className="timeline-point">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>$200</h3>
                <p className="timeline-label">Full-Value Range</p>
                <p className="timeline-description">Reciprocates the significance of this work and supports accessibility</p>
              </div>
            </div>
          </div>
          
          <div className="timeline-middle-text">
            <div className="middle-text-content">
              <h3>$125</h3>
              <p className="middle-text-label">Suggested Rate</p>
              <p className="middle-text-description"></p>
            </div>
          </div>
          
        </div>
      </section>


      {/* Packages Section */}

      <section className="packages-section">
        <div className="container">
          <h2>Combo Packages</h2>
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`package-card ${pkg.name.includes('Session Combo') ? 'combo-highlight' : ''}`}
              >
                <div className="package-header">
                  <h3>{pkg.name}</h3>
                  <p className="package-description">{pkg.description}</p>
                  <div className="package-price">
                    {/* Render split prices */}
                    <div className="current-price-container">
                      <span className="price-gold">{pkg.mainPrice}</span>
                      <span className="price-pink">{pkg.slidingScale}</span>
                    </div>
                    <div className="old-price-container">
                      <span className="original-price">{pkg.originalPrice}</span>
                      <span className="discount">{pkg.discount}</span>
                    </div>
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
      {/* <section className="rates-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Begin?</h2>
            <p className="subtitle">
              You can schedule a session with me directly, or get in touch if you'd like to discuss anything. I'm more than happy to answer any questions and help you find the next step for your path.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn">Book Your Session</Link>
              <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section> */}
      <Section 
        variant="dark" 
        title="Ready to Begin?"
        subtitle="When you're ready, I'm here. Book a session, schedule a free consultation, or reach out—I'm happy to answer any questions."
      >
        <CTA />
      </Section>
    </div>
  );
};

export default Rates;
