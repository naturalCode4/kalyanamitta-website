const sendEmail = async (formData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
  
      return { success: true, message: `Thank you for being in touch! I will respond to your message shortly —`};
    } catch (error) {
      console.error('Error sending email:', error);
      return { success: false, message: 'An error occurred while sending the email.' };
    }
  };
  
  export default sendEmail;