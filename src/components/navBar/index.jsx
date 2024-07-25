import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Make sure to add styles in this file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/img 4.png`} alt="Company Logo" className="logo" />
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <ul className={`navbar-list ${isOpen ? 'show' : ''}`}>
        <li className="navbar-item">
          <Link to="/" className="navbar-link" onClick={closeMenu}>Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link" onClick={closeMenu}>Services</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link" onClick={closeMenu}>Contact</Link>
        </li>
        <li className="navbar-item">
          <Link to="/exams" className="navbar-link" onClick={closeMenu}>Exams</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

