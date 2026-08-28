import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EFT.css';
import Section from '../components/Section';
import CTA from '../components/CTA';
import pic7 from '../assets/pic7.jpg';
import pic8 from '../assets/pic8.webp';
import { Helmet } from 'react-helmet'

const Stars = () => <span className="eft-stars">★★★★★</span>;

const Quote = ({ text, author, noStars = false }) => (
  <div className="eft-quote">
    {!noStars && <Stars />}
    <p className="eft-quote-text">"{text}"</p>
    <p className="eft-quote-author">— {author}</p>
  </div>
);

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
    whoWhat: false
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
              The single most effective tool I've found for rapid, lasting transformation — heal at the root, improve your physical health, become calm, happy, free, and empowered, and create the life you desire.
            </p>
          </div>
        </div>
      </section>

      <section className="about-eft section-rainbow">
        <div className="container">
          <div className="about-eft-content">
            <h2 className="subtitle-heading">About EFT</h2>
            <div className="offering-book-cta">
              <Link to="/contact#booking" className="btn btn-outline">
                Book a Session →
              </Link>
            </div>
            
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
                EFT is the single most effective healing tool I've found for resolving nearly any issue at the root — powerful, simple, gentle, fast, and versatile. It involves self-acceptance, self-love, and tapping acupoints on your own body while I skillfully guide you to address an issue or goal. It neutralizes and dissolves negative thought patterns and emotions, undesired conditioning, and restores access to your full energy and the ability to be calm, happy, free, and create the life you desire.
              </p>
              <p>
                This is a remarkably versatile tool that can make a real difference in nearly any area of your life (see "Who and What is EFT For" below).
              </p>
              <p>
                I'm advanced certified in EFT, and I integrate spiritual understanding — the wisdom of Love, Acceptance, and Letting Go — beyond typical EFT territory, attuned to you.
              </p>
              <p>
                I trained in EFT in the context of a <a href="https://trainwithsonya.us/" target="_blank" rel="noopener noreferrer">school</a> that embraces the deepest spiritual wisdom and neuroscience. This school has produced massively positive, whole-life transformations and flourishing for hundreds of people — and trains them to do the same for others.
              </p>

              <Quote text="The scientist in me was a little skeptical it wouldn't work... I could not have been more wrong. My first session was so powerful — releasing so much pain I'd been dealing with for years." author="Zac K." />

              <div className="gold-divider"></div>

              {/* Why EFT is So Powerful - Collapsible */}
              <h3 className="collapsible-header" onClick={() => toggleSection('whyPowerful')}>
                <span className={`triangle ${openSections.whyPowerful ? 'open' : ''}`}></span>
                Why EFT is So Powerful
              </h3>
              <div className={`collapsible-content ${openSections.whyPowerful ? 'open' : ''}`}>
                <Quote text="It was like magic!" author="Andrea L." />

                <p>
                  Imagine a tool that can relieve you of self-defeating thoughts, feelings, and actions– that you've held for years or decades– patterns you just assumed were an unchangeable part of your existence. Imagine being able to let go of these patterns and consciously uplevel your nervous system in a way that brings you great freedom, ease, joy, clarity, alignment, and empowerment.
                </p>
                <p>
                 While I have immersed myself in numerous spiritual practices and modalities, EFT is the most powerful and universal tool I have encountered for resolving issues / creating positive new outcomes—and I am so grateful to have encountered it and offer it. I hope that I can support as many people as possible with EFT.
                </p>
                <p>
                  Beyond EFT — I wield it with skillfulness, unconditional love, and depth that goes beyond the normal scope of this already powerful modality.
                </p>

                <Quote text="It's his love – beyond the Tapping – this process I've walked through with Adin. I think everyone should make time for themselves to heal in this way and experience this kind of love as the foundation." author="Sīla W." />
              </div>
              <div className="gold-divider"></div>

              {/* Scientific Explanation - Collapsible */}
              <h3 className="collapsible-header" onClick={() => toggleSection('howWorks')}>
                <span className={`triangle ${openSections.howWorks ? 'open' : ''}`}></span>
                Scientific Explanation of How it Works
              </h3>
              <div className={`collapsible-content ${openSections.howWorks ? 'open' : ''}`}>
                <p>
                  Tapping works wonders on the system! Research suggests it reduces activation of the amygdala's threat response, letting your nervous system shift into a calmer, more regulated state — even while bringing attention to what would normally trigger it. This lets you stay present with the issue and feel safe enough to fully feel and process it.
                </p>

                <Quote text="EFT is a self-healing modality that combines aspects of Chinese medicine and modern psychology with self-acceptance and unconditional love. EFT recalibrates your brain's responses to stimuli, reprogramming your body and brain's ability to function properly. EFT can positively transform your life in ways you never imagined possible." author="Sonya Sophia, EFT Expert and Trainer" noStars />
                <p>
                  EFT uses acupoints from Traditional Chinese Medicine. Each point lies on a meridian — an energy channel governing essential aspects of the body, mind, and spirit. By tapping these points, we're balancing each meridian and essentially giving ourselves a needle-free acupuncture treatment, while addressing the emotions and beliefs we wish to transform. This physiologically treats your issue.
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
                  When the original experience that created an issue happened, you may not have had the capacity to fully feel, process, or integrate it — so an emotional imprint gets carried forward, like old baggage. Tapping lets you revisit the trigger from a place of greater calm, safety, and self-compassion, so your neural pathways update to a healthier response. We dissolve an issue on the neurological level and rewrite our lives. The old baggage (how's this 'baggage' metaphor working out for you?) gets dropped.
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
                  EFT is well-backed by <a href="https://eftuniverse.com/research-studies/" target="_blank">over 100 peer-reviewed scientific studies and trials</a>, and it is leading the modern western medical system in treating many ailments. Its power can be verified through your own personal experience — often in one session or even a few minutes.
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
                  I can help with any area of your life using EFT. <a href="/#what-we-can-do-together" target="_blank">These are my areas of focus and what I do best</a>, but the possibilities are virtually endless.
                </p>
                <p>
                  Whether you're navigating daily overwhelm or trauma, physical pain or deep emotions, self-doubt or anxiety, addiction or grief, relationship challenges or break up pains, manifesting abundance or actualizing your deepest calling, connecting to higher consciousness or opening to love—EFT can accelerate your healing and transformation.
                </p>
              </div>

              <div className="gold-divider"></div>

              <Quote text="Adin is an innately gifted intuitive healer, with the dedication and discipline to match his inborn talents. I trust both the quality of his own energy and the many ways he facilitates energetic balance and emotional wellness for others." author="Zachary H." />

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
                    I'll begin guiding the practice and show you points to self-tap on your body, and we will tap together throughout the session. We'll explore your issue, and I may ask you questions to dive deeper into the core of the issue. 
                  </p>
                </div>
                
                <div className="expect-item">
                  <h4>During the Session</h4>
                  <p>
                    Gentle tapping on various points on the body, call-and-response guidance, and expressing in your own voice — I'll guide you to process your issue on the deepest level and move towards relief, self-acceptance, and love, meeting you where you are and at the pace your own system is ready for. I will suggest things for you to say, which you are encouraged to modify so that your words resonate with you.
                    You will likely directly experience shifts in energy, release of negative thoughts and emotions, fresh insights, and freedom around your issue(s)-- A.K.A. Emotional Freedom.
                  </p>
                  <Quote text="I always leave our sessions feeling lighter." author="Kathryn S." />
                  <Quote text="The work we did together helped me shift and dissolve old social triggers and conditioning, empowering me to show up with more confidence." author="Bella S." />
                </div>

                <div className="expect-item">
                  <h4>After the Session</h4>
                  <p>
                    In most cases, you will notice significant relief, clarity, and shifts — more positive thinking and emotions, and insights around your issue (sometimes full-on universal downloads — no joke).
                    EFT deeply resolves issues on the subconscious and neurological level, and transformation continue in the days and weeks following your session.
                    We may discuss practices that might support your goals.
                  </p>
                  <Quote text="I went from a pretty intense 10 down to a 0. Great experience that was safe, welcoming, and allowed me to dissolve a pattern that no longer supports my evolution." author="Brittany R." />
                </div>
              </div>
            </div>

            <Quote text="Adin's presence is grounded, compassionate, and deeply intuitive — he creates a safe space where real emotional release and clarity can unfold." author="Ryan S." />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Section 
        variant="dark" 
        title="Let's Begin →"
        subtitle="This is your invitation to inner and outer freedom."
      >
        <CTA />
      </Section>
    </div>
  );
};

export default EFT;