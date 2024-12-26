import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState(''); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); 

    const templateParams = {
      email: email, 
    };

    emailjs
      .send(
        'service_aspd0dh', // Replace with your EmailJS service ID
        'template_365etz8', // Replace with your EmailJS template ID
        templateParams,
        'iacFzb6XlnHl6k1gz' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully!');
        },
        (err) => {
          console.log('FAILED...', err);
          alert('Failed to send email.');
        }
      );
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe to our Newsletter</h1>
        <p className="p__opensans">And never miss the latest updates!</p>
      </div>
      <form onSubmit={handleFormSubmit} className="app__newsletter-input flex__center">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit" className="custom__button">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
