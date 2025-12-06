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
          <p>About Energy Healing
              Energy healing addresses diverse needs by balancing, restoring, and optimizing the body's natural energy flow. See the Benefits section below to learn more about what energy healing can support.
              I offer Reiki-based energy healing tailored to your needs, responding to any specific concerns you bring. Grounded in compassionate presence, I hold space for whatever arises with acceptance and care. In addition to Reiki, I may incorporate acupressure, other healing modalities, or share insights as appropriate to your session. When helpful, I can offer guidance to help you integrate your experience and move forward with clarity.
              Benefits of Energy Healing
              Energy healing helps remove blockages and deficiencies while activating your body's natural ability to heal itself. By restoring balance to your body's energy field and responding to what emerges from your system, you may experience:
              Deeper sense of peace, love, and spiritual connection
              Enhanced vitality, health, sleep quality, and immune function
              Relief from physical pain and tension and accelerated recovery from injuries
              Deep relaxation and reduced stress and anxiety
              Emotional release, clarity, and resolution to psychological issues
              Mental clarity, enhanced intuition, third eye activation, and increased energetic awareness
              Intuitive downloads and messages
              What is Reiki?
              Reiki is an ancient Japanese healing art in which a practitioner channels a beneficent, spiritually conscious, self-intelligent, omnipresent (Rei) life force energy (Ki) to optimize a recipient's bio-energetic field. Reiki works on multiple dimensions simultaneously, supporting the recipient on the physical, emotional, mental, energetic, and spiritual planes.
              When this field becomes stagnant, depleted, or disrupted through negative thinking, trauma, illness, emotional pain, etc., we experience dis-ease.
              Reiki practitioners use gentle touch to channel Reiki to your body and field, acting as a conduit for Reiki to flow wherever you need support most. Sessions address not just symptoms but the underlying energetic patterns that contribute to imbalance. This practice partners with your body's innate wisdom, allowing deep healing to unfold from within.
              Reiki meets you exactly where you are and guides you toward greater wholeness, alignment, and happiness.
              What to Expect from a Session
              Arrival & Discussion: We'll greet each other, settle into the space, and discuss any specific concerns you'd like addressed or questions you have.
              Energy Healing Session: You'll lie comfortably on a mat, first face-up, then face-down, receiving energy healing through gentle, light touch. Hands-off treatment is available upon request.
              Closing & Grounding: After the session, we'll take time to ground and integrate. If you'd like, we can discuss anything that arose—insights, experiences, or questions.
              Spiritual Counseling -Optional-:
              If desired, we can explore whatever is arising in your life, work through challenges, or engage in spiritual education and understanding to support your journey.
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
