import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Make sure to add styles in this file or inline

const Navbar = () => {
  return (
    <nav className="navbar">
     <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/img 4.png`} alt="Company Logo" className="logo" />
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">Services</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">Contact</Link>
        </li>
        <li className="navbar-item">
          <Link to="/exams" className="navbar-link">Exams</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
