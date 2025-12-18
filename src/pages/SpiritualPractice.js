import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import CTA from '../components/CTA';
import './SpiritualPractice.css';

const SpiritualPractice = () => {
  const practices = [
    {
      title: 'Meditation',
      description: 'Learn various meditation techniques to cultivate inner peace, mindfulness, and spiritual awareness.',
      techniques: [
        'Mindfulness meditation',
        'Loving-kindness practice',
        'Breath awareness',
        'Walking meditation'
      ],
      benefits: [
        'Reduced stress and anxiety',
        'Increased self-awareness',
        'Enhanced emotional regulation',
        'Deeper spiritual connection'
      ]
    },
    {
      title: 'Yoga',
      description: 'Integrate physical postures, breathwork, and meditation for holistic wellness and spiritual growth.',
      techniques: [
        'Hatha yoga foundations',
        'Vinyasa flow sequences',
        'Restorative poses',
        'Alignment principles'
      ],
      benefits: [
        'Improved flexibility and strength',
        'Better posture and balance',
        'Stress relief',
        'Mind-body integration'
      ]
    },
    {
      title: 'Breathwork',
      description: 'Harness the power of conscious breathing for healing, transformation, and expanded awareness.',
      techniques: [
        'Pranayama techniques',
        'Box breathing',
        'Breath retention practices',
        'Energy circulation methods'
      ],
      benefits: [
        'Increased energy and vitality',
        'Emotional processing',
        'Spiritual expansion',
        'Trauma release'
      ]
    },
    {
      title: 'Sound Healing',
      description: 'Use sacred sounds, mantras, and vibrational healing for deep relaxation and spiritual awakening.',
      techniques: [
        'Mantra chanting',
        'Singing bowl therapy',
        'Tuning fork healing',
        'Voice activation'
      ],
      benefits: [
        'Deep relaxation',
        'Chakra balancing',
        'Emotional release',
        'Heightened awareness'
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
              Cultivate the wisdom and compassion needed to live well. Learn mind-body practices for wellness and spiritual growth
            </p>
          </div>
        </div>
      </section>

      {/* About Spiritual Practice Section - Rainbow Background */}
      <section className="about-spiritual-practice section-rainbow">
        <div className="container">
          <div className="about-spiritual-practice-content">
            <h2>About Spiritual Practice</h2>
            <div className="about-image">
              <div className="placeholder-image">
                <span>Spiritual Practice Image</span>
              </div>
            </div>
            <div className="about-spiritual-practice-text">
              <p>
                Spiritual practices are time-tested methods for cultivating inner wisdom, peace, and connection to something greater than ourselves. I offer guidance in meditation, yoga, breathwork, and sound healing—ancient practices adapted for modern life.
              </p>
              <p>
                These practices work synergistically to support your physical, emotional, mental, and spiritual well-being. Whether you're a complete beginner or looking to deepen your existing practice, I meet you where you are and provide personalized instruction.
              </p>
              
              <h3>Why Practice?</h3>
              <p>
                In our fast-paced world, spiritual practices offer a refuge—a way to slow down, turn inward, and remember who you truly are beneath the noise of daily life. Regular practice cultivates resilience, clarity, and a deep sense of peace that carries into all aspects of your life.
              </p>
              <p>
                These aren't just relaxation techniques; they're powerful tools for transformation that have been refined over thousands of years. Through consistent practice, you develop the capacity to respond to life's challenges with greater wisdom and equanimity.
              </p>
              
              <h3>Integration & Support</h3>
              <p>
                Learning a practice is just the beginning. I provide ongoing support to help you integrate these tools into your daily life. We'll work together to create a sustainable practice that fits your lifestyle and supports your unique path of growth and awakening.
              </p>
            </div>

            {/* What to Expect - Inside rainbow section */}
            <div className="what-to-expect-card">
              <h3>What to Expect from Sessions</h3>
              
              <div className="expect-sections">
                <div className="expect-item">
                  <h4>Learning & Practice</h4>
                  <p>
                    We'll explore techniques step-by-step, with hands-on instruction tailored to your experience level and goals.
                  </p>
                </div>
                
                <div className="expect-item">
                  <h4>Integration Guidance</h4>
                  <p>
                    I'll help you understand how to incorporate these practices into your daily routine for lasting benefit.
                  </p>
                </div>
                
                <div className="expect-item">
                  <h4>Ongoing Support</h4>
                  <p>
                    Continued guidance and refinement of your practice as you deepen your understanding and experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spiritual Practice Cards Section */}
      <section className="spiritual-practice-services">
        <div className="container">
          <div className="services-intro">
            <h2>Sacred Practices</h2>
            <p>
              These ancient and modern practices offer powerful tools for transformation, 
              healing, and spiritual growth. Each practice can be adapted to your unique 
              needs and integrated into your daily life.
            </p>
          </div>

          <div className="services-grid">
            {practices.map((practice, index) => (
              <div key={index} className="service-card">
                <h3>{practice.title}</h3>
                <p className="service-description">{practice.description}</p>
                
                <div className="service-techniques">
                  <h4>Techniques We'll Explore:</h4>
                  <ul>
                    {practice.techniques.map((technique, idx) => (
                      <li key={idx}>{technique}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-benefits">
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

      {/* CTA Section */}
      <Section 
        variant="dark" 
        title="Ready to Begin?"
        subtitle="Let's support your unfolding. Book a session or a free 30-minute consultation to bring clarity and grounding to your journey."
      >
        <CTA />
      </Section>
    </div>
  );
};

export default SpiritualPractice;