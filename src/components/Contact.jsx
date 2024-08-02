import React, { useState } from 'react';
import '../css/Contact.css';
import Footer from './Footer';
import axios from 'axios';

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Email: email,
      Number: number,
      Subject: subject,
      Message: message
    }
    axios.post('https://sheet.best/api/sheets/1311d85e-d20e-4424-a310-8c5ee739a25a', data).then((res) => {
      setName('')
      setEmail('')
      setNumber('')
      setSubject('')
      setMessage('')
      console.log(res);
      alert('Message sent successfully!');

    }).catch((error) => {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    })
  }

  return (
    <>
      <div className="contact-container">
        <h1>CONTACT</h1>
        <h2>Get In Touch</h2>
        <div className="contact-info">
          <div className="contact-item">
            <a href="tel:+91 6291338577" className="button">
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
            <a href="https://maps.app.goo.gl/W2eUdiZsDb4nzibEA" className="button" target="_blank" rel="noopener noreferrer">          <span role="img" aria-label="address">📍</span>
              <p>Kolkata, India</p>
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" required
            onChange={(e) => setName(e.target.value)} value={name}
          />
          <input type="email" name="email" placeholder="Email" required
            onChange={(e) => setEmail(e.target.value)} value={email}
          />
          <input type="text" name="number" placeholder="Phone Number" required
            onChange={(e) => setNumber(e.target.value)} value={number}
          />
          <input type="text" name="subject" placeholder="Subject" required
            onChange={(e) => setSubject(e.target.value)} value={subject}
          />
          <textarea name="message" placeholder="Type here..." required
            onChange={(e) => setMessage(e.target.value)} value={message}
          ></textarea>
          <button type="submit" >Send Message</button>
        </form>
      </div >
      <Footer />
    </>

  );
};