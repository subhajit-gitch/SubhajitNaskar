import React, { useState, useEffect } from "react";
import "../css/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
      setMenuOpen(false); // Close the menu after clicking
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar fixed-top ${scrollDirection === "down" ? "hidden" : ""}`}>
      <ul className="logo-container">
        <li onClick={() => scrollToSection("home")} className="logo">
          Subhajit Naskar
        </li>
      </ul>

      <div className={`menu-toggle ${menuOpen ? "is-active" : ""}`} onClick={toggleMenu}>
        <div className="hamburger"></div>
      </div>
      <ul className={`navbar-list navbar-right ${menuOpen ? "is-active" : ""}`}>
        <li onClick={() => scrollToSection("home")} className="navbar-item">Home</li>
        <li onClick={() => scrollToSection("about")} className="navbar-item">About</li>
        <li onClick={() => scrollToSection("skills")} className="navbar-item">Skills</li>
        <li onClick={() => scrollToSection("projects")} className="navbar-item">Projects</li>
        <li onClick={() => scrollToSection("education")} className="navbar-item">Education</li>
        <li onClick={() => scrollToSection("contact")} className="navbar-item">Contact</li>
      </ul>
    </nav>
  );
}
