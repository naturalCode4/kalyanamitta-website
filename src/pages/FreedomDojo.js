import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProgramPage.css';
import { Helmet } from 'react-helmet';
import pic10 from '../assets/pic10.jpg';
import pic17 from '../assets/pic17.jpg';
import pic4911d1d3 from '../assets/4911d1d3-96ac-44ee-9891-1ae03842e87d.jpeg';

// Every "Fill out the Alignment Form" CTA on this page reads from this one
// constant.
const ALIGNMENT_FORM_URL = '/alignment-form';

// Same Google reviews link used in components/GoogleReviews.js.
const GOOGLE_REVIEWS_URL = "https://www.google.com/search?sca_esv=51ce83e25ec719d4&sxsrf=AE3TifNlFbq4AK3zJQnfZYpPXSerqo2omw:1767397300592&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EwyJXTuXVS5aEX0JW1xEL5DvYFwgR7sVZ45kd6I9Bl_SZLxjblPSQzPdEpvH4WxiKlaTGcjhJB0kmY_gPUsN3WHWFsDQ&q=Healing+On+Tap+Reviews&sa=X&ved=2ahUKEwjHn52ChO6RAxWFGlkFHfaOCUQQ0bkNegQIHxAE&biw=1680&bih=962&dpr=2";

// Same fallback used in components/GoogleReviews.js — used only when the
// live Google Places total isn't available.
const FALLBACK_TOTAL_REVIEWS = 16;

const Stars = () => <span className="fd-stars">★★★★★</span>;

const Quote = ({ text, author }) => (
  <div className="fd-quote">
    <Stars />
    <p className="fd-quote-text">"{text}"</p>
    <p className="fd-quote-author">— {author}</p>
  </div>
);

const FreedomDojo = () => {
  const [totalReviews, setTotalReviews] = useState(null);

  // Same fetch logic as components/GoogleReviews.js, trimmed to just the
  // total count needed for the "See X 5-Star reviews" link below.
  useEffect(() => {
    let isMounted = true;

    const fetchTotalReviews = async () => {
      try {
        const isDevelopment = process.env.NODE_ENV === 'development';
        const hostname = window.location.hostname;

        if (isDevelopment && hostname === 'localhost' && !process.env.REACT_APP_GOOGLE_REVIEWS_API_URL) {
          if (isMounted) setTotalReviews(FALLBACK_TOTAL_REVIEWS);
          return;
        }

        const apiUrl = process.env.REACT_APP_GOOGLE_REVIEWS_API_URL || '/api/google-reviews';
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Failed to fetch reviews');

        const data = await response.json();
        if (data.error) throw new Error(data.error);

        if (isMounted) setTotalReviews(data.total_reviews ?? FALLBACK_TOTAL_REVIEWS);
      } catch (err) {
        console.error('Error fetching Google Reviews total:', err);
        if (isMounted) setTotalReviews(FALLBACK_TOTAL_REVIEWS);
      }
    };

    fetchTotalReviews();
    return () => { isMounted = false; };
  }, []);

  const [openSections, setOpenSections] = useState({
    eftWorks: false,
    sessionExpect: false,
    transform: false,
    forYouIf: false,
    notForYouIf: false,
    costOfCarrying: false,
    hermeticMeaning: false,
    eftMechanism: false,
    howShift: false,
    whereLearned: false,
    kalyanamittaMeaning: false,
    buddhaQuote: false,
    fullStory: false,
    moreExamples: false,
  });

  const [openBenefits, setOpenBenefits] = useState({
    health: false,
    outcomes: false,
    lighter: false,
    energy: false,
    selflove: false,
    karma: false,
    authenticity: false,
    innerchild: false,
    clarity: false,
    eq: false,
    relationships: false,
    values: false,
    happiness: false,
    supported: false,
    practices: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleBenefit = (key) => {
    setOpenBenefits((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const benefits = [
    {
      key: 'health',
      text: 'Improved physical health',
      detail: 'Get free from addictions, phobias, and unwanted patterns, and resolve physical pain, tension, and psychosomatically-rooted conditions. unprocessed emotion, a primary reason people get diseases.',
    },
    {
      key: 'relationships',
      text: 'Better relationships',
      detail: 'Develop authentic relationships, increase your capacity for love and connection, and resolve relationship issues.',
      review: { text: "It helped me shift a challenging relationship dynamic I'd been struggling with. I'm actually seeing lasting changes.", author: 'Gloria R.' },
    },
    {
      key: 'outcomes',
      text: 'Achieve the outcomes you desire',
      detail: 'Get more of what you actually want — money and abundance, thriving relationships, vibrant health, purposeful work, and whatever else matters most to you.',
    },
    {
      key: 'lighter',
      text: 'Lighter, calmer, healthier, and regulated',
      detail: "Dissolve years or decades of stress, trauma, and emotional pain, eliminate negative thought patterns, stop being thrown off by old triggers, and settle into a baseline that's more regulated, vital, centered, and aware. Feel much better in your body. Stress is a principal cause of disease.",
      review: { text: 'I always leave our sessions feeling lighter.', author: 'Kathryn S.' },
    },
    {
      key: 'energy',
      text: 'Increased energy, focus, and creativity',
      detail: "Because you'll be less dragged around by negative thinking, habits, stress, and bullshit.",
    },
    {
      key: 'selflove',
      text: 'Deeper self-love, self-respect, and self-acceptance',
      detail: 'And the inner critic quiets.',
    },
    {
      key: 'karma',
      text: 'Exit the matrix of unwanted cultural and ancestral karma',
      detail: 'Painful conditioning and beliefs that were never yours. Finally, live from your own soul.',
    },
    {
      key: 'authenticity',
      text: 'Authenticity, authority, confidence, purpose, and your voice',
      detail: 'Develop trust in yourself and your power.',
      review: { text: 'The work we did together helped me shift and dissolve old social triggers and conditioning, empowering me to show up with more confidence.', author: 'Bella S.' },
    },
    {
      key: 'innerchild',
      text: 'Heal your inner child',
      detail: "As you'll see, most of our issues have roots in what happened early on in our lives. We will dive in and bring medicine to the child who was hurt, shamed, indoctrinated, etc.",
    },
    {
      key: 'clarity',
      text: 'Restore mental clarity and intuition',
      detail: 'With the fog of triggers, unprocessed emotions, and unresolved life situations cleared.',
    },
    {
      key: 'eq',
      text: 'Higher emotional intelligence',
      detail: 'This work inherently is an education on presence, the emotional body, and creates intimacy and wisdom with your inner world. You may also be able to empathize and see others more deeply.',
    },
    {
      key: 'values',
      text: 'Be able to embody your values',
      detail: "Know, speak, and follow through on what's important to you, with integrity; free yourself from the profound pain of not living what you fucking believe in.",
    },
    {
      key: 'happiness',
      text: 'Happiness, humor, and wisdom',
      detail: 'That comes naturally from being aligned with yourself.',
    },
    {
      key: 'supported',
      text: 'Be deeply met and compassionately guided',
      detail: 'Three months held with care the whole way, safe to bring anything.',
    },
    {
      key: 'practices',
      text: 'Practices that stay with you',
      detail: 'The ability to practice EFT on yourself, a spiritual practice you learn or deepen (optional but encouraged), and a much greater ability to regulate your own nervous system. Tools to address issues as they arise and continue your inner work.',
    },
  ];

  return (
    <div className="program-page">
      <Helmet>
        <title>Freedom Dojo | 12-Week EFT Healing Program with Adin</title>
        <meta name="description" content="Become calm, happy, free, and empowered as your baseline. A 12-week EFT (Tapping) program to dissolve old pain and reclaim your life, for good." />
        <meta property="og:title" content="Freedom Dojo | 12-Week EFT Healing Offer" />
        <meta property="og:description" content="Be calm, happy, free, and empowered as your baseline. A 12-week EFT (Tapping) program to dissolve old pain and reclaim your life, for good." />
        <meta property="og:url" content="https://healing-on-tap.com/freedom-dojo" />
      </Helmet>

      {/* Hero */}
      <section className="fd-hero">
        <div className="container">
          <h1 className="subtitle-heading">Freedom Dojo</h1>
          <p className="fd-hero-line">More calm, happy, free, and empowered – <u className="fd-underline">as your baseline.</u></p>
          <p className="fd-hero-line">Dissolve pain that's been quietly <u className="fd-underline">running your life.</u></p>
          <p className="fd-hero-line">Restore freedom to live how you want – <u className="fd-underline">for good.</u></p>
          <div className="fd-cta-center">
            <a href={ALIGNMENT_FORM_URL} className="btn">Apply →</a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="fd-intro section-dark">
        <div className="container">
          <p className="fd-center fd-narrow fd-intro-strong">
            That's not a slogan or hype. In fact, I hate flashy or manipulative marketing. It's what we see this work <u className="fd-underline">actually do</u>.
          </p>
          <p className="fd-emphasis">
            Are you quietly paying the <u className="fd-underline">enormous</u>, invisible price of unprocessed pain, negative emotions, old fear, and limiting beliefs you <em>never chose</em>? Heavy baggage, <u className="fd-underline">running life behind the scenes</u>.
          </p>

          <div className="collapsible-header fd-inline-trigger" onClick={() => toggleSection('costOfCarrying')}>
            <span className={`triangle ${openSections.costOfCarrying ? 'open' : ''}`}></span>
            See what this is actually costing us
          </div>
          <div className={`collapsible-content ${openSections.costOfCarrying ? 'open' : ''}`}>
            <p className="fd-emphasis">
              The truth is it <u className="fd-underline">costs</u> people <u className="fd-underline">so much</u>: their <em>health, relationships, personal peace, confidence, mental clarity, focus, positivity, quality of their actions and words, finances, and much more.</em> Even skewing their very <em>view of reality, themselves, and what's possible.</em>
            </p>
          </div>

          <blockquote className="fd-pullquote">
            "And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom." — Anaïs Nin
          </blockquote>

          <div className="gold-divider"></div>

          <p className="fd-emphasis"><u className="fd-underline"><em>Freedom Dojo</em></u> is a 12-week container of guided, one-on-one transformation that exists to end that cost for you. For good.</p>
          <p className="fd-emphasis">All of it aimed at a <u className="fd-underline">liberation of your blocks</u>, a <u className="fd-underline">nervous system upgrade</u>, return to your <u className="fd-underline">essential wholeness</u> – and to hand you excellent tools <u className="fd-underline">for life</u>.</p>
          <p className="fd-emphasis">Whatever you're carrying – we <em>can</em> shift it.</p>

          <div className="gold-divider"></div>

          {/* <h3 className="fd-center fd-narrow">
            The <u className="fd-underline">Freedom Dojo</u> Offer is a 12-week container of guided, one-on-one transformation that:
          </h3>
          <h3 className="fd-center fd-narrow fd-italic">
            • Relieves the heavy load you've carried <u className="fd-underline">profoundly</u>
          </h3>
          <h3 className="fd-center fd-narrow fd-italic">
            • Heals and upgrades at the <u className="fd-underline">deepest, root level</u>, earning greater calm, happiness, freedom, and empowerment.
          </h3>
          <h3 className="fd-center fd-narrow fd-italic">
            • <u className="fd-underline">Earns you the freedom</u> to attain the outcomes and abundance you desire
          </h3>
          <h3 className="fd-center fd-narrow fd-italic">
            • The full breakdown of <a href="#method" className="fd-inline-link">The Method</a> is explained in a later section.
          </h3> */}

          <Quote text="Adin's presence is grounded, compassionate, and deeply intuitive — he creates a safe space where real emotional release and clarity can unfold." author="Ryan S." />

          <div className="fd-cta-center">
            <a href={ALIGNMENT_FORM_URL} className="btn">Sign me up! I want to heal my nervous system and free up my life! →</a>
          </div>
        </div>
      </section>

      {/* It's Time to Get All Your Energy Back */}
      <section className="fd-benefits section-rainbow">
        <div className="container">
          <h2 className="subtitle-heading">It's Time to Get Your Energy Back.</h2>

          <p className="fd-emphasis-strong">
            This is where you get to say: I'm done with this old baggage running the show. <u className="fd-underline">I'm taking my life back now</u>.
          </p>
          <p className="fd-emphasis-strong">This is a real, sustained transformation that aims to profoundly relieve *nearly* <u className="fd-underline">anything you carry</u> down to the root.</p>
          <p className="fd-emphasis-strong"><u className="fd-underline">Ask yourself right now:</u> What 3-6 areas in my life would make the biggest difference to resolve? <u className="fd-underline">Freedom Dojo</u> is built to thorougly liberate and restore you in each of these areas, and beyond.</p>

          <div className="gold-divider"></div>

          <h3 id="benefits">In these three months you likely will have these lasting shifts — subtly or drastically:</h3>

          <ul className="fd-benefit-list">
            {benefits.map((b) => (
              <li key={b.key} className="fd-benefit-item">
                <div className="collapsible-header fd-benefit-header" onClick={() => toggleBenefit(b.key)}>
                  <span className={`triangle ${openBenefits[b.key] ? 'open' : ''}`}></span>
                  {b.text}
                </div>
                <div className={`collapsible-content ${openBenefits[b.key] ? 'open' : ''}`}>
                  <p className="fd-benefit-detail">{b.detail}</p>
                  {b.review && <Quote text={b.review.text} author={b.review.author} />}
                </div>
              </li>
            ))}
          </ul>

          <p className="fd-emphasis fd-emphasis-lg" >Until feeling any other way is <em>literally</em> a memory.</p>

          <div className="gold-divider"></div>

          <div className="fd-cta-center">
            <a href={ALIGNMENT_FORM_URL} className="btn">Yep, That's What I Want →</a>
          </div>

          <Quote text="I have to admit, the scientist in me was a little skeptical that it wouldn't work, but I could not have been more wrong. My first session was so powerful — naming and releasing so much pain I'd been dealing with for years." author="Zac K." />
        </div>
      </section>

      {/* Not symptom management */}
      <section className="fd-notsymptom section-dark">
        <div className="container">
          <h2 className="subtitle-heading">The Real Thing.</h2>
          <p className="fd-emphasis-strong">Not symptom management. Not a temporary fix. Not a retreat high that fades.</p>
          <p className="fd-emphasis-strong">
            <em>A life-changing shift on every level: emotionally, mentally, energetically, neurologically, physically down into the cells and DNA. A wonderful, <u className="fd-underline">lasting upgrade</u> to your life — starting from exactly where you're at.</em>
          </p>
          <p className="fd-emphasis-strong">I'm telling you straight: this is what I guide people to achieve.</p>
          <p className="fd-tagline">Get your energy back, and get your life back.</p>
          <div className="fd-cta-center">
            <a href={ALIGNMENT_FORM_URL} className="btn">I'm Ready to Begin →</a>
          </div>
        </div>
      </section>

      {/* The Method */}
      <section className="fd-method" id="method">
        <div className="container">
          <h2 className="subtitle-heading">The Method.</h2>

          <div className="fd-flow">
            <div className="fd-flow-main fd-flow-main-both">
              <p></p>

              <h3 className="fd-gold-heading">How do we create this powerful shift?</h3>
              <ul className="list-bullets fd-method-list">
                <li>A 3-month container of <strong>transformative healing and upgrades</strong>.</li>
                <li><strong>Twelve</strong> potent <strong>90-minute EFT</strong> (Emotional Freedom Techniques, aka Tapping) & <strong>Coaching</strong> sessions with Adin.</li>
                <li>This isn't a group program where you're one of many. You get a <strong>private 1-on-1 mentorship</strong>, the whole way through — <strong>my full presence and direct, expert guidance</strong>, built to <strong>fully meet you.</strong></li>
                <li>Direct <strong>email access with Adin</strong>, for <strong>ongoing support</strong>, check-ins, and guidance between sessions.</li>
                <li>Gain proficiency in using the <strong>wonderful modality</strong> of <strong>EFT on yourself</strong>.</li>
                <li>Learn/cultivate a <strong>spiritual practice</strong> that's genuinely yours and <strong>deeply supports your life</strong> (this is optional but encouraged), and be held accountable for its development.</li>
                {/* Cohort experience temporarily removed
                <li>Weekly cohort circles for sharing, connection, and tapping (Optional but recommended. We heal better in <strong>community</strong>).</li>
                */}
              </ul>

              <div className="gold-divider"></div>

              <h3>So What is EFT/Tapping?!</h3>

              {/* top matches the "So What is EFT?" heading below (measured:
                  311px from the top of .fd-flow) so the box sits level with
                  it instead of floating up near the top of the section. */}
              <aside className="fd-sidebar fd-side-right" style={{ top: '311px' }}>
                <blockquote className="fd-pullquote">
                  "EFT is a self-healing modality that combines aspects of Chinese medicine and modern psychology with self-acceptance and unconditional love. EFT recalibrates your brain's responses to stimuli, reprogramming your body and brain's ability to function properly. EFT can positively transform your life in ways you never imagined possible." — Sonya Sophia, EFT Expert, and My EFT Trainer and Certifier
                </blockquote>
                <br></br><br></br>
                <blockquote className="fd-pullquote">
                  "The curious paradox is that when I accept myself just as I am, then I can change." — Carl Rogers
              </blockquote>
              </aside>

              <p>Having practiced for more than 10 years with various healing modalities, mystical traditions, and spiritual practices – I specialize in EFT for a reason.</p>
              <p>
                <b>EFT/Tapping</b> is a <b> highly effective tool</b> for resolving nearly <b>any issue</b> completely — simple, gentle, and fast. You will tap acupoints on your body while being <b>skillfully guided</b> to address your issue or goal.
              </p>
              <p>
                It neutralizes and <b>dissolves</b> negative thought patterns and emotions, undesired conditioning, and restores the <b>health of your nervous system</b> and the ability to live the life you desire and <b> live calm, happy, free, and empowered.</b>
              </p>

              {/* Placed before the eftWorks/sessionExpect dropdown stack so
                  mobile stacking shows this quote above both of them. */}
              <Quote text="It was like magic!" author="Andrea L." />

              {/* Both dropdowns share one side, so they're wrapped in a single
                  fd-sidebar-stack (positioned once, at top: 311px — level
                  with "So What is EFT?" / the Sonya Sophia quote box) whose
                  children stack in normal flow. That way opening eftWorks
                  naturally pushes sessionExpect down instead of overlapping
                  it or leaving a dead gap when both are collapsed. */}
              <div className="fd-sidebar-stack fd-side-left" style={{ top: '311px' }}>
                <aside className="fd-sidebar fd-sidebar-dropdown">
                  <div className="collapsible-header fd-sidebar-dropdown-header" onClick={() => toggleSection('eftWorks')}>
                    <span className={`triangle ${openSections.eftWorks ? 'open' : ''}`}></span>
                    Want to know more about the magic behind Tapping?
                  </div>
                  <div className={`collapsible-content ${openSections.eftWorks ? 'open' : ''}`}>
                    <p>
                      Tapping works wonders on the system! Research suggests it reduces activation of the amygdala's threat response, allowing the nervous system to shift into a calmer, more regulated state — even while bringing attention to what would previously have triggered the body's automatic stress response. In this way, tapping enables us to stay present with the issue and feel safe enough to fully feel and process it.
                    </p>
                    <p>
                      EFT incorporates acupoints from Traditional Chinese Medicine. Each tapping point lies on a meridian — an energy channel that governs essential aspects of the body, mind, and spirit. By tapping these points, we're balancing each meridian and essentially giving ourselves a needle-free acupuncture treatment, while addressing the emotions and beliefs we wish to transform. This physiologically treats your issue.
                    </p>
                    <p>
                      When the original experience(s) that created the issue occurred, we may not have had the capacity to fully feel, process, or integrate what happened. As a result, there's an embodied emotional imprint we still carry… like old baggage. Through tapping, we revisit the trigger from a different state — one of greater calm, safety, self-compassion, and love. Instead of reinforcing the old reaction, the neural pathways are updated to this healthier response. We dissolve an issue on the neurological level and rewrite our lives. The heavy baggage gets dropped, and we attain genuine freedom.
                    </p>
                    <p>
                      EFT is well-backed by over <a href="https://eftuniverse.com/research-studies" target="_blank" rel="noopener noreferrer" className="fd-inline-link">100 studies and trials</a>.
                    </p>
                  </div>
                </aside>

                <aside className="fd-sidebar fd-sidebar-dropdown">
                  <div className="collapsible-header fd-sidebar-dropdown-header" onClick={() => toggleSection('sessionExpect')}>
                    <span className={`triangle ${openSections.sessionExpect ? 'open' : ''}`}></span>
                    Curious what you'll actually do in a session?
                  </div>
                  <div className={`collapsible-content ${openSections.sessionExpect ? 'open' : ''}`}>
                    <p>
                      Gentle tapping on various points on the body, call-and-response guidance, expressing in your own voice, and other techniques. I will guide you to process your issue on the deepest level and move towards self-acceptance and love. I meet you where you are, and move at the pace your own system is ready for.
                    </p>
                    <p>
                      During a session you'll typically experience relief around your issue, more positive thinking and emotions, and insights (sometimes full-on universal downloads — no joke). Also a sense of love, peace, confidence, and other wonderful qualities. Shifts usually continue to unfold for several days after a session.
                    </p>
                  </div>
                </aside>
              </div>

              <div className="gold-divider"></div>

              <p className="fd-emphasis"><em>This excellent modality will become yours for life.</em></p>
              <p className="fd-color-green">In this program, you will not only receive 12 potent EFT sessions: You will gain proficiency in practicing Tapping on yourself. You can use EFT to address the challenges of your life and continue your inner work.
              </p>

              <div className="gold-divider"></div>

              <p className="fd-color-green">
                Beyond EFT — I wield it with skillfulness, unconditional love, and depth that goes beyond the normal scope of this already powerful modality.
              </p>

              <Quote text="It's his love — beyond the tapping — this process I've walked through with Adin. I think everyone should make time for themselves to heal in this way and experience this kind of love as the foundation." author="Sīla W." />

              <div className="collapsible-header fd-inline-trigger" onClick={() => toggleSection('whereLearned')}>
                <span className={`triangle ${openSections.whereLearned ? 'open' : ''}`}></span>
                Where did I learn this?
              </div>
              <div className={`collapsible-content ${openSections.whereLearned ? 'open' : ''}`}>
                <p className="fd-color-green">
                  I trained in EFT in the context of a <a href="https://trainwithsonya.us/" target="_blank" rel="noopener noreferrer" className="fd-inline-link">school</a> that embraces the deepest spiritual wisdom and neuroscience. This school has produced massively positive, whole-life transformations and flourishing for hundreds of people — and trains them to do the same for others.
                </p>
              </div>

              <p className="fd-tagline">My wish is as many people as possible experience this life-changing modality</p>
              <div className="fd-cta-center">
                <a href={ALIGNMENT_FORM_URL} className="btn">Be part of the magic →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Wise Friend */}
      <section className="fd-wise-friend section-rainbow">
        <div className="container">
          <h2 className="subtitle-heading">On Wise Companions.</h2>

          <div className="fd-flow">
            <aside className="fd-sidebar fd-side-left">
              <Quote text="I feel like he opened a door to my spirituality that I wasn't even sure existed." author="Mckenzi P." />
            </aside>

            <div className="fd-flow-main fd-flow-main-both">
              <div className="fd-wise-row">
                <img
                  src={pic17}
                  alt="Adin outdoors among flowers"
                  className="fd-wise-image"
                />
                <p className="fd-emphasis fd-wise-emphasis">
                  I will be walking by your side, supporting you every step of the way — through the deep inner transformation, including the difficult stuff. It's a blessing to be of service.
                </p>
              </div>
              <p>
                Across nearly every spiritual tradition, having a wise guide is considered essential. In Buddhism, this friend is called a <em>kalyāṇamitta</em> – someone who helps guide you in your highest interest, helping your eyes to see things they never saw before. They may not just tell you want you want to hear or what's comfortable. This person should embody wisdom, unconditional love, detachment, and skillfulness –– through thick and thin. I strive to be that for you.
              </p>

              <aside className="fd-sidebar fd-side-right fd-sidebar-dropdown">
                <div className="collapsible-header fd-sidebar-dropdown-header" onClick={() => toggleSection('buddhaQuote')}>
                  <span className={`triangle ${openSections.buddhaQuote ? 'open' : ''}`}></span>
                  Buddha Quote
                </div>
                <div className={`collapsible-content ${openSections.buddhaQuote ? 'open' : ''}`}>
                  <br></br>
                  <blockquote className="fd-pullquote fd-pullquote-dialogue">
                    "This is half of the holy life, lord: admirable friendship, admirable companionship, admirable camaraderie." — Ananda<br></br><br></br> "Don't say that, Ananda. Don't say that. Admirable friendship, admirable companionship, admirable camaraderie is actually the whole of the holy life. When a monk has admirable people as friends, companions, and comrades, he can be expected to develop and pursue the Noble Eightfold Path." — The Buddha<br></br><br></br><em>Upaddha Sutta</em> (SN 45.2)
                  </blockquote>
                </div>
              </aside>

              <Quote text="Adin is an innately gifted intuitive healer, with the dedication and discipline to match his inborn talents. I trust both the quality of his own energy and the many ways he facilitates energetic balance and emotional wellness for others." author="Zachary H." />

            </div>
          </div>
        </div>
      </section>

      {/* About Adin */}
      <section className="fd-about">
        <div className="container">
          <h2 className="subtitle-heading">About Adin</h2>

          <div className="fd-flow">
            <aside className="fd-sidebar fd-side-left">
              <Quote text="Adin has an open heart and high emotional intelligence — both of which make it seamless and easy to connect with him and have him facilitate healing work. You're in good hands with Adin." author="Travis D." />
            </aside>

            <aside className="fd-sidebar fd-side-right">
              <Quote text="He is a passionate practitioner of many modalities who has helped me expand my consciousness and deepen my meditation, yoga, and energy practices." author="Ethan B." />
            </aside>

            <div className="fd-flow-main fd-flow-main-both">
              <img
                src={pic10}
                alt="Adin outdoors among the trees"
                className="fd-about-image"
              />
              <p>
                I have <u className="fd-underline">lived</u> this work, not just studied it: I have attained greater calm, happiness, freedom, authority, energy, and life-force. I've come through PTSD, childhood wounding, emotionally immature parenting, anxiety, depression, shame, insecurity, heartbreak, and learned to walk as a sensitive and conscious soul and 'blacksheep'. I've positively transformed my life with EFT and other practices
              </p>
              <p>
                When you work with me, you're with someone who's <u className="fd-underline"><em>been there in the mud</em></u>, made it through, and earned their metaphorical badges and stamps. You're not alone in this.
              </p>
              {totalReviews !== null && (
                <p>
                  <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="fd-inline-link">See {totalReviews} 5-Star reviews on Google →</a>
                </p>
              )}
              <p>
                People describe me as warm, intuitive, reliable, open-hearted, compassionate, safe, rooted, gentle, intelligence, devoted, and wise. People say I help them understand healing and spirituality in a way that's <em>real</em>.
              </p>

              <div className="collapsible-header fd-inline-trigger" onClick={() => toggleSection('fullStory')}>
                <span className={`triangle ${openSections.fullStory ? 'open' : ''}`}></span>
                More about Adin
              </div>
              <div className={`collapsible-content ${openSections.fullStory ? 'open' : ''}`}>
                <p>
                  I've always had a natural affinity for genuine connection, meditation, deep play, the natural world, and spiritual understanding. I knew early to follow my own path — and take a different way from the mediocrity most of the adults and institutions around me were offering. There is an authenticity and unfolding <u className="fd-underline">only you can walk.</u>
                </p>
                <p>
                  EFT has been <u className="fd-underline">absolutely essential</u> in my healing journey. As I write this, I actually see the world as beautiful. I actually love and accept myself. I’m no longer crushed by negative emotions, triggers, and thoughts like I was most of my life. My work feels deeply aligned. I feel peace, freedom, power, and have confidence in myself. My health, habits, finances, relationships, sense of self-worth, sense of divinity, have all improved. I offer to you what I’ve lived, because I know <u className="fd-underline">it can do the same for you</u>. And it’s so, so worth it.
                </p>
              </div>

              <div className="gold-divider fd-about-divider"></div>

              <p>
                I am Advanced Certified in EFT through the Sonya Sophia School of Living Arts. Reiki II. 500-hour Yoga Teacher Training. Deep experience across Buddhist, Native American, and other spiritual traditions. And, most importantly: shaped by a life seeking what actually illuminates <u className="fd-underline">Truth, Freedom, Love, and Goodness.</u>
              </p>

              <div className="gold-divider"></div>

              
              <p className="fd-tagline">Break free from old conditioning, and trailblaze your own path.</p>
              <div className="fd-cta-center">
                <a href={ALIGNMENT_FORM_URL} className="btn">Join Now →</a>
              </div>
              <blockquote className="fd-pullquote">
                "There is a light in you which cannot die. Your life is a sublime expression of this light to the degree you are willing to listen to your own soul's loving guidance." –– Sonya Sophia
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Focus */}
      <section className="fd-focus section-rainbow">
        <div className="container">
          <h2 className="subtitle-heading">Where We Focus.</h2>

          <div className="fd-flow">
            <div className="fd-flow-main fd-flow-main-both">
              <p>Think vast! Bring what's yours. I've rarely met a thing I can't address.</p>
              <p>
                Ask yourself: if Adin could wave a magic wand over me and resolve any 3-6 issues, what would make the biggest difference in my life? EFT is a multi-tool we can use on nearly anything.
              </p>

              {/* Absolutely positioned as the left-hand sidebar on desktop
                  (regardless of DOM position); placed here, right after the
                  "Ask yourself" paragraph, so mobile stacking shows it there
                  too instead of jumping to the very top. */}
              <aside className="fd-sidebar fd-side-left fd-sidebar-dropdown">
                <div className="collapsible-header fd-sidebar-dropdown-header" onClick={() => toggleSection('hermeticMeaning')}>
                  <span className={`triangle ${openSections.hermeticMeaning ? 'open' : ''}`}></span>
                  <strong>Changing the world... Is an inside job...</strong>
                </div>
                <div className={`collapsible-content ${openSections.hermeticMeaning ? 'open' : ''}`}>
                  <p>
                    What happens 'to you' is a reflection of your inner state: how others treat you, your career, your finances, relationships, health, your impact, the opportunities you magnetize. When you change inside, you not only feel better inside, but your outside world will change too, to match your frequency.
                  </p>
                  <p className="fd-sidebar-quote">"As within, so without." — The 2nd Hermetic Principle</p>
                </div>
              </aside>

              <div className="gold-divider"></div>

              <p className="fd-emphasis-strong">
                Together, we address <u className="fd-underline">3–6 Areas of Focus</u> that matter most to you right now, and heal and upgrade them using the wonderful modality of EFT as the core.
              </p>
              <p className="fd-emphasis-strong">
                And as you're totally interconnected, other parts of you will naturally alchemize and heal along-side of it!
              </p>

              <h3 className="collapsible-header" onClick={() => toggleSection('transform')}>
                <span className={`triangle ${openSections.transform ? 'open' : ''}`}></span>
                What's on the other side?
              </h3>
              <div className={`collapsible-content ${openSections.transform ? 'open' : ''}`}>
                <ul className="list-bullets">
                  <li>You'll feel so much better in your body, heart, and mind –– once you address what's really been going on inside! Even your physical health and beauty improves!</li>
                  <li>Deeper love and connection –– of all kinds, including more aligned and beautiful relationships.</li>
                  <li>Peace, power, and your own authority — from developing trust and groundedness in yourself.</li>
                  <li>Clear the blocks to manifesting wealth and the life you desire.</li>
                  <li>A weight lifted –– you may not have even realized you were carrying.</li>
                  <li>Clarity, energy, and self-empowerment — from having dissolved what was sucking on you subconsciously.</li>
                  <li>Ease, lightness, and joy — from having resolved where stress and old patterns used to run the show.</li>
                  <li>An overall higher frequency state and a clearer knowing of your inherent goodness…</li>
                </ul>
                <br></br>
                <p className="fd-small-italic">… Sounds good to me! …</p>
              </div>
            </div>
          </div>

          <p className="fd-emphasis">
            In this way, you can <u className="fd-underline">be, live, think, feel, and act</u> from <em>genuine power</em> — beyond limitations.
          </p>
          <p className="fd-emphasis">
            You gain ease of access to <u className="fd-underline"> your calm, happiness, freedom, and empowerment</u>.
          </p>

          <div className="gold-divider"></div>

          <div className="fd-dual-dropdown">
            <div>
              <h3 className="collapsible-header" onClick={() => toggleSection('forYouIf')}>
                <span className={`triangle ${openSections.forYouIf ? 'open' : ''}`}></span>
                This Is For You If
              </h3>
              <div className={`collapsible-content ${openSections.forYouIf ? 'open' : ''}`}>
                <ul className="list-bullets">
                  <li>You want more personal power, peace, play, love, and to improve aspect(s) of your life</li>
                  <li>You want a better-functioning nervous system, brain, body, and mind</li>
                  <li>You're carrying something unresolved and you're ready to put down the weight — maybe that hasn't budged no matter what you've tried</li>
                  <li>You're ready to invest in yourself financially</li>
                  <li>You want embodied change, not just talk</li>
                  <li>Maybe you are a spiritual practitioner, but your practice isn't addressing certain layers of your psyche, trauma, or humanity. If that's you, you hold a place in my heart and this has been designed with you in mind</li>
                  <li>You are in <em>any part</em> of your personal development, spiritual maturity, and healing journey. I support people who are just starting to open to these dimensions, as well as those that are already very mature in their inner work</li>
                  <li>You're ready to go deep and be honest, with someone who can hold it</li>
                  <li>Living from your heart and in integrity matters deeply to you</li>
                  <li>You want tools to keep growing, not a forever dependency</li>
                  <li>You feel a connection and affinity with me</li>
                  <li>Even if you're a little skeptical, or you've been let down before</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="collapsible-header" onClick={() => toggleSection('notForYouIf')}>
                <span className={`triangle ${openSections.notForYouIf ? 'open' : ''}`}></span>
                This Is NOT For You If
              </h3>
              <div className={`collapsible-content ${openSections.notForYouIf ? 'open' : ''}`}>
                <ul className="list-bullets">
                  <li>You're seeking a quick fix with no real engagement — this work asks something of you</li>
                  <li>You're not ready to invest your focus, time, and money on you</li>
                  <li>You're not ready to see yourself, or would rather idly talk about your problems or play the victim than actually improve your situation— this work asks you to meet yourself deeply</li>
                  <li>Living from your heart and with integrity, isn't really a priority for you</li>
                  <li>You're in acute crisis or need primary medical or mental-health treatment — that care comes first, and this can complement it once you're stable</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="fd-small-italic">This work complements, and does not replace, medical or mental-health care.</p>
        </div>
      </section>

      {/* Investment */}
      <section className="fd-investment section-dark" id="investment">
        <div className="container">
          <h2 className="subtitle-heading">Investment.</h2>

          <p className="fd-tagline fd-tagline-lg">This is an investment that can positively transform your life.</p>
          <p className="fd-tagline fd-tagline-lg">It is offered because it brings massive benefit, including</p>

          <ul className="list-bullets fd-investment-list">
            <li>Improved physical health</li>
            <li>Better relationships</li>
            <li><u className="fd-underline">Heal</u> beyond belief, at the root — not just manage symptoms — across your <u className="fd-underline">body, mind, and spirit.</u></li>
            <li>More <u className="fd-underline">calm, happy, free</u>, and <u className="fd-underline">empowered</u> as your <u className="fd-underline">baseline</u>.</li>
            <li>Restored <u className="fd-underline">vitality</u> and <u className="fd-underline">intuition</u>.</li>
            <li>Finally get <u className="fd-underline">free from the pain</u> that's been quietly running the show.</li>
            <li><u className="fd-underline">High-level tools and knowledge</u> that grow with you, long after our three months together.</li>
          </ul>
          <p className="fd-center">
            See the full list of <a href="#benefits" target="_blank" rel="noopener noreferrer" className="fd-inline-link">what you'll gain →</a> and <a href="#method" target="_blank" rel="noopener noreferrer" className="fd-inline-link">what's included →</a>.
          </p>

          <div className="gold-divider"></div>

          <p className="fd-tagline">Go deep, and earn a life you choose.</p>

          <div className="fd-cta-group">
            <a href={ALIGNMENT_FORM_URL} className="btn">I'm Ready –– Fill Out the Alignment Form! →</a>
            <Link to="/contact#get-in-touch" className="btn btn-outline">Have questions? I'm happy to respond by email →</Link>
          </div>
        </div>
      </section>

      {/* Sign off */}
      <section className="fd-signoff">
        <div className="container">
          <img
            src={pic4911d1d3}
            alt="Adin"
            className="fd-signoff-image"
          />
          <p className="fd-signoff-text">In your corner, <strong>Adin</strong></p>
          <div className="fd-cta-center">
            <a href={ALIGNMENT_FORM_URL} className="btn">Let's do this →</a>
          </div>

          <div className="gold-divider"></div>

          <Link to="/contact#get-in-touch" className="fd-feedback-link">Provide Feedback. Help us make this program the best it can be →</Link>
        </div>
      </section>
    </div>
  );
};

export default FreedomDojo;