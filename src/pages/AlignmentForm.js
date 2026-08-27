import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './AlignmentForm.css';

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-+|-+$)/g, '')
    .slice(0, 60);

const Stars = () => <span className="af-stars">★★★★★</span>;

const Quote = ({ text, author }) => (
  <div className="af-quote">
    <Stars />
    <p className="af-quote-text">"{text}"</p>
    <p className="af-quote-author">— {author}</p>
  </div>
);

// Testimonial sidebar running alongside the survey — same voices used on
// the Tap Into Freedom page, just reused here (that page is left untouched).
const SIDEBAR_QUOTES = [
  {
    key: 'ryan',
    text: "Adin's presence is grounded, compassionate, and deeply intuitive — he creates a safe space where real emotional release and clarity can unfold.",
    author: 'Ryan S.',
  },
  {
    key: 'zach',
    text: 'Adin is an innately gifted intuitive healer, with the dedication and discipline to match his inborn talents. I trust both the quality of his own energy and the many ways he facilitates energetic balance and emotional wellness for others.',
    author: 'Zachary H.',
  },
  {
    key: 'sila',
    text: "I trust his grounded freedom in himself — he feels safe. He's so gentle, loving, and playful, and he brings whatever different energies that the moment calls for – whether that's being more fierce with me, bringing his Truthteller, bringing his Nurturer. And he's very skillful at bringing out those different parts. I've even been labeled a 'difficult client' before, and still I experienced meaningful releases. If you want a compassionate, spacious guide you can trust with any issue, Adin will meet you where you are and help you move forward.",
    author: 'Sīla W.',
  },
  {
    key: 'travis',
    text: "Adin has an open heart and high emotional intelligence — both of which make it seamless and easy to connect with him and have him facilitate healing work. He is committed to his own personal, spiritual path — and the evidence of that work is shown in the value he's able to provide by elucidating and helping me find insights and let go of trauma that no longer serves me. You're in good hands with Adin.",
    author: 'Travis D.',
  },
  {
    key: 'ethan',
    text: 'He is a passionate practitioner of many modalities who has helped me expand my consciousness and deepen my meditation, yoga, and energy practices.',
    author: 'Ethan B.',
  },
];

const quoteByKey = (key) => SIDEBAR_QUOTES.find((q) => q.key === key);

// Recap of the Tap Into Freedom benefits, same content as that page's
// benefit dropdowns — reworded very slightly here to match the copy given
// for this page, but the detail/review text is intentionally identical.
const BENEFITS = [
  {
    key: 'health',
    text: 'Improved health',
    detail: 'Get free from addictions, phobias, and unwanted patterns, and resolve physical pain, tension, and psychosomatically-rooted conditions. We heal stress and stored emotion, a primary reason people get diseases.',
  },
  {
    key: 'relationships',
    text: 'Better relationships',
    detail: 'Develop authentic relationships, increase your capacity for genuine love and connection, and resolve relationship issues.',
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
    text: 'Restored mental clarity and intuition',
    detail: 'With the fog of triggers, unprocessed emotions, and unresolved life situations cleared.',
  },
  {
    key: 'eq',
    text: 'Higher emotional intelligence',
    detail: 'This work inherently is an education on the emotional body, and creates intimacy and wisdom with your inner world. You may also be able to empathize and see others more deeply.',
  },
  {
    key: 'values',
    text: 'The ability to embody your values',
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
    text: 'Practices that stay with you, for life',
    detail: 'The ability to practice EFT on yourself, a spiritual practice you learn or deepen, and a much greater ability to regulate your own nervous system. Tools to address issues as they arise and continue your inner work.',
  },
];

