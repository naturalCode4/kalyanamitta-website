import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import CTA from '../components/CTA';
import ServiceCard from '../components/ServiceCard';
import HelpCarousel from '../components/HelpCarousel';
import { offerings, helpList, gainsList } from '../data/offerings';
import './Home.css';
import pic2 from '../assets/pic2.jpg';
import pic17 from '../assets/pic17.jpg';
import { Helmet } from 'react-helmet';

const Home = () => {
  const { hash } = useLocation();

  // -- "What This Work Does" collapsible lists --
  const [openHelpLists, setOpenHelpLists] = useState({ gains: true, help: true });
  const toggleHelpList = (key) => {
    setOpenHelpLists(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Handle scroll to hash
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          const headerOffset = 68;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="home">
      <Helmet>
        <title>Healing On Tap | Integrative Healing & Guidance</title>
        <meta name="description" content="Transform your life with EFT Tapping and Spiritual Counseling." />
        <meta property="og:title" content="Healing On Tap | Integrative Healing & Guidance" />
        <meta property="og:description" content="Transform your life with EFT Tapping and Spiritual Counseling." />
      </Helmet>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1><u className="hero-underline">Healing On Tap</u></h1>

            <p className="hero-subtitle">
              This is where you gain real, lasting freedom.
            </p>
            <p className="hero-subtitle">
              <em>You've made it.</em>
            </p>

            <div className="hero-manifesto">
              <div className="manifesto-item">
                <span className="manifesto-text">Become calm, happy, free, and empowered – as your baseline.<br className="desktop-break" />Unmute your soul.</span>
              </div>
              <div className="manifesto-connector"></div>
              <div className="manifesto-item">
                <span className="manifesto-text">Transform at the deepest root — not just the surface.<br className="desktop-break" />Gain the life you desire.</span>
              </div>
              <div className="manifesto-connector"></div>
              <div className="manifesto-item">
                <span className="manifesto-text">It's time to get all your life-force back,<br className="desktop-break" />and dissolve the pain you never chose.</span>
              </div>
            </div>

            <p className="hero-polarize">
              This is the real thing. This is your invitation. So, are you ready?
            </p>

            <div className="hero-buttons">
              <Link to="/tap-into-freedom" className="btn">Apply for the Tap Into Freedom Program →</Link>
              <Link to="/contact#booking" className="btn btn-outline">Book Your Session →</Link>
            </div>

          </div>
        </div>
      </section>

       {/* About Healing On Tap */}
       <Section 
        variant="rainbow" 
        title="About Healing On Tap"
        subtitle=""
      >
        <div className="grid grid-2">
          <div>
            <p><em>Healing On Tap</em> offers <b>life-changing shifts</b> to all who are called — on every level: emotionally, mentally, energetically, spiritually, neurologically, physically down to the cells of your body.</p>
            <p>This work offers profound, lasting transformation — reaching into every part of your life, inner and outer. <b>Whatever it is you're carrying, this work can shift it.</b></p>
            <p>This is where you <b>put down the heavy baggage</b> — the old fear, unprocessed pain, negative emotions, and limiting beliefs and conditioning you never chose. Here, at the deepest, root level, you restore your <b>life-force</b> — earning the <b>freedom to live calm, happy, free, and empowered.</b></p>
            <p>At your core, you are <em>already</em> <b></b>whole, inherently <b>loving</b>, <b>wise</b>, <b>peaceful</b>, with the <b>innate capacity for healing</b>. This work clears what's been in the way, and activates these innate qualities so they can <b>fully bloom.</b></p>
            <p>The primary methods we use are <b>EFT (Emotional Freedom Techniques, aka Tapping)</b> and <b>Spiritual Counseling and Practices</b> — including <b>breathwork, yoga, sound healing, prayer, meditation, and ecstatic dance</b>.</p>
            <p>Some shifts will happen wonderfully <b>fast</b>, almost like <b>magic.</b> Others take patience. Either way, when it moves, it moves <b>palpably and profoundly</b> — not just on the surface.</p>
            <p>Grounded in intuition, science, essential spiritual teachings, deep training and experience, and love and wisdom, this guidance meets you where you are, and unfolds at the depth you're ready for. <b>I got you.</b> <em>All it takes is your willingness.</em></p>
          </div>
          <div className="about-photos hot-about-photos">
            <div className="photo-container hot-photo-container">
              <img
                src={pic2}
                alt="Healing On Tap Pic"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </Section>
      
      {/* Manifesto Section */}
      <Section 
        variant="dark" 
        title="Offerings"
        subtitle=""
      >

        <div className="grid grid-cards">
          {offerings.map((offering) => (
            <ServiceCard
              key={offering.id}
              title={offering.title}
              availability={offering.availability}
              content={offering.content}
              learnMoreLink={`/${offering.id}`}
              variant="rainbow"
            />
          ))}
        </div>
      </Section>

      {/* Help List Section - two collapsible carousels, side by side */}
      <Section
        id="what-we-can-do-together"
        variant="dark"
        title="Results of This Work"
        subtitle=""
      >
        <div className="help-lists-grid">
          <div className="help-list-block">
            <div className="collapsible-header help-list-header" onClick={() => toggleHelpList('gains')}>
              <span className={`triangle ${openHelpLists.gains ? 'open' : ''}`}></span>
              What You'll Gain
            </div>
            <div className={`collapsible-content ${openHelpLists.gains ? 'open' : ''}`}>
              <p className="help-list-subtitle">These are some of the lasting shifts you're likely to experience — subtly or drastically — through this work.</p>
              <HelpCarousel list={gainsList} />
            </div>
          </div>

          <div className="help-list-block">
            <div className="collapsible-header help-list-header" onClick={() => toggleHelpList('help')}>
              <span className={`triangle ${openHelpLists.help ? 'open' : ''}`}></span>
              What I Do Best
            </div>
            <div className={`collapsible-content ${openHelpLists.help ? 'open' : ''}`}>
              <p className="help-list-subtitle">These are my core areas of specialization, but I've rarely met a thing I couldn't help shift. The beautiful thing is that if you grow in one area, you'll often find the aspects of your life alchemize and heal together</p>
              <HelpCarousel list={helpList} />
            </div>
          </div>
        </div>
      </Section>

      {/* About Adin */}
      <Section
        variant="rainbow" 
        title="About Adin"
        subtitle=""
      >

        <div className="about-adin-home-container"> 
          
          <div className="about-text-content">
            <p>Welcome! My name is Adin. It's a joy and honor to support you in this work. <br></br><br></br>I walk with people and help them gain love, wisdom, clarity, freedom, ease, authenticity, and spiritual capacity– to let go of limiting beliefs, anxiety, negative emotion, and trauma– and to get the inner world and outer circumstances they desire. I offer what I <b>live</b> and deeply believe in. <br></br><br></br> I offer 30-minute free consultations and am happy to discuss anything beforehand.</p>
          </div>
          
          <div className="about-photos">
            <div className="photo-container">
              <img
                src={pic17}
                alt="Adin outdoors"
                className="about-image"
              />
            </div>
          </div>
          
          <div className="btn-group about-buttons">
            <Link to="/about" className="btn">Learn More</Link>
            <Link 
              to="/contact#get-in-touch" 
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in Touch
            </Link>
          </div>

        </div>
      </Section>
      
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

export default Home;