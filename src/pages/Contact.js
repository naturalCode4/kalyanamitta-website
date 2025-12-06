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

      {/* Calendly Embed */}
      <section className="contact-content">
        <div className="container">
          <CalendlyEmbed />
        </div>
      </section>
    </div>
  );
};

export default Contact;