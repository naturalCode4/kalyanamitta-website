import React from 'react';
import { Link } from 'react-router-dom';
import './Offerings.css';

const Offerings = () => {
  const offerings = [
    {
      id: 'energy-work',
      title: 'Energy Work',
      subcategories: [
        'Reiki and Energy Healing',
        'Acupressure and Energy Bodywork'
      ],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 'life-spiritual-guidance',
      title: 'Spiritual Life Guidance, Self-Empowerment, and Authenticity Coaching',
      subcategories: [
        'Life Guidance',
        'Spiritual Education and Tools',
        'Understanding and relating to spiritual traditions in a healthy way',
        'Authenticity Coaching, Perspective Shifting, and Matrix Breaking',
        'Mens Issues Sexual Energy Transmutation and Relationships',
        'Divine Masculinity and Femininity',
        'Psychedelic Support and Integration',
        'Deep Friendship & Holistic Support'
      ],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 'mind-body-practices',
      title: 'Learn Mind-Body Practices for Wellness &/or Spiritual Growth',
      subcategories: [
        'Meditation',
        'Yoga',
        'Sound Healing',
        'Breathwork'
      ],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 'emotional-processing',
      title: 'Emotional Processing',
      subcategories: [
        'EFT',
        'Emotional Processing & Upgrading',
        'Deep Listening and Empathic Support'
      ],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 'piano-improvisation',
      title: 'Piano Creative Improvisation',
      subcategories: [],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 'software-engineering',
      title: 'Software Engineering',
      subcategories: [],
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

  return (
    <div className="offerings">
      {/* Hero Section */}
      <section className="offerings-hero">
        <div className="container">
          <div className="offerings-hero-content">
            <h1>Offerings</h1>
            <p className="offerings-subtitle">
              Comprehensive healing, guidance, and support services designed to help you 
              transform your life and connect with your authentic self.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="offerings-content">
        <div className="container">
          <div className="offerings-grid">
            {offerings.map((offering) => (
              <div key={offering.id} className="offering-card">
                <div className="offering-header">
                  <h3>{offering.title}</h3>
                  <p className="offering-availability">Available in-person or virtual</p>
                </div>
                
                <div className="offering-subcategories">
                  <h4>Services Include:</h4>
                  <ul>
                    {offering.subcategories.map((subcategory, index) => (
                      <li key={index}>{subcategory}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="offering-placeholder">
                  <p>{offering.content}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="offerings-cta-buttons">
            <Link to="/contact" className="btn">Book a Session</Link>
            <Link to="/rates" className="btn btn-outline">View Rates</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="offerings-cta section-dark">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Begin Your Healing Journey?</h2>
            <p>
              Each session is a sacred space for transformation. Let's work together to create the healing and growth you're seeking.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn">Book Your Session</Link>
              <Link to="/rates" className="btn btn-secondary">View All Rates</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offerings;


