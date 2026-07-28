import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TapIntoFreedom.css';
import { Helmet } from 'react-helmet';

// TODO: Adin hasn't built the alignment form yet. Swap this for the real
// form URL once it exists — every "Fill out the Alignment Form" CTA below
// reads from this one constant. Until then it routes to the working
// Get in Touch form so the button isn't dead.
const ALIGNMENT_FORM_URL = '/contact#get-in-touch';

const Stars = () => <span className="tif-stars">★★★★★</span>;

const Quote = ({ text, author }) => (
  <div className="tif-quote">
    <Stars />
    <p className="tif-quote-text">"{text}"</p>
    <p className="tif-quote-author">— {author}</p>
  </div>
);

const TapIntoFreedom = () => {
  const [openSections, setOpenSections] = useState({
    eftWorks: false,
    sessionExpect: false,
    transform: false,
    forYouIf: false,
    notForYouIf: false,
  });

  const [openBenefits, setOpenBenefits] = useState({
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
      text: 'Be deeply met, compassionately supported, and guided',
      detail: 'Three months held with care the whole way, safe to bring anything.',
    },
    {
      key: 'practices',
      text: 'Practices that stay with you',
      detail: 'The ability to practice EFT on yourself, a spiritual practice you learn or deepen, and a much greater ability to regulate your own nervous system. Tools to address issues as they arise and continue your inner work.',
    },
  ];

  return (
    <div className="tap-into-freedom">
      <Helmet>
        <title>Tap Into Freedom | 12-Week EFT Healing Program with Adin</title>
        <meta name="description" content="Finally be calm, happy, free, and empowered as your baseline. A 12-week EFT (Tapping) program to dissolve old pain and reclaim your life, for good." />
        <meta property="og:title" content="Tap Into Freedom | 12-Week EFT Healing Program" />
        <meta property="og:description" content="Finally be calm, happy, free, and empowered as your baseline. A 12-week EFT (Tapping) program to dissolve old pain and reclaim your life, for good." />
        <meta property="og:url" content="https://healing-on-tap.com/tap-into-freedom" />
      </Helmet>

      {/* Hero */}
      <section className="tif-hero">
        <div className="container">
          <h1 className="subtitle-heading">Tap Into Freedom</h1>
          <p className="tif-hero-line">Finally be calm, happy, free, and empowered <u className="tif-underline">as your baseline</u>.</p>
          <p className="tif-hero-line">Dissolve pain that's been quietly running your life.</p>
          <p className="tif-hero-line">Restore your life-force – for good.</p>
          <div className="tif-cta-center">
            <a href="#investment" className="btn">Apply →</a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="tif-intro section-dark">
        <div className="container">
          <div className="tif-flow">
            <aside className="tif-sidebar tif-side-left" style={{ top: '600px' }}>
              <p>
                <strong>Changing your life is an inside job.</strong> This means that what happens 'to you' is a reflection of your inner state: how others treat you, your career, your finances, relationships, health, your impact, the opportunities you magnetize. When you change inside, you not only feel better inside, but your outside world will change too, to match your frequency.
              </p>
              <p className="tif-sidebar-quote">"As within, so without." — The 2nd Hermetic Principle</p>
            </aside>

            <div className="tif-flow-main tif-flow-main-both">
              <p>
                That's not a slogan or hype. In fact, I hate flashy or manipulative marketing. It's what this work <u className="tif-underline">actually does</u>.
              </p>
              <p className="tif-emphasis">
              <u className="tif-underline">Listen:</u> Most people are quietly paying an enormous, invisible price: unprocessed pain, negative emotions, old fear, and limiting beliefs they <em>never chose</em>. Heavy baggage quietly living in the nervous system, running life behind the scenes.
              </p>
              <p className="tif-emphasis">
                The truth is it <u className="tif-underline">costs</u> people so much: their life-force, peace, relationships, confidence, physical health, mental clarity, focus, positivity, quality of their actions and words, and much more. Even skewing their very view of this reality and what's possible.
              </p>
              <div className="gold-divider"></div>
              <p className="tif-emphasis"><em>Tap Into Freedom</em> exists to end that cost. For good.</p>
              <p className="tif-emphasis">Whatever you're carrying – we <em>can</em> shift it.</p>
              <p className="tif-emphasis">All of it aimed at a whole life healing and liberation of your peace, authenticity, desires, and flourishing –– and hand you excellent tools for life.</p>

              <blockquote className="tif-pullquote">
                "And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom." — Anaïs Nin
              </blockquote>

              <Quote text="Adin's presence is grounded, compassionate, and deeply intuitive — he creates a safe space where real emotional release and clarity can unfold." author="Ryan S." />

              <div className="tif-cta-center">
                <a href="#investment" className="btn">Sign me up! I want to heal my nervous system and free up my life! →</a>
              </div>
            </div>

            <aside className="tif-sidebar tif-side-right" style={{ top: '600px' }}>
              <p>
                During the 12 week <strong>Tap Into Freedom</strong> program, you will receive weekly EFT (Emotional Freedom Techniques, aka Tapping), which neutralizes and dissolves negative thought patterns and emotions, undesired conditioning, and restores access to your full energy and the ability to be authentic, aligned, and create the life you desire. EFT is the single most effective healing tool I've found for resolving nearly any issue at the root — powerful, simple, gentle, and fast. <br></br><br></br> <em>(More about EFT later).</em>
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* It's Time to Get All Your Energy Back */}
      <section className="tif-benefits section-rainbow">
        <div className="container">
          <h2 className="subtitle-heading">It's Time to Get All Your Energy Back.</h2>

          <p className="tif-center">
            This is where you get to say: I'm done with this old baggage running the show. I'm taking my life back now.
          </p>
          <p className="tif-emphasis">This is a real, sustained transformation that can profoundly shift nearly anything you carry.</p>

          <div className="gold-divider"></div>

          <h3>In these three months you likely will have these lasting shifts — subtly or drastically:</h3>

          <ul className="tif-benefit-list">
            {benefits.map((b) => (
              <li key={b.key} className="tif-benefit-item">
                <div className="collapsible-header tif-benefit-header" onClick={() => toggleBenefit(b.key)}>
                  <span className={`triangle ${openBenefits[b.key] ? 'open' : ''}`}></span>
                  {b.text}
                </div>
                <div className={`collapsible-content ${openBenefits[b.key] ? 'open' : ''}`}>
                  <p className="tif-benefit-detail">{b.detail}</p>
                  {b.review && <Quote text={b.review.text} author={b.review.author} />}
                </div>
              </li>
            ))}
          </ul>

          <p className="tif-emphasis">Until feeling any other way is <em>literally</em> a memory.</p>

          <div className="gold-divider"></div>

          <Quote text="I have to admit, the scientist in me was a little skeptical that it wouldn't work, but I could not have been more wrong. My first session was so powerful — naming and releasing so much pain I'd been dealing with for years." author="Zac K." />
        </div>
      </section>

      {/* Not symptom management */}
      <section className="tif-notsymptom section-dark">
        <div className="container">
          <p>Not symptom management. Not a temporary fix. Not a retreat high that fades.</p>
          <p className="tif-emphasis-strong">
            A life-changing shift on every level: emotionally, mentally, energetically, neurologically, physically down into the cells of the body and your very DNA. A wonderful, lasting upgrade to your life — starting from exactly where you're at.
          </p>
          <p><em>I'm telling you straight: this is the real, genuine possibility I can guide you to achieve.</em></p>
          <p className="tif-tagline">Get your energy back, and get your life back.</p>
          <div className="tif-cta-center">
            <a href="#investment" className="btn">Yes — I'm Ready to Begin →</a>
          </div>
        </div>
      </section>

      {/* The Method */}
      <section className="tif-method">
        <div className="container">
          <h2 className="subtitle-heading">The Method</h2>

          <div className="tif-flow">
            <aside className="tif-sidebar tif-side-left tif-sidebar-dropdown" style={{ top: '700px' }}>
              <div className="collapsible-header tif-sidebar-dropdown-header" onClick={() => toggleSection('eftWorks')}>
                <span className={`triangle ${openSections.eftWorks ? 'open' : ''}`}></span>
                Want to know more about how EFT works?
              </div>
              <div className={`collapsible-content ${openSections.eftWorks ? 'open' : ''}`}>
                <p>
                  Tapping works wonders on the system! Research suggests it reduces activation of the amygdala's threat response, allowing the nervous system to shift into a calmer, more regulated state — even while bringing attention to what would previously have triggered the body's automatic stress response. In this way, tapping enables us to stay present with the issue and feel safe enough to fully feel and process it.
                </p>
                <p>
                  EFT incorporates acupoints from Traditional Chinese Medicine. Each tapping point lies on a meridian — an energy channel that governs essential aspects of the body, mind, and spirit. By tapping these points, we're essentially giving ourselves a needle-free acupuncture treatment while meeting the emotions and beliefs we're working to transform. This physiologically treats your issue.
                </p>
                <p>
                  When the original experience(s) that created the issue occurred, we may not have had the capacity to fully feel, process, or integrate what happened. As a result, there's an embodied emotional imprint we still carry… like old baggage (how's this 'baggage' metaphor working for you?). Through tapping, we revisit the trigger from a different state — one of greater calm, safety, self-compassion, and love. Instead of reinforcing the old reaction, the neural pathways are updated to this healthier response. We dissolve an issue on the neurological level and rewrite our lives. The heavy baggage gets dropped, and we attain genuine freedom.
                </p>
                <p>
                  EFT is well-backed by over 100 studies and trials.
                </p>
                <p>
                  During a session, people typically experience shifts in energy, reduction in negative thoughts, emotions, and intensity around an issue, new ways of seeing and more positive thinking (sometimes full-on downloads from the universe), a greater sense of confidence, love, ease, and other wonderful qualities. Shifts often continue to unfold for many days after a session.
                </p>
              </div>
            </aside>

            <div className="tif-flow-main tif-flow-main-both">
              <p>A twelve-week container of transformative healing and upgrades. You'll have me in your corner the whole way.</p>
              <p className="tif-emphasis-strong">
                How do we create this powerful shift?
              </p>
              <p>The core of this work is weekly 90-minute 1-on-1 EFT (Emotional Freedom Techniques, aka Tapping) sessions. Coaching is woven in.</p>
              <p>You'll also learn or deepen a spiritual practice — meditation, breathwork, yoga, voice-based sound healing, prayer, ecstatic dance, or another you're interested in.</p>
              <p>You'll also be taught proficiency in self-practice of EFT.</p>

              <div className="gold-divider"></div>

              <h3>So What is EFT?</h3>
              <p>I've practiced extensively with healing modalities, mystical traditions, and spiritual practices.</p>
              <p>
                EFT is the <em>single most effective healing tool</em> I've found for resolving nearly any issue at the root — powerful, simple, gentle, and fast. It involves self-acceptance, self-love, and tapping acupoints on your body while skillfully addressing an issue or goal.
              </p>

              <Quote text="It was like magic!" author="Andrea L." />

              <blockquote className="tif-pullquote">
                "EFT is a self-healing modality that combines aspects of Chinese medicine and modern psychology with self-acceptance and unconditional love. EFT recalibrates your brain's responses to stimuli, reprogramming your body and brain's ability to function properly. EFT can positively transform your life in ways you never imagined possible." — Sonya Sophia, EFT Expert, and My EFT Trainer and Certifier
              </blockquote>

              <blockquote className="tif-pullquote">
                "The curious paradox is that when I accept myself just as I am, then I can change." — Carl Rogers
              </blockquote>

              <div className="gold-divider"></div>

              <p className="tif-emphasis">This excellent modality will become yours for life.</p>
              <p>In this program, you will not only receive 12 potent EFT sessions: You will gain proficiency in the self-practice of EFT. 
              </p>

              <div className="gold-divider"></div>

              <p>
                Beyond EFT — I wield it with skillfulness, unconditional love, and embrace methods and spiritual potential –– that go beyond the normal scope of this already powerful modality. I trained in EFT in the context of a school that embraces the deepest spiritual wisdom and neuroscience. This school has produced massively positive, whole-life transformations and flourishing for hundreds of people — and trains them to do the same for others.
              </p>

              <Quote text="It's his love — beyond the tapping — this process I've walked through with Adin. I think everyone should make time for themselves to heal in this way and experience this kind of love as the foundation." author="Sīla W." />

              <p className="tif-tagline">My wish is as many people as possible experience this life-changing modality</p>
              <div className="tif-cta-center">
                <a href="#investment" className="btn">Let's Do This →</a>
              </div>
            </div>

            <aside className="tif-sidebar tif-side-right tif-sidebar-dropdown" style={{ top: '700px' }}>
              <div className="collapsible-header tif-sidebar-dropdown-header" onClick={() => toggleSection('sessionExpect')}>
                <span className={`triangle ${openSections.sessionExpect ? 'open' : ''}`}></span>
                Curious what you'll actually do in a session?
              </div>
              <div className={`collapsible-content ${openSections.sessionExpect ? 'open' : ''}`}>
                <p>
                  Gentle tapping on various points on the body, call-and-response guidance, and expressing in your own voice. I will guide you towards self-acceptance, love, and to process your issue on the deepest level. I meet you where you are, and move at the pace your own system is ready for.
                </p>
                <p>
                  During a session you'll typically see improvements in your issue, shifts in energy and emotion, more positive thinking and deep insights around your issue (sometimes full-on universal downloads — no joke), love, ease, and other wonderful qualities. Shifts often continue to unfold for several days after a session.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* A Wise Friend */}
      <section className="tif-wise-friend section-rainbow">
        <div className="container">
          <h2 className="subtitle-heading">A Wise Friend</h2>

          <div className="tif-flow">
            <aside className="tif-sidebar tif-side-left">
              <Quote text="I feel like he opened a door to my spirituality that I wasn't even sure existed." author="Mckenzi P." />
            </aside>

            <div className="tif-flow-main tif-flow-main-both">
              <p>
                Across nearly every spiritual tradition, wise friendship is considered essential for progress on the path of liberation. In Buddhism, this noble friend is called a <em>kalyāṇamitta</em>.
              </p>
              <p>
                A <em>kalyāṇamitta</em> might not just tell you what you <em>want</em> to hear or what's <em>comfortable</em> — but guide you towards your highest interest, helping your eyes to see things they never saw before. This person should embody wisdom, unconditional love, detachment, and skillfulness –– through thick and thin.
              </p>
              <p className="tif-emphasis">
                I strive to be that <em>kalyāṇamitta</em>. I will be walking by your side, supporting you every step of the way — through the deep inner transformation, including the difficult stuff. Its a blessing to be of service.
              </p>
              <div className="gold-divider"></div>
              <Quote text="Adin is an innately gifted intuitive healer, with the dedication and discipline to match his inborn talents. I trust both the quality of his own energy and the many ways he facilitates energetic balance and emotional wellness for others." author="Zachary H." />

            </div>

            <aside className="tif-sidebar tif-side-right">
              <blockquote className="tif-pullquote tif-pullquote-dialogue">
                "This is half of the holy life, lord: admirable friendship, admirable companionship, admirable camaraderie." <br></br><br></br> "Don't say that, Ananda. Don't say that. Admirable friendship, admirable companionship, admirable camaraderie is actually the whole of the holy life. When a monk has admirable people as friends, companions, and comrades, he can be expected to develop and pursue the Noble Eightfold Path."<br></br><br></br>— Ananda, and the Buddha's reply, <em>Upaddha Sutta</em> (SN 45.2)
              </blockquote>
            </aside>
          </div>
        </div>
      </section>

      {/* About Adin */}
      <section className="tif-about">
        <div className="container">
          <h2 className="subtitle-heading">About Adin</h2>

          <div className="tif-flow">
            <aside className="tif-sidebar tif-side-left">
              <Quote text="Adin has an open heart and high emotional intelligence — both of which make it seamless and easy to connect with him and have him facilitate healing work. You're in good hands with Adin." author="Travis D." />
            </aside>

            <div className="tif-flow-main tif-flow-main-both">
              <p>
                I've always had a natural affinity for genuine connection, meditation, deep play, the natural world, and spiritual understanding. I knew early to follow my own path — and take a different way from the mediocrity most of the adults and institutions around me were offering. There is an authenticity and unfolding <u className="tif-underline">only you can walk.</u>
              </p>
              <p>
                I have <u className="tif-underline">lived</u> this work, not just studied it: I've come through PTSD, deep childhood wounding, emotionally immature parenting, anxiety, depression, shame, insecurity, heartbreak, and more.
              </p>
              <p>
                EFT has been <u className="tif-underline">absolutely essential</u> in my healing journey. As I write this, I actually see the world as beautiful. I actually love and accept myself. I’m no longer crushed by negative emotions and thoughts like I was most of my life. My work feels deeply aligned. I feel peace, freedom, power, and have confidence in myself. My health, habits, all my relationships, sense of self-worth, sense of divinity, have all improved. I offer to you what I’ve lived, because I know it can do the same for you. And it’s so, so worth it.
              </p>
              <p>
                When you work with me, you're with someone who's <u className="tif-underline"><em>been down there</em></u>, made it through, and earned their metaphorical badges and stamps. I'm empathic, compassionate, intuitive, open-hearted, and sometimes funny! You're not alone in this.
              </p>
              <p>
                I am Advanced Certified in EFT through the Sonya Sophia School of Living Arts. Reiki II. 500-hour Yoga Teacher Training. Deep experience across Buddhist, Native American, and other spiritual traditions. And, most importantly: shaped by a life seeking what actually illuminates <u className="tif-underline">Truth, Freedom, Love, and Goodness.</u>
              </p>

              <div className="gold-divider"></div>

              
              <p className="tif-tagline">I'm ready to break out of old conditioning, and follow my own path.</p>
              <div className="tif-cta-center">
                <a href="#investment" className="btn">Join Now →</a>
              </div>
              <blockquote className="tif-pullquote">
                "There is a light in you which cannot die. Your life is a sublime expression of this light to the degree you are willing to listen to your own soul's loving guidance." –– Sonya Sophia
              </blockquote>
            </div>

            <aside className="tif-sidebar tif-side-right" style={{ top: '340px' }}>
              <Quote text="He is a passionate practitioner of many modalities who has helped me expand my consciousness and deepen my meditation, yoga, and energy practices." author="Ethan B." />
            </aside>
          </div>
        </div>
      </section>

      {/* Where We Focus */}
      <section className="tif-focus section-rainbow">
        <div className="container">
          <h2 className="subtitle-heading">Where We Focus</h2>

          <div className="tif-flow">
            <div className="tif-flow-main tif-flow-main-both">
              <p>Think vast! Bring what's yours. I've rarely met a thing I can't address.</p>
              <p>
                Ask yourself: if Adin could wave a magic wand over me and resolve any issue, what would make the biggest difference in my life? EFT is a multi-tool we can use on nearly anything.
              </p>
              <p>
                We have issue-oriented and goal-oriented EFT. The former addresses an issue you want to resolve, the latter clears the path to the full expression of your goal.
              </p>
              <p>You don't need it figured out in advance. Discovering the roots together is part of the work.</p>

              <div className="gold-divider"></div>

              <p className="tif-emphasis">
                Together, we address 3–6 Areas of Focus that matter most to you right now, and heal and upgrade them using the wonderful modality of EFT as the core. And as you're totally interconnected, other parts of you will alchemize and heal along-side of it!
              </p>

              <h3 className="collapsible-header" onClick={() => toggleSection('transform')}>
                <span className={`triangle ${openSections.transform ? 'open' : ''}`}></span>
                What's on the other side? —
              </h3>
              <div className={`collapsible-content ${openSections.transform ? 'open' : ''}`}>
                <ul className="list-bullets">
                  <li>A weight lifted –– you may not have even realized you were carrying.</li>
                  <li>Clarity, energy, and self-empowerment — from having dissolved what was sucking on you subconsciously.</li>
                  <li>Ease, lightness, and joy — from having resolved where stress and old patterns used to run the show.</li>
                  <li>Peace, power, and your own authority — from developing trust and groundedness in yourself.</li>
                  <li>Deeper love and connection –– of all kinds.</li>
                  <li>An overall higher frequency state and a clearer knowing of your inherent goodness…</li>
                </ul>
                <p className="tif-small-italic">… Sounds good to me …</p>
              </div>
            </div>

            <aside className="tif-sidebar tif-side-right">
              <p>
                Anything — maybe a negative thought pattern or trauma you want to shift. Maybe you're carrying your mother's guilt! Maybe you want to heal and develop your masculinity, femininity, or sexuality. Maybe you're creating success in a project. Maybe it's chronic tension, your health, or improving patterns or habits. Maybe there's a burden inside you can't quite put your finger on. Maybe it's shining in your music, relationships, or work. Maybe it's greater love or clear embodiment of your divinity. Whatever's had its grip on you. Whatever goal you wish to achieve.
              </p>
            </aside>
          </div>

          <p className="tif-emphasis">
            In this way, you can be, live, think, feel, and act from <u className="tif-underline">genuine freedom</u> — beyond limitations. You get to be in your power.
          </p>

          <div className="gold-divider"></div>

          <div className="tif-dual-dropdown">
            <div>
              <h3 className="collapsible-header" onClick={() => toggleSection('forYouIf')}>
                <span className={`triangle ${openSections.forYouIf ? 'open' : ''}`}></span>
                This Is For You If
              </h3>
              <div className={`collapsible-content ${openSections.forYouIf ? 'open' : ''}`}>
                <ul className="list-bullets">
                  <li>You're carrying something unresolved and you're ready to put down the weight — maybe that hasn't budged no matter what you've tried</li>
                  <li>You want more personal power, peace, play, or to improve aspect(s) of your life</li>
                  <li>You're ready to invest in yourself financially</li>
                  <li>You want embodied change, not just talk</li>
                  <li>You want a better-functioning nervous system, brain, body, and mind</li>
                  <li>Maybe you are a spiritual practitioner, but your practice isn't addressing certain layers of your psyche, trauma, or humanity. If that's you, you hold a place in my heart and this has been designed with you in mind</li>
                  <li>You're ready to go deep and be honest, with someone who can hold it</li>
                  <li>Living from your heart and in integrity matters deeply to you</li>
                  <li>You want tools to keep growing, not a forever dependency</li>
                  <li>You feel a strong connection with me, your guide</li>
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
                  <li>You're not ready to invest your focus, time, and money into you</li>
                  <li>You're not ready to see yourself or would rather idly talk about your problems — this work asks you to meet yourself deeply</li>
                  <li>You're at a stage where you'd rather play the victim than actually improve your situation. But, if you'd like to step out of victimhood, that we can do</li>
                  <li>Living from your heart and with integrity, isn't really a priority for you</li>
                  <li>You're in acute crisis or need primary medical or mental-health treatment — that care comes first, and this can complement it once you're stable</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="tif-small-italic">This work complements, and does not replace, medical or mental-health care.</p>
        </div>
      </section>

      {/* Investment */}
      <section className="tif-investment section-dark" id="investment">
        <div className="container">
          <h2 className="subtitle-heading">Investment</h2>

          <p className="tif-tagline">This is an investment that can completely transform your life.</p>
          <p>
            A 3-month container of profound healing and upgrades with ongoing support. Twelve 90-minute EFT sessions. Learn this powerful modality for yourself. Gain a spiritual practice that's genuinely yours.
          </p>

          <div className="gold-divider"></div>

          <div className="tif-pricing-row">
            <div className="tif-price-card">
              <h3>Standard</h3>
              <p className="tif-price">$3,000</p>
            </div>
            <div className="tif-price-card tif-price-highlight">
              <h3>Founding Cohort</h3>
              <p className="tif-price">$2,222</p>
              <p className="tif-price-note">A genuine thank-you for stepping in early as this program grows into its best form.</p>
            </div>
          </div>
          <br></br>
          <p><em>Payment plans available.</em></p>

          <div className="gold-divider"></div>

          <p className="tif-center">
            Fill out the alignment form. I review it closely — and if you're a good fit, we'll set up a free 30-minute interview.
          </p>
          <p className="tif-tagline">Go deep, and earn back your life-force.</p>

          <div className="tif-cta-group">
            <a href={ALIGNMENT_FORM_URL} className="btn">I'm Ready –– Fill Out the Alignment Form →</a>
            <Link to="/contact#get-in-touch" className="btn btn-outline">Have questions? I'm happy to respond by email →</Link>
          </div>
        </div>
      </section>

      {/* Sign off */}
      <section className="tif-signoff">
        <div className="container">
          <Link to="/contact#get-in-touch" className="tif-feedback-link">Provide Feedback. Help us make this program the best it can be →</Link>

          <div className="gold-divider"></div>

          <p className="tif-signoff-text">In your corner, <strong>Adin</strong></p>

          <div className="tif-cta-center">
            <a href={ALIGNMENT_FORM_URL} className="btn">Let's do this →</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TapIntoFreedom;
