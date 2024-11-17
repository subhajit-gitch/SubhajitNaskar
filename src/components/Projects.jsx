import React from 'react';
import '../css/Projects.css'; 
import FlyHigh from '../image/Project 2.png'
import OrganicFood from '../image/Project 1.png'

const ProjectCard = ({ title, image, link }) => {
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </a>
    </div>
  );
};

const projects = [
  { title: 'Flight Ticket Booking Portal', image: FlyHigh, link: 'https://github.com/subhajit-gitch/FlyHigh' },
  { title: 'Organic Product', image: OrganicFood, link: 'https://github.com/subhajit-gitch/Organic-Product-Web-Page' },

];

export default function Projects() {
  return (
    <div className="project-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

