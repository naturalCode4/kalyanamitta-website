import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CalendlyEmbed from '../components/CalendlyEmbed';
import sendEmail from '../utilities/emailUtils'; // Import the utility
import CustomAlert from '../components/CustomAlert'; // Import the custom alert
import './Contact.css';
import { Helmet } from 'react-helmet'; 

const SUBJECT_OPTIONS = [
  'Schedule a 30-minute Free Consultation',
  'Question about Offerings and Programs',
  'Invite Adin to Lead An Event',
  'Other',
];

const Contact = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [subjectChoice, setSubjectChoice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const rawSubject = formData.get('subject');
    const subject = rawSubject === 'Other' ? formData.get('customSubject') : rawSubject;
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject,
      message: formData.get('message')
    };

    const result = await sendEmail(data);

    setAlertMessage(result.message); // Set the alert message
    setShowAlert(true); // Show the custom alert

    if (result.success) {
      e.target.reset(); // Reset the form after successful submission
      setSubjectChoice(''); // Native reset() doesn't touch this controlled select
    }
  };

  const closeAlert = () => {
    setShowAlert(false); // Hide the custom alert
  };

  return (
    <div className="contact">
      <Helmet>
        <title>Book a Session or Get In Touch | Healing On Tap</title>
        <meta name="description" content="Transform yourself and heal. Get started with EFT or Spiritual Counseling. Get in Touch" />
        <meta property="og:title" content="Healing On Tap | Book a Session or Get In Touch" />
        <meta property="og:description" content="Transform yourself and heal. Get started with EFT or Spiritual Counseling. Get in Touch" />
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
            <h2 className="subtitle-heading">Get in Touch</h2>
            <form className="email-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>
              {/* Subject Field */}
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={subjectChoice}
                  onChange={(e) => setSubjectChoice(e.target.value)}
                  required
                >
                  <option value="" disabled>Select a subject</option>
                  {SUBJECT_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                {subjectChoice === 'Other' && (
                  <input
                    type="text"
                    name="customSubject"
                    placeholder="Please specify"
                    className="subject-other-input"
                    required
                  />
                )}
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" placeholder="Your message" rows={6} required></textarea>
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