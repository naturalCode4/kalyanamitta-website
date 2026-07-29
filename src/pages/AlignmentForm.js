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
    key: 'relationships',
    text: 'Improved relationships',
    detail: 'Connect from alignment. Increase your capacity for genuine connection, honesty, and love.',
    review: { text: "It helped me shift a challenging relationship dynamic I'd been struggling with. I'm actually seeing lasting changes.", author: 'Gloria R.' },
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
    text: 'Be deeply met, compassionately supported, and guided',
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
    title: 'More on the spiritual practice',
    body: (
      <p>Alongside EFT, we introduce or deepen a spiritual practice that's genuinely yours. I can teach or help you deepen: meditation, breathwork, yoga, voice-based sound healing, prayer, ecstatic dance, or another practice you're already drawn to. We'll find a good fit; you don't have to know now.</p>
    ),
  },
  {
    key: 'howDeepHowFast',
    title: 'How Deep, How Fast?',
    body: (
      <p>Ultimately, everything that happens is according to what you're ready for. Some issues may radically shift like magic within a single session. I've seen it happen time and time again. Older, deeper patterns may move through gradually, with patience. What I can tell you is that when it moves, it moves profoundly — not just on the surface. I'll meet you right where you're at, guide you, encourage your best, and help you get what you came here for.</p>
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
      'The vast majority of people are carrying heavy baggage that quietly affects their life-force, peace, relationships, confidence, health, clarity, and much more.',
      'This is a real, sustained transformation that can profoundly shift nearly anything you carry.',
    ],
    fields: [
      { label: 'What feels like the biggest obstacle(s) right now?', type: 'textarea', rows: 5 },
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
    intro: ['This asks real commitment willingness to turn toward yourself.'],
    fields: [
      { label: 'If you knew — really knew — that this could genuinely change, how much would you want that — on a scale of 1-10?', type: 'scale', hue: 150, hueOpts: { light: 78 } },
      { label: 'This is a three-month container of real transformation. On a scale of 1–10, how ready are you to show up fully for that — in time, energy, and financially?', type: 'scale', hue: 175, hueOpts: { light: 78 } },
      { label: 'Real transformation tends to ripple: waves of emotion, deep questions, shifts in your sense of self, your relationships, your priorities, the way you see things — all of it may move. On a scale of 1–10, how ready are you to show up to that kind of unfolding?', type: 'scale', hue: 200, hueOpts: { light: 78 } },
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
        label: 'What areas of your life — inner or outer — matter most to you right now?',
        note: "(These are just suggested categories your Areas of Focus might fall under — it can be whatever's actually yours: recovering lost emotional clarity or strength, releasing difficult emotions, thought patterns, anxiety, or depression, healing trauma, PTSD, or ancestral/cultural conditioning, authenticity, confidence, and voice, relationships, sexual energy and intimacy, true masculinity, true femininity, purpose, work, or money, life transitions, physical health, spiritual growth, or something else entirely.)",
        type: 'textarea',
        rows: 6,
      },
    ],
    trailingNote: "You don't need this fully figured out in advance. Discovering the roots together is part of the work, and we're free to shift focus as we go. Nothing here is fixed.",
  },
  {
    key: 'spiritualPractice',
    title: 'Spiritual Practice',
    hue: 210,
    hueOpts: { light: 78 },
    sidebarQuote: 'ethan',
    intro: ['This modality will be yours for life.'],
    fields: [
      { label: 'Are you interested in developing a spiritual practice? Why yes, why no?', type: 'textarea', rows: 4 },
      { label: 'Do you currently have a spiritual or contemplative practice? If so, what is it?', type: 'textarea', rows: 4 },
      {
        label: "I can teach or help you deepen: meditation, breathwork, yoga, voice-based sound healing, prayer, ecstatic dance, or another practice you're drawn to. Does anything here call to you?",
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
    intro: ["This isn't about disqualifying you — it's about making sure this is safe and appropriate for where you're at right now, and if it's not quite the right fit today, I want to help point you toward what would actually help more. This work can complement professional mental health treatment once you're stable."],
    fields: [
      {
        label: 'Are you currently receiving care from a therapist, doctor, psychiatrist, or other health professional? If so, briefly, what for?',
        note: '(This work complements medical and mental-health care — it is not a replacement for it.)',
        type: 'textarea',
        rows: 4,
      },
      { label: 'Is there anything about your physical or mental health I should know, to work with you safely and responsibly?', type: 'textarea', rows: 4 },
      {
        label: 'Are you currently in crisis, or having thoughts of harming yourself or someone else?',
        note: "If yes: please reach out to a crisis line or emergency services right away — in the US, you can call or text 988. This program isn't equipped to support acute crisis, but I care about you getting the right help. (Optional)",
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

  const toggleBenefit = (key) => setOpenBenefits((prev) => ({ ...prev, [key]: !prev[key] }));
  const toggleMore = (key) => setOpenMore((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleChange = (label) => (e) => {
    setAnswers((prev) => ({ ...prev, [label]: e.target.value }));
  };

  const handleChoice = (label, value) => {
    setAnswers((prev) => ({ ...prev, [label]: value }));
  };

  const submit = async (e) => {
    if (e) e.preventDefault();
    if (status === 'submitting') return; // guard against double-submit

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
      className="form-group af-field"
      key={field.name}
      style={field.hue !== undefined ? hueVars(field.hue, field.hueOpts) : undefined}
    >
      <label htmlFor={field.name}>{field.label}</label>
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

      {field.type === 'text' && (
        <input
          id={field.name}
          type="text"
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
          {['Yes', 'No'].map((opt) => (
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
        <section className="af-hero">
          <div className="container">
            <h1 className="subtitle-heading">Alignment Form</h1>
            <p className="alignment-form-confirmation">
              Congradulations on submitting your Alignment Form! I've received it and will reach out to you shortly.
            </p>
          </div>
        </section>
      ) : (
        <>
          {/* Hero / welcome */}
          <section className="af-hero">
            <div className="container">
              <h1 className="subtitle-heading">Alignment Form</h1>
              <p className="af-hero-line"><u className="af-underline">Welcome.</u></p>
              <p className="af-hero-line">
                In the <em>Tap Into Freedom</em> program you will become more calm, happy, free, and empowered as your baseline, dissolve pain that's been quietly running your life, and restore your freedom, for good.
              </p>
            </div>
          </section>

          {/* Transformation emphasis + review process */}
          <section className="af-transform" style={hueVars(0, { sat: 60, light: 75 })}>
            <div className="container">
              <p className="af-emphasis">
                A life-changing shift on every level: emotionally, mentally, energetically, neurologically, physically down into the cells of the body and your very DNA. A wonderful, lasting upgrade to your life — starting from exactly where you're at.
              </p>

              <div className="gold-divider"></div>

              <p className="af-review-note">
                I review each application personally. If it's a good fit, we'll set up a free 30-minute call to understand the program better, ask each other any questions we have, and get to know each other better.
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
            </div>
          </section>

          {/* The actual survey */}
          <section className="af-survey">
            <div className="container af-survey-container">
              <form className="alignment-form" onSubmit={submit}>
                {SECTIONS.map((section) => {
                  const quote = section.sidebarQuote && quoteByKey(section.sidebarQuote);
                  return (
                    <div
                      className={`af-section ${quote ? 'af-section-has-quote' : ''}`}
                      key={section.key}
                      style={hueVars(section.hue, section.hueOpts)}
                    >
                      <h2 className="subtitle-heading af-section-title">{section.title}</h2>

                      {quote && (
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
                <div className="af-benefits">
                  <h2 className="af-plain-heading">In the coming three months, be prepared to will have these wonderful, lasting shifts — subtly or drastically:</h2>

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
                </div>

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
