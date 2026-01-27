import React, { useEffect }from 'react';
import { Helmet } from 'react-helmet';
import './Devportfolio.css';
import Section from '../components/Section';
import pic5 from '../assets/pic5.jpg'

// You will need to put your resume PDF in public/assets/ or src/assets/
// For now, I'll link to a placeholder path
const RESUME_PATH = "/assets/Adin_Resume.pdf"; 

const Portfolio = () => {
  
  useEffect(() => {
    const footer = document.querySelector('footer');
      if (footer) footer.style.display = 'none';
      return () => {
        if (footer) footer.style.display = 'block'; // Restore on unmount
      };
  }, []);

  const projects = [
    {
      title: "Healing On Tap",
      role: "Developer & Designer",
      description: "A high-performance React website designed and built from scratch. Features include intricate frontend implementation with JS/CSS design and animations, no-framework responsive layouts, Google Mailer/ Maps/ Reviews API integration via serverless functions, and SEO optimization (Schema/Helmet).",
      link: "/", // Links to home
      linkText: "View Website (hint: you're on it)"
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
      link: "https://www.u-queue.com/",
      linkText: "Visit Website"
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
      title: "Music Genius - Temporary bug: Fixing Spotify API issues",
      role: "Developer and Designer",
      description: "Created an elegant interface mimicking audio equipment. Improved Spotify API performance by enhancing the search algorithm, fetching and playing music based on user preferences",
      link: "https://musicgenius.onrender.com/",
      linkText: "Visit Website"
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
    }
  ];

  return (
    <div className="portfolio-page">
      <Helmet>
        <title>Adin | Web Developer Portfolio</title>
        <meta name="description" content="Portfolio of Adin - Versatile with core strength in Web Development • React.js • UI/UX Design • Fullstack Applications" />
        <meta property="og:title" content="Adin | Web Developer Portfolio" />
        <meta property="og:description" content="View my latest web development projects and resume." />
        <meta name="robots" content="noindex" /> {/* Optional: Hide from Google if you only want to send it directly */}
      </Helmet>

      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="container">
          <h1>Software Development Portfolio</h1>
          <h2>Adin "Stone Boy" Kramer</h2> {/* Added Name */}
          <p className="portfolio-subtitle">
            Web Development • React.JS • Fullstack Applications • UI/UX Design
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="container portfolio-section">
        <div className="portfolio-grid">
        {projects.map((project, index) => (
            <div key={index} className="portfolio-card">
              <span className="card-number">0{index + 1}</span>
              <h3>{project.title}</h3>
              <h4>{project.role}</h4>
              <p>{project.description}</p>
              
              {/* LOGIC UPDATE: Handle Link vs No-Link Text */}
              {project.link ? (
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

      {/* Resume Section */}
      <section className="resume-section">
        <div className="container resume-container">
          <h2>Resume</h2>
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
            </div>
          </div>

        </div>
      </section>

      {/* NEW Contact / Bio Section */}
      <section className="portfolio-contact-section">
        <div className="container contact-content-wrapper">
          <div className="contact-image-col">
            <img src={pic5} alt='Adin "Stone Boy" Kramer' className="portfolio-profile-pic" />
          </div>
          <div className="contact-text-col">
            <h3>Let's Connect</h3>
            <p>
              Building and designing high quality custom websites is a passion! I have some availability, so get in touch if you would like me to build (or contribute to) your website or app.
            </p>
            <p>
              If you value clean code, excellent design, timely delivery, and a seasoned developer who invests and cares about the product, I'd love to hear from you.
            </p>
            <p>
              I am especially excited to develop for Dharma centers, healing practitioners, and environmentally/socially positive organizations— and I may give you a friend rate for the good fortune of building something I feel a heart-connection to.
            </p>
            <div className="contact-details">
              <p><strong>Email:</strong> healingontap963@gmail.com</p>
              <p><strong>Phone:</strong> +1 (301) 641-2855</p>
              <p><strong>Location:</strong> Philadelphia, PA / Remote</p>
            </div>
            
            <div className="cta-section" style={{ marginTop: '1.5rem', alignItems: 'flex-start' }}>
              <div className="cta-buttons">
                <a href="mailto:healingontap963@gmail.com" className="btn">Email Me</a>
                <a href="https://www.linkedin.com/in/adinkramer/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;