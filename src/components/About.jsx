import React from 'react';
import '../css/About.css';
import AboutImage from '../image/About.jpg';//image
import { useTypewriter, Cursor } from 'react-simple-typewriter'


export default function About() {

  const [data] = useTypewriter({
    words: ["Hello! I'm Subhajit Naskar, a passionate Web Designer & Developer.I specialize in MERN As Full Stack,      and I'm dedicated to crafting engaging and user-friendly solutions.With a strong foundation in HTML5, CSS3, Javascript, Java, Python & SQL. I thrive on solving complex problems and delivering high-quality results.My approach combines creativity, attention to detail, and a commitment to continuous learning. Outside of work, you can find me exploring new technologies, collaborating with peers, and contributing to open-source projects. Let's connect and create something amazing together!"],
    
  })
  return (
    <div className="about-container">
      <h1>About</h1>
      <div className="about-content">
        <div className="image-section">
          <img src={AboutImage} alt="AboutImage" />
        </div>
        <div className="text-section">
          <h3>I'm Subhajit Naskar</h3>
          <h4>
            {data}
            <Cursor/>
          </h4>
        </div>
      </div>
    </div>
  );
};

