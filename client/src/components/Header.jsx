'use strict';

import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container flex justify-between items-center">
        <h1 className="header-title">
          <Link to="/">Full stack Developer</Link>
        </h1>
        <button onClick={toggleMenu} className="hamburger-button">
          {/* Hamburger Icon resembling a real hamburger */}
          <svg
            className="hamburger-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="32px"
            height="32px"
          >
            <g>
              <circle cx="32" cy="32" r="30" fill="#6E7C7C" /> {/* Burger bun */}
              <rect y="25" width="64" height="14" fill="#DA291C" /> {/* Ketchup */}
              <rect y="37" width="64" height="14" fill="#4CAF50" /> {/* Lettuce */}
              <rect y="49" width="64" height="14" fill="#DA291C" /> {/* Patty */}
            </g>
          </svg>
        </button>
      </div>

      {/* Sidebar for mobile navigation */}
      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <button onClick={closeMenu} className="close-button">Close</button>
        <nav className="sidebar-links">
          <Link to="/" className="sidebar-link" onClick={closeMenu}>Home</Link>
          <Link to="/about" className="sidebar-link" onClick={closeMenu}>About</Link>
          <Link to="/services" className="sidebar-link" onClick={closeMenu}>Services</Link>
          <Link to="/contact" className="sidebar-link" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
