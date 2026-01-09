import React from 'react';
import { Link } from 'react-router-dom';
import './EFT.css';
import Section from '../components/Section';
import CTA from '../components/CTA';
import pic7 from '../assets/pic7.jpg';

const EFT = () => {

  return (
    <div className="emotional-processing">
      {/* Hero Section */}
      <section className="emotional-processing-hero">
        <div className="container">
          <div className="emotional-processing-hero-content">
            <h1>Emotional Freedom Techniques (EFT)</h1>
            <p className="emotional-processing-subtitle">
              Rapidly process emotions, regulate your nervous system, heal even major issues, and create the life you desire
            </p>
          </div>
        </div>
      </section>

      <section className="about-eft section-rainbow">
        <div className="container">
          <div className="about-eft-content">
            <h2>About EFT</h2>
            
            {/* New Clean Container */}
            <div className="eft-image-container">
              <img 
                src={pic7}
                alt="EFT Session" 
                className="eft-pic" 
              />
              <p className="photo-credit">Image by Freepik</p>
            </div>
            <div className="about-eft-text">
              <p>
                EFT stands for Emotional Freedom Techniques. I use it to help people break free from a wide range of deep-seated issues quickly, affordably, and effectively— issues that might otherwise take months or years (or lifetimes) to address. It is a fascinatingly powerful yet simple healing modality that involves self-tapping points on your body while bringing attention to issues you want resolved or outcomes you want to achieve.
              </p>
              <p>
                EFT is remarkably versatile multi-tool you can apply to most areas in your life (see “Who and What is EFT For” below)
              </p>
              <p>
                While I have immersed myself in numerous spiritual practices and modalities, EFT is the most powerful and universal tool I have encountered for resolving specific psycho-emotional issues and creating positive new outcomes—and I am so grateful to have encountered it and offer it. I hope that I can support as many people as possible with EFT.
              </p>
              <div className="gold-divider"></div>
              <h3>
                Why EFT is So Powerful
              </h3>
              <p>
                Imagine a tool that can relieve you of self-defeating thoughts, feelings, and actions–that you've held for years or decades– patterns you just assumed were an unchangeable part of your existence. Imagine being able to let go of these patterns and consciously uplevel your nervous system in a way that brings you great freedom, ease, joy, clarity, alignment, and empowerment. For some issues, EFT may provide relief very quickly, while with other issues we may see long-lasting shifts emerge over multiple sessions.
              </p>
              <p>
                EFT boils down Chinese Medicine, Neuroscience, Positive Psychology, and more into a highly effective yet simple modality that one can learn to do anytime, anywhere. Practitioners may also draw upon methodologies from Internal Family Systems (IFS), Hypnotherapy, Cognitive Behavioral Therapy (CBT), EMDR, Mindfulness, Polyvagal Theory, Neuro-Linguistic Programming (NLP), Shamanism, Spiritual Teachings, and more. At its core, EFT embodies the wisdom of Love, Acceptance, Letting Go, and your boundless potential as a creator being.
              </p>
              <p>
                EFT works on the neurological, subconscious, and energetic level. Shifts are typically enduring once thoroughly addressed, as the neural networks are rewired and the nervous system releases stored issues. 
              </p>
              <p>
                Tapping signals safety to the brain, as it effectively calms the amygdala's 'fight, flight, or freeze' response. So the nervous system doesn't follow its usual sympathetic response to an issue, but actually processes, releases, and updates. By tapping on each tapping point, we send an electrical impulse through each meridian (an energy channel running through the body– each corresponding to an essential aspect of our human functionality) that balances the channel.
              </p>
              <div className="gold-divider"></div>
              <h3>
                Who and What is EFT For?
              </h3>
              <p>
                EFT is for anyone with a nervous system. It works across all ages, cultures, and belief systems, and can meet you wherever you are on your journey. Whether you're navigating daily overwhelm or deep trauma, physical pain or emotional wounds, self-doubt or anxiety, addiction or grief, relationship challenges or spiritual inquiry, manifesting abundance or actualizing your deepest calling, empowering higher consciousness or opening to love—EFT can support your healing and transformation. <a href="/#what-we-can-do-together" target="_blank">These are my core strengths and areas of focus</a>.
              </p>
              <div className="gold-divider"></div>
              <h3>
                Evidence and Experience
              </h3>
              <p>
                EFT's effectiveness is well-backed by over <a href="https://eftuniverse.com/research-studies/" target="_blank">100 peer-reviewed scientific studies and trials</a>, and it is leading the modern western medical system in treating many ailments. Its power can be verified through your own personal experience—often in one session or even a few minutes.
              </p>
              <div className="gold-divider"></div>
            </div>

            {/* What to Expect - Single Horizontal Card */}
            <div className="what-to-expect-card">
              <h3>What to Expect in an EFT Session</h3>
              
              <div className="expect-sections">
                <div className="expect-item">
                  <h4>Beginning the Session</h4>
                  <p>
                    You'll be in a comfortable, private space where you can fully express yourself.
                    I'll explain the practice and show you the meridian points to self-tap on your body, and we will tap together throughout the session. We'll discuss what you'd like to work on, and I may ask you some questions to unlock the core of the issue. 
                  </p>
                </div>
                
                <div className="expect-item">
                  <h4>During the Session</h4>
                  <p>
                    As we tap, you'll be guided to relieve or resolve your issue and meet your goals. I will suggest things for you to say, which you are encouraged to modify so that your words resonates with you.
                    You will likely directly experience shifts in energy, rapid release of negative thoughts and emotions associated with your issue, and fresh insights, and freedom around your issue(s)-- A.K.A. Emotional Freedom. 
                  </p>
                </div>
                
                <div className="expect-item">
                  <h4>After the Session</h4>
                  <p>
                    In most cases, you will notice significant relief, clarity, and shifts in your issue.
                    EFT deeply resolves issues on the subconscious and neurological level, and you may continue to notice positive changes arise in the days and weeks following your session.
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
        subtitle="When you're ready, I'm here. Book a session, schedule a free 30-minute consultation, or reach out—I'm happy to answer any questions."
      >
        <CTA />
      </Section>
    </div>
  );
};

export default EFT;
