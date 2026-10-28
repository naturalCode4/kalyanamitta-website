import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProgramPage.css';
import { Helmet } from 'react-helmet';
import pic10 from '../assets/pic10.jpg';
import pic17 from '../assets/pic17.jpg';
import pic95b7b6cb from '../assets/95b7b6cb-a832-4835-8e34-398f1ad35dbe.jpeg';
import picC675882c from '../assets/c675882c-9d73-4f44-8862-a2007139ab1d.jpeg';
import pic4911d1d3 from '../assets/4911d1d3-96ac-44ee-9891-1ae03842e87d.jpeg';

// Every "Fill out the Alignment Form" CTA on this page reads from this one
// constant.
const ALIGNMENT_FORM_URL = '/alignment-form';

// Filler words skipped when picking out "main" words for the rainbow-letter
// treatment on hero taglines.
const RAINBOW_FILLER_WORDS = new Set(['and', 'from', 'of', 'the', 'to', 'for', 'a', 'an', 'in', 'on', 'or']);

// Main words (and a standalone "&") step through the 7-color palette from
// `startIndex`, then back down it in reverse after the last color
// (red … violet, purple, blue, …), bouncing rather than restarting.
const RainbowTitle = ({ text, startIndex = 0 }) => {
  const words = text.split(' ');
  let colorIndex = startIndex;
  return words.map((word, i) => {
    const firstLetterPos = word.search(/[a-zA-Z&]/);
    const bareWord = firstLetterPos === -1 ? '' : word.slice(firstLetterPos).replace(/[^a-zA-Z&]/g, '');
    const isMainWord = bareWord.length > 0 && !RAINBOW_FILLER_WORDS.has(bareWord.toLowerCase());
    let rendered = word;
    if (isMainWord) {
      const step = colorIndex % 12;
      const colorClass = `fd-rainbow-letter-${step <= 6 ? step : 12 - step}`;
      colorIndex += 1;
      rendered = (
        <>
          {word.slice(0, firstLetterPos)}
          <span className={colorClass}>{word[firstLetterPos]}</span>
          {word.slice(firstLetterPos + 1)}
        </>
      );
    }
    return (
      <React.Fragment key={i}>
        {rendered}
        {i < words.length - 1 ? ' ' : ''}
      </React.Fragment>
    );
  });
};

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

