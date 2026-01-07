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
      points: [
        'Mindfulness meditation',
        'Loving-kindness practice', 
        'Breath awareness',
        'Walking meditation',
        'Reduced stress and anxiety',
        'Increased self-awareness',
        'Enhanced emotional regulation',
        'Deeper spiritual connection'
      ],
      availability: 'In-person or Online'
    },
    {
      title: 'Yoga',
      description: 'Integrate physical postures, breathwork, and meditation for holistic wellness and spiritual growth.',
      points: [
        'Hatha yoga foundations',
        'Vinyasa flow sequences',
        'Restorative poses',
        'Alignment principles',
        'Improved flexibility and strength',
        'Better posture and balance',
        'Stress relief',
        'Mind-body integration'
      ],
      availability: 'In-person or Online'
    },
    {
      title: 'Breathwork',
      description: 'Harness the power of conscious breathing for healing, transformation, and expanded awareness.',
      points: [
        'Pranayama techniques',
        'Box breathing',
        'Breath retention practices',
        'Energy circulation methods',
        'Increased energy and vitality',
        'Emotional processing',
        'Spiritual expansion',
        'Trauma release'
      ],
      availability: 'In-person or Online'
    },
    {
      title: 'Sound Healing',
      description: 'Use sacred sounds, mantras, and vibrational healing for deep relaxation and spiritual awakening.',
      points: [
        'Mantra chanting',
        'Singing bowl therapy',
        'Tuning fork healing',
        'Voice activation',
        'Deep relaxation',
        'Chakra balancing',
        'Emotional release',
        'Heightened awareness'
      ],
      availability: 'In-person'
    }
  ];

  return (
    <div className="spiritual-practice">
      {/* Hero Section */}
      <section className="spiritual-practice-hero">
        <div className="container">
          <div className="spiritual-practice-hero-content">
            <h1>Spiritual Counseling</h1>
            <p className="spiritual-practice-subtitle">
              Build the wisdom and compassion needed to live well. Be seen and heard as you are. Learn and deepen mind-body practices.
            </p>
          </div>
        </div>
      </section>

      {/* About Spiritual Practice Section - Rainbow Background */}
      <section className="about-spiritual-practice section-rainbow">
        <div className="container">
          <div className="about-spiritual-practice-content">
            <h2>About Spiritual Counseling</h2>
            <div className="about-image">
              <div className="placeholder-image">
                <span>Spiritual Practice Image</span>
              </div>
            </div>
            <div className="about-spiritual-practice-text">
              <p>
                Together we can cultivate well-being, wisdom, love, freedom, and what matters most to you. This is a space for being met, exploring, healing, spiritual education, finding direction, and growing—especially in <a href="/home#what-we-can-do-together" target="_blank">these areas</a>.
              </p>
              <p>
                We can be with whatever is alive in you. We can navigate your deepest yearnings and any obstacles to your fulfillment. Sometimes what we need most is just to be truly heard—to share presence with someone who compassionately validates your experience without judgment or fixing. I am here to hold that space for you.
              </p>
              <p>
                And when direct guidance and teachings serves you, I may offer them. This is a space of cultivating spiritual virtue and wisdom, with honest workshopping and growth. I'll help you look more deeply, contemplate what's important, and build confidence in yourself.
              </p>
              <p>
                Whether you're newly curious, deep in transformation, or have established practice, I offer grounded presence and guidance. Sessions are collaborative and responsive to what emerges.
              </p>
              <h3>
                Practices
              </h3>
              <p>
                I teach yoga, breathwork, voice-based sound healing, and offer support in meditation. These are all powerful multi-tools we can bring in, or they can be the focus of our time together.
              </p>
              <p>
                Spiritual Counseling sessions can also be synthesized with EFT or Energy Healing. EFT is often extremely useful (and recommended!) to release and heal specific issues.
              </p>
              <br></br><br></br>
              <p>
                <em>I am offering spiritual guidance, not clinical mental health services.</em>
              </p>
            </div>

            {/* Spiritual Practice Cards - Now inside the rainbow section
            <div className="services-grid">
              {practices.map((practice, index) => (
                <div key={index} className="service-card">
                  <h3>{practice.title}</h3>
                  <p className="service-description">{practice.description}</p>
                  
                  <div className="service-points">
                    <ul>
                      {practice.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-availability">
                    <p><strong>Availability:</strong> {practice.availability}</p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

export default SpiritualPractice;