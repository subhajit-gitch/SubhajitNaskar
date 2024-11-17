import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaHackerrank, FaInstagram, FaFacebook } from 'react-icons/fa';
import '../css/Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <h2>Subhajit Naskar</h2>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/isubhajit-naskar/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/subhajit-gitch" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.hackerrank.com/profile/s_n240819" target="_blank" rel="noopener noreferrer">
                    <FaHackerrank />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100095134847923&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                    <FaFacebook /> 
                </a>
                <a href="https://www.instagram.com/i_subhajit_naskar?igsh=MWVoZWEyMmVvN24wYQ==" target="_blank" rel="noopener noreferrer">
                    <FaInstagram /> 
                </a>
                <a href="https://x.com/say_subhajit" target="_blank" rel="noopener noreferrer">
                    <FaTwitter /> 
                </a>
                

            </div>
            <p>© subhajit-gitch. All rights reserved</p>
        </footer>
    );
};