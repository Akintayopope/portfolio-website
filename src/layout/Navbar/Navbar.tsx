import React, { useState } from "react";
import "./Navbar.css";

import { Heading } from "../../components/Heading/Heading";
import { Button } from "../../components/Button/Button";

// Icons
import { Code2, BookOpen, Briefcase, Terminal, Wrench } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        {/* LEFT ─ LOGO */}
        <div className="nav-logo">
          <div className="logo-icon">AP</div>
          <Heading level={3} className="logo-text">
            Akintayo
          </Heading>
        </div>

        {/* CENTER ─ DESKTOP LINKS */}
        <div className="nav-links desktop-only">
          <a href="#home" className="nav-link">
            <Code2 size={18} /> Home
          </a>

          <a href="#about" className="nav-link">
            <BookOpen size={18} /> About
          </a>

          <a href="#work" className="nav-link">
            <Briefcase size={18} /> Work
          </a>

          <a href="#skills" className="nav-link">
            <Terminal size={18} /> Skills
          </a>

          <a href="#resources" className="nav-link">
            <BookOpen size={18} /> Resources
          </a>

          <a href="#devsetup" className="nav-link">
            <Wrench size={18} /> Dev Setup
          </a>
        </div>

        {/* RIGHT ─ DESKTOP BUTTON */}
        <div className="desktop-only">
          <Button label="Connect With Me" variant="gradient" />
        </div>

        {/* MOBILE ─ HAMBURGER ICON */}
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* MOBILE ─ OPEN MENU */}
      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          <Code2 size={18} /> Home
        </a>

        <a href="#about" onClick={closeMenu}>
          <BookOpen size={18} /> About
        </a>

        <a href="#work" onClick={closeMenu}>
          <Briefcase size={18} /> Work
        </a>

        <a href="#skills" onClick={closeMenu}>
          <Terminal size={18} /> Skills
        </a>

        <a href="#resources" onClick={closeMenu}>
          <BookOpen size={18} /> Resources
        </a>

        <a href="#devsetup" onClick={closeMenu}>
          <Wrench size={18} /> Dev Setup
        </a>

        {/* MOBILE BUTTON */}
        <Button
          label="Connect With Me"
          variant="gradient"
          style={{ width: "100%", marginTop: "1.5rem" }}
        />
      </div>
    </header>
  );
}

export default Navbar;
