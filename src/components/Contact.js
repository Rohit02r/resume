import React, { useState } from 'react';
import '../Styles/Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mailtoLink = `mailto:your-email@example.com?subject=Message from ${formData.name}&body=${formData.message} (${formData.email})`;
    window.location.href = mailtoLink; 
  };

  return (
    <div className='pb-5 pt-3'>
    <div className="contact-form">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    <p className='mt-5'>Thank you for Visiting💗</p>
    </div>
  );
};

export default ContactForm;