const GYPBSTEIP = () => {
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
    costOfCarrying: false,
    eftWorks: false,
    sessionExpect: false,
    whereLearned: false,
    runningMore: false,
    goesDeep: false,
    timelineOpen: false,
    whereLanded: false,
    hermeticMeaning: false,
    buddhaQuote: false,
    fullStory: false,
    otherSide: false,
    forYouIf: false,
    notForYouIf: false,
  });

  const [openBenefits, setOpenBenefits] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleBenefit = (key) => {
    setOpenBenefits((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // "Is This You?" — the other side of the lasting shifts below, grouped
  // into collapsible themes. All groups start collapsed.
  const isThisYouGroups = [
    {
      title: 'Your parents and family',
      items: [
        "You had toxic and emotionally immature parents! And it affects you deeply into your adult life.",
        "Parents who didn't take accountability",
        'You lack the embodied knowledge of being held, cared for, and supported',
        'Carrying resentment toward your parents, or blaming yourself for what happened',
        'High expectations from parents',
        'Inherited family patterns and indoctrination',
        'A wounded inner child',
      ],
    },
    {
      title: 'Your relationship with yourself',
      items: [
        'A harsh inner critic',
        "You don't trust yourself",
        'Mental fog and a muted intuition',
        'Second-guessing your own perceptions',
        'Uncertainty whether you are fundamentally lovable and worthy',
        'Low confidence and self-esteem',
      ],
    },
    {
      title: 'Heavy negative emotions',
      items: [
        'Shame, hopelessness, anxiety, fear, depression, chronic stress',
        'A background of guilt',
        "Your feelings don't feel fully safe, and sharing them feels like burdening others",
        'Feeling overwhelmed by your emotions, or cut off from them',
      ],
    },
    {
      title: 'Your body and nervous system',
      items: [
        'Still bracing, still reading the room',
        'A nervous system stuck on high alert',
        'Old memories and triggers surfacing in similar situations',
        'Stress showing up in your body',
        'Addiction and coping habits',
      ],
    },
    {
      title: 'Struggles in relationships',
      items: [
        'Chronic caretaking',
        'Strong fear of what other people think of you',
        'Difficulty being close to people, or with intimacy',
        'Repeating old attachment patterns, including in romantic relationships',
      ],
    },
    {
      title: 'Your voice and your path',
      items: [
        'Difficulty expressing yourself',
        'Struggling to let yourself want what you want',
        "Following a career or life path shaped by your parents' expectations, and it doesn't fit",
        "Living inside a reality built from other people's beliefs, even ones part of you knows aren't true",
      ],
    },
  ];

  const [openIsYouGroups, setOpenIsYouGroups] = useState({});

  const toggleIsYouGroup = (title) => {
    setOpenIsYouGroups((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const renderIsYouGroup = (g, i) => {
    const open = !!openIsYouGroups[g.title];
    return (
      <li key={g.title} className="fd-benefit-item" style={{ order: i }}>
        <button
          type="button"
          id={`isyou-group-${i}`}
          className="collapsible-header fd-benefit-header fd-isyou-toggle"
          aria-expanded={open}
          aria-controls={`isyou-panel-${i}`}
          onClick={() => toggleIsYouGroup(g.title)}
        >
          <span className={`triangle ${open ? 'open' : ''}`} aria-hidden="true"></span>
          {g.title}
        </button>
        <div
          id={`isyou-panel-${i}`}
          role="region"
          aria-labelledby={`isyou-group-${i}`}
          aria-hidden={!open}
          className={`collapsible-content ${open ? 'open' : ''}`}
        >
          <ul className="list-bullets fd-isyou-items">
            {g.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </li>
    );
  };

  // Items with a `detail` render as dropdowns; the rest are plain labels.
  const lastingShifts = [
    { text: 'Reclaimed personal power and authority' },
    { text: 'Increased authenticity, confidence, self-trust, and knowing of your sovereignty' },
    { text: 'Deeper expression of your voice' },
    { text: 'Better relationships, including romantic ones', detail: 'Relating from authenticity and boundaries, not repeating toxic patterns.' },
    { text: 'A stabilized nervous system, dissolved trauma and triggers, and real relief from C-PTSD symptoms' },
    { text: 'Freedom from negative emotions', detail: 'Shame, guilt, hopelessness, anxiety, fear, chronic stress.' },
    { text: 'A quieted inner critic' },
    { text: 'A healed inner child' },
    { text: 'Reparenting', detail: 'A relationship with the true/divine father and mother.' },
    { text: "Improved clarity on your parents' limitations" },
    { text: 'Forgiveness of self, parents, and the past' },
    { text: 'Release of unwanted inherited ancestral patterns, and an exit from the indoctrination put on you' },
    { text: 'Improved emotional intelligence and regulation' },
    { text: 'Increased mental clarity and intuition' },
    { text: 'Improved health', detail: 'From a healthier nervous system and reduced stress.' },
    { text: 'Greater ability to manifest desired outcomes' },
    { text: 'Lighter, calmer, happier' },
    { text: 'Happiness, humor, and wisdom' },
    { text: 'Being compassionately met and understood', detail: 'By someone who has been through it, and skillfully guided through a highly effective modality.' },
    { text: 'Practices that stay with you, for life' },
  ];

  const renderShift = (b) => (
    <li key={b.text} className="fd-benefit-item">
      {b.detail ? (
        <>
          <div className="collapsible-header fd-benefit-header" onClick={() => toggleBenefit(b.text)}>
            <span className={`triangle ${openBenefits[b.text] ? 'open' : ''}`}></span>
            {b.text}
          </div>
          <div className={`collapsible-content ${openBenefits[b.text] ? 'open' : ''}`}>
            <p className="fd-benefit-detail">{b.detail}</p>
          </div>
        </>
      ) : (
        <div className="fd-benefit-header fd-benefit-static">
          <span className="triangle fd-triangle-spacer" aria-hidden="true"></span>
          {b.text}
        </div>
      )}
    </li>
  );

  // Example 12-week schedule (for someone working with four core areas).
  const timeline = [
    {
      week: 'Week 0',
      when: 'After sign-up',
      items: [
        'Set an intention for the program',
        'Guided questions: who would you be without this (really envision it); your greatest negative itches, and where you suspect they came from; core painful memories or things that happened; insights into why things affect you the way they do',
        'Prepare yourself for 12 weeks of transformation',
      ],
    },
    { week: 'Week 1', items: ['First session', 'Journaling on your 3–6 core areas (some people finish this in week 2)'] },
    { week: 'Week 2', items: ['Second session', 'Grounding and regulation techniques'] },
    { week: 'Week 3', items: ['Third session: your core areas', 'Core causes questionnaire, area 1'] },
    { week: 'Week 4', items: ['Session: core area 1'] },
    { week: 'Week 5', items: ['Session: core area 1 + learn your spiritual practice', 'Core causes questionnaire, area 2'] },
    { week: 'Week 6', items: ['Session: core area 2 + spiritual practice check-in'] },
    { week: 'Week 7', items: ['Session: core area 2 + spiritual practice check-in + learn to self-tap', 'Guided taps and/or join the World Tapping Circle', 'Core causes questionnaire, area 3'] },
    { week: 'Week 8', items: ['Session: core area 3 + self-tapping check-in'] },
    { week: 'Week 9', items: ['Session: core area 3 + questions and workshopping on self-tapping and spiritual practice', 'Core causes questionnaire, area 4'] },
    { week: 'Week 10', items: ['Session: core area 4 + questions and workshopping'] },
    { week: 'Week 11', items: ['Session: core area 4 + questions and workshopping', 'Journaling on your shifts'] },
    { week: 'Week 12', items: ['Final session', 'Client testimonial and feedback form', 'Invitation to continue working together'] },
  ];

  return (
    <div className="program-page">
      <Helmet>
        <title>GYP&amp;BSTEIP! | Get Your Power and Sovereignty Back from Toxic and Emotionally Immature Parenting!</title>
        <meta name="description" content="A 12-week EFT program to reclaim your authenticity, trust, and peace after emotionally immature, abusive, or toxic parenting." />
        <meta property="og:title" content="GYP&amp;BSTEIP! | Get Your Power and Sovereignty Back from Toxic and Emotionally Immature Parenting!" />
        <meta property="og:description" content="Reclaim the trust, boundaries, and self-love that emotionally immature or toxic parenting took from you. A 12-week EFT program with Adin." />
        <meta property="og:url" content="https://healing-on-tap.com/gypbsteip" />
      </Helmet>

      {/* Hero */}
      <section className="fd-hero">
        <div className="container">
          <div className="fd-flow">
            <div className="fd-flow-main fd-flow-main-both">
              <h1 className="subtitle-heading"><RainbowTitle text="Get Your Power and Sovereignty Back from Toxic and Emotionally Immature Parenting" /><span className="fd-rainbow-letter-2">!</span></h1>
              <p className="fd-hero-line fd-italic"><u className="fd-underline">GYP&amp;BSTEIP!</u> (Yes, that's really the name.)</p>
              <p className="fd-hero-line"><u className="fd-underline">Quick question for you</u>: Do you have a rough internal terrain that's difficult to convey to even close friends because a profound level of insecurity was chronically beaten into you by emotionally-immature parents who pretended like they were totally great, but then in your adult life you slowly but surely came to the realization that they actually lack the most basic accountability and empathy?!</p>
              <p className="fd-hero-line">Welcome! This is the deep dive shift <u className="fd-underline">for you!</u> This will radically shift your power, authority, and well-being.</p>
              {/* <p className="fd-hero-line">You didn't learn to <u className="fd-underline">distrust yourself</u> by accident. It was ingrained in you in your childhood.</p>
              <p className="fd-hero-line">It's time to unwind those <u className="fd-underline">super intense feelings</u>.</p>
              <p className="fd-hero-line">Reclaim the safety, boundaries, self-love, and confidence that were <u className="fd-underline">never supposed to be this hard</u> to find.</p> */}

              {/* Definitions flank the title on wide screens; placed after
                  the hook so they stack below it on narrower ones. */}
              <aside className="fd-sidebar fd-side-left fd-definition">
                <p className="fd-definition-word">power</p>
                <p className="fd-definition-meta">from Latin <em>posse</em>, "to be able"</p>
                <p>In ancient Greek, <em>dynamis</em>: Aristotle's word for potential. The capacity already within you, waiting to be realized.</p>
              </aside>
              <aside className="fd-sidebar fd-side-right fd-definition">
                <p className="fd-definition-word">authority</p>
                <p className="fd-definition-meta">from Latin <em>auctoritas</em>, from <em>auctor</em>, "author, originator"</p>
                <p>Rooted in <em>augere</em>, "to make grow." To have authority is to be the author of your own life.</p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="fd-intro section-dark">
        <div className="container">
          <p className="fd-emphasis"><u className="fd-underline"><em>GYP&amp;BSTEIP!</em></u> is a 12-week, one-on-one transformation for doing exactly what the title says. Reclaim what neglect cost you by healing down to the deepest level.</p>

          <div className="collapsible-header fd-inline-trigger" onClick={() => toggleSection('costOfCarrying')}>
            <span className={`triangle ${openSections.costOfCarrying ? 'open' : ''}`}></span>
            See what this is actually costing us
          </div>
          <div className={`collapsible-content ${openSections.costOfCarrying ? 'open' : ''}`}>
            <p className="fd-emphasis">
              The truth is it <u className="fd-underline">costs</u> people <u className="fd-underline">so much</u>: their health, relationships, finances, personal peace, confidence, mental clarity, focus, positivity, quality of their actions and words, and much more. Even skewing their very view of reality, themselves, and what's possible. People live with unresolved trauma and feelings that are running life behind the scenes almost all the time.
            </p>
          </div>

          <blockquote className="fd-pullquote">
            "And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom." — Anaïs Nin
          </blockquote>

          <Quote text="Adin's presence is grounded, compassionate, and deeply intuitive — he creates a safe space where real emotional release and clarity can unfold." author="Ryan S." />

          <div className="fd-cta-center">
            <a href={ALIGNMENT_FORM_URL} className="btn">Sign me up! I want myself back! →</a>
          </div>
        </div>
      </section>

      {/* Is This You? */}
      <section className="fd-isyou section-rainbow">
        <div className="container">
          <h2 className="subtitle-heading">Is This You?</h2>
          <p className="fd-isyou-subtitle">These aren't your flaws. They're how you adapted to survive what you lived through. This work improves or fully resolves them, so you can finally be free to be you.</p>

          {/* Three independent columns (groups 1/4, 2/5, 3/6), so opening a
              group only pushes down its own column, not its neighbors. On
              mobile the columns dissolve and `order` restores 1–6. */}
          <div className="fd-isyou-groups">
            {[0, 1, 2].map((col) => (
              <ul key={col} className="fd-isyou-col">
                {isThisYouGroups.map((g, i) => (i % 3 === col ? renderIsYouGroup(g, i) : null))}
              </ul>
            ))}
          </div>

          <div className="fd-isyou-closing">
            <p className="fd-emphasis-strong">If this feels heavy, that's because it is, and it can change.</p>
            <div className="fd-cta-center">
              <a href={ALIGNMENT_FORM_URL} className="btn">Find your peace here →</a>
            </div>
          </div>

          <aside className="fd-sidebar fd-sidebar-dropdown fd-sidebar-centered">
            <div className="collapsible-header fd-sidebar-dropdown-header" onClick={() => toggleSection('whereLanded')}>
              <span className={`triangle ${openSections.whereLanded ? 'open' : ''}`}></span>
              <strong>Where Did Your Childhood Land?</strong>
            </div>
            <div className={`collapsible-content ${openSections.whereLanded ? 'open' : ''}`}>
              <p><strong>What did you receive from your parenting?</strong></p>
              <p><em>Let me level with you here.</em> Parents are ideally mature humans that unconditionally support you. There is unwavering support, unity, reliability, warmth, safety, and bonding. You could bring whatever is going on with you and would be received with unconditional love from safe people. They were positive role models teaching you how to live.</p>
              <p>This doesn't sound like you, does it?... Maybe this does: 'HOLY SH*T, that's even possible?!'</p>
              <p>Even a real bond and consistent warmth with parents who make mistakes and couldn't always be relied on probably sounds fantastic.</p>
              <p><strong>This is for you if you didn't even receive that.</strong></p>
              <p>For you, emotional safety was rare, if ever there. Your parents were not someone you could rely on and safely open up to. They have a ton of unprocessed shit. They lacked accountability and empathy. Or they were absent.</p>
              <p>They themselves probably needed this program... But remember: you only have power and authority over YOU.</p>
              <p>For some, the parent was not only unreliable, but a huge aggressor to your life and well-being. They were hostile, erratic, and unpredictable. There was image-obsession and emotional abuse. The household was chronically unsafe, and sometimes siblings were part of it too. There may have been narcissism or mental illness. If this is you: You have toxic and emotionally-immature (and neglectful) parents! Welcome.</p>
              <p><strong>You're in the right place. Read on {'<3'}</strong></p>
            </div>
          </aside>

          <div className="fd-quote-row">
            <Quote text="I have to admit, the scientist in me was a little skeptical that it wouldn't work, but I could not have been more wrong. My first session was so powerful — naming and releasing so much pain I'd been dealing with for years." author="Zac K." />
            <Quote text="I always leave our sessions feeling lighter." author="Kathryn S." />
          </div>

          <div className="gold-divider"></div>

          <div className="fd-dual-dropdown">
            <div>
              <h3 className="collapsible-header" onClick={() => toggleSection('forYouIf')}>
                <span className={`triangle ${openSections.forYouIf ? 'open' : ''}`}></span>
                This Is For You If
              </h3>
              <div className={`collapsible-content ${openSections.forYouIf ? 'open' : ''}`}>
                <ul className="list-bullets">
                  <li>You grew up with a parent, or parents, who were emotionally immature, abusive, or toxic — subtly or overtly</li>
                  <li>You find yourself distrusting your own perceptions, needs, or worth</li>
                  <li>Romantic or close relationships feel like minefields, or you keep recreating the same dynamic</li>
                  <li>You carry shame that doesn't fully make sense given what's "supposed" to have happened to you</li>
                  <li>You're navigating estrangement, low-contact, or complicated ongoing contact, and the guilt that comes with it</li>
                  <li>You're ready to feel the anger you've been avoiding, on the way to something better than anger</li>
                  <li>You want to set boundaries without collapsing into guilt</li>
                  <li>You want embodied change, not just more understanding of the pattern</li>
                  <li>You're ready to invest in yourself financially</li>
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
                  <li>You grew up with serious domestic violence or severe physical abuse — that level of trauma calls for specialized care beyond what I'm equipped to offer. Occasional physical violence doesn't rule you out.</li>
                  <li>You're in acute crisis or need primary medical or mental-health treatment — that care comes first, and this can complement it once you're stable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Still Running You */}
      <section className="fd-running section-dark">
        <div className="container">
          <h2 className="subtitle-heading">Why It's Still Running You</h2>
          <div className="fd-flow">
            <div className="fd-flow-main fd-flow-main-both">
              <p>When a parent is neglectful, the child doesn't learn to see the parent as neglectful: someone with their own limitations. The child learns to blame themselves fot it. They start to believe like they're bad and wrong (spoiler alert: you're not).</p>
              <div className="collapsible-header fd-inline-trigger" onClick={() => toggleSection('runningMore')}>
                <span className={`triangle ${openSections.runningMore ? 'open' : ''}`}></span>
                Read more
              </div>
              <div className={`collapsible-content ${openSections.runningMore ? 'open' : ''}`}>
                <p>When you brought your hurt to them, you may have been told you're "too sensitive," a 'difficult child', told to toughen up, or somehow blamed for your issue by the parent who was bigger and had a more powerful voice. Maybe it was "when you're parents, you'll understand...".</p>
                <p>Being told these things are a sign that your parents may be toxic and immature, and didn't give you the love and attention you deserved! It’s called gaslighting. So because of this you have learned that your feelings were wrong and that your experience/perception isn’t valid. So there's a fundamental distrust in your own intuition. Much compassion to this situation – no judgment – I’m just telling it like it is.</p>
                <p>In GYP&amp;BSTEIP!, you restore access to your intuition, self-trust, power, and authority.</p>
                <p>Some people develop complex PTSD (CPTSD). PTSD comes from one or a handful of traumatic events. CPTSD comes from being raised in an environment where the same harm happened over and over again.</p>
                <p>Carried into adulthood unprocessed, this doesn't just go away. Similar situations can trigger old memories, sometimes ones you don't even consciously remember. The old stories keep running.</p>
              </div>

              <div className="fd-quote-row">
                <Quote text="Adin holds really incredible and powerful intentional loving space. Working with him helped me work through so much and get to the root of my issue in just an hour or so. Thank you for sharing your potent Medicine Adin 🙏🏼" author="Caleb S." />
                <Quote text="I went from a pretty intense 10 down to a 0. Great experience that was safe, welcoming, and allowed me to dissolve a pattern that no longer supports my evolution." author="Brittany R." />
              </div>

              <aside className="fd-sidebar fd-side-right fd-sidebar-dropdown">
                <div className="collapsible-header fd-sidebar-dropdown-header" onClick={() => toggleSection('goesDeep')}>
                  <span className={`triangle ${openSections.goesDeep ? 'open' : ''}`}></span>
                  <strong>This goes deep.</strong>
                </div>
                <div className={`collapsible-content ${openSections.goesDeep ? 'open' : ''}`}>
                  <p>This goes beyond your parents. It's a lineage, back to your grandparents and the culture, religion, and country they came from. You shared a nervous system with your parents as a child, with an even stronger connection to your mother inside her womb. However, you can heal profoundly and let this ancestral karma end here with you. Your DNA can shift, activating new potentials and turning off certain codes.</p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* It's Time to Get Your Power Back (Lasting Shifts) */}
      <section className="fd-benefits section-rainbow">
        <div className="container">
          <h2 className="subtitle-heading">It's Time to Get Your Power Back.</h2>

          <p className="fd-emphasis-strong">
            This is where you get to say: I'm done believing the coldness was about me. <u className="fd-underline">I'm taking my self back now.</u>
          </p>

          <div className="gold-divider"></div>

          <h3 id="benefits">In these three months you likely will have these lasting shifts — subtly or drastically:</h3>

          <ul className="fd-benefit-list fd-benefit-list-even">
            {lastingShifts.map(renderShift)}
          </ul>

          <h3>Subjects we'll visit on the journey</h3>
          <p className="fd-center">As they are relevant to you:</p>
          <ul className="fd-benefit-list fd-benefit-list-even">
            <li className="fd-benefit-item">
              <div className="fd-benefit-header fd-benefit-static"><span className="fd-grid-bullet" aria-hidden="true">•</span>Repeating old family patterns in relationships, including romantic ones</div>
            </li>
            <li className="fd-benefit-item">
              <div className="fd-benefit-header fd-benefit-static"><span className="fd-grid-bullet" aria-hidden="true">•</span>Truth, authenticity, and intuition: confidence and self-worth</div>
            </li>
            <li className="fd-benefit-item">
              <div className="fd-benefit-header fd-benefit-static"><span className="fd-grid-bullet" aria-hidden="true">•</span>Addiction and coping</div>
            </li>
            <li className="fd-benefit-item">
              <div className="fd-benefit-header fd-benefit-static"><span className="fd-grid-bullet" aria-hidden="true">•</span>Letting go of indoctrination: limiting beliefs about you and the world</div>
            </li>
            <li className="fd-benefit-item">
              <div className="fd-benefit-header fd-benefit-static"><span className="fd-grid-bullet" aria-hidden="true">•</span>Education on being with your feelings, because your parents didn't teach you</div>
            </li>
            <li className="fd-benefit-item">
              <div className="fd-benefit-header fd-benefit-static"><span className="fd-grid-bullet" aria-hidden="true">•</span>Anger ceremony, as appropriate</div>
            </li>
            <li className="fd-benefit-item">
              <div className="fd-benefit-header fd-benefit-static"><span className="fd-grid-bullet" aria-hidden="true">•</span>Your relationship with your own feelings, and whether it feels safe to feel them at all</div>
            </li>
            <li className="fd-benefit-item">
              <div className="fd-benefit-header fd-benefit-static"><span className="fd-grid-bullet" aria-hidden="true">•</span>Addressing and relieving the inner critic</div>
            </li>
            <li className="fd-benefit-item">
              <div className="fd-benefit-header fd-benefit-static"><span className="fd-grid-bullet" aria-hidden="true">•</span>Chronic caretaking: regulating others' emotions at your own expense</div>
            </li>
            <li className="fd-benefit-item">
              <div className="fd-benefit-header fd-benefit-static"><span className="fd-grid-bullet" aria-hidden="true">•</span>What your parents and ancestry carry: ancestral honoring, forgiving, and letting go of inherited ancestral patterns and indoctrination</div>
            </li>
            <li className="fd-benefit-item">
              <div className="fd-benefit-header fd-benefit-static"><span className="fd-grid-bullet" aria-hidden="true">•</span>A career or life path set out for you that doesn't fit</div>
            </li>
            <li className="fd-benefit-item">
              <div className="fd-benefit-header fd-benefit-static"><span className="fd-grid-bullet" aria-hidden="true">•</span>Hypervigilance and social paranoia: still bracing, still reading the room</div>
            </li>
            <li className="fd-benefit-item">
              <div className="fd-benefit-header fd-benefit-static"><span className="fd-grid-bullet" aria-hidden="true">•</span>Triggers and old memories surfacing in similar situations</div>
            </li>
            <li className="fd-benefit-item">
              <div className="fd-benefit-header fd-benefit-static"><span className="fd-grid-bullet" aria-hidden="true">•</span>C-PTSD symptoms</div>
            </li>
            <li className="fd-benefit-item">
              <div className="fd-benefit-header fd-benefit-static"><span className="fd-grid-bullet" aria-hidden="true">•</span>Being gaslit by parents who are terrified to take accountability</div>
            </li>
            <li className="fd-benefit-item">
              <div className="fd-benefit-header fd-benefit-static"><span className="fd-grid-bullet" aria-hidden="true">•</span>Reclaiming your voice and expression</div>
            </li>
            <li className="fd-benefit-item">
              <div className="fd-benefit-header fd-benefit-static"><span className="fd-grid-bullet" aria-hidden="true">•</span>Forgiveness of self, parents, and the past</div>
            </li>
          </ul>

          <div className="fd-quote-row">
            <Quote text="It helped me shift a challenging relationship dynamic I'd been struggling with. I'm actually seeing lasting changes." author="Gloria R." />
            <Quote text="Deep emotional healing on the first session I did not expect such powerful results 🙏 great guidance through the whole process." author="Mike Y." />
            <Quote text="The work we did together helped me shift and dissolve old social triggers and conditioning, empowering me to show up with more confidence." author="Bella S." />
          </div>

          <div className="gold-divider"></div>

          <img
            src={picC675882c}
            alt="Adin"
            className="fd-about-image"
          />
          <p className="fd-emphasis-strong">
            <em>A life-changing shift on every level: emotionally, mentally, energetically, neurologically, physically — down into the nervous system's oldest, earliest patterning. A wonderful, <u className="fd-underline">lasting upgrade</u> to your life, starting from exactly where you're at.</em>
          </p>
          <p className="fd-tagline">Get your self back, and get your life back.</p>

          <div className="fd-cta-center">
            <a href={ALIGNMENT_FORM_URL} className="btn">Yep, That's What I Want →</a>
          </div>

          <Quote text="I felt safe and held in our sessions." author="Glo R." />
        </div>
      </section>

      {/* Where We Focus */}
      <section className="fd-focus section-dark">
        <div className="container">
          <h2 className="subtitle-heading">Where We Focus.</h2>

          <div className="fd-flow">
            <div className="fd-flow-main fd-flow-main-both">
              <img
                src={pic95b7b6cb}
                alt="Adin"
                className="fd-about-image"
              />

              <p>Think vast! Bring what's yours. I've rarely met a thing I can't address.</p>
              <p>
                Ask yourself: if Adin could wave a magic wand over me and resolve any 3-6 issues, what would make the biggest difference in my life?
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

              <p>I work with a wide variety of issues, so choose whatever would make the biggest difference in your life. Your core areas don't even have to be about your parents (although a lot will be tied in, and healing there will have a profound ripple effect on basically all areas of your life).</p>
              <p>I am trained to address nearly any area! EFT is a multi-tool we can use on nearly anything.</p>

              <div className="gold-divider"></div>

              <h3 className="collapsible-header" onClick={() => toggleSection('otherSide')}>
                <span className={`triangle ${openSections.otherSide ? 'open' : ''}`}></span>
                What's on the other side?
              </h3>
              <div className={`collapsible-content ${openSections.otherSide ? 'open' : ''}`}>
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

          <Quote text="I've even been labeled a 'difficult client' before, and still I experienced meaningful releases. If you want a compassionate, spacious guide you can trust with any issue, Adin will meet you where you are and help you move forward." author="Sīla W." />

          <p className="fd-small-italic">This work complements, and does not replace, medical or mental-health care.</p>
        </div>
      </section>

      {/* Example Timeline — must stay directly below Where We Focus */}
      <section className="fd-timeline-section section-rainbow">
        <div className="container">
          <h2 className="subtitle-heading">Timeline of the Healing Process</h2>
          <p className="fd-tagline fd-tagline-lg">Foremost: This 1-on-1 program adjusts to your personal unfolding.</p>

          <p className="fd-emphasis-strong">Below is an example timeline for our 12 weeks.</p>

          <div className="collapsible-header fd-inline-trigger" onClick={() => toggleSection('timelineOpen')}>
            <span className={`triangle ${openSections.timelineOpen ? 'open' : ''}`}></span>
            See the timeline
          </div>
          <div className={`collapsible-content ${openSections.timelineOpen ? 'open' : ''}`}>
            <ol className="fd-timeline">
              {timeline.map((w) => (
                <li key={w.week} className="fd-timeline-week">
                  <h3 className="fd-timeline-label">
                    {w.week}
                    {w.when && <span className="fd-timeline-when"> — {w.when}</span>}
                  </h3>
                  <ul className="fd-timeline-items">
                    {w.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </li>
              ))}
            </ol>
          </div>

          <Quote text="The session was 90 minutes long and what happened inside me was truly a tremendous shift. I was given sacred listening, he is very intuitive and sensitive. I now feel like I'm back to myself again." author="Ati D." />

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

      {/* About Adin */}
      <section className="fd-about section-dark">
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
                I have <u className="fd-underline">lived</u> this work, not just studied it: I have attained greater calm, happiness, freedom, authority, energy, and life-force. I've come through PTSD, childhood wounding, and emotionally immature parenting myself — along with the anxiety, depression, shame, insecurity, and heartbreak that came with it — and learned to walk as a sensitive, conscious soul and 'black sheep.' I've positively transformed my life with EFT and other practices.
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
                People describe me as warm, intuitive, reliable, open-hearted, compassionate, safe, rooted, gentle, intelligent, devoted, and wise. People say I help them understand healing in a way that's <em>real</em>.
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
                I am Advanced Certified in EFT through the Sonya Sophia School of Living Arts. Reiki II. 500-hour Yoga Teacher Training. Deep experience across Buddhist, Native American, and other spiritual traditions. Shaped by a life seeking what actually illuminates <u className="fd-underline">Truth, Freedom, Love, and Goodness.</u>
              </p>

              <div className="gold-divider"></div>

              <p className="fd-tagline">Break free from old conditioning, and reclaim your power.</p>
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

      {/* Investment */}
      <section className="fd-investment section-dark" id="investment">
        <div className="container">
          <h2 className="subtitle-heading">Investment.</h2>

          <p className="fd-tagline fd-tagline-lg">This is an investment that can positively transform your life.</p>
          <p className="fd-tagline fd-tagline-lg">It is offered because it brings massive benefit, including</p>

          <ul className="list-bullets fd-investment-list">
            <li>Improved physical health.</li>
            <li>Better relationships, including romantic ones.</li>
            <li><u className="fd-underline">Heal</u> beyond belief, at the root — not just manage symptoms — across your <u className="fd-underline">body, mind, and spirit.</u></li>
            <li>Restored trust in yourself, and in your closest relationships.</li>
            <li>More <u className="fd-underline">calm, happy, free</u>, and <u className="fd-underline">empowered</u> as your <u className="fd-underline">baseline</u>.</li>
            <li>The ability to set boundaries without guilt running the show.</li>
            <li>Restored <u className="fd-underline">vitality</u> and <u className="fd-underline">intuition</u>.</li>
            <li>A healed inner child, and a reparented adult.</li>
            <li><u className="fd-underline">High-level tools</u> that grow with you, long after our three months together.</li>
          </ul>
          <p className="fd-center">
            See the full list of <a href="#benefits" target="_blank" rel="noopener noreferrer" className="fd-inline-link">what you'll gain →</a> and <a href="#method" target="_blank" rel="noopener noreferrer" className="fd-inline-link">what's included →</a>.
          </p>

          <div className="gold-divider"></div>

          <p className="fd-tagline">Go deep, and take your power all the way back.</p>

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

export default GYPBSTEIP;
