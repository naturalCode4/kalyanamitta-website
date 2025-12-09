// import React from 'react';
// import CalendlyEmbed from '../components/CalendlyEmbed';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <div className="contact">
//       {/* Hero Section */}
//       <section className="contact-hero">
//         <div className="container">
//           <div className="contact-hero-content">
//             <h1>Book Your Session</h1>
//             <p className="contact-subtitle">
//               Ready to begin your healing journey? Choose from the available sessions below and book directly through Calendly.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Calendly Embed */}
//       <section className="contact-content">
//         <div className="container">
//           <CalendlyEmbed />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;

import React from 'react';
import CalendlyEmbed from '../components/CalendlyEmbed';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Book Your Session</h1>
            <p className="contact-subtitle">
              Ready to begin your healing journey? Choose from the available sessions below and book directly through Calendly.
            </p>
          </div>
        </div>
      </section>

      {/* Combined Rainbow Section */}
      <section className="contact-content section-rainbow">
        <div className="container">
          {/* Calendly Embed */}
          <div className="calendly-section bordered-section">
            <CalendlyEmbed />
          </div>

          {/* Contact Me by Email Form */}
          <div className="contact-email bordered-section">
            <h2>Contact Me by Email</h2>
            <form className="email-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-small">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;