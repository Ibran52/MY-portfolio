import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({name: '', email: '', phone: '', subject: '', message: ''});
      } else {
        setStatus(data.error || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <div className="input-box">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-box">
          <input type="number" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
        </div>
      </div>

      <div className="input-group2">
        <textarea cols="30" rows="10" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <input type="submit" value="Send Message" className="btn" />
      </div>
      <p>{status}</p>
    </form>
  );
};

export default ContactForm;
