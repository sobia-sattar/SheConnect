// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // (assuming you already have styling)

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">SheConnect</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/forum">Forum</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/emergency">Emergency</Link>
        <Link to="/mentor-connect">Mentor Connect</Link>
        <Link to="/report">Report It</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link> {/* 🔥 JUST ADDED */}
      </div>
    </nav>
  );
}

export default Navbar;
