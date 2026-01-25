import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EFT.css';
import Section from '../components/Section';
import CTA from '../components/CTA';
import pic7 from '../assets/pic7.jpg';
import pic8 from '../assets/pic8.webp';
import { Helmet } from 'react-helmet'

function useIsDesktop(breakpoint = 768) {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    // Check on mount in case initial state was wrong
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isDesktop;
}

const EFT = () => {
  const isDesktop = useIsDesktop(768);
  
  const [openSections, setOpenSections] = useState({
    whyPowerful: false,
    howWorks: false,
    whoWhat: false,
    evidence: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="EFT-emotional-freedom-techniques">
      <Helmet>
        <title>EFT – Emotional Freedom Techniques | Rapidly heal yourself</title>
        <meta name="description" content="Rapidly process emotions, regulate your nervous system, heal even major issues, and create the life you desire" />
        <meta property="og:title" content="EFT – Emotional Freedom Techniques | Rapidly heal yourself" />
        <meta property="og:description" content="Rapidly process emotions, regulate your nervous system, heal even major issues, and create the life you desire" />
        <meta property="og:url" content="https://healing-on-tap.com/EFT-emotional-freedom-techniques" />
      </Helmet>
      {/* Hero Section */}
      <section className="EFT-emotional-freedom-techniques-hero">
        <div className="container">
          <div className="EFT-emotional-freedom-techniques-hero-content">
            <h1>Emotional Freedom Techniques (EFT)</h1>
            <p className="EFT-emotional-freedom-techniques-subtitle">
              Rapidly drop negativity and pain, heal your nervous system, finally resolve even major issues, and create the life you desire.
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
                EFT helps people break free from a wide range of deep-seated issues– rapidly, affordably, and effectively— that might otherwise take months or years (or lifetimes) to address. 
              </p>
              <p>
                EFT stands for Emotional Freedom Techniques. It is a fascinatingly powerful yet simple healing modality that involves self-tapping acupoints on your body while bringing attention to your issue / goal.
              </p>
              <p>
                This is a remarkably versatile multi-tool that can make a significant difference in any area of your life (see "Who and What is EFT For" below).
              </p>
              <p>
                I am advanced certified in EFT and integrate techniques and spiritual teachings well-beyond typical EFT territory. Attuned to the client, I bring in spiritual understanding, the wisdom of Love, Acceptance, Letting Go, and your boundless potential as a creator being.
              </p>
              <div className="gold-divider"></div>
              
              {/* Why EFT is So Powerful - Collapsible */}
              <h3 className="collapsible-header" onClick={() => toggleSection('whyPowerful')}>
                <span className={`triangle ${openSections.whyPowerful ? 'open' : ''}`}></span>
                Why EFT is So Powerful
              </h3>
              <div className={`collapsible-content ${openSections.whyPowerful ? 'open' : ''}`}>
                <p>
                  Imagine a tool that can relieve you of self-defeating thoughts, feelings, and actions– that you've held for years or decades– patterns you just assumed were an unchangeable part of your existence. Imagine being able to let go of these patterns and consciously uplevel your nervous system in a way that brings you great freedom, ease, joy, clarity, alignment, and empowerment.
                </p>
                <p>
                 While I have immersed myself in numerous spiritual practices and modalities, EFT is the most powerful and universal tool I have encountered for resolving specific psycho-emotional issues and creating positive new outcomes—and I am so grateful to have encountered it and offer it. I hope that I can support as many people as possible with EFT.
                </p>
              </div>
              <div className="gold-divider"></div>

              {/* Scientific Explanation - Collapsible */}
              <h3 className="collapsible-header" onClick={() => toggleSection('howWorks')}>
                <span className={`triangle ${openSections.howWorks ? 'open' : ''}`}></span>
                Scientific Explanation of How it Works
              </h3>
              <div className={`collapsible-content ${openSections.howWorks ? 'open' : ''}`}>
                <p>
                  EFT boils down Chinese Medicine, Neuroscience, Positive Psychology, and more into a highly effective yet simple modality that one can learn to practice on their own. Practitioners may also draw upon methodologies from Internal Family Systems (IFS), Hypnotherapy, Cognitive Behavioral Therapy (CBT), EMDR, Mindfulness, Polyvagal Theory, Neuro-Linguistic Programming (NLP), Shamanism, Spiritual Teachings, and more. At its core, EFT embodies the wisdom of Love, Acceptance, Letting Go, and your boundless potential as a creator being.
                </p>
                {isDesktop && (
                  <div className="eft-image-left">
                    <img 
                      src={pic8}
                      alt="EFT Brain Impact" 
                      className="eft-pic" 
                      />
                    <p className="photo-credit">The Meridian Channels. Image from The Center of Traditional Taoist Studies</p>
                  </div>
                )}
                <p>
                  Tapping signals safety to the brain, as it effectively calms the amygdala's 'fight, flight, or freeze' response. So the nervous system doesn't follow its usual sympathetic response to an issue, but actually can process, release, and update. By tapping on each tapping point, we balance each meridian (an energy channel running through the body that governs essential aspect of our body, mind, and spirit)– by sending an electrical impulse through the entire channel.
                </p>
                {!isDesktop && (
                  <div className="eft-image-left">
                    <img 
                      src={pic8}
                      alt="The Meridian Channels" 
                      className="eft-pic" 
                      />
                    <p className="photo-credit">The Meridian Channels. Image from The Center of Traditional Taoist Studies</p>
                  </div>
                )}
                <p>
                  EFT works on the neurological, subconscious, and energetic level. Shifts are enduring once thoroughly addressed, as neural networks are reprogrammed and the nervous system releases and resolves built-up issues. 
                </p>
                <p>
                  For some issues, EFT may provide relief very quickly, while with other issues you may experience improvements over time. How quickly you experience benefits can vary based on individual factors and the nature of your concerns.
                </p>
              </div>
              
              <div className="gold-divider"></div>
              
              {/* Who and What is EFT For - Collapsible */}
              <h3 className="collapsible-header" onClick={() => toggleSection('whoWhat')}>
                <span className={`triangle ${openSections.whoWhat ? 'open' : ''}`}></span>
                Who and What is EFT For?
              </h3>
              <div className={`collapsible-content ${openSections.whoWhat ? 'open' : ''}`}>
                <p>
                  EFT is for anyone with a nervous system. It works across all ages, cultures, and belief systems, and can meet you wherever you are on your journey.
                </p>
                <p>
                  I can help with any area of your life using EFT. <a href="/#what-we-can-do-together" target="_blank">These are my core strengths and areas of focus</a>, but the possibilities are virtually endless.
                </p>
                <p>
                  Whether you're navigating daily overwhelm or trauma, physical pain or deep emotions, self-doubt or anxiety, addiction or grief, relationship challenges or spiritual inquiry, manifesting abundance or actualizing your deepest calling, empowering higher consciousness or opening to love—EFT can accelerate your healing and transformation.
                </p>
              </div>
              
              <div className="gold-divider"></div>
              
              {/* Evidence and Experience - Collapsible */}
              <h3 className="collapsible-header" onClick={() => toggleSection('evidence')}>
                <span className={`triangle ${openSections.evidence ? 'open' : ''}`}></span>
                Evidence and Experience
              </h3>
              <div className={`collapsible-content ${openSections.evidence ? 'open' : ''}`}>
                <p>
                  EFT's effectiveness is well-backed by over <a href="https://eftuniverse.com/research-studies/" target="_blank">100 peer-reviewed scientific studies and trials</a>, and it is leading the modern western medical system in treating many ailments. Its power can be verified through your own personal experience—often in one session or even a few minutes.
                </p>
              </div>
              
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
                    You will likely directly experience shifts in energy, release of negative thoughts and emotions, fresh insights, and freedom around your issue(s)-- A.K.A. Emotional Freedom. 
                  </p>
                </div>
                
                <div className="expect-item">
                  <h4>After the Session</h4>
                  <p>
                    In most cases, you will notice significant relief, clarity, and shifts.
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