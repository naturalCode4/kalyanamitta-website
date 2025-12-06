import React from 'react';
import { Link } from 'react-router-dom';
import './EmotionalProcessing.css';

const EmotionalProcessing = () => {
  const services = [
    {
      title: 'EFT (Emotional Freedom Technique)',
      description: 'A powerful tapping technique that combines acupressure and psychology to release emotional blocks and limiting beliefs.',
      process: [
        'Identify the specific issue or emotion',
        'Rate the intensity on a scale of 0-10',
        'Tap on specific meridian points while focusing on the issue',
        'Use positive affirmations to reframe the experience',
        'Re-rate the intensity to measure progress'
      ],
      benefits: [
        'Rapid relief from emotional distress',
        'Reduced anxiety and stress',
        'Release of limiting beliefs',
        'Improved emotional regulation',
        'Enhanced self-confidence'
      ]
    },
    {
      title: 'Emotional Processing & Upgrading',
      description: 'Deep work with emotions to understand their messages, process them fully, and transform them into wisdom and growth.',
      process: [
        'Create a safe container for emotional expression',
        'Identify the core emotion and its message',
        'Allow full emotional expression without judgment',
        'Explore the underlying beliefs and patterns',
        'Integrate the wisdom and release the charge'
      ],
      benefits: [
        'Complete emotional processing',
        'Transformation of pain into wisdom',
        'Increased emotional intelligence',
        'Freedom from emotional patterns',
        'Deeper self-understanding'
      ]
    },
    {
      title: 'Deep Listening and Empathic Support',
      description: 'Providing a safe, non-judgmental space where you can fully express yourself and be truly heard and understood.',
      process: [
        'Active, compassionate listening',
        'Reflecting back what you\'re experiencing',
        'Holding space for all emotions',
        'Asking clarifying questions',
        'Offering gentle guidance when appropriate'
      ],
      benefits: [
        'Feeling truly seen and heard',
        'Validation of your experience',
        'Clarity about your emotions',
        'Reduced isolation and loneliness',
        'Enhanced self-compassion'
      ]
    }
  ];

  return (
    <div className="emotional-processing">
      {/* Hero Section */}
      <section className="emotional-processing-hero">
        <div className="container">
          <div className="emotional-processing-hero-content">
            <h1>Emotional Processing</h1>
            <p className="emotional-processing-subtitle">
              Transform your relationship with emotions and unlock deep healing and growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="emotional-processing-services">
        <div className="container">
          <div className="services-intro">
            <h2>Emotional Healing Services</h2>
            <p>
            EFT (Emotional Freedom Techniques) (About EFT)
            EFT stands for Emotional Freedom Techniques. I use it to help people break free from a wide range of deep-seated issues quickly, affordably, and effectively—issues that might otherwise take months or years to address. It is a fascinatingly powerful yet simple healing modality that involves self-tapping points on your body while bringing attention to issues you want resolved or outcomes you want to achieve. 
            EFT is remarkably versatile (see “Who and what is EFT for” below)
            While I have immersed myself in numerous spiritual practices and modalities, EFT is the most powerful and universal tool I have encountered for resolving specific psycho-somatic issues and creating positive new outcomes—and I am so grateful to have encountered it and offer it. I hope that I can support as many people as possible with EFT.
            Why EFT is So Powerful
            Imagine a tool that can relieve you of self-defeating thoughts, feelings, and actions—often within minutes or a single session—that you've held for years or decades, patterns you just assumed were an unchangeable part of your existence. Imagine being able to let go of these patterns and consciously uplevel your nervous system in a way that brings you great freedom, ease, joy, clarity, alignment, and empowerment.
            EFT boils down Chinese Medicine, Neuroscience, Positive Psychology, and more into a highly effective yet simple modality that you can do anytime, anywhere. Practitioners may also draw upon methodologies from Internal Family Systems (IFS), Hypnotherapy, Cognitive Behavioral Therapy (CBT), EMDR (Eye Movement Desensitization and Reprocessing), Mindfulness and Ancient Wisdom, Polyvagal Theory, Neuro-Linguistic Programming (NLP), Shamanism, and more. At its core, EFT embodies the wisdom of Love, Acceptance, Letting Go, and your massive potential as a creator being.
            Who and What is EFT For?
            EFT is for anyone with a nervous system. It works across all ages, cultures, and belief systems, and can meet you wherever you are on your journey. Whether you're navigating daily overwhelm or deep trauma, physical pain or emotional wounds, self-doubt or anxiety, addiction or grief, relationship challenges or spiritual inquiry, manifesting abundance or actualizing your deepest calling—EFT can support your healing and transformation.
            Evidence and Experience
            EFT's effectiveness is well-backed by over 100 peer-reviewed scientific studies and trials, but more importantly, its power can be verified through your own personal experience—often in just minutes of tapping.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <div className="service-process">
                  <h4>How It Works:</h4>
                  <ol>
                    {service.process.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>

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

      {/* Philosophy Section */}
      <section className="philosophy-section section-light">
        <div className="container">
          <h2>My Approach to Emotional Work</h2>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <h3>Emotions as Messengers</h3>
              <p>
                I believe emotions are not problems to be fixed, but messengers bringing 
                important information about our needs, boundaries, and growth opportunities.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Safe Container</h3>
              <p>
                Creating a completely safe, non-judgmental space where you can express 
                any emotion without fear of being shamed or dismissed.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Integration, Not Suppression</h3>
              <p>
                Rather than suppressing or bypassing emotions, we work to fully feel, 
                understand, and integrate them into our wholeness.
              </p>
            </div>
            <div className="philosophy-item">
              <h3>Gentle Transformation</h3>
              <p>
                All emotional work is done with gentleness and respect for your pace, 
                honoring your natural healing process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="what-to-expect">
        <div className="container">
          <h2>What to Expect</h2>
          <div className="expectation-grid">
            <div className="expectation-item">
              <h3>Before the Session</h3>
              <p>
                We'll discuss what you're currently experiencing and what you'd like to work on. 
                You'll be in a comfortable, private space where you can fully express yourself.
              </p>
            </div>
            <div className="expectation-item">
              <h3>During the Session</h3>
              <p>
                You'll be guided through gentle techniques to process emotions safely. 
                You may experience release, clarity, or new insights as we work together.
              </p>
            </div>
            <div className="expectation-item">
              <h3>After the Session</h3>
              <p>
                You may feel lighter, clearer, or more grounded. We'll discuss what came up 
                and any integration practices that might support your continued healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="emotional-processing-cta section-dark">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Heal Your Relationship with Emotions?</h2>
            <p>
              Begin your journey of emotional healing and discover the wisdom and freedom 
              that comes from working with your emotions rather than against them.
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

export default EmotionalProcessing;
