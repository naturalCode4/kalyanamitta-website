const sendEmail = async (formData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000'}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
  
      return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
      console.error('Error sending email:', error);
      return { success: false, message: 'An error occurred while sending the email.' };
    }
  };
  
  export default sendEmail;