import React, { useState } from 'react';
import './Navbar.css';

import { Heading } from '../../components/Heading/Heading';
import { Button } from '../../components/Button/Button';
import { Dropdown } from '../../components/Dropdown/Dropdown'; // <-- YOU MUST USE THIS
import { NavLink } from '../../components/NavLink/NavLink';
import { navLinks } from '../../data/navLinks';

function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        {/* LEFT — LOGO */}
        <div className="nav-logo">
          <div className="logo-icon">AP</div>
          <Heading level={3} className="logo-text">
            Akintayo
          </Heading>
        </div>

        {/* CENTER — DESKTOP LINKS */}
        <div className="nav-links desktop-only">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <NavLink key={href} href={href} label={label} Icon={Icon} />
          ))}
        </div>

        {/* RIGHT — DESKTOP BUTTON */}
        <div className="desktop-only">
          <Button label="Connect With Me" variant="gradient" href="/contact" />
        </div>

        <Dropdown
          type="menu"
          label=""
          icon={
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          }
          mobile
        >
          <div className="mobile-menu-content">
            {navLinks.map(({ href, label, icon: Icon }) => (
              <NavLink key={href} href={href} label={label} Icon={Icon} />
            ))}

            <Button
              label="Connect With Me"
              variant="gradient"
              style={{ width: '100%', marginTop: '1.2rem' }}
            />
          </div>
        </Dropdown>
      </nav>
    </header>
  );
}

export default Navbar;