const MORE_ABOUT = [
  {
    key: 'areasOfFocus',
    title: 'More on the 3–6 Areas of Focus',
    body: (
      <>
        <p>Together, we choose 3–6 areas that matter most to you right now, and heal and upgrade them at the root, using EFT as the core.</p>
        <ul className="list-bullets">
          <li>Fewer areas (around 3) makes sense if you're holding something huge — the kind of thing that occupies a big part of your nervous system on a regular basis, and needs real concentrated attention. Your 10-out-of-10s.</li>
          <li>More areas (up to 6) makes sense if you have several significant things you want to address, none of which is consuming everything on its own.</li>
        </ul>
        <p>And because you're totally interconnected, growth in one area tends to cascade — other parts of your life alchemize and heal alongside it, even ones we never directly touched.</p>
      </>
    ),
  },
  {
    key: 'spiritualPractice',
    title: 'More about the spiritual practice',
    body: (
      <>
        <p>This is optional but encouraged, and included in your package.</p>
        <p>Alongside EFT, we introduce or deepen a spiritual practice and make it genuinely yours. You'll be guided and held accountable for its flourishing. I will teach or help you deepen: meditation (many styles available), breathwork, yoga, voice-based sound healing, prayer, ecstatic dance, or another practice you're already drawn to. We'll find a good fit; you don't have to know now.</p>
      </>
    ),
  },
  {
    key: 'howDeepHowFast',
    title: 'How Deep, How Fast?',
    body: (
      <p>Ultimately, everything that happens is according to what you're ready for. Some issues may radically shift like magic within a single session. I've seen it happen time and time again. Older, deeper patterns may move through gradually, with patience. What I can tell you is that when it moves, it moves profoundly — not just on the surface. I'll meet you right where you're at, guide you, encourage your best, and help you get what you came here for.</p>
    ),
  },
  {
    key: 'ongoingSupport',
    title: 'More on ongoing support',
    body: (
      <>
        <p>This isn't a group program where you're one of many. You get a <strong>private 1-on-1</strong> program, the whole way through — <strong>my full presence and direct, expert guidance </strong>, built to <strong>fully meet you.</strong></p>
        <p>Direct email access with Adin. Beyond the weekly sessions themselves, I maintain availability for my clients throughout the whole three months. That includes being energetically available and reachable by email — typically 1 or 2 emails a week — for guidance, presence, sharing, and integration support as things come up.</p>
        {/* Cohort experience temporarily removed: "We'll also have Weekly cohort circles for sharing, connection, and tapping." */}
      </>
    ),
  },
  {
    key: 'whatToExpect',
    title: "What you'll gain",
    body: (
      <p><a href="#af-benefits-recap" className="af-inline-link">In the coming three months, be prepared (AND even excited?!) for these beneficial, lasting shifts — subtly or drastically:</a></p>
    ),
  },
];

// Each section gets one stop along a red -> violet spectrum, applied via
// CSS custom properties (--af-text / --af-accent / --af-accent-bg) on the
// section wrapper so intro copy, notes, and selected scale/yes-no buttons
// all pick up the same hue without threading color through every field.
const hueVars = (h, { sat = 68, light = 70 } = {}) => ({
  '--af-text': `hsl(${h}, ${sat}%, ${light}%)`,
  '--af-accent': `hsl(${h}, ${sat + 2}%, 58%)`,
  '--af-accent-bg': `hsl(${h}, ${sat - 18}%, 24%)`,
});

