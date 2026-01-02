import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CalendlyEmbed from '../components/CalendlyEmbed';
import sendEmail from '../utilities/emailUtils'; // Import the utility
import CustomAlert from '../components/CustomAlert'; // Import the custom alert
import './Contact.css';

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

// Handle scroll to hash on load with OFFSET
  // const { hash } = useLocation();

  // useEffect(() => {
  //   if (hash) {
  //     setTimeout(() => {
  //       const element = document.getElementById(hash.replace('#', ''));
  //       if (element) {
  //         // Calculate position with offset for fixed header
  //         const headerOffset = 100; // Adjust this value if you need it higher/lower
  //         const elementPosition = element.getBoundingClientRect().top;
  //         const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  //         window.scrollTo({
  //           top: offsetPosition,
  //           behavior: "instant"
  //         });
  //       }
  //     }, 0);
  //   } else {
  //     window.scrollTo(0, 0);
  //   }
  // }, [hash]);

  return (
    <div className="contact">
      {/* Combined Rainbow Section */}
      <section id="booking" className="contact-content section-rainbow">
        <div className="container content-items">
          {/* Calendly Embed */}
          <div>
            <CalendlyEmbed />
          </div>

          {/* Contact Me by Email Form */}
          <div id="get-in-touch" className="calendly-embed-container">
            <h2>Contact Me by Email</h2>
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