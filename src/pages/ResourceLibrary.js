import React from 'react';
import './ResourceLibrary.css';

function resources() {
  return (
    <div className="resource-library">
      <h2 className="section-title">Resource Library</h2>
      <p className="section-description">
        Explore articles, videos, and guides on health, safety, careers, and more.
      </p>
      
      <div className="resources">
        <div className="resource-item">
          <h3 className="resource-title">Menstrual Health: A Complete Guide</h3>
          <p className="resource-description">
            An in-depth article covering menstrual health, its importance, and how to manage menstrual issues effectively.
          </p>
          <a href="#" className="read-more-link">Read More</a>
        </div>

        <div className="resource-item">
          <h3 className="resource-title">Self-Defense Techniques Every Woman Should Know</h3>
          <p className="resource-description">
            Learn the basics of self-defense to stay safe in any situation. Includes easy-to-follow tips and video tutorials.
          </p>
          <a href="#" className="read-more-link">Watch Video</a>
        </div>

        <div className="resource-item">
          <h3 className="resource-title">How to Build a Successful Career in Tech</h3>
          <p className="resource-description">
            A comprehensive guide to pursuing a career in the tech industry, from coding to getting your first job.
          </p>
          <a href="#" className="read-more-link">Read Article</a>
        </div>

        <div className="resource-item">
          <h3 className="resource-title">Scholarships for Women in STEM</h3>
          <p className="resource-description">
            Find the best scholarships for women pursuing careers in science, technology, engineering, and mathematics.
          </p>
          <a href="#" className="read-more-link">Explore Opportunities</a>
        </div>
      </div>
    </div>
  );
}

export default resources;
