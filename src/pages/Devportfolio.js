import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import './Devportfolio.css';
import Section from '../components/Section';
import picBio from '../assets/devportfolio-bio-photo.png';
import picSmoothie from '../assets/devportfolio-smoothie-photo.png';
import pic70f59c8d from '../assets/70f59c8d-640e-438b-89e4-2c87df476923.jpeg';
import picYoga from '../assets/adin-yoga-warrior.jpg';
import picGulls from '../assets/devportfolio-gulls-photo.jpg';

// You will need to put your resume PDF in public/assets/ or src/assets/
// For now, I'll link to a placeholder path
const RESUME_PATH = "/assets/Adin_Resume.pdf";

// Main call to action — big gold text, not a button. The number is stored in
// pieces and joined at runtime so the full digit string never appears in the
// bundle for scrapers to grep. Tapping it opens a WhatsApp chat with a
// friendly opener prefilled.
const PHONE_PARTS = ['1', '301', '641', '2855'];
const PHONE_DISPLAY = `+${PHONE_PARTS[0]} (${PHONE_PARTS[1]}) ${PHONE_PARTS[2]}-${PHONE_PARTS[3]}`;
const WHATSAPP_URL = `https://wa.me/${PHONE_PARTS.join('')}?text=${encodeURIComponent(
  "Hi Adin! I saw your portfolio and I'd love to talk about a project."
)}`;

const WhatsAppCTA = () => (
  <div className="portfolio-whatsapp-cta">
    <p className="portfolio-whatsapp-cta-line">To get started, send me a message on WhatsApp.</p>
    <p className="portfolio-whatsapp-cta-number">
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{PHONE_DISPLAY}</a>
    </p>
    <p className="portfolio-whatsapp-cta-sub">Tell me a bit about you and what you're building! And I'll get back to you shortly.</p>
  </div>
);

// Small flame icon (Heroicons "fire", solid) recolored to a gold/orange
// gradient — used to lead each client quote instead of a plain 🔥 emoji.
const Flame = () => (
  <svg className="quote-flame" viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="flameGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f7d774" />
        <stop offset="55%" stopColor="#e2a12e" />
        <stop offset="100%" stopColor="#c9531a" />
      </linearGradient>
    </defs>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="url(#flameGradient)"
      d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.176 7.547 7.547 0 01-1.705-1.715.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
    />
  </svg>
);

const BALLOON_COLORS = ['#ff4d6d', '#ffd166', '#06d6a0', '#4ea8de', '#c77dff', '#f4845f', '#ef476f', '#d4af37'];

