import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProgramPage.css';
import { Helmet } from 'react-helmet';
import pic10 from '../assets/pic10.jpg';

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

const JEWS = () => {
  const [openSections, setOpenSections] = useState({
    costOfCarrying: false,
    eftWorks: false,
    sessionExpect: false,
    whereLearned: false,
    spirituality: false,
    persecution: false,
    food: false,
    israel: false,
    fullStory: false,
    forYouIf: false,
    notForYouIf: false,
  });

  const [openBenefits, setOpenBenefits] = useState({
    nervous: false,
    money: false,
    safety: false,
    food: false,
    ancestral: false,
    spirituality: false,
    goodJew: false,
    israel: false,
    family: false,
    humor: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleBenefit = (key) => {
    setOpenBenefits((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const benefits = [
    {
      key: 'nervous',
      text: 'A nervous system that isn\'t running on high alert as its resting state',
      detail: "Let vigilance stop being the family heirloom passed down at every meal. You can be alert to real danger without living in it 24/7.",
    },
    {
      key: 'money',
      text: 'Peace with money',
      detail: "Dissolve the scarcity, guilt, and 'never enough, never safe' patterns around money — whether you inherited anxiety about having none, or guilt about having some.",
    },
    {
      key: 'safety',
      text: 'Genuine safety, empowerment, and peace',
      detail: "Feel safe now — not just perpetually braced for the next thing. Reclaim the difference between historical memory and present-moment threat.",
      review: { text: 'I always leave our sessions feeling lighter.', author: 'Kathryn S.' },
    },
    {
      key: 'food',
      text: 'A new relationship with food',
      detail: "No longer eating your feelings, or being fed everyone else's. Food as nourishment and joy again, not obligation, control, or anesthetic.",
    },
    {
      key: 'ancestral',
      text: 'Relief from ancestral and generational weight',
      detail: "The body keeps score of centuries, not just years. We work with what's been carried in the nervous system across generations — grief, hypervigilance, survival patterning — so it can finally move through and resolve.",
    },
    {
      key: 'spirituality',
      text: 'A reclaimed, authentic spirituality',
      detail: "A direct, living relationship with God/Spirit/Judaism that's actually yours — not inherited guilt or performance dressed up as faith.",
      review: { text: "I feel like he opened a door to my spirituality that I wasn't even sure existed.", author: 'Mckenzi P.' },
    },
    {
      key: 'goodJew',
      text: 'Freedom from "good Jew" performance anxiety',
      detail: "Belonging without earning it. Enough-ness that doesn't depend on how observant, how successful, how assimilated, or how anything you are.",
    },
    {
      key: 'israel',
      text: 'More peace around Israel/Palestine and antisemitism',
      detail: "Able to hold real complexity and grief without your nervous system being hijacked by it — whatever your politics. This isn't about telling you what to think.",
    },
    {
      key: 'family',
      text: 'Healthier family relationships',
      detail: "Less enmeshment, more authentic connection. You can love your family and also have a self that isn't managed by their anxiety.",
      review: { text: "It helped me shift a challenging relationship dynamic I'd been struggling with. I'm actually seeing lasting changes.", author: 'Gloria R.' },
    },
    {
      key: 'humor',
      text: 'Your humor and lightness, restored',
      detail: "You get to laugh because you want to — not because it's the only socially sanctioned way to say the unsayable.",
    },
  ];

  return (
    <div className="program-page">
      <Helmet>
        <title>JEWS | Jewish Emotional Wellness Sessions with Adin</title>
        <meta name="description" content="A 12-week EFT & spiritual counseling program for the specific emotional, ancestral, and spiritual patterns of Jewish life — stress, money, food, safety, spirituality, Israel, and more." />
        <meta property="og:title" content="JEWS | Jewish Emotional Wellness Sessions" />
        <meta property="og:description" content="A 12-week EFT & spiritual counseling program for the specific emotional, ancestral, and spiritual patterns of Jewish life." />
        <meta property="og:url" content="https://healing-on-tap.com/jews" />
      </Helmet>

      {/* Hero */}
      <section className="fd-hero">
        <div className="container">
          <h1 className="subtitle-heading">JEWS</h1>
          <p className="fd-hero-line fd-italic">Jewish Emotional Wellness Sessions</p>
          <p className="fd-hero-line">Come home to yourself — <u className="fd-underline">for good.</u></p>
          <p className="fd-hero-line">Release the stress, guilt, and vigilance <u className="fd-underline">running your nervous system</u> since before you were born.</p>
          <p className="fd-hero-line">Reclaim your spirituality, your safety, and your seat at your own table.</p>
          <div className="fd-cta-center">
            <a href={ALIGNMENT_FORM_URL} className="btn">Apply →</a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="fd-intro section-dark">
        <div className="container">
          <p className="fd-center fd-narrow fd-intro-strong">
            This isn't a bit. Okay, it's a little bit a bit — humor is practically load-bearing in this culture. But the healing underneath it is very real.
          </p>
          <p className="fd-emphasis">
            <u className="fd-underline">Listen:</u> If your nervous system was raised on a diet of "they tried to kill us, we survived, let's eat" — you already know the vibe. Most people in this community are quietly carrying an <u className="fd-underline">enormous</u>, normalized weight: inherited vigilance, unprocessed grief, money anxiety, guilt as a primary love language, and a body that's been bracing for the other shoe since before you can remember. <em>None of it was ever fully yours to carry.</em>
          </p>

          <div className="collapsible-header fd-inline-trigger" onClick={() => toggleSection('costOfCarrying')}>
            <span className={`triangle ${openSections.costOfCarrying ? 'open' : ''}`}></span>
            See what this is actually costing us
          </div>
          <div className={`collapsible-content ${openSections.costOfCarrying ? 'open' : ''}`}>
            <p className="fd-emphasis">
              In most families, an anxious parent is a problem to solve. In some of ours, it's a love language — arguably the primary one, delivered fluently and at volume. It <u className="fd-underline">costs</u> people so much: their <em>peace, their relationships, their relationship to their own body, their sense of safety in a safe room, their spirituality, and their joy.</em> Even their view of what's actually happening right now, versus what happened generations ago.
            </p>
          </div>

          <blockquote className="fd-pullquote">
            "And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom." — Anaïs Nin
          </blockquote>

          <div className="gold-divider"></div>

          <p className="fd-emphasis"><u className="fd-underline"><em>JEWS</em></u> — Jewish Emotional Wellness Sessions — is a 12-week container of guided, one-on-one transformation, built specifically for the emotional, ancestral, and spiritual terrain of Jewish life. It exists to end that quiet cost, for good.</p>
          <p className="fd-emphasis">It's the same depth of work as my flagship <Link to="/freedom-dojo" className="fd-inline-link">Freedom Dojo</Link> program — pointed at what's specifically yours to carry as a Jewish person, and specifically ready to be put down.</p>
          <p className="fd-emphasis">Whatever you're holding — the stress, the food stuff, the money stuff, the God stuff, the Israel stuff, the mother stuff — we <em>can</em> shift it.</p>

          <div className="gold-divider"></div>

          <Quote text="Adin's presence is grounded, compassionate, and deeply intuitive — he creates a safe space where real emotional release and clarity can unfold." author="Ryan S." />

          <div className="fd-cta-center">
            <a href={ALIGNMENT_FORM_URL} className="btn">Sign me up! I want my nervous system back! →</a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="fd-benefits section-rainbow">
        <div className="container">
          <h2 className="subtitle-heading">It's Time to Put the Weight Down.</h2>

          <p className="fd-emphasis-strong">
            This is where you get to say: I'm done inheriting a nervous system I never agreed to. <u className="fd-underline">I'm taking my peace back now.</u>
          </p>
          <p className="fd-emphasis-strong">This is real, sustained transformation aimed at what's specifically yours to carry as a Jewish person — down to the root, and down through the generations.</p>

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

          <p className="fd-emphasis fd-emphasis-lg">Until "on edge" stops being your resting heart rate.</p>

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
          <p className="fd-emphasis-strong">Not a coping mechanism. Not "just don't think about it." Not more information about the trauma — actual resolution of it.</p>
          <p className="fd-emphasis-strong">
            <em>A life-changing shift on every level: emotionally, mentally, energetically, spiritually, and physically — down into the nervous system and the body's own inherited memory. A wonderful, <u className="fd-underline">lasting upgrade</u> to your life, starting from exactly where you're at.</em>
          </p>
          <p className="fd-emphasis-strong">I'm telling you straight: this is what I guide people to achieve.</p>
          <p className="fd-tagline">Get your nervous system back, and get your life back.</p>
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
                <li>Gain proficiency using <strong>EFT on yourself</strong>, for life.</li>
                <li>Space to explore an <strong>authentic Jewish spiritual practice</strong> — Kabbalistic, contemplative, or otherwise — genuinely yours, not inherited (optional but encouraged).</li>
              </ul>

              <div className="gold-divider"></div>

              <h3>So What is EFT/Tapping?!</h3>
              <p>
                <b>EFT/Tapping</b> is a <b>highly effective tool</b> for resolving nearly <b>any issue</b> completely — simple, gentle, and fast. You'll tap acupoints on your own body while being <b>skillfully guided</b> to address your issue or goal.
              </p>
              <p>
                It neutralizes and <b>dissolves</b> negative thought patterns and emotions, undesired conditioning, and restores the <b>health of your nervous system</b>. This matters especially here: a lot of what we're working with isn't just personal history — it's <em>patterning that predates you</em>. Your body may be holding what your grandparents didn't get to fully feel or process. EFT is one of the few tools I've found that can actually reach that layer, gently and directly.
              </p>

              <Quote text="It was like magic!" author="Andrea L." />

              <div className="collapsible-header fd-inline-trigger" onClick={() => toggleSection('eftWorks')}>
                <span className={`triangle ${openSections.eftWorks ? 'open' : ''}`}></span>
                Want to know more about the magic behind Tapping?
              </div>
              <div className={`collapsible-content ${openSections.eftWorks ? 'open' : ''}`}>
                <p>
                  Research suggests tapping reduces activation of the amygdala's threat response, allowing the nervous system to shift into a calmer, more regulated state — even while bringing attention to what would previously have triggered the body's automatic alarm. This matters a great deal for a nervous system trained, for good historical reasons, to treat "alarm" as the default setting.
                </p>
                <p>
                  EFT incorporates acupoints from Traditional Chinese Medicine, balancing the body's energy meridians while we address the emotions and beliefs we're working to transform — giving ourselves a needle-free acupuncture treatment alongside the emotional processing.
                </p>
                <p>
                  EFT is well-backed by over <a href="https://eftuniverse.com/research-studies" target="_blank" rel="noopener noreferrer" className="fd-inline-link">100 studies and trials</a>.
                </p>
              </div>

              <div className="collapsible-header fd-inline-trigger" onClick={() => toggleSection('sessionExpect')}>
                <span className={`triangle ${openSections.sessionExpect ? 'open' : ''}`}></span>
                Curious what you'll actually do in a session?
              </div>
              <div className={`collapsible-content ${openSections.sessionExpect ? 'open' : ''}`}>
                <p>
                  Gentle tapping on various points on the body, call-and-response guidance, expressing in your own voice. I meet you exactly where you are — including if where you are is "I don't fully know what I believe anymore, and that scares me."
                </p>
              </div>

              <div className="gold-divider"></div>

              <div className="collapsible-header fd-inline-trigger" onClick={() => toggleSection('whereLearned')}>
                <span className={`triangle ${openSections.whereLearned ? 'open' : ''}`}></span>
                Where did I learn this?
              </div>
              <div className={`collapsible-content ${openSections.whereLearned ? 'open' : ''}`}>
                <p className="fd-color-green">
                  I trained in EFT in the context of a <a href="https://trainwithsonya.us/" target="_blank" rel="noopener noreferrer" className="fd-inline-link">school</a> that embraces the deepest spiritual wisdom and neuroscience. Alongside it, I've spent real time in Kabbalistic study and Jewish mysticism — and done my own work of separating what's authentically sacred from what was just inherited fear dressed up as obligation.
                </p>
              </div>

              <p className="fd-tagline">My wish is that this specific weight stops being invisible, and starts being liftable.</p>
              <div className="fd-cta-center">
                <a href={ALIGNMENT_FORM_URL} className="btn">Be part of the magic →</a>
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
              <p>Whatever you actually bring, we work with that — this is never a checklist applied to you. It's a map of common terrain, not a diagnosis. Areas we often go:</p>

              <ul className="list-bullets">
                <li><strong>Normalized stress and anxiety.</strong> The kind that's almost celebrated — including in stressed, loving, anxious parents who showed care through worry. Learning that calm is also safe.</li>
                <li><strong>Money.</strong> Scarcity, guilt, provider-pressure, and the belief that financial disaster is always one bad decision away.</li>
                <li><strong>The belief in persecution.</strong> Finding real safety, empowerment, and peace — distinguishing historical memory from present-moment threat, without dishonoring the history.</li>
                <li><strong>War and conflict trauma</strong>, and the mindset of being permanently "at war" — in the body, in relationships, in how you brace for the day.</li>
                <li><strong>Jewish eating.</strong> Being fed, being expected to eat, eating to cope, overeating. Food as love, food as control, food as anesthetic — finding food as just food again.</li>
                <li><strong>Ancestral and generational weight.</strong> Holocaust and diaspora trauma carried in the nervous system, sometimes without a single conscious memory attached to it.</li>
                <li><strong>The assimilation/identity tightrope.</strong> Never feeling Jewish enough, or too Jewish, in either direction — and the exhaustion of managing that.</li>

                <li>
                  <div className="collapsible-header fd-inline-trigger" onClick={() => toggleSection('spirituality')}>
                    <span className={`triangle ${openSections.spirituality ? 'open' : ''}`}></span>
                    <strong>Connecting to authentic Jewish spirituality.</strong>
                  </div>
                  <div className={`collapsible-content ${openSections.spirituality ? 'open' : ''}`}>
                    <p>
                      Recovering from indoctrination. Reclaiming spirituality and trust in your own direct connection with God — being one with God, rather than a dualistic, transactional relationship built on fear of punishment. I ask deep questions here, and I don't come with easy pre-packaged answers. I come with real respect for the tradition, real experience in Kabbalah and Jewish mysticism, and real experience exiting what wasn't true for me while keeping what is. You get to find your own version of this — not mine, not your grandmother's, not your rabbi's. Yours.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="collapsible-header fd-inline-trigger" onClick={() => toggleSection('israel')}>
                    <span className={`triangle ${openSections.israel ? 'open' : ''}`}></span>
                    <strong>Israel-Palestine and antisemitism.</strong>
                  </div>
                  <div className={`collapsible-content ${openSections.israel ? 'open' : ''}`}>
                    <p>
                      Wherever you stand — this is not about your politics, and I won't try to change them. It's about the grief, fear, rage, guilt, isolation, or numbness that's been living in your body since October 2023, or long before it. You get a space to feel all of it without performing a position for anyone.
                    </p>
                  </div>
                </li>

                <li><strong>"Good Jew" performance pressure.</strong> Achievement, observance, or assimilation as inherited survival strategies — and the guilt engine that runs underneath them.</li>
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
                  <li>You're Jewish (by birth, by choice, by feeling — however that lands for you) and know there's specific weight here that generic self-help doesn't quite reach</li>
                  <li>You're tired of anxiety, guilt, or vigilance being your resting state</li>
                  <li>You have a complicated relationship with faith, observance, or your family's version of Judaism, and want to find your own</li>
                  <li>You carry something around food, money, safety, or Israel that you haven't found words for yet</li>
                  <li>You want embodied change, not just another conversation about it</li>
                  <li>You're ready to go deep and be honest, with someone who can hold it — and still make you laugh</li>
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
                  <li>You're looking for a rabbi, a political position, or religious instruction — I'm a healer, not a religious authority</li>
                  <li>You're seeking a quick fix with no real engagement — this work asks something of you</li>
                  <li>You're in acute crisis or need primary medical or mental-health treatment — that care comes first, and this can complement it once you're stable</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="fd-small-italic">This work complements, and does not replace, medical or mental-health care.</p>
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

            <div className="fd-flow-main fd-flow-main-both">
              <img
                src={pic10}
                alt="Adin outdoors among the trees"
                className="fd-about-image"
              />
              <p>
                I have <u className="fd-underline">lived</u> this work, not just studied it. I've done my own real work in Kabbalistic study and Jewish mysticism, and my own real work exiting the parts of inherited religion and family patterning that ran on guilt and fear rather than truth — while keeping, and deepening, what's genuinely sacred. I've come through PTSD, childhood wounding, anxiety, depression, shame, and insecurity, and learned to walk as a sensitive, conscious soul and 'black sheep.'
              </p>
              <p>
                When you work with me, you're with someone who's <u className="fd-underline"><em>been there in the mud</em></u> — including this specific mud — and made it through. You're not alone in this, and you're not the only one who's ever felt this way about any of it.
              </p>
              <p>
                I don't arrive with an agenda about how Jewish you should be, or what you should believe. I arrive with real questions, real respect, and a toolkit that actually reaches the nervous system, not just the mind.
              </p>

              <div className="gold-divider fd-about-divider"></div>

              <p>
                I am Advanced Certified in EFT through the Sonya Sophia School of Living Arts. Reiki II. 500-hour Yoga Teacher Training. Deep experience across Buddhist, Native American, Jewish/Kabbalistic, and other spiritual traditions. Shaped by a life seeking what actually illuminates <u className="fd-underline">Truth, Freedom, Love, and Goodness</u> — including, and especially, within my own inheritance.
              </p>

              <div className="gold-divider"></div>

              <p className="fd-tagline">Come home to yourself. Bring the humor. Bring the grief. Bring all of it.</p>
              <div className="fd-cta-center">
                <a href={ALIGNMENT_FORM_URL} className="btn">Join Now →</a>
              </div>
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
            <li><u className="fd-underline">Heal</u> beyond belief, at the root — not just manage symptoms — across your <u className="fd-underline">body, mind, and spirit.</u></li>
            <li>A nervous system that isn't running on inherited high alert.</li>
            <li>Restored <u className="fd-underline">peace</u> with food, money, and family.</li>
            <li>A spirituality that's actually <u className="fd-underline">yours</u>.</li>
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

          <p className="fd-tagline">Go deep, and earn a life — and a spirituality — you actually choose.</p>

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

export default JEWS;
