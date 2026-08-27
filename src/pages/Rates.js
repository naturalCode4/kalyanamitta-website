import React from 'react';
import { Link } from 'react-router-dom';
import './Rates.css';
import Section from '../components/Section';
import CTA from '../components/CTA';
import { Helmet } from 'react-helmet';

const Rates = () => {

  const packages = [
    {
      name: 'Tap Into Freedom Program',
      description: "A 12-week container to dissolve the limitations that have been running your life, and become calm, happy, free, and empowered — for good.",
      mainPrice: '$2,420',
      slidingScale: ' Founding Cohort',
      originalPrice: '$3,000',
      discount: 'Standard Rate',
      features: [
        'Twelve 90-minute 1-on-1 EFT & Coaching sessions',
        'Gain proficiency using EFT on yourself',
        "Cultivate a spiritual practice that's genuinely yours",
        'Weekly cohort circles for sharing and connection',
        'My ongoing support the whole way'
      ],
      ctaText: 'Learn More & Apply',
      ctaLink: '/tap-into-freedom'
    },
    {
      name: '4-Session Combo',
      description: "If you're tired of white-knuckling through life, this is for you. Four potent sessions to release what's weighing you down and reclaim your energy — fast.",
      mainPrice: '$612',
      slidingScale: ' / Sliding Scale $377-1,020',
      originalPrice: '$720. Sliding Scale $444-1,200',
      discount: '15% OFF',
      features: [
        'Four 90 minute sessions',
        'Any combination of services',
        'Ongoing support and guidance',
        '15% discount on total price'
      ]
    },
    {
      name: '7-Session Combo',
      description: "For those ready to go all in on real change — even the big stuff. Seven potent sessions to heal at the root and expand your spiritual capacity, for good.",
      mainPrice: '$1,008',
      slidingScale: ' / Sliding Scale $621-1,680',
      originalPrice: '$1,260. Sliding Scale $777-2,100',
      discount: '20% OFF',
      features: [
        'Seven 90 minute sessions',
        'Any combination of services',
        'Ongoing support and guidance',
        '20% discount on total price'
      ]
    },
  ];
  // const packages = [
  //   {
  //     name: '4-Session Combo',
  //     description: "Invest in your healing and personal development, and get your energy back. Four potent sessions to find freedom and align yourself.",
  //     mainPrice: '$528',
  //     slidingScale: ' / Sliding Scale $256-800',
  //     originalPrice: '$660. Sliding Scale $320-1000',
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
  //     description: "Transform yourself, heal even major issues, and expand your spiritual capacity and toolkit. Commit to being supported with seven potent sessions.",
  //     mainPrice: '$866',
  //     slidingScale: ' / Sliding Scale $420-1,312',
  //     originalPrice: '$1,155. Sliding Scale $560-1,750',
  //     discount: '25% OFF',
  //     features: [
  //       'Seven 90 minute sessions',
  //       'Any combination of services',
  //       'Ongoing support and guidance',
  //       '25% discount on total price'
  //     ]
  //   },
  // ];
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
        <meta name="description" content="View pricing for single sessions and packages for EFT and Counseling." />
        <meta property="og:title" content="Healing On Tap | Rates & Packages" />
        <meta property="og:description" content="View pricing for single sessions and packages for EFT and Counseling." />
        <meta property="og:url" content="https://healing-on-tap.com/rates" />
      </Helmet>
      {/* Hero Section */}
      <section className="rates-hero">
        <div className="container">
          <div className="rates-hero-content">
            <h1 className="subtitle-heading">Rates & Packages</h1>
            {/* <p className="rates-subtitle">
              Flexible pricing
            </p> */}
          </div>
        </div>
      </section>

      {/* Tap Into Freedom Program highlight */}
      <section className="rates-tif-highlight section-dark">
        <div className="container">
          <h2 className="subtitle-heading">The <u className="rates-underline">Tap Into Freedom</u> Program</h2>
          <p className="rates-tif-description">
            A 12-week container to dissolve what's been running your life, and become calm, happy, free, and empowered — for good.
          </p>
          <div className="rates-tif-price">
            <span className="price-gold">$2,420</span> Founding Cohort
            <span className="rates-tif-original"> · $3,000 Standard</span>
          </div>
          <Link to="/tap-into-freedom" className="btn">Learn More →</Link>
        </div>
      </section>

        {/* Pricing Timeline */}
        <section className="pricing-timeline-section">
        <div className="container">
          <div className="flexible-pricing">
              <div className="flexible-content">
                <h3>Open Reciprocity Sliding Scale</h3>
                <br></br>
                {/* <p className="flexible-label">90 minutes: $80-250</p> */}
                <p className="subtitle">I offer flexible pricing so that this work is accessible. Choose an amount that feels aligned—honoring this work and what's sustainable for you.</p>
                <p className="subtitle">I offer these rates because I am passionate about this powerful work and desire for it to be shared widely. There is a huge wealth disparity in the modern world. For many, the standard rate or more is an easy investment, and others can use the support.</p>
                <p className="subtitle">For those with financial ease, your generosity honors the exchange of energy between us, allows me to thrive doing what I love, supports this work in the world, and makes it accessible to others.</p>
              </div>
            </div>
          <p className="rates-duration-note">
            <strong>The rates below are for 90-minute sessions.</strong> 60 and 30-minute sessions are also available.
          </p>
          <div className="pricing-timeline">
            <div className="timeline-point highlighted-point">
              <div className="timeline-number">1</div>
              <div className="timeline-content middle-card">
                <h3>$88-111</h3>
                <p className="timeline-label">Accessible Range</p>
                {/* <h3>Accessible Range</h3>
                <p className="timeline-label">80 - 120</p> */}
                <p className="timeline-description">For those whom the standard rate is financially inaccessible. Your presence & sincerity matter most.</p>
              </div>
              {/* <div className="timeline-content">
                <h3>$50 - 70</h3>
                <p className="timeline-label">Deep Accessibility</p>
                <p className="timeline-description">Reserved only for those with struggling financially but who sincerely long to do this work. Your presence and commitment matter most.</p>
              </div> */}
            </div>

            <div className="timeline-point highlighted-point">
              <div className="timeline-number">2</div>
              <div className="timeline-content middle-card">
                <h3>$180</h3>
                <p className="timeline-label">Standard Rate</p>
                {/* <h3>Standard Rate</h3>
                <p className="timeline-label">165</p> */}
                {/* <p className="timeline-description"></p> */}
              </div>
            </div>

            <div className="timeline-point">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>$222-300</h3>
                <p className="timeline-label">Sustaining Range</p>
                {/* <h3>Sustaining Range</h3>
                <p className="timeline-label">225 - 250</p> */}
                <p className="timeline-description">For those who can— honoring what deep healing is worth and making it available to others.</p>
              </div>
            </div>
          </div>
        </div>

      </section>
      
      {/* <section className="pricing-timeline-section pricing-timeline-section-2">              
        <div className="container">
          <div className="pricing-timeline">
          <div className="timeline-point">
            <div className="timeline-content timeline-content-2">
              <h3>$50 - 70</h3>
              <p className="timeline-label">Deep Accessibility</p>
              <p className="timeline-description">Reserved only for those struggling financially but who sincerely long to do this work. Your presence and commitment matter most.</p>
            </div>
          </div>
          </div>
        </div>
      </section> */}

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
          <h2 className="subtitle-heading">Programs & Packages</h2>
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`package-card ${pkg.name.includes('Session Combo') || pkg.name === 'Tap Into Freedom Program' ? 'combo-highlight' : ''}`}
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
                <br></br>
                <Link to={pkg.ctaLink || '/contact#booking'} className="btn btn-outline">
                  {pkg.ctaText || 'Start your Journey'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section 
        variant="dark" 
        title="Let's Begin →"
        subtitle="This is your invitation to inner and outer freedom."
      >
        <CTA />
      </Section>
    </div>
  );
};

export default Rates;
