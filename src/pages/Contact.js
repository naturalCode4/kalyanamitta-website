import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CalendlyEmbed from '../components/CalendlyEmbed';
import sendEmail from '../utilities/emailUtils'; // Import the utility
import CustomAlert from '../components/CustomAlert'; // Import the custom alert
import './Contact.css';
import { Helmet } from 'react-helmet'; 

const Contact = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'), // Add this line
      message: formData.get('message')
    };

    const result = await sendEmail(data);

    setAlertMessage(result.message); // Set the alert message
    setShowAlert(true); // Show the custom alert

    if (result.success) {
      e.target.reset(); // Reset the form after successful submission
    }
  };

  const closeAlert = () => {
    setShowAlert(false); // Hide the custom alert
  };

  return (
    <div className="contact">
      <Helmet>
        <title>Book a Session or Get In Touch | Healing On Tap</title>
        <meta name="description" content="You are loved. Get started with EFT, Reiki Energy Healing, or Spiritual Counseling. Get in Touch" />
        <meta property="og:title" content="Book a Session or Get In Touch | Healing On Tap" />
        <meta property="og:description" content="You are loved. Get started with EFT, Reiki Energy Healing, or Spiritual Counseling. Get in Touch" />
        <meta property="og:url" content="https://healing-on-tap.com/contact" />
      </Helmet>
      {/* Combined Rainbow Section */}
      <section id="booking" className="contact-content section-rainbow">
        <div className="container content-items">
          {/* Calendly Embed */}
          <div>
            <CalendlyEmbed />
          </div>

          {/* Contact Me by Email Form */}
          <div id="get-in-touch" className="calendly-embed-container">
            <h2>Contact Me</h2>
            <form className="email-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>
              {/* Add Subject Field */}
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Enter the Subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" placeholder="Enter your message" rows="6" required></textarea>
              </div>
              <button type="submit" className="btn btn-small">Send</button>
            </form>
          </div>
        </div>
      </section>

      {/* Custom Alert */}
      {showAlert && <CustomAlert message={alertMessage} onClose={closeAlert} />}
    </div>
  );
};

export default Contact;