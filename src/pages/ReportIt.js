// src/pages/ReportIt.js

import React from 'react';
import './ReportIt.css';  // Import the CSS file for styling

const ReportIt = () => {
  return (
    <div className="report-it">
      <h1>Report It</h1>
      <p className="description">
        You can anonymously report incidents to the school or university authorities. Your identity will remain protected.
      </p>
      <div className="report-form">
        <textarea placeholder="Describe the incident..." rows="6" />
        <button>Submit Report</button>
      </div>
    </div>
  );
}

export default ReportIt;
