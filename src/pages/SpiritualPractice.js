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
                Together we can cultivate well-being, wisdom, love, freedom, and what matters most to you. This is a space for being met, exploring, healing, finding direction, and growth- especially in <a href="/#what-we-can-do-together">these areas</a>.
              </p>
              <p>
                We can be with whatever is alive in you. We can navigate your deepest yearnings and any obstacles to your fulfillment. 
              </p>
              <p>
                Truly, sometimes all we really need is just someone to hear us, share presence, and validate our experience (without judgment or fixing). I am happy to be that person. I wish to be supportive to you and I'm open to what that looks like.
              </p>
              <p>
                Whether you're sprouting curiosity, deep in transformation, or have established practice(s), I offer grounded guidance and presence. Sessions are collaborative and responsive to what emerges.
              </p>
              <h3>
                Practices
              </h3>
              <p>
                I teach yoga, breathwork, and voice-based sound healing. I also offer support in meditation. These are all powerful multi-tools we can bring in in response to what is emerging. Alternatively they can be the focus of our time together.
              </p>
              <p>
                Spiritual Counseling sessions can also be synthesized with EFT or Energy Healing. EFT is often extremely useful (and recommended!) to release and heal specific issues.
              </p>
              <br></br><br></br><br></br>
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
        subtitle="Let's support your unfolding. Book a session or a free 30-minute consultation to bring clarity and grounding to your journey."
      >
        <CTA />
      </Section>
    </div>
  );
};

export default SpiritualPractice;