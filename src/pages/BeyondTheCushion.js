import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProgramPage.css';
import { Helmet } from 'react-helmet';
import pic10 from '../assets/pic10.jpg';
import pic17 from '../assets/pic17.jpg';

// Every "Fill out the Alignment Form" CTA on this page reads from this one
// constant.
const ALIGNMENT_FORM_URL = '/alignment-form';

const Stars = () => <span className="fd-stars">★★★★★</span>;

const Quote = ({ text, author }) => (
  <div className="fd-quote">
    <Stars />
    <p className="fd-quote-text">"{text}"</p>
    <p className="fd-quote-author">— {author}</p>
  </div>
);

const BeyondTheCushion = () => {
  const [openSections, setOpenSections] = useState({
    costOfCarrying: false,
    eftWorks: false,
    sessionExpect: false,
    whereLearned: false,
    bypass: false,
    teacher: false,
    integration: false,
    fullStory: false,
    forYouIf: false,
    notForYouIf: false,
  });

  const [openBenefits, setOpenBenefits] = useState({
    stillness: false,
    supports: false,
    trauma: false,
    bypass: false,
    depth: false,
    embodied: false,
    shame: false,
    reconnect: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleBenefit = (key) => {
    setOpenBenefits((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const benefits = [
    {
      key: 'stillness',
      text: 'A nervous system that can actually meet stillness',
      detail: "Instead of just enduring it, white-knuckling it, or quietly using activity/effort to avoid it. Sitting becomes something your body can do, not just your will.",
    },
    {
      key: 'supports',
      text: 'A practice that supports you, instead of covering for you',
      detail: "You stop unconsciously using meditation, yoga, or ceremony as a container to manage or suppress what's actually asking to be felt — because you have somewhere better suited to bring it.",
      review: { text: 'I always leave our sessions feeling lighter.', author: 'Kathryn S.' },
    },
    {
      key: 'trauma',
      text: 'Real relief from trauma and C-PTSD symptoms',
      detail: "The kind that years on the cushion alone didn't fully resolve — hypervigilance, emotional flooding, shutdown, the nervous system stuck in old survival patterns.",
    },
    {
      key: 'bypass',
      text: 'Less spiritual bypass, more integration',
      detail: "Less using transcendence, positivity, or 'it's all consciousness anyway' to skip past what's actually unresolved and human in you.",
    },
    {
      key: 'depth',
      text: 'Renewed capacity for depth in practice',
      detail: "When the backlog clears, insight has room to actually land — and stay landed — instead of being crowded out by static.",
      review: { text: "I feel like he opened a door to my spirituality that I wasn't even sure existed.", author: 'Mckenzi P.' },
    },
    {
      key: 'embodied',
      text: 'Insight that shows up in your life, not just your understanding',
      detail: "Close the gap between 'I understand this intellectually' and actually responding differently in your relationships, your body, your day.",
      review: { text: 'The work we did together helped me shift and dissolve old social triggers and conditioning, empowering me to show up with more confidence.', author: 'Bella S.' },
    },
    {
      key: 'shame',
      text: 'Freedom from "I should be further along by now"',
      detail: "The particular shame of being a dedicated practitioner who still struggles — years of sitting doesn't mean years of healing, and that's not a personal failure.",
    },
    {
      key: 'reconnect',
      text: 'Reconnection with why you started practicing in the first place',
      detail: "Before it became identity, achievement, or obligation. Back to aliveness, curiosity, and genuine devotion.",
    },
  ];

  return (
    <div className="program-page">
      <Helmet>
        <title>Beyond the Cushion | EFT for Spiritual Practitioners with Adin</title>
        <meta name="description" content="A 12-week EFT program for spiritual practitioners whose meditation, yoga, or ceremonial practice hasn't fully addressed their deeper trauma, psyche, or humanity." />
        <meta property="og:title" content="Beyond the Cushion | EFT for Spiritual Practitioners" />
        <meta property="og:description" content="For practitioners whose practice hasn't touched their deeper trauma, psyche, or humanity. A 12-week EFT program with Adin." />
        <meta property="og:url" content="https://healing-on-tap.com/beyond-the-cushion" />
      </Helmet>

      {/* Hero */}
      <section className="fd-hero">
        <div className="container">
          <h1 className="subtitle-heading">Beyond the Cushion</h1>
          <p className="fd-hero-line fd-italic">EFT for Spiritual Practitioners</p>
          <p className="fd-hero-line">Your practice took you far. <u className="fd-underline">This takes you the rest of the way.</u></p>
          <p className="fd-hero-line">Clear what meditation, yoga, or ceremony alone <u className="fd-underline">couldn't fully reach.</u></p>
          <p className="fd-hero-line">Come back to your practice lighter — <u className="fd-underline">for good.</u></p>
          <div className="fd-cta-center">
            <a href={ALIGNMENT_FORM_URL} className="btn">Apply →</a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="fd-intro section-dark">
        <div className="container">
          <p className="fd-center fd-narrow fd-intro-strong">
            You've done real practice. This isn't about doing more of it. It's about finally addressing what practice alone was never quite built to reach.
          </p>
          <p className="fd-emphasis">
            <u className="fd-underline">Listen:</u> A lot of committed practitioners are quietly carrying an <u className="fd-underline">enormous</u>, invisible backlog: unprocessed trauma, old emotion, nervous system patterns that formed <em>long before</em> the practice began. It doesn't always show up as suffering you'd name out loud — sometimes it shows up as a plateau, a subtle bypass, or a body that never quite lets stillness all the way in.
          </p>

          <div className="collapsible-header fd-inline-trigger" onClick={() => toggleSection('costOfCarrying')}>
            <span className={`triangle ${openSections.costOfCarrying ? 'open' : ''}`}></span>
            See what this is actually costing practitioners
          </div>
          <div className={`collapsible-content ${openSections.costOfCarrying ? 'open' : ''}`}>
            <p className="fd-emphasis">
              It <u className="fd-underline">costs</u> people the very thing they came to practice for: <em>ease, presence, embodiment, and genuine peace.</em> Years of sitting can build real stability and insight, and still leave the coarse, difficult waves crashing in — because insight and nervous-system resolution aren't automatically the same thing.
            </p>
          </div>

          <blockquote className="fd-pullquote">
            "And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom." — Anaïs Nin
          </blockquote>

          <div className="gold-divider"></div>

          <p className="fd-emphasis"><u className="fd-underline"><em>Beyond the Cushion</em></u> is a 12-week container of guided, one-on-one transformation, built specifically for practitioners whose practice hasn't fully touched their deeper trauma, psyche, or humanity. It exists to close that gap. For good.</p>
          <p className="fd-emphasis">It's the same depth of work as my flagship <Link to="/freedom-dojo" className="fd-inline-link">Freedom Dojo</Link> program — aimed specifically at what your cushion, mat, or altar couldn't fully clear.</p>
          <p className="fd-emphasis">This isn't a replacement for your practice. It's the complement to it.</p>

          <div className="gold-divider"></div>

          <Quote text="Adin's presence is grounded, compassionate, and deeply intuitive — he creates a safe space where real emotional release and clarity can unfold." author="Ryan S." />

          <div className="fd-cta-center">
            <a href={ALIGNMENT_FORM_URL} className="btn">Sign me up! I want my practice to finally land! →</a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="fd-benefits section-rainbow">
        <div className="container">
          <h2 className="subtitle-heading">It's Time to Let Your Practice Do Less Work.</h2>

          <p className="fd-emphasis-strong">
            This is where you get to say: I'm done quietly using my practice to manage what it was never built to resolve. <u className="fd-underline">I'm giving that job to the right tool now.</u>
          </p>
          <p className="fd-emphasis-strong">This is real, sustained transformation aimed at what your meditation, yoga, or ceremonial practice has been working around — down to the root.</p>

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

          <p className="fd-emphasis fd-emphasis-lg">Until stillness stops being something you have to fight for.</p>

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
          <p className="fd-emphasis-strong">Not another technique to add to the stack. Not a deeper retreat. Not more hours on the cushion, hoping it finally breaks through.</p>
          <p className="fd-emphasis-strong">
            <em>A life-changing shift on every level: emotionally, mentally, energetically, neurologically, physically — down into the nervous system itself. A wonderful, <u className="fd-underline">lasting upgrade</u> to your practice and your life, starting from exactly where you're at.</em>
          </p>
          <p className="fd-emphasis-strong">I'm telling you straight: this is what I guide people to achieve.</p>
          <p className="fd-tagline">Get your nervous system back, and get your practice back.</p>
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
              <h3 className="fd-gold-heading">How do we create this shift?</h3>
              <ul className="list-bullets fd-method-list">
                <li>A 3-month container of <strong>transformative healing and upgrades</strong>.</li>
                <li><strong>Twelve</strong> potent <strong>90-minute EFT</strong> (Emotional Freedom Techniques, aka Tapping) & <strong>Coaching</strong> sessions with Adin.</li>
                <li>A <strong>private 1-on-1 mentorship</strong>, built to fully meet you — not a group program where you're one of many.</li>
                <li>Direct <strong>email access with Adin</strong>, for ongoing support between sessions.</li>
                <li>Gain proficiency using <strong>EFT on yourself</strong> — a practical complement you can bring back to your cushion, mat, or altar for life.</li>
                <li>Your existing practice stays yours. We're not here to replace it, redirect it, or relitigate your tradition.</li>
              </ul>

              <div className="gold-divider"></div>

              <h3>So What is EFT/Tapping — and why isn't sitting with it enough?</h3>

              <aside className="fd-sidebar fd-side-right">
                <blockquote className="fd-pullquote">
                  "EFT is a self-healing modality that combines aspects of Chinese medicine and modern psychology with self-acceptance and unconditional love. EFT recalibrates your brain's responses to stimuli, reprogramming your body and brain's ability to function properly." — Sonya Sophia, EFT Expert, and My EFT Trainer and Certifier
                </blockquote>
              </aside>

              <p>
                <b>EFT/Tapping</b> is a <b>highly effective tool</b> for resolving nearly <b>any issue</b> completely — simple, gentle, and fast. You tap acupoints on your own body while being <b>skillfully guided</b> to address your issue or goal.
              </p>
              <p>
                Sitting in stillness with an activated nervous system can genuinely help — and it can also, at a certain intensity, reinforce the very freeze or suppression pattern you're trying to release. EFT gives the system an active, physical, titrated way to actually discharge and process what's held — which is often exactly the missing piece between "I've observed this pattern for years" and "this pattern is actually resolved."
              </p>

              <Quote text="It was like magic!" author="Andrea L." />

              <div className="collapsible-header fd-inline-trigger" onClick={() => toggleSection('eftWorks')}>
                <span className={`triangle ${openSections.eftWorks ? 'open' : ''}`}></span>
                Want to know more about the mechanism behind Tapping?
              </div>
              <div className={`collapsible-content ${openSections.eftWorks ? 'open' : ''}`}>
                <p>
                  Research suggests tapping reduces activation of the amygdala's threat response, allowing the nervous system to shift into a calmer, more regulated state — even while bringing attention to what would previously have triggered the body's automatic stress response. This lets us stay present with the issue and feel safe enough to fully feel and process it, rather than dissociating or spiritually bypassing past it.
                </p>
                <p>
                  EFT incorporates acupoints from Traditional Chinese Medicine, balancing the body's energy meridians while addressing the emotions and beliefs we're working to transform. EFT is well-backed by over <a href="https://eftuniverse.com/research-studies" target="_blank" rel="noopener noreferrer" className="fd-inline-link">100 studies and trials</a>.
                </p>
              </div>

              <div className="gold-divider"></div>

              <div className="collapsible-header fd-inline-trigger" onClick={() => toggleSection('whereLearned')}>
                <span className={`triangle ${openSections.whereLearned ? 'open' : ''}`}></span>
                Where did I learn this?
              </div>
              <div className={`collapsible-content ${openSections.whereLearned ? 'open' : ''}`}>
                <p className="fd-color-green">
                  I trained in EFT in the context of a <a href="https://trainwithsonya.us/" target="_blank" rel="noopener noreferrer" className="fd-inline-link">school</a> that embraces the deepest spiritual wisdom and neuroscience — a rare combination that speaks directly to practitioners who take both dimensions seriously.
                </p>
              </div>

              <p className="fd-tagline">My wish is that your practice gets to be practice again — not a coping mechanism in disguise.</p>
              <div className="fd-cta-center">
                <a href={ALIGNMENT_FORM_URL} className="btn">Be part of the magic →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="fd-about">
        <div className="container">
          <h2 className="subtitle-heading">Why I Built This.</h2>

          <div className="fd-flow">
            <aside className="fd-sidebar fd-side-left">
              <Quote text="Adin is an innately gifted intuitive healer, with the dedication and discipline to match his inborn talents. I trust both the quality of his own energy and the many ways he facilitates energetic balance and emotional wellness for others." author="Zachary H." />
            </aside>

            <div className="fd-flow-main fd-flow-main-both">
              <img
                src={pic17}
                alt="Adin outdoors among flowers"
                className="fd-about-image"
              />
              <p>
                This one is personal. I spent years in monasteries and deep on the yoga mat, doing serious, sincere practice. And underneath all of it, I was carrying full-blown C-PTSD, anxiety, and a real backlog of unprocessed emotion and trauma.
              </p>
              <p>
                The practices helped — genuinely. They gave me stability, spaciousness, real insight. But they weren't actually resolving what was backed up in my nervous system. I've come to believe the cushion is an extraordinary place for many things. In my own experience, it is <em>not</em> the most effective place to metabolize trauma. Sitting still and turning inward while a nervous system is activated can even reinforce the very pattern you're trying to settle.
              </p>
              <p>
                EFT is where this stuff actually got addressed. And having that tool changed two things for me, in this order of how I noticed them, but not in order of importance: First, it gave my practice room to just <em>be</em> practice — I stopped quietly using meditation as a container to manage or suppress what was actually asking to be felt, because I finally had somewhere better suited to bring it. Second, and this is the part that mattered more: <u className="fd-underline">it actually cleared those things</u>. Which made the practice itself so much easier — so much less white-knuckling through coarse, difficult waves that kept crashing back no matter how many hours I sat.
              </p>
              <p>
                I'm not here to compete with your tradition, your teacher, or your practice. I'm here to be the complement to it — the part that was maybe always missing.
              </p>

              <div className="gold-divider fd-about-divider"></div>

              <p>
                I am Advanced Certified in EFT through the Sonya Sophia School of Living Arts. Reiki II. 500-hour Yoga Teacher Training. Deep, lived experience across Buddhist, Native American, and other spiritual traditions — including real monastic and ashram time. Shaped by a life seeking what actually illuminates <u className="fd-underline">Truth, Freedom, Love, and Goodness.</u>
              </p>

              <div className="gold-divider"></div>

              <p className="fd-tagline">Let your practice be practice. Let this be the rest.</p>
              <div className="fd-cta-center">
                <a href={ALIGNMENT_FORM_URL} className="btn">Join Now →</a>
              </div>
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
              <p>Whatever you actually bring, we work with that. Common terrain for practitioners includes:</p>

              <ul className="list-bullets">
                <li><strong>C-PTSD and trauma</strong> that meditation, yoga, or ceremony alone hasn't resolved.</li>

                <li>
                  <div className="collapsible-header fd-inline-trigger" onClick={() => toggleSection('bypass')}>
                    <span className={`triangle ${openSections.bypass ? 'open' : ''}`}></span>
                    <strong>Spiritual bypass.</strong>
                  </div>
                  <div className={`collapsible-content ${openSections.bypass ? 'open' : ''}`}>
                    <p>Using transcendence, positivity, non-attachment, or "it's all consciousness anyway" to skip past what's actually unresolved and human in you. This is one of the most common — and most invisible — patterns I see in serious practitioners.</p>
                  </div>
                </li>

                <li><strong>Burnout and spiritual perfectionism.</strong> The exhausting sense that you should always be further along, calmer, more equanimous, less reactive.</li>
                <li><strong>The gap between insight and embodiment.</strong> "I understand this pattern completely and I still react exactly the same way."</li>

                <li>
                  <div className="collapsible-header fd-inline-trigger" onClick={() => toggleSection('teacher')}>
                    <span className={`triangle ${openSections.teacher ? 'open' : ''}`}></span>
                    <strong>Teacher and community dynamics.</strong>
                  </div>
                  <div className={`collapsible-content ${openSections.teacher ? 'open' : ''}`}>
                    <p>Disillusionment, complicated power dynamics, or cult-adjacent experiences in a sangha, ashram, or lineage. Grief, anger, or confusion around leaving — or questioning — a teacher or tradition you once gave your full trust to.</p>
                  </div>
                </li>

                <li>
                  <div className="collapsible-header fd-inline-trigger" onClick={() => toggleSection('integration')}>
                    <span className={`triangle ${openSections.integration ? 'open' : ''}`}></span>
                    <strong>Integration after retreats, openings, or psychedelic experience.</strong>
                  </div>
                  <div className={`collapsible-content ${openSections.integration ? 'open' : ''}`}>
                    <p>Profound experiences that opened something real, but left you without a clear way to actually integrate it into an ordinary human life — relationships, work, a body that still has old patterns running.</p>
                  </div>
                </li>

                <li><strong>Restoring trust in your own inner authority</strong>, after years of relying on an external teacher, text, or tradition to tell you what's true.</li>
              </ul>

              <p className="fd-small-italic">… and, again: whatever you actually bring is what we work with. This list is a starting point, not a boundary.</p>
            </div>
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
                  <li>You're a spiritual practitioner, but your practice isn't addressing certain layers of your psyche, trauma, or humanity</li>
                  <li>You've done real practice — meditation, yoga, ceremony, monastic or ashram time — and know the cushion alone hasn't been enough</li>
                  <li>You suspect you've been spiritually bypassing something, and you're ready to actually look</li>
                  <li>You want your insight to land in your nervous system and your life, not just stay in your understanding</li>
                  <li>You're carrying trauma or C-PTSD that predates your practice and hasn't fully resolved through it</li>
                  <li>You want a complement to your path, not a replacement for it</li>
                  <li>You're ready to go deep and be honest, with someone who can hold it</li>
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
                  <li>You're looking for someone to validate that your tradition or teacher was wrong — I'm not here to relitigate your path, just to support what it hasn't reached</li>
                  <li>You're seeking a quick fix with no real engagement — this work asks something of you</li>
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

          <p className="fd-tagline fd-tagline-lg">This is an investment that can positively transform your life and your practice.</p>
          <p className="fd-tagline fd-tagline-lg">It is offered because it brings massive benefit, including</p>

          <ul className="list-bullets fd-investment-list">
            <li><u className="fd-underline">Heal</u> beyond belief, at the root — not just manage symptoms — across your <u className="fd-underline">body, mind, and spirit.</u></li>
            <li>A nervous system that can actually meet stillness.</li>
            <li>A practice that supports you, instead of quietly covering for what's unresolved.</li>
            <li>Restored <u className="fd-underline">depth</u> and <u className="fd-underline">ease</u> in your practice.</li>
            <li><u className="fd-underline">High-level tools</u> that grow with you, long after our three months together.</li>
          </ul>
          <p className="fd-center">
            See the full list of <a href="#benefits" target="_blank" rel="noopener noreferrer" className="fd-inline-link">what you'll gain →</a> and <a href="#method" target="_blank" rel="noopener noreferrer" className="fd-inline-link">what's included →</a>.
          </p>

          <div className="gold-divider"></div>

          <div className="fd-pricing-row">
            <div className="fd-price-card">
              <h3>Standard</h3>
              <p className="fd-price">$3,000</p>
            </div>
            <div className="fd-price-card fd-price-highlight">
              <h3>Founding Cohort</h3>
              <p className="fd-price">$2,420</p>
              <p className="fd-price-note">A genuine thank-you for stepping in early as this program grows into its best form.</p>
            </div>
          </div>
          <br></br>
          <p className="fd-center fd-payment-note"><em>Payment plans available.</em></p>

          <div className="gold-divider"></div>

          <p className="fd-tagline">Go deep, and let your practice finally meet the rest of you.</p>

          <div className="fd-cta-group">
            <a href={ALIGNMENT_FORM_URL} className="btn">I'm Ready –– Fill Out the Alignment Form! →</a>
            <Link to="/contact#get-in-touch" className="btn btn-outline">Have questions? I'm happy to respond by email →</Link>
          </div>
        </div>
      </section>

      {/* Sign off */}
      <section className="fd-signoff">
        <div className="container">
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

export default BeyondTheCushion;
