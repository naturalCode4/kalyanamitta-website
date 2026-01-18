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
      mainPrice: '$528',
      slidingScale: ' / Sliding Scale $256-800',
      originalPrice: '$660. Sliding Scale $320-1000',
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
      mainPrice: '$866',
      slidingScale: ' / Sliding Scale $420-1,312',
      originalPrice: '$1,155. Sliding Scale $560-1,750',
      discount: '25% OFF',
      features: [
        'Seven 90 minute sessions',
        'Any combination of services',
        'Ongoing support and guidance',
        '25% discount on total price'
      ]
    },
  ];
  // const packages = [
  //   {
  //     name: '4-Session Combo',
  //     description: "Invest in your healing and goals. Four potent sessions to transform your life and resolve several issues.",
  //     mainPrice: '$400',
  //     slidingScale: ' / Sliding Scale $224-640',
  //     originalPrice: '$500. Sliding Scale $280-800',
  //     discount: '20% OFF',
  //     features: [
  //       'Four 90 minute sessions',
  //       'Any combination of services',
  //       'Ongoing support and guidance',
  //       '20% discount on total price'
  //     ]
  //   },
  //   {
  //     name: '7-Session Combo',
  //     description: "Change your life, heal major issues, and develop your spiritual toolkit. Commit yourself to being supported with seven powerful sessions.",
  //     mainPrice: '$656',
  //     slidingScale: ' / Sliding Scale $368-1050',
  //     originalPrice: '$875. Sliding Scale $490-1400',
  //     discount: '25% OFF',
  //     features: [
  //       'Seven 90 minute sessions',
  //       'Any combination of services',
  //       'Ongoing support and guidance',
  //       '25% discount on total price'
  //     ]
  //   },
  // ];

  return (
    <div className="rates">
      <Helmet>
        <title>Rates & Packages | Healing On Tap</title>
        <meta name="description" content="View pricing for single sessions and packages for EFT, Reiki, and Counseling." />
        <meta property="og:title" content="Rates & Packages | Healing On Tap" />
        <meta property="og:description" content="View pricing for single sessions and packages for EFT, Reiki, and Counseling." />
        <meta property="og:url" content="https://healing-on-tap.com/rates" />
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
              <p className="flexible-label">90 minutes: $80-250</p>
              <p className="subtitle">I offer flexible pricing so that this work is accessible to everyone. Choose an amount that feels aligned—honoring this work and what's sustainable for you.</p>
              <p className="subtitle">I offer accessible rates because I am passionate about this work and desire to share it widely. There is a huge wealth disparity in the modern world. For some, the standard rate is an easy investment, and for others its basic expenses they can't forego.</p>
              <p className="subtitle">For those with financial ease, your generosity honors the exchange of energy between us, allows me to thrive doing what I love, supports this work in the world, and makes it accessible to others.</p>
              <p className="subtitle extra"><em>Rates listed are for 90 minutes. 60 and 30 minute sessions are available as well</em></p>
            </div>
          </div>
          
          <div className="pricing-timeline">
            
            {/* <div className="timeline-point">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>$45 - 70</h3>
                <p className="timeline-label">Deep Accessibility</p>
                <p className="timeline-description">Reserved for those struggling financially. Your presence and commitment matters most.</p>
              </div>
            </div> */}
            
            <div className="timeline-point highlighted-point">
              <div className="timeline-number">1</div>
              <div className="timeline-content middle-card">
                <h3>$80 - 120</h3>
                <p className="timeline-label">Accessible Range</p>
                {/* <h3>Accessible Range</h3>
                <p className="timeline-label">80 - 120</p> */}
                <p className="timeline-description">For those finding the standard rate beyond their means, and for dharma practitioners</p>
              </div>
            </div>

            <div className="timeline-point highlighted-point">
              <div className="timeline-number">2</div>
              <div className="timeline-content middle-card">
                <h3>$165</h3>
                <p className="timeline-label">Standard Rate</p>
                {/* <h3>Standard Rate</h3>
                <p className="timeline-label">165</p> */}
                {/* <p className="timeline-description"></p> */}
              </div>
            </div>

            <div className="timeline-point">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>$225 - 250</h3>
                <p className="timeline-label">Sustaining Range</p>
                {/* <h3>Sustaining Range</h3>
                <p className="timeline-label">225 - 250</p> */}
                <p className="timeline-description">For those who can—honoring what deep healing is worth while making it available to others.</p>
              </div>
            </div>
          </div>
          
        </div>

      </section>
        {/* Pricing Timeline without 60 minutes */}
        {/* <section className="pricing-timeline-section">
        <div className="container">
          <div className="flexible-pricing">
            <div className="flexible-content">
              <h3>Open Reciprocity Sliding Scale</h3>
              <p className="flexible-label">90 minutes: $80-250 • 60 minutes: $55-175</p>
              <p className="subtitle">I offer flexible pricing so that this work is accessible to everyone. Choose an amount that feels aligned—honoring this work and what's sustainable for you.</p>
              <p className="subtitle">I offer very accessible rates because I am passionate about this work and desire to share it widely. There is a huge wealth disparity in the modern world. For some, the standard rate is an easy investment, and for others its basic expenses they can't forego.</p>
              <p className="subtitle">For those with financial ease, your generosity honors the exchange of energy between us, allows me to thrive doing what I love, supports this work in the world, and makes it accessible to others.</p>
            </div>
          </div>
          
          <div className="pricing-timeline">
            
            <div className="timeline-point">
              <div className="timeline-number"></div>
              <div className="timeline-content">
                <h3>Deep Accessibility</h3>
                <p className="timeline-label">50 - 70<br></br>60min: 40 - 50</p>
                <p className="timeline-description">Reserved for those struggling financially. Your presence and commitment matters most.</p>
              </div>
            </div>
            
            <div className="timeline-point highlighted-point">
              <div className="timeline-number">1</div>
              <div className="timeline-content middle-card">
                <h3>Accessible Range</h3>
                <p className="timeline-label">90 min: 80 - 120<br></br>60 min: 55 - 85</p>
                <p className="timeline-description">For those finding the standard rate out of reach and for dharma & healing practitioners</p>
              </div>
            </div>

            <div className="timeline-point highlighted-point">
              <div className="timeline-number">2</div>
              <div className="timeline-content middle-card">
                <h3>Standard Rate</h3>
                <p className="timeline-label">90 min: 165<br></br>60 min: 115</p>
              </div>
            </div>

            <div className="timeline-point">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>Sustaining Range</h3>
                <p className="timeline-label">90 min: 225 - 250<br></br>60 min: 150 - 175</p>
                <p className="timeline-description">For those who can—honoring what deep healing is worth while making it available to others.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