const SECTIONS = [
  {
    key: 'aboutYou',
    title: 'About you',
    hue: 55,
    sidebarQuote: 'sila',
    intro: ["These questions help us both understand what's resonating before we even talk. The more honest and specific you can be, the more useful our work together becomes from session one."],
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Email', type: 'email' },
      { label: 'Phone', type: 'tel' },
      { label: 'Location', note: '(city is fine)', type: 'text' },
      { label: 'What about this program drew you in?', type: 'textarea', rows: 4 },
      { label: 'Why does this matter to you right now?', type: 'textarea', rows: 4 },
      { label: 'How did you find your way here?', note: '(optional –– for my own context)', type: 'text', optional: true },
    ],
  },
  {
    key: 'goalsVision',
    title: 'Your Goals & Vision',
    hue: 85,
    intro: ['The more honest and specific you can be, the more useful our work together becomes from session one.'],
    fields: [
      { label: 'What are you up to in life right now? Where is most of your energy going right now?', type: 'textarea', rows: 5 },
      { label: "Imagine you already have this — it's real, and it's yours: the best version of yourself, fully alive. Take a few minutes to dream freely: what does your life actually look like? How do you feel? Write it down, trusting what comes.", type: 'textarea', rows: 8 },
    ],
    quote: '"As within, so without." — The 2nd Hermetic Principle. When you change inside, your outside world changes too, to match your frequency.',
  },
  {
    key: 'yourReality',
    title: 'Your Reality',
    hue: 115,
    hueOpts: { light: 78 },
    sidebarQuote: 'zach',
    intro: [
      'The vast majority of people are carrying heavy baggage that quietly affects their well-being, life-force, peace, relationships, confidence, health, clarity, and much more.',
      'Tap Into Freedom exists to end that cost. For good.',
      'This is a real, sustained transformation that can profoundly shift nearly anything you carry.',
    ],
    fields: [
      { label: 'What feels like the biggest obstacle(s) right now? What is between you and the best version of yourself you just described?', type: 'textarea', rows: 5 },
      { label: 'On a scale of 1–10, how much is this affecting your life today?', note: '(1 = barely a blip, 10 = consuming everything)', type: 'scale', hue: 120, hueOpts: { light: 78 } },
      { label: 'What is staying the same costing you right now — in time, energy, well-being, relationships, health, or opportunities?', type: 'textarea', rows: 5 },
    ],
  },
  {
    key: 'readiness',
    title: 'Readiness',
    hue: 145,
    hueOpts: { light: 78 },
    sidebarQuote: 'travis',
    intro: ['This asks real commitment and willingness to turn toward yourself.'],
    fields: [
      { label: 'If you knew — really knew — that this could genuinely change, how much would you want that — on a scale of 1-10?', type: 'scale', hue: 150, hueOpts: { light: 78 } },
      { label: 'This is a three-month container of real transformation. Are you ready to invest in yourself financially, energetically, and with your time?', type: 'yesno', options: ['Absolutely', 'Maybe Later'], hue: 175, hueOpts: { light: 78 } },
      { label: 'Real transformation tends to ripple: waves of emotion, deep questions, shifts in your sense of self, your relationships, your priorities, the way you see things — all of it may move. We will be working yourself on a profound level, so you can expect big waves and big results. On a scale of 1–10, how ready are you to show up to that kind of unfolding?', type: 'scale', hue: 200, hueOpts: { light: 78 } },
    ],
  },
  {
    key: 'areasOfFocus',
    title: 'Areas of Focus',
    hue: 180,
    hueOpts: { light: 78 },
    intro: [
      "Think vast! Bring what's yours. I've rarely met a thing I can't address.",
      "Together, we'll thoroughly address 3–6 Areas of Focus that would make the biggest difference for you.",
    ],
    fields: [
      {
        label: 'What areas of your life — inner or outer — matter most to you to improve right now?',
        note: "(These are just suggested categories your Areas of Focus might fall under — it can be whatever's actually yours: recovering lost mental clarity or strength in a particular area, releasing difficult emotions, thought patterns, anxiety, or depression, healing trauma, PTSD, or ancestral/cultural conditioning, authenticity, confidence, and voice, relationships, self-image, sexual energy and intimacy, true masculinity, true femininity, purpose, work, or money, life transitions, physical health, spiritual growth, or something else entirely. Again, just examples to get the ball rollin')",
        type: 'textarea',
        rows: 6,
      },
    ],
    trailingNote: "You don't need this fully figured out in advance. Discovering the roots together is part of the work, and we're free to shift focus as we go. Nothing here has to be fixed.",
  },
  {
    key: 'spiritualPractice',
    title: 'Spiritual Practice',
    hue: 210,
    hueOpts: { light: 78 },
    sidebarQuote: 'ethan',
    quoteAfterTitle: true,
    intro: ['This modality will be yours for life.'],
    fields: [
      { label: 'Are you interested in developing a spiritual practice? Why yes, why no?', type: 'textarea', rows: 4 },
      { label: 'Do you currently have a spiritual or contemplative practice? If so, what is it?', type: 'textarea', rows: 4 },
      {
        label: "I can teach or help you deepen: meditation, breathwork, yoga, voice-based sound healing, prayer, ecstatic dance, or another practice you're drawn to. Does anything here resonate with you?",
        labelNode: (
          <>
            I can teach or help you deepen: <strong>meditation</strong>, <strong>breathwork</strong>, <strong>yoga</strong>, <strong>voice-based sound healing</strong>, <strong>prayer</strong>, <strong>ecstatic dance</strong>, or another practice you're drawn to. Does anything here resonate with you?
          </>
        ),
        note: '(Totally fine to say "not sure yet" — we\'ll find a good fit; you don\'t have to know now.)',
        type: 'textarea',
        rows: 4,
      },
    ],
  },
  {
    key: 'wellbeing',
    title: 'Your Wellbeing — please answer honestly',
    hue: 245,
    hueOpts: { sat: 55, light: 82 },
    sidebarQuote: 'ryan',
    intro: ["This isn't about disqualifying you — it's about meeting you where you're at and making sure this is appropriate for where you're at right now."],
    fields: [
      {
        label: 'Are you currently receiving care from a therapist, doctor, psychiatrist, or other health professional? If so, briefly, what for?',
        note: '(This work complements medical and mental-health care — it is not a replacement for it.)',
        type: 'textarea',
        rows: 4,
      },
      { label: 'Is there anything about your physical or mental health I should know, to work with you safely and responsibly?', type: 'textarea', rows: 4 },
      {
        label: "Are you currently in crisis, or having thoughts of harming yourself or someone else?",
        note: "If yes: please reach out to a crisis line or emergency services right away — in the US, you can call or text 988. This program isn't equipped to support acute crisis, but I care about you getting the right help. This work can complement professional mental health treatment once you're stable. (Optional)",
        // note: "If yes: please reach out to a crisis line or emergency services right away — in the US, you can call or text 988. This program isn't equipped to support acute crisis, but I care about you getting the right help.  This work can complement professional mental health treatment once you're stable. (Optional)",
        warning: true,
        type: 'textarea',
        rows: 3,
        optional: true,
      },
    ],
  },
  {
    key: 'anythingElse',
    title: 'Anything Else',
    hue: 285,
    hueOpts: { sat: 55, light: 82 },
    intro: [],
    fields: [
      { label: 'Is there anything else you would like me to know about you?', note: '(Optional)', type: 'textarea', rows: 4, optional: true },
      { label: 'Any questions or comments?', note: '(Optional)', type: 'textarea', rows: 4, optional: true },
    ],
  },
];