const Portfolio = () => {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const footer = document.querySelector('footer');
      if (footer) footer.style.display = 'none';
      return () => {
        if (footer) footer.style.display = 'block'; // Restore on unmount
      };
  }, []);

  // Over-the-top easter egg for the "Hint: You're on it!" card — fills the
  // screen with balloons on click. Each balloon removes only itself when
  // its own animation ends (rather than a single shared timeout clearing
  // the whole batch), so clicking again mid-flight adds more balloons on
  // top instead of yanking the current ones out mid-air.
  const launchBalloons = () => {
    const batch = Array.from({ length: 55 }, (_, i) => ({
      id: `${Date.now()}-${i}-${Math.random().toString(36).slice(2)}`,
      left: Math.random() * 100,
      duration: 4 + Math.random() * 3,
      delay: Math.random() * 0.8,
      size: 46 + Math.random() * 34,
      color: BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)],
      drift: (Math.random() - 0.5) * 220,
    }));
    setBalloons((prev) => [...prev, ...batch]);
  };

  const removeBalloon = (id) => {
    setBalloons((prev) => prev.filter((b) => b.id !== id));
  };

  const projects = [
    {
      title: "Healing On Tap",
      role: "Creator, Developer & Designer",
      description: "A high-performance React website designed and built from scratch. Features include intricate frontend implementation with JS/CSS design and animations, no-framework responsive layouts, Google Mailer/ Maps/ Reviews API integration via serverless functions, and SEO optimization (Schema/Helmet).",
      link: "/", // Links to home
      linkText: "Visit Website"
    },
    {
      title: "Astrological Libido Tracker",
      role: "Creator, Developer & Designer",
      description: "Did you know men have sexual cycles too? It's based in your astrology, and it's surprisingly predictable. I made this first-of-its-kind tracker.",
      link: "https://astrological-libido-tracker.vercel.app/",
      linkText: "Visit Website"
    },
    {
      title: "SonShip",
      role: "Developer & Designer",
      description: "Designed and built a custom, beautifully designed React.js site for an off-grid, solar-powered mobile kitchen and power unit. Worked closely with the client — who had little technical background — to develop his vision, create an elegant design, scribe his writing, and shape his story into a lasting legacy for his family.",
      link: "https://sonship.party",
      linkText: "Visit Website"
    },
    {
      title: "Bells Mountain Dharma Center",
      role: "Developer & Designer",
      description: "Worked closely with the client to design and implement a solution focused on brand identity and user flow for a local church business. Set up and integrated with Tithe.ly, Google Workspace, and Elfsight. Fully mobile friendly. Educated the team on CMS management and site editing view elaborate video tutorials.",
      link: "https://www.bellsmountaindharma.org/",
      linkText: "Visit Website"
    },
    {
      title: "California Educational Consultant Group Inc.",
      role: "Lead Software Engineer, Designer, and Product Manager",
      description: "Spearheaded end-to-end development of complex university administration apps (React, Node, Mongo, AWS). Managed cross-functional teams of developers, designers, and business owners through architecture, developing a complex interface, build, and deployment. Managed DevOps, AWS infrastructure, and PCI L1 security compliance for sensitive data.",
      link: null, 
      linkText: "Internal work – confidential"
    },
    {
      title: "GottaGo App",
      role: "Creator & Educator",
      description: "Developed a live, interactive, React/Node.js-based, crowd-sourced toilet-tracker application that informatively help users find bathrooms, leveraging the Google Maps API to build a customized map. Produced a YouTube tutorial demonstrating the development process and functionality.",
      link: "https://www.youtube.com/watch?v=mmsOeCoWsU8",
      linkText: "Watch Tutorial"
    },
    {
      title: "U-Queue",
      role: "Fullstack Software Engineer",
      description: "Architected scalable features for a collaborative live music queueing application. Built a 50-endpoint Node.js REST API and handled rapid MongoDB data pipelines via Websockets. Developed a responsive B2C frontend using React and MaterialUI within an Agile CI/CD workflow.",
      // link: "https://www.u-queue.com/",
      // linkText: "Visit Website"
    },
    {
      title: "Constitution Quiz",
      role: "Developer and Designer",
      description: "Collaborated directly with the client to customize functionality and design according to her business’ vision & needs. Built a responsive web survey that generates the user’s bodily constitution and provides health guidance",
      link: "https://constitution-quiz-hfs.netlify.app/",
      linkText: "Visit Website"
    },
    {
      title: "The Mobile Sanctuary - In Progress",
      role: "Developer & Designer",
      description: "Developing a custom website for a local business' offerings. Client is asking for a simple, mobile-friendly site focused on a soothing user experience.",
      link: null,
      linkText: "Coming Soon"
    },
    {
      title: "Dharma Center Directory - In Progress",
      role: "Creator, Developer, Designer, Educator",
      description: "The Dharma Center Directory has the mission to make deep and authentic Buddhist practice accessible. It a living, crowdsourced map and global directory of authentic Dharma practice around the world – built to be by far the most robust directory available",
      link: "https://dharma-gates.vercel.app",
      linkText: "Visit Website"
    },
    {
      title: "Music Genius",
      role: "Developer and Designer",
      description: "Created an elegant interface mimicking audio equipment. Improved Spotify API performance by enhancing the search algorithm, fetching and playing music based on user preferences. Unfortunately, Spotify deprecated this API's functionality, so the app is no longer working. Here's a video demo",
      link: "https://www.youtube.com/watch?v=NT_9bwzr0Hs",
      linkText: "Watch Tutorial"
    },
    {
      title: "Devmountain",
      role: "React.JS Specialization Graduate",
      description: "Completed a 16 week intensive full-stack engineering program specializing in React, Node.js, and SQL. Collaborated in teams to build production-ready applications, mastering OOP principles, testing, and modern industry standards.",
      link: null, 
      linkText: null
    },
    {
      title: "Wesleyan University",
      role: "Audio Engineering Major",
      description: "B.S. Audio Engineering with coursework in Engineering, CS and Programming, Math, Physics, Data, and Media",
      link: null,
      linkText: null
    },
    {
      title: "My Portfolio Page",
      role: "Developer and Designer",
      description: "I custom coded this portfolio page. Perks of being an engineer.",
      link: null,
      linkText: "Hint: You're on it!",
      easterEgg: "balloons"
    }
  ];

  return (
    <div className="portfolio-page">
      <Helmet>
        <title>Adin | Web Developer Portfolio</title>
        <meta name="description" content="Portfolio of Adin - Versatile with core strength in Full Stack Web Development • React.js • UI/UX Design • Squarespace" />
        <meta property="og:title" content="Adin | Web Developer Portfolio" />
        <meta property="og:description" content="View my latest web development projects and resume." />
        <meta name="robots" content="noindex" /> {/* Optional: Hide from Google if you only want to send it directly */}
      </Helmet>

      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <h1>Adin Mankind</h1>
          <h2>Software Engineer, Healing Practitioner</h2>
          {/* <h2>Adin "Stone Boy" Kramer</h2> */}
          <p className="portfolio-subtitle">
            <span>Conscious Creations •</span> <span>Full Stack Web/App Development •</span> <span>UI/UX Design •</span> <span>Tech Infrastructure</span>
          </p>
        </div>
      </section>

            {/* NEW Contact / Bio Section */}
      <section className="portfolio-contact-section">
        <div className="container contact-content-wrapper">
          <div className="contact-image-col">
            <figure className="portfolio-photo-figure">
              <img src={picBio} alt='Adin "Stone Boy" Kramer' className="portfolio-profile-pic" />
              <figcaption>Happy client / owner of the 'SonShip'</figcaption>
            </figure>
          </div>
          <div className="contact-text-col">
            <h3>Graciously handling the tech side of your conscious creation.</h3>
            <p><i>4+ years of experience, trusted by clients across the USA.</i></p>
            <p>
              I build beautiful, custom websites and apps for conscious businesses, practitioners, and communities. With me, you have a sincere spiritual being with the logical left-brain mind of a software engineer, working towards the betterment of mankind. I work closely with my clients to deliver a product that feels authentically like them. I produce clean code, thoughtful designs, and clear communication.
            </p>
            <p>
              I am strong in content writing, web design, the creative process, and the business side of things. You have the option to co-create with me, or bring a fully-formed project and I'll build it exactly as given – or anything in between.
            </p>
            <p><i>
              I hold in my heart that which leads to imperative collective awakening happening on Earth right now. Dharma and Yoga centers, healing practitioners, conscious creations and products, environmentally and socially positive organizations: Reach out – I am happy to connect and support you.
            </i></p>
            <ul className="list-checkmarks contact-highlights">
              <li>
                Affordable and flexible to fit your needs. Let's talk about your project.
              </li>
              <li>
                You just work with me – no complication. 1 versatile engineer that can handle it all: consultation, design collaboration, build, website–business strategy, integrations, hosting, QA, ongoing support.
              </li>
              <li>
                Plus, if you want it: I'm a strong writer and can help with your words, content, and story, not just the tech.
              </li>
              <li>
                Websites are coded with love from scratch without templates. I also use Squarespace as appropriate.
              </li>
              <li>
                Conscious creations without leaking life-force to AI.
              </li>
              <li>
                Easy to work with, strong communicator, creative.
              </li>
              <li>
                Quick turn-around time.
              </li>
              <li>
                Available for long-term support.
              </li>
            </ul>
            <div className="contact-details">
              <p><strong>Location:</strong> Anywhere / A Message or Call Away / USA</p>
            </div>

            <WhatsAppCTA />

            <div className="cta-section" style={{ marginTop: '1.5rem', alignItems: 'center' }}>
              <div className="cta-buttons">
                {/* <a href="/contact#get-in-touch" target="_blank" className="btn">Contact Me for a Free Call</a> */}
                {/* <a href="https://www.linkedin.com/in/adinkramer/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn</a> */}
              </div>
            </div>
          </div>

          <div className="contact-diamond-col">
            <figure className="portfolio-photo-figure">
              <div className="portfolio-diamond-frame">
                <img src={picSmoothie} alt="Adin working from a cafe" className="portfolio-diamond-pic" />
              </div>
              <figcaption>All websites are nutrient-infused.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <div className="portfolio-photo-break portfolio-photo-break-wide">
        <img src={picGulls} alt="Gulls in flight against a clear sky" className="portfolio-wide-pic portfolio-pic-gulls" />
      </div>

      <section className="quote-section">
        <div className="container quote-wrapper">
        <p><Flame />"After carefully reviewing [his work] I'm just thrilled to give up a OHH HELL YES."</p>
        <br></br>
        <p><Flame />"Extremely reliable and followed through with every task in a timely manner."</p>
        <br></br>
        <p><Flame />"Adin had a very thorough understanding of our different options as we navigated our website, and was able to elucidate them to us in a very simple manner."</p>
        <br></br>
        <p><Flame />"We are very satisfied with the creativity, intelligence, and beauty of his work and would be very quick to recommend his services."</p>
        </div>
      </section>

      <div className="portfolio-photo-break portfolio-photo-break-quotes">
        <img src={picYoga} alt="Adin in warrior II pose in an open-air yoga studio" className="portfolio-wide-pic" />
      </div>

      {/* Projects Grid */}
      <div className="container portfolio-section">
        <h2 className="portfolio-section-title">Examples of Work</h2>
        <div className="portfolio-grid">
        {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <span className="card-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{project.title}</h3>
              <h4>{project.role}</h4>
              <p>{project.description}</p>
              
              {/* LOGIC UPDATE: Handle Link vs No-Link Text */}
              {project.easterEgg === 'balloons' ? (
                <button
                  type="button"
                  onClick={launchBalloons}
                  className="portfolio-link portfolio-link-button"
                >
                  {project.linkText} →
                </button>
              ) : project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-link"
                >
                  {project.linkText} →
                </a>
              ) : project.linkText ? (
                <span className="portfolio-no-link">
                  {project.linkText}
                </span>
              ) : null}
              
            </div>
          ))}
        </div>
      </div>

      <div className="portfolio-photo-break portfolio-photo-break-grid">
        <img src={pic70f59c8d} alt="Adin" className="portfolio-profile-pic" />
      </div>

      {/* Call to action, repeated before the résumé */}
      <section className="portfolio-cta-band">
        <div className="container">
          <WhatsAppCTA />
        </div>
      </section>

      {/* Resume Section */}
      <section className="resume-section">
        <div className="container resume-container">
          <h2>Résumé</h2>
          <p>(The formal stuff, if you're into that.)</p>
          <p>Download my full resume for detailed work history and technical skills.</p>
          <div className="cta-section"> {/* WRAPPER ADDED */}
            <div className="cta-buttons">
              <a 
                href={RESUME_PATH} 
                download="Adin_Resume.pdf" 
                className="btn"
              >
                Download PDF
              </a>
              
              <a 
                href={RESUME_PATH} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
              >
                View in Browser
              </a>
              {/* <a href="https://www.linkedin.com/in/adinkramer/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn</a> */}
              {/* <a href="/contact#get-in-touch" target="_blank" className="btn">Contact Me for a Free Call</a> */}
              {/* <a href="https://www.linkedin.com/in/adinkramer/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn</a> */}
            </div>
          </div>

        </div>
      </section>

      {balloons.length > 0 && (
        <div className="balloon-overlay" aria-hidden="true">
          {balloons.map((b) => (
            <span
              key={b.id}
              className="balloon"
              onAnimationEnd={() => removeBalloon(b.id)}
              style={{
                left: `${b.left}%`,
                width: `${b.size}px`,
                height: `${b.size * 1.2}px`,
                animationDuration: `${b.duration}s`,
                animationDelay: `${b.delay}s`,
                '--drift': `${b.drift}px`,
                backgroundColor: b.color,
                color: b.color,
              }}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default Portfolio;