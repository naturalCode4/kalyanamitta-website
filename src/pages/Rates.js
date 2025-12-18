import React from 'react';
import { Link } from 'react-router-dom';
import './Rates.css';
import Section from '../components/Section';
import CTA from '../components/CTA';

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
      name: '4-Session Combo',
      description: "Invest in your growth and healing. Four potent sessions to transform your life and resolve several major issues.",
      price: '$400. Sliding Scale $224-640',
      originalPrice: '$500. Sliding Scale $280-800',
      discount: '20% OFF',
      features: [
        'Four 90 minute sessions',
        'Any combination of services',
        'Ongoing support and guidance',
        '20% discount on total price'
      ]
    },
    // {
    //   name: '7-Session Combo',
    //   description: "Change your life and heal major issues, plain and simple.",
    //   price: '$613. Sliding Scale $343-980',
    //   originalPrice: '$875. Sliding Scale $490-1400',
    //   discount: '30% OFF',
    //   features: [
    //     'Seven 90 minute sessions',
    //     'Any combination of services',
    //     'Ongoing support and guidance',
    //     '30% discount on total price'
    //   ]
    // },
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
              <p className="subtitle">I use this open reciprocity model so that those for whom it's easy to spend money can support those who want the healing work and need financial assistance. This honors the exchange of energy between us and makes this work accessible to more people. Anyone is welcome to give any amount on the scale. In the context of healing arts as well as traditional therapy, this sliding scale would be considered very accessible.</p>
              <br></br><p className="flexible-description"><em>Rates for 90 minute sessions</em></p>
            </div>
          </div>
          <div className="pricing-timeline">
            <div className="timeline-point">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>$70</h3>
                <p className="timeline-label">Affordable Range</p>
                <p className="timeline-description">An accessible rate for those with lower financial means</p>
              </div>
            </div>
            
            <div className="timeline-point">
              <div className="timeline-number">2</div>
            </div>

            <div className="timeline-point">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>$200</h3>
                <p className="timeline-label">Secure Range</p>
                <p className="timeline-description">A way for those who are financially secure to honor the value of this work and support others</p>
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
                className={`package-card ${pkg.name === '4-Session Combo' ? 'combo-highlight' : ''}`}
              >
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
        subtitle="Take the step towards healing, growth, connection, and freedom. Discover the peace and clarity you've been seeking. I look forward to transforming with you. Book your session or a free 30 minute consultation. I'm happy to answer any questions."
      >
        <CTA />
      </Section>
    </div>
  );
};

export default Rates;
