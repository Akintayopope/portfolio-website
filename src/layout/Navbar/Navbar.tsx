import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-logo">
          <div className="logo-icon">AP</div>
          <span className="logo-text">Akintayo</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#resources">Resources</a>
          <a href="#devsetup">Dev Setup</a>
        </div>

        <div className="nav-connect">Connect With Me</div>
      </nav>
    </header>
  );
}

export default Navbar;
