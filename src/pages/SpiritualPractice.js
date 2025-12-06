import React from 'react';
import { Link } from 'react-router-dom';
import './SpiritualPractice.css';

const SpiritualPractice = () => {
  const practices = [
    {
      title: 'Meditation',
      description: 'Learn various meditation techniques to cultivate mindfulness, inner peace, and spiritual awareness.',
      techniques: [
        'Mindfulness meditation',
        'Loving-kindness meditation',
        'Body scan meditation',
        'Breath awareness',
        'Walking meditation',
        'Guided visualization'
      ],
      benefits: [
        'Reduced stress and anxiety',
        'Improved focus and concentration',
        'Greater emotional regulation',
        'Enhanced self-awareness',
        'Deeper spiritual connection'
      ]
    },
    {
      title: 'Yoga',
      description: 'Integrate physical postures, breathwork, and mindfulness to create harmony between body, mind, and spirit.',
      techniques: [
        'Hatha yoga for beginners',
        'Vinyasa flow sequences',
        'Restorative yoga',
        'Yin yoga for deep release',
        'Chair yoga for accessibility',
        'Yoga philosophy integration'
      ],
      benefits: [
        'Improved flexibility and strength',
        'Better posture and body awareness',
        'Stress relief and relaxation',
        'Enhanced energy flow',
        'Spiritual embodiment'
      ]
    },
    {
      title: 'Sound Healing',
      description: 'Use the power of sound and vibration to promote healing, balance, and spiritual awakening.',
      techniques: [
        'Crystal singing bowls',
        'Tibetan singing bowls',
        'Tuning forks',
        'Vocal toning and chanting',
        'Drumming and rhythm',
        'Binaural beats'
      ],
      benefits: [
        'Deep relaxation and stress relief',
        'Chakra balancing',
        'Emotional release',
        'Enhanced meditation states',
        'Spiritual awakening'
      ]
    },
    {
      title: 'Breathwork',
      description: 'Master conscious breathing techniques to regulate your nervous system and access higher states of consciousness.',
      techniques: [
        'Pranayama (yogic breathing)',
        'Box breathing',
        'Alternate nostril breathing',
        'Breath of fire',
        'Holotropic breathwork',
        'Conscious connected breathing'
      ],
      benefits: [
        'Nervous system regulation',
        'Increased energy and vitality',
        'Emotional processing',
        'Spiritual expansion',
        'Trauma release'
      ]
    }
  ];

  return (
    <div className="spiritual-practice">
      {/* Hero Section */}
      <section className="spiritual-practice-hero">
        <div className="container">
          <div className="spiritual-practice-hero-content">
            <h1>Spiritual Practice</h1>
            <p className="spiritual-practice-subtitle">
              Learn mind-body practices for wellness and spiritual growth
            </p>
          </div>
        </div>
      </section>

      {/* Practices Section */}
      <section className="spiritual-practice-content">
        <div className="container">
          <div className="practices-intro">
            <h2>Sacred Practices</h2>
            <p>
              These ancient and modern practices offer powerful tools for transformation, 
              healing, and spiritual growth. Each practice can be adapted to your unique 
              needs and integrated into your daily life.
            </p>
          </div>

          <div className="practices-grid">
            {practices.map((practice, index) => (
              <div key={index} className="practice-card">
                <h3>{practice.title}</h3>
                <p className="practice-description">{practice.description}</p>
                
                <div className="practice-techniques">
                  <h4>Techniques We'll Explore:</h4>
                  <ul>
                    {practice.techniques.map((technique, idx) => (
                      <li key={idx}>{technique}</li>
                    ))}
                  </ul>
                </div>

                <div className="practice-benefits">
                  <h4>Benefits Include:</h4>
                  <ul>
                    {practice.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="integration-section section-light">
        <div className="container">
          <h2>Personalized Integration</h2>
          <div className="integration-grid">
            <div className="integration-item">
              <h3>Beginner-Friendly</h3>
              <p>
                All practices are taught with complete beginners in mind. No prior experience 
                or flexibility is required - we start exactly where you are.
              </p>
            </div>
            <div className="integration-item">
              <h3>Customized Approach</h3>
              <p>
                Each practice is adapted to your unique needs, physical abilities, and 
                spiritual goals. Your journey is personal and honored.
              </p>
            </div>
            <div className="integration-item">
              <h3>Daily Integration</h3>
              <p>
                Learn how to weave these practices into your daily life in sustainable, 
                meaningful ways that support your ongoing growth.
              </p>
            </div>
            <div className="integration-item">
              <h3>Spiritual Context</h3>
              <p>
                Understand the deeper spiritual principles behind each practice, helping you 
                connect with the sacred in your everyday life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="spiritual-practice-cta section-dark">
        <div className="container">
          <div className="cta-content">
            <h2>Begin Your Practice Journey</h2>
            <p>
              Discover the transformative power of spiritual practice and learn tools 
              that will support your growth for a lifetime.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn">Start Your Practice</Link>
              <Link to="/rates" className="btn btn-secondary">View Rates</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpiritualPractice;
