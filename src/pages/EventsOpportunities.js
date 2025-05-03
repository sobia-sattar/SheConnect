// src/pages/EventsOpportunities.js

import React from 'react';
import './EventsOpportunities.css';  // Import the CSS file for styling

const EventsOpportunities = () => {
  return (
    <div className="events-opportunities">
      <h1>Events & Opportunities</h1>
      <p className="description">
        Discover scholarships, seminars, meetups, and other opportunities designed for women.
      </p>
      
      <div className="events-list">
        <div className="event-item">
          <h2>Women in Tech Scholarship</h2>
          <p>A scholarship program for women pursuing careers in technology. Apply by 30th June.</p>
        </div>
        <div className="event-item">
          <h2>Women Empowerment Seminar</h2>
          <p>Join a 2-day seminar to learn about empowerment, leadership, and career growth. Register now!</p>
        </div>
        <div className="event-item">
          <h2>Networking Meet-up for Women</h2>
          <p>Meet other women in business and tech to expand your network and career opportunities. Date: 15th May.</p>
        </div>
      </div>
    </div>
  );
}

export default EventsOpportunities;
