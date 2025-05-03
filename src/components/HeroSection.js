import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="bg-light p-5 rounded-lg m-3 text-center">
      <h1 className="display-4">Welcome to SheConnect 🚀</h1>
      <p className="lead">Empowering women through technology and community.</p>
      <Link className="btn btn-primary btn-lg mt-3" to="/contact">Contact Us</Link>
    </div>
  );
}

export default HeroSection;
