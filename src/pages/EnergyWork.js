import React from 'react';
import { Link } from 'react-router-dom';
import './EnergyWork.css';

const EnergyWork = () => {
  const services = [
    {
      title: 'Reiki and Energy Healing',
      description: 'Channel universal life force energy to promote healing, balance, and well-being. Reiki sessions help clear energy blockages and restore natural flow.',
      benefits: [
        'Reduces stress and anxiety',
        'Promotes deep relaxation',
        'Accelerates healing processes',
        'Balances chakras and energy centers',
        'Enhances overall well-being'
      ]
    },
    {
      title: 'Acupressure and Energy Bodywork',
      description: 'Combine traditional acupressure techniques with energy work to address physical, emotional, and spiritual imbalances through gentle touch and pressure.',
      benefits: [
        'Relieves physical tension and pain',
        'Improves circulation and energy flow',
        'Supports emotional release',
        'Enhances body awareness',
        'Promotes deep relaxation'
      ]
    }
  ];

  return (
    <div className="energy-work">
      {/* Hero Section */}
      <section className="energy-work-hero">
        <div className="container">
          <div className="energy-work-hero-content">
            <h1>Energy Work</h1>
            <p className="energy-work-subtitle">
              Channel universal life force energy to promote healing, balance, and transformation
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="energy-work-services">
        <div className="container">
          <div className="services-intro">
            <h2>Energy Healing Services</h2>
            <p>
              Energy work is based on the understanding that everything is made of energy, and by working with 
              the body's energy field, we can promote healing on all levels - physical, emotional, mental, and spiritual.
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

      {/* What to Expect Section */}
      <section className="what-to-expect section-light">
        <div className="container">
          <h2>What to Expect</h2>
          <div className="expectation-grid">
            <div className="expectation-item">
              <h3>Before the Session</h3>
              <p>
                We'll discuss your intentions and any specific areas you'd like to focus on. 
                You'll be fully clothed and comfortable throughout the session.
              </p>
            </div>
            <div className="expectation-item">
              <h3>During the Session</h3>
              <p>
                I'll work with your energy field using gentle touch or hands-off techniques. 
                You may feel warmth, tingling, or deep relaxation as energy flows through your body.
              </p>
            </div>
            <div className="expectation-item">
              <h3>After the Session</h3>
              <p>
                You may feel deeply relaxed, energized, or experience emotional release. 
                We'll discuss what came up and any recommendations for continued healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="energy-work-cta section-dark">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Energy Healing?</h2>
            <p>
              Discover the transformative power of energy work and begin your journey toward 
              greater balance, healing, and well-being.
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

export default EnergyWork;
