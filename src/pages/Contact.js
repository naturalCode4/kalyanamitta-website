// import React from 'react';
// import CalendlyEmbed from '../components/CalendlyEmbed';
// import sendEmail from '../utilities/emailUtils'; // Import the utility
// import './Contact.css';

// const Contact = () => {
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = {
//       name: e.target.name.value,
//       email: e.target.email.value,
//       message: e.target.message.value,
//     };

//     const result = await sendEmail(formData);

//     if (result.success) {
//       alert(result.message);
//       e.target.reset(); // Reset the form after successful submission
//     } else {
//       alert(result.message);
//     }
//   };

//   return (
//     <div className="contact">

//       {/* Combined Rainbow Section */}
//       <section className="contact-content section-rainbow">
//         {/* <div className="container"> */}
//         <div className="container content-items">
//           {/* Calendly Embed */}
//           <div>
//             <CalendlyEmbed />
//           </div>

//           {/* Contact Me by Email Form */}
//           <div className="calendly-embed-container">
//             <h2>Contact Me by Email</h2>
//             <form className="email-form" onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="name">Your Name</label>
//                 <input type="text" id="name" name="name" placeholder="Enter your name" required />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Your Email</label>
//                 <input type="email" id="email" name="email" placeholder="Enter your email" required />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="message">Your Message</label>
//                 <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
//               </div>
//               <button type="submit" className="btn btn-small">Send</button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import CalendlyEmbed from '../components/CalendlyEmbed';
import sendEmail from '../utilities/emailUtils'; // Import the utility
import CustomAlert from '../components/CustomAlert'; // Import the custom alert
import './Contact.css';

const Contact = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const result = await sendEmail(formData);

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
      {/* Combined Rainbow Section */}
      <section className="contact-content section-rainbow">
        <div className="container content-items">
          {/* Calendly Embed */}
          <div>
            <CalendlyEmbed />
          </div>

          {/* Contact Me by Email Form */}
          <div className="calendly-embed-container">
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
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
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