import React from 'react';
import { Link } from 'react-router-dom';
import './Rates.css';
import Section from '../components/Section';
import CTA from '../components/CTA';
import { Helmet } from 'react-helmet';

const Rates = () => {

  const packages = [
    {
      name: '4-Session Combo',
      description: "Invest in your healing and goals. Four potent sessions to transform your life and resolve several issues.",
      mainPrice: '$400',
      slidingScale: ' / Sliding Scale $224-640',
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
      slidingScale: ' / Sliding Scale $368-1050',
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
      <Helmet>
        <title>Rates & Packages | Healing On Tap</title>
        <meta name="description" content="View pricing for single sessions and packages for EFT, Reiki, and Counseling." />
        <meta property="og:title" content="Rates & Packages | Healing On Tap" />
        <meta property="og:description" content="View pricing for single sessions and packages for EFT, Reiki, and Counseling." />
      </Helmet>
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
          <div className="flexible-pricing">
            <div className="flexible-content">
              <h3>Open Reciprocity Sliding Scale</h3>
              <p className="flexible-label">$70-200 for 90 minutes</p>
              <p className="subtitle">I offer flexible pricing so that this work is accessible to everyone. Choose an amount that feels aligned—honoring this work and what's sustainable for you. All amounts are welcome and honored.</p>
              <p className="subtitle">For those with financial ease, giving generously honors the exchange of energy between us, allows me to thrive doing what I love, supports this work in the world, and makes it accessible to others.</p>
            </div>
          </div>
          
          <div className="pricing-timeline">
            {/* Point 1: Affordable */}
            <div className="timeline-point">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>$70</h3>
                <p className="timeline-label">Affordable Range</p>
                <p className="timeline-description">Accessible rate— your presence and commitment matter most</p>
              </div>
            </div>
            
            {/* Point 2: Suggested (NOW INLINE) */}
            <div className="timeline-point highlighted-point">
              <div className="timeline-number">2</div>
              {/* Added content here inside the point */}
              <div className="timeline-content middle-card">
                <h3>$125</h3>
                <p className="timeline-label">Suggested Rate</p>
                {/* <p className="timeline-description">The standard rate that supports my livelihood and practice</p> */}
              </div>
            </div>

            {/* Point 3: Full Value */}
            <div className="timeline-point">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>$200</h3>
                <p className="timeline-label">Full-Value Range</p>
                <p className="timeline-description">Reciprocates the significance of this work and supports accessibility</p>
              </div>
            </div>
          </div>
          
          {/* REMOVED the separate .timeline-middle-text div completely */}
          
        </div>
      </section>

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

export default Rates;