// Precompute a DOM-safe `name` for every field once, at module load — used
// for radio group names (scale/yes-no) instead of the full question text.
SECTIONS.forEach((section) => {
  section.fields.forEach((field) => {
    field.name = slugify(field.label);
  });
});

const ALL_FIELDS = SECTIONS.flatMap((s) => s.fields);

const FALLBACK_EMAIL = process.env.REACT_APP_ALIGNMENT_FORM_EMAIL;

const buildMailto = (answers) => {
  const subject = 'Alignment Form Submission (Backup)';
  const body = ALL_FIELDS.map((f) => `${f.label}\n${answers[f.label] || ''}`).join('\n\n');
  return `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const AlignmentForm = () => {
  const [answers, setAnswers] = useState(
    ALL_FIELDS.reduce((acc, f) => ({ ...acc, [f.label]: '' }), {})
  );
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [openBenefits, setOpenBenefits] = useState({});
  const [openMore, setOpenMore] = useState({});
  const [missingField, setMissingField] = useState(null);

  const toggleBenefit = (key) => setOpenBenefits((prev) => ({ ...prev, [key]: !prev[key] }));
  const toggleMore = (key) => setOpenMore((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleChange = (label) => (e) => {
    const value = e.target.value;
    setAnswers((prev) => ({ ...prev, [label]: value }));
    if (missingField && missingField.label === label && value) setMissingField(null);
  };

  const handleChoice = (label, value) => {
    setAnswers((prev) => ({ ...prev, [label]: value }));
    if (missingField && missingField.label === label && value) setMissingField(null);
  };

  // Native HTML5 validation (via `required`) is unreliable here — it
  // doesn't consistently scroll to radio-group fields, and its bubble is
  // easy to miss on a page this long. `noValidate` on the <form> disables
  // that, and this does the same job by hand: find the first unanswered
  // required field, scroll it into view, focus it, and show a clear
  // message instead of just silently refusing to submit.
  const scrollToField = (field) => {
    const wrapper = document.getElementById(`af-field-${field.name}`);
    if (wrapper) wrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
    const focusTarget = document.getElementById(field.name) || document.querySelector(`[name="${field.name}"]`);
    if (focusTarget) setTimeout(() => focusTarget.focus(), 400);
  };

  const submit = async (e) => {
    if (e) e.preventDefault();
    if (status === 'submitting') return; // guard against double-submit

    const missing = ALL_FIELDS.find((f) => !f.optional && !answers[f.label]);
    if (missing) {
      setMissingField(missing);
      scrollToField(missing);
      return;
    }
    setMissingField(null);

    setStatus('submitting');

    try {
      const response = await fetch('/api/alignment-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers }),
      });
      const result = await response.json();

      if (result.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setFailedAttempts((prev) => prev + 1);
      }
    } catch (err) {
      setStatus('error');
      setFailedAttempts((prev) => prev + 1);
    }
  };

  const renderField = (field) => (
    <div
      id={`af-field-${field.name}`}
      className={`form-group af-field ${missingField?.name === field.name ? 'af-field-missing' : ''}`}
      key={field.name}
      style={field.hue !== undefined ? hueVars(field.hue, field.hueOpts) : undefined}
    >
      <label htmlFor={field.name}>{field.labelNode || field.label}</label>
      {missingField?.name === field.name && (
        <p className="af-field-missing-note">Please answer this one before submitting.</p>
      )}
      {field.note && (
        <p className={`af-field-note ${field.warning ? 'af-field-note-warning' : ''}`}>{field.note}</p>
      )}

      {field.type === 'textarea' && (
        <textarea
          id={field.name}
          rows={field.rows || 5}
          value={answers[field.label]}
          onChange={handleChange(field.label)}
          required={!field.optional}
        />
      )}

      {['text', 'email', 'tel'].includes(field.type) && (
        <input
          id={field.name}
          type={field.type}
          value={answers[field.label]}
          onChange={handleChange(field.label)}
          required={!field.optional}
        />
      )}

      {field.type === 'scale' && (
        <div className="af-scale-group" role="group" aria-label={field.label}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <label
              key={n}
              className={`af-scale-option ${answers[field.label] === String(n) ? 'selected' : ''}`}
            >
              <input
                type="radio"
                name={field.name}
                value={n}
                checked={answers[field.label] === String(n)}
                onChange={() => handleChoice(field.label, String(n))}
                required={!field.optional}
              />
              {n}
            </label>
          ))}
        </div>
      )}

      {field.type === 'yesno' && (
        <div className="af-yesno-group" role="group" aria-label={field.label}>
          {(field.options || ['Yes', 'No']).map((opt) => (
            <label
              key={opt}
              className={`af-yesno-option ${answers[field.label] === opt ? 'selected' : ''}`}
            >
              <input
                type="radio"
                name={field.name}
                value={opt}
                checked={answers[field.label] === opt}
                onChange={() => handleChoice(field.label, opt)}
                required={!field.optional}
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="alignment-form-page">
      <Helmet>
        <title>Alignment Form | Healing On Tap</title>
        <meta name="description" content="Fill out the Alignment Form to begin Tap Into Freedom with Adin." />
      </Helmet>

      {status === 'success' ? (
        <section className="af-hero af-success-view">
          <div className="container">
            <h1 className="subtitle-heading">Alignment Form</h1>
            <p className="alignment-form-confirmation">
              Congratulations on submitting your Alignment Form!
            </p>
            <p className="alignment-form-confirmation">
              I've received it and will reach out to you shortly.
            </p>
          </div>
        </section>
      ) : (
        <>
          {/* Hero / welcome */}
          <section className="af-hero">
            <div className="container">
              <h1 className="subtitle-heading">Alignment Form</h1>
              <p className="af-hero-line"><u className="af-underline af-hero-welcome">Welcome.</u></p>
              <p className="af-hero-line">
                In the <em>Tap Into Freedom</em> program you will become more calm, happy, free, and empowered as your baseline, dissolve pain that's been quietly running your life, and restore your freedom — for good.
              </p>
            </div>
          </section>

          {/* Transformation emphasis + review process */}
          <section className="af-transform" style={hueVars(0, { sat: 60, light: 75 })}>
            <div className="container">
              <p className="af-emphasis">
                A life-changing shift <u className="af-underline">on every level</u>: emotionally, mentally, energetically, neurologically, physically down into the cells of the body and your very DNA. A wonderful, <u className="af-underline">lasting upgrade to your life</u> — starting from exactly where you're at.
              </p>

              <div className="gold-divider"></div>

              <p className="af-review-note">
                I review each application personally. If it's a good fit, we'll set up a free 30-minute call to align, understand the program better, ask each other any questions we have.
              </p>
            </div>
          </section>

          {/* More about the program — informational dropdowns */}
          <section className="af-more section-dark" style={hueVars(26, { sat: 60, light: 72 })}>
            <div className="container">
              <h2 className="subtitle-heading af-center-heading">More about this program, now that you're here</h2>

              {MORE_ABOUT.map((item) => (
                <div className="af-more-item" key={item.key}>
                  <div className="collapsible-header af-more-header" onClick={() => toggleMore(item.key)}>
                    <span className={`triangle ${openMore[item.key] ? 'open' : ''}`}></span>
                    {item.title}
                  </div>
                  <div className={`collapsible-content ${openMore[item.key] ? 'open' : ''}`}>
                    <div className="af-more-body">{item.body}</div>
                  </div>
                </div>
              ))}

              <div className="gold-divider af-section-divider"></div>
            </div>
          </section>

          {/* Investment recap — same content as the Tap Into Freedom page's
              Investment section, reused here rather than imported since that
              page's CSS isn't guaranteed loaded on this route. Each line
              steps forward along the same red -> violet spectrum as the
              rest of the page, from the opening tagline to the last bullet. */}
          <section className="af-investment">
            <div className="container">
              <p className="af-tagline af-tagline-lg" style={hueVars(28, { light: 82 })}>This is an investment that can <u className="af-underline">completely transform your life</u> and <u className="af-underline">deeply resolve</u> huge amounts of undesired pain – for good.</p>
              <p className="af-tagline af-tagline-lg" style={hueVars(32, { light: 82 })}>Throughout our time, you'll enjoy palpable <u className="af-underline">steps of improvement</u> along the way.</p>
              <p className="af-tagline af-tagline-lg" style={hueVars(35, { light: 82 })}>You'll obtain <u className="af-underline">excellent tools</u> to continue your success and healing.</p>
              <ul className="list-bullets af-investment-list">
                <li style={hueVars(39, { light: 82 })}>A 3-month container of <u className="af-underline">profound healing and upgrades</u>. Become <u className="af-underline">calm, happy, free, and empowered as your baseline</u>, dissolve pain that's been quietly running your life, and restore your <u className="af-underline">freedom.</u></li>
                <li style={hueVars(42, { light: 82 })}>Twelve potent 90-minute 1-on-1 <u className="af-underline">EFT &amp; Coaching sessions</u> with Adin. <em>EFT is the single most effective healing tool</em> I've found for resolving nearly any issue at the root. Powerful, simple, gentle, fast, and versatile.</li>
                <li style={hueVars(39, { light: 82 })}>Direct email access with Adin, for check-ins and guidance between sessions to keep you on track</li>
                <li style={hueVars(46, { light: 82 })}>Gain proficiency in using the powerful modality of <u className="af-underline">EFT on yourself.</u></li>
                <li style={hueVars(49, { light: 82 })}>Cultivate a <u className="af-underline">spiritual practice</u> that's genuinely yours and deeply supports your life.</li>
                {/* Cohort experience temporarily removed
                <li style={hueVars(53, { light: 82 })}>Weekly <u className="af-underline">cohort circles</u> for sharing, connection, and tapping.</li>
                */}
              </ul>
            </div>
          </section>

          {/* The actual survey */}
          <section className="af-survey">
            <div className="container af-survey-container">
              <form className="alignment-form" onSubmit={submit} noValidate>
                {SECTIONS.map((section) => {
                  const quote = section.sidebarQuote && quoteByKey(section.sidebarQuote);
                  return (
                    <div
                      className={`af-section ${quote ? 'af-section-has-quote' : ''}`}
                      key={section.key}
                      style={hueVars(section.hue, section.hueOpts)}
                    >
                      {/* Rendered before the title by default: on desktop
                          this is absolutely positioned so DOM order doesn't
                          matter, but on mobile (position: static) it falls
                          at the end of the PREVIOUS section instead of
                          interrupting this section's own title. Spiritual
                          Practice's quote is the one exception that stays
                          after its own title (quoteAfterTitle). */}
                      {quote && !section.quoteAfterTitle && (
                        <aside className="af-section-quote">
                          <Quote text={quote.text} author={quote.author} />
                        </aside>
                      )}

                      <h2 className="subtitle-heading af-section-title">{section.title}</h2>

                      {quote && section.quoteAfterTitle && (
                        <aside className="af-section-quote">
                          <Quote text={quote.text} author={quote.author} />
                        </aside>
                      )}

                      <div className={quote ? 'af-section-body af-section-body-narrow' : 'af-section-body'}>
                        {section.intro.map((p, idx) => (
                          <p className="af-section-intro" key={idx}>{p}</p>
                        ))}

                        {section.fields.map((field) => renderField(field))}

                        {section.quote && <blockquote className="af-pullquote">{section.quote}</blockquote>}

                        {section.trailingNote && <p className="af-section-trailing-note">{section.trailingNote}</p>}
                      </div>

                      <div className="gold-divider af-section-divider"></div>
                    </div>
                  );
                })}

                {/* Benefits recap — openable dropdowns, right before Submit */}
                <div className="af-benefits" id="af-benefits-recap">
                  <h2 className="af-plain-heading">In the coming three months, be prepared (AND even excited?!) for these beneficial, lasting shifts — subtly or drastically:</h2>

                  <ul className="af-benefit-list">
                    {BENEFITS.map((b) => (
                      <li key={b.key} className="af-benefit-item">
                        <div className="collapsible-header af-benefit-header" onClick={() => toggleBenefit(b.key)}>
                          <span className={`triangle ${openBenefits[b.key] ? 'open' : ''}`}></span>
                          {b.text}
                        </div>
                        <div className={`collapsible-content ${openBenefits[b.key] ? 'open' : ''}`}>
                          <p className="af-benefit-detail">{b.detail}</p>
                          {b.review && <Quote text={b.review.text} author={b.review.author} />}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <p className="af-tagline">Until feeling any other way is <em>literally</em> a memory.</p>
                  
                  <div className="gold-divider"></div>

                  <p className="af-tagline">Get your energy back, and get your life back.</p> 

                  <div className="gold-divider"></div>

                  <p className="af-tagline">I'm ready →</p> 
                </div>

                {missingField && (
                  <p className="af-submit-blocked-note">
                    Please answer "{missingField.label}" before submitting — jumping you there now.
                  </p>
                )}

                <button type="submit" className="btn" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Submitting…' : 'Submit'}
                </button>
              </form>

              {status === 'error' && (
                <div className="alignment-form-error">
                  <p>
                    Something went wrong on our end — sorry about that. Your answers are still right here, so you can just try again.
                  </p>
                  <div className="alignment-form-error-actions">
                    <button type="button" className="btn" onClick={submit} disabled={status === 'submitting'}>
                      Try Again
                    </button>
                    {failedAttempts >= 2 && (
                      <a href={buildMailto(answers)} className="btn btn-outline">
                        Email Me Directly →
                      </a>
                    )}
                  </div>
                  {failedAttempts >= 2 && (
                    <p className="alignment-form-error-note">
                      Still not working — please use the button above to send your answers directly by email so nothing gets lost.
                    </p>
                  )}
                </div>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default AlignmentForm;
