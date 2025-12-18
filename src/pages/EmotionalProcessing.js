import React from 'react';
import { Link } from 'react-router-dom';
import './EmotionalProcessing.css';
import Section from '../components/Section';
import CTA from '../components/CTA';

const EmotionalProcessing = () => {

  return (
    <div className="emotional-processing">
      {/* Hero Section */}
      <section className="emotional-processing-hero">
        <div className="container">
          <div className="emotional-processing-hero-content">
            <h1>Emotional Freedom Techniques (EFT)</h1>
            <p className="emotional-processing-subtitle">
              Rapidly process emotions, release stress, and rewire your nervous system as you desire.
            </p>
          </div>
        </div>
      </section>

      <section className="about-eft section-rainbow">
        <div className="container">
          <div className="about-eft-content">
            <h2>About EFT</h2>
            <div className="about-image">
              <div className="placeholder-image">
                <span>EFT Session Image</span>
              </div>
            </div>
            <div className="about-eft-text">
              <p>
                EFT stands for Emotional Freedom Techniques. I use it to help people break free from a wide range of deep-seated issues quickly, affordably, and effectively— issues that might otherwise take months or years to address. It is a fascinatingly powerful yet simple healing modality that involves self-tapping points on your body while bringing attention to issues you want resolved or outcomes you want to achieve.
              </p>
              <p>
                EFT is remarkably versatile multi-tool you can apply to most areas in your life (see “Who and what is EFT for” below)
              </p>
              <p>
                While I have immersed myself in numerous spiritual practices and modalities, EFT is the most powerful and universal tool I have encountered for resolving specific psycho-somatic issues and creating positive new outcomes—and I am so grateful to have encountered it and offer it. I hope that I can support as many people as possible with EFT.
              </p>
              <h3>
                Why EFT is So Powerful
              </h3>
              <p>
                Imagine a tool that can relieve you of self-defeating thoughts, feelings, and actions—often within minutes or a single session—that you've held for years or decades, patterns you just assumed were an unchangeable part of your existence. Imagine being able to let go of these patterns and consciously uplevel your nervous system in a way that brings you great freedom, ease, joy, clarity, alignment, and empowerment.
              </p>
              <p>
                EFT boils down Chinese Medicine, Neuroscience, Positive Psychology, and more into a highly effective yet simple modality that you can do anytime, anywhere. Practitioners may also draw upon methodologies from Internal Family Systems (IFS), Hypnotherapy, Cognitive Behavioral Therapy (CBT), EMDR (Eye Movement Desensitization and Reprocessing), Mindfulness and Ancient Wisdom, Polyvagal Theory, Neuro-Linguistic Programming (NLP), Shamanism, and more. At its core, EFT embodies the wisdom of Love, Acceptance, Letting Go, and your massive potential as a creator being.
              </p>
              <h3>
                Who and What is EFT For?
              </h3>
              <p>
                EFT is for anyone with a nervous system. It works across all ages, cultures, and belief systems, and can meet you wherever you are on your journey. Whether you're navigating daily overwhelm or deep trauma, physical pain or emotional wounds, self-doubt or anxiety, addiction or grief, relationship challenges or spiritual inquiry, manifesting abundance or actualizing your deepest calling—EFT can support your healing and transformation.
              </p>
              <h3>
                Evidence and Experience
              </h3>
              <p>
                EFT's effectiveness is well-backed by over 100 peer-reviewed scientific studies and trials, but more importantly, its power can be verified through your own personal experience—often in just minutes of tapping.
              </p>
            </div>

            {/* What to Expect - Single Horizontal Card */}
            <div className="what-to-expect-card">
              <h3>What to Expect in an EFT Session</h3>
              
              <div className="expect-sections">
                <div className="expect-item">
                  <h4>Beginning the Session</h4>
                  <p>
                    You'll be in a comfortable, private space where you can fully express yourself.
                    I'll show you how to self-tap on meridian points on your body, and we will tap together throughout the session. We'll discuss what you'd like to work on, and I may ask you some questions to unlock the core of the issue. 
                  </p>
                </div>
                
                <div className="expect-item">
                  <h4>During the Session</h4>
                  <p>
                    You'll be guided through various EFT techniques to process emotions and meet your goals. I will suggest things for you to say, which you are encouraged to modify so that your words resonates with you.
                    You will likely directly experience rapid release of negative thoughts and emotions associated with your issue, and be gaining fresh insights, energy, healing, and resolution-- A.K.A. Emotional Freedom
                  </p>
                </div>
                
                <div className="expect-item">
                  <h4>After the Session</h4>
                  <p>
                    In most cases, you will notice significant relief, clarity, and shifts in your issue.
                    EFT permanently resolves issues at the energetic and subconscious level, and you may continue to notice positive changes in the days and weeks following your session.
                    We may discuss practices that might support your healing and goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Section 
        variant="dark" 
        title="Ready to Begin?"
        subtitle="Take the step towards healing, growth, connection, and freedom. Discover the peace and clarity you've been seeking. I look forward to transforming with you. Book your session or a free 30 minute consultation. I'm happy to answer any questions."
      >
        <CTA />
      </Section>
    </div>
  );
};

export default EmotionalProcessing;
