import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import CTA from '../components/CTA';
import './SpiritualPractice.css';
import pic4 from '../assets/pic4.jpg';
import { Helmet } from 'react-helmet';

const Stars = () => <span className="spiritual-stars">★★★★★</span>;

const Quote = ({ text, author }) => (
  <div className="spiritual-quote">
    <Stars />
    <p className="spiritual-quote-text">"{text}"</p>
    <p className="spiritual-quote-author">— {author}</p>
  </div>
);

const SpiritualPractice = () => {
  const [openSections, setOpenSections] = useState({
    soundHealing: false,
    breathwork: false,
    yogaAsana: false,
    meditation: false,
    ecstaticDance: false,
    eft: false
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="spiritual-practice">
      <Helmet>
        <title>Spiritual Counseling and Practices | Deep Support for Your Life and Spiritual Path</title>
        <meta name="description" content="Build the wisdom and compassion needed to live well. Be seen and heard as you are. Learn and deepen mind-body practices." />
        <meta property="og:title" content="Spiritual Counseling and Practices | Deep Support for Your Life and Spiritual Path" />
        <meta property="og:description" content="Build the wisdom and compassion needed to live well. Be seen and heard as you are. Learn and deepen mind-body practices." />
        <meta property="og:url" content="https://healing-on-tap.com/spiritual-practice" />
      </Helmet>
      {/* Hero Section */}
      <section className="spiritual-practice-hero">
        <div className="container">
          <div className="spiritual-practice-hero-content">
            <h1>Spiritual Counseling & Practice</h1>
            <p className="spiritual-practice-subtitle">
              Deepen your spiritual understanding, and cultivate the wisdom, compassion, and authenticity needed to live well. Be deeply met, compassionately supported, and guided. Learn or deepen Mind-Body practices to grow in the Spiritual Life.
            </p>
          </div>
        </div>
      </section>

      {/* About Spiritual Practice Section - Rainbow Background */}
      <section className="about-spiritual-practice section-rainbow">
        <div className="container">
          <div className="about-spiritual-practice-content">
            <h2 className="subtitle-heading">About Spiritual Counseling</h2>
            <div className="offering-book-cta">
              <Link to="/contact#booking" className="btn btn-outline">
                Book a Session →
              </Link>
            </div>

            {/* UPDATED IMAGE CONTAINER */}
            <div className="spiritual-image-container">
              <img
                src={pic4}
                alt="Spiritual Counseling Session"
                className="spiritual-practice-pic"
              />
            </div>
            <div className="about-spiritual-practice-text">
              <p>
                At the heart of it, this is about your spiritual evolution. That's what I help people do.
              </p>
              <p>
                In this space, you are safe to bring whatever is alive in you — your deepest yearnings, obstacles, beauty, and questions, whatever is happening in your life and being. 
              </p>
              <p>
                Often all we really want is to be met in presence, without judgment or fixing. I'm perhaps foremost here for that simple but profound gift, a lost art.
              </p>
              <p>
                From there, I can help you contextualize, understand, evolve, expand, and move forward. To lead you around the next corner.
              </p>
              <p>
                The spiritual friendship and companionship itself matters deeply here: walking this path with someone who's committed to it themself, and has been through real depths, earned their metaphorical badges and stamps, empathizes with you, understands your experience, and can help guide you through it.
              </p>

              <Quote text="He is a passionate practitioner of many modalities who has helped me expand my consciousness and deepen my meditation, yoga, and energy practices." author="Ethan B." />

              <p>
                Across nearly every spiritual tradition, having a wise guide is considered essential. In Buddhism, this friend is called a kalyāṇamitta – someone who helps guide you in your highest interest, helping your eyes to see things they never saw before. They may not just tell you what you want to hear or what's comfortable. This person should embody wisdom, unconditional love, detachment, and skillfulness –– through thick and thin. I strive to be that for you.
              </p>
              <blockquote className="spiritual-pullquote">
                "This is half of the holy life, lord: admirable friendship, admirable companionship, admirable camaraderie." — Ananda<br /><br />
                "Don't say that, Ananda. Don't say that. Admirable friendship, admirable companionship, admirable camaraderie is actually the whole of the holy life. When a monk has admirable people as friends, companions, and comrades, he can be expected to develop and pursue the Noble Eightfold Path." — The Buddha<br /><br />
                <em>Upaddha Sutta</em> (SN 45.2)
              </blockquote>

              <Quote text="I feel like he opened a door to my spirituality that I wasn't even sure existed." author="Mckenzi P." />

              <p>
                I bring in my own wisdom, methods, personal experience, and intuition as well as teachings from many spiritual traditions, as appropriate to what's alive. I've practiced in Zen, Tibetan, and Theravadan Buddhist lineages, and explored mysticism across Native American, Tantric, Taoist, Judaic, Christian, Hermetic, and Sufi traditions, as well as yoga (including yoga philosophy), qi gong, medicine work, shamanism, healing arts, sexual energy cultivation, psychic development, bhakti, and ecstatic dance.
              </p>
              <p>
                People say I have a way of making this stuff real and accessible — and help make it genuinely yours, not some distant, intangible thing that only happens in monasteries or belongs to someone higher. I help you build real trust in yourself, and real innerstanding from the inside — balancing your inner knowing with guiding towards healthy relationship to traditions, teachings, and teachers.
              </p>
              <p>
                I strive to be humble about my experience and my limitations. Where something is beyond me, I'll say so plainly — and point you toward master-level teachers better suited for certain questions, teachings, or spiritual transmissions. I don't claim to match their capacities.
                We can generally guide others to the degree of our own realization. I'm not an NBA star, so I can't train you to be an NBA star.
              </p>
              <p>
                People describe me as warm, intuitive, reliable, open-hearted, compassionate, safe, rooted, gentle, intelligent, devoted, and wise. People say I help them understand healing and spirituality in a way that's real.
              </p>

              <Quote text="Adin's presence is grounded, compassionate, and deeply intuitive — he creates a safe space where real emotional release and clarity can unfold." author="Ryan S." />

              <p>
                I've been practicing what I teach since 2015 — some practices newer than others. When people ask me when I 'woke up' or 'started on the spiritual path', I don't really have a definitive answer for them. I feel I've been on it my whole life. Maybe I've been doing this for many lifetimes. If you're reading this, maybe you have too! 
              </p>
              <p>
                <strong>Much gratitude and love to everyone who has supported me or taught me anything worth teaching.</strong>
              </p>
              <p>
                I'm here to help you:
              </p>
              <ul className="list-bullets">
                <li>Expand your consciousness and gain access to spiritual technologies that are truly your own.</li>
                <li>Realize and embody your divinity. Be in touch with your highest self and highest truth.</li>
                <li>Open your heart-mind.</li>
                <li>Exit the matrix of inherited belief systems, cultural conditioning, and mindsets that quietly keep you stuck. You know the ones.</li>
                <li>Trust yourself, strengthen your intuition, and gain energetic sensitivity.</li>
                <li>Understand spiritual principles and ideas and make them real.</li>
              </ul>
              <p>
                And that's just a start — <a href="/#what-we-can-do-together" target="_blank">here's the fuller list</a> of what I do best.
              </p>

              <Quote text="Adin is an innately gifted intuitive healer, with the dedication and discipline to match his inborn talents. I trust both the quality of his own energy and the many ways he facilitates energetic balance and emotional wellness for others." author="Zachary H." />
              <p>
                Ultimately, everything that happens is according to what you're ready for. Some shifts happen quickly, almost like magic. Others take patience and lots of love.
              </p>

              <div className="gold-divider"></div>

              <h2 className="subtitle-heading">About Spiritual Practice</h2>

              <p>
                I guide several mind-body practices, helping you learn or deepen yours, and make it genuinely yours. They have different benefits, emphases, and approaches — each touching various aspects of your spiritual life and being. Together, they grow your physical, mental, emotional, and spiritual health; deepen your self-awareness and sensitivity; and connect you with your higher self, intuition, purpose, and conscience.
              </p>
              <p>
                All these practices are geared to improve your well-being, increase your awareness, deepen your connection to divinity, center yourself, and improve your energy and health. They have different emphases and aspects. I teach what I have practiced and what has genuinely brought me great benefit.
              </p>
              <p>
                Real growth necessarily involves real challenge — that's not a flaw in the process, that's baked into the process.
              </p>

              <Quote text="Adin has an open heart and high emotional intelligence — both of which make it seamless and easy to connect with him and have him facilitate healing work. He is committed to his own personal, spiritual path — and the evidence of that work is shown in the value he's able to provide by elucidating and helping me find insights and let go of trauma that no longer serves me. You're in good hands with Adin." author="Travis D." />

              {/* Voice-Based Sound Healing - Collapsible */}
              <h3 className="collapsible-header" onClick={() => toggleSection('soundHealing')}>
                <span className={`triangle ${openSections.soundHealing ? 'open' : ''}`}></span>
                <b>Voice-Based Sound Healing</b>
              </h3>
              <div className={`collapsible-content ${openSections.soundHealing ? 'open' : ''}`}>
              </div>

              {/* Pranayama (Breathwork) - Collapsible */}
              <h3 className="collapsible-header" onClick={() => toggleSection('breathwork')}>
                <span className={`triangle ${openSections.breathwork ? 'open' : ''}`}></span>
                <b>Pranayama (Breathwork)</b>
              </h3>
              <div className={`collapsible-content ${openSections.breathwork ? 'open' : ''}`}>
              </div>

              {/* Yoga Asana - Collapsible */}
              <h3 className="collapsible-header" onClick={() => toggleSection('yogaAsana')}>
                <span className={`triangle ${openSections.yogaAsana ? 'open' : ''}`}></span>
                <b>Yoga (Asana)</b>
              </h3>
              <div className={`collapsible-content ${openSections.yogaAsana ? 'open' : ''}`}>
              </div>

              {/* Meditation - Collapsible */}
              <h3 className="collapsible-header" onClick={() => toggleSection('meditation')}>
                <span className={`triangle ${openSections.meditation ? 'open' : ''}`}></span>
                <b>Meditation</b>
              </h3>
              <div className={`collapsible-content ${openSections.meditation ? 'open' : ''}`}>
              </div>

              {/* Ecstatic Dance / Intuitive Movement - Collapsible */}
              <h3 className="collapsible-header" onClick={() => toggleSection('ecstaticDance')}>
                <span className={`triangle ${openSections.ecstaticDance ? 'open' : ''}`}></span>
                <b>Ecstatic Dance / Intuitive Movement</b>
              </h3>
              <div className={`collapsible-content ${openSections.ecstaticDance ? 'open' : ''}`}>
              </div>

              {/* EFT (Emotional Freedom Techniques) - Collapsible */}
              <h3 className="collapsible-header" onClick={() => toggleSection('eft')}>
                <span className={`triangle ${openSections.eft ? 'open' : ''}`}></span>
                <b>EFT (Emotional Freedom Techniques)</b>
              </h3>
              <div className={`collapsible-content ${openSections.eft ? 'open' : ''}`}>
              </div>

              <div className="gold-divider"></div>

              <p>
                <em>I am offering spiritual guidance, not clinical mental health services.</em>
              </p>
            </div>
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

export default SpiritualPractice;
