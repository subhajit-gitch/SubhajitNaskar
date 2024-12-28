import React, { useState } from 'react';
import '../css/Contact.css';
import Footer from './Footer';
import axios from 'axios';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get current date and time
    const now = new Date();
    const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const formattedDate = now.toLocaleDateString('en-GB', dateOptions).replace(/ /g, ' ');
    const formattedTime = now.toLocaleTimeString('en-US', timeOptions);

    // Prepare data to send
    const data = {
      Name: name,
      Email: email,
      Number: number,
      Subject: subject,
      Message: message,
      Date: formattedDate,
      Time: formattedTime,
    };

    try {
      // Make a POST request to the server
      const response = await axios.post(
        'https://script.google.com/macros/s/AKfycbww9OfBu6zc4KDM3R6Bgxi4fWGkM-SHI_NXd0lUBvy2RQl4UgG9gHat27t1sdgRR9U/exec',
        data
      );
      console.log(response);
      alert('Message sent successfully!');

      // Clear the form fields
      setName('');
      setEmail('');
      setNumber('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      <div className="contact-container">
        <h1>CONTACT</h1>
        <h2>Get In Touch</h2>

        {/* Contact Information Section */}
        <div className="contact-info">
          <div className="contact-item">
            <a href="tel:+916291338577" className="button">
              <span role="img" aria-label="phone">📞</span>
              <p>+91 6291338577</p>
            </a>
          </div>
          <div className="contact-item">
            <a href="mailto:s.n240819@gmail.com" className="button">
              <span role="img" aria-label="email">📧</span>
              <p>s.n240819@gmail.com</p>
            </a>
          </div>
          <div className="contact-item">
            <a
              href="https://maps.app.goo.gl/W2eUdiZsDb4nzibEA"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span role="img" aria-label="address">📍</span>
              <p>Kolkata, India</p>
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            name="number"
            placeholder="Phone Number"
            required
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
          <textarea
            name="message"
            placeholder="Type here..."
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
