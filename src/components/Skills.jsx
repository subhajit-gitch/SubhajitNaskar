import React from 'react';
import '../css/Skills.css';
import { FaHtml5, FaCss3, FaBootstrap, FaJava, FaJs, FaPython, FaDatabase, FaReact,FaLeaf } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import SkillsImage from '../image/Skills.jpg'; // image

const skills = [
    { name: 'HTML-5', level: 95, icon: <FaHtml5 /> },
    { name: 'CSS-3', level: 50, icon: <FaCss3 /> },
    { name: 'BOOTSTRAP-5', level: 70, icon: <FaBootstrap /> },
    { name: 'JAVA', level: 60, icon: <FaJava /> },
    { name: 'JAVASCRIPT', level: 45, icon: <FaJs /> },
    { name: 'PYTHON', level: 45, icon: <FaPython /> },
    { name: 'SQL', level: 50, icon: <FaDatabase /> },
    { name: 'REACT', level: 60, icon: <FaReact /> },
    { name: 'MY SQL', level: 50, icon: <SiMysql /> },
    { name: 'MONGODB', level: 50, icon: <FaLeaf /> },
];

export default function Skills() {
    return (
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-content">
                <div className="text-section">
                    <h3>Professional Skills</h3>
                    <p>
                        Experienced in MERN Mongo, Express, React, Node and with proficiency in Java and SQL.
                        I bring a comprehensive skill set to the table,
                        enabling me to develop robust web applications with seamless frontend-backend integration.
                        With a strong foundation in software development principles and a passion for continuous learning,
                        I am committed to delivering high-quality solutions that meet the needs of modern businesses.
                    </p>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill"
                            style={{ animationDelay: `${index * 0.2}s` }} // Delay each skill by 0.2s
                        >
                            <div className="skill-info">
                                <span className="skill-icon">{skill.icon}</span>
                                <span className="skill-name">{skill.name}</span>
                                <span>{skill.level}%</span>
                            </div>
                            <div className="progress-bar">
                                <div
                                    className="progress"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="image-section">
                    <img src={SkillsImage} alt="SkillsImage" />
                </div>
            </div>
        </div>
    );
};
