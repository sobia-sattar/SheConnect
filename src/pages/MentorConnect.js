import React from 'react';
import './MentorConnect.css';

function MentorConnect() {
  return (
    <div className="mentor-connect">
      <h2 className="section-title">Mentor Connect</h2>
      <p className="section-description">
        Connect with female mentors in tech, science, or health fields. Get career advice, guidance, and inspiration to kick-start your journey.
      </p>
      
      <div className="mentor-list">
        <div className="mentor-item">
          <h3 className="mentor-name">Sophia Ali</h3>
          <p className="mentor-field">Tech Entrepreneur | AI Specialist</p>
          <p className="mentor-description">
            Sophia is an AI expert with over 10 years of experience in machine learning and data science. She is passionate about mentoring young women entering tech.
          </p>
          <a href="mailto:sophia.ali@techmail.com" className="contact-link">Contact Sophia</a>
        </div>

        <div className="mentor-item">
          <h3 className="mentor-name">Dr. Amina Khan</h3>
          <p className="mentor-field">Healthcare Researcher | Women's Health Advocate</p>
          <p className="mentor-description">
            Dr. Khan has been at the forefront of healthcare research for women's wellness, specializing in reproductive health. She offers mentoring for aspiring healthcare professionals.
          </p>
          <a href="mailto:amina.khan@healthmail.com" className="contact-link">Contact Dr. Khan</a>
        </div>

        <div className="mentor-item">
          <h3 className="mentor-name">Emily Zhang</h3>
          <p className="mentor-field">Software Engineer | Tech Lead</p>
          <p className="mentor-description">
            Emily is a tech lead at a leading software company with a focus on full-stack development. She loves helping women navigate the tech industry and find their place in it.
          </p>
          <a href="mailto:emily.zhang@techmail.com" className="contact-link">Contact Emily</a>
        </div>

        <div className="mentor-item">
          <h3 className="mentor-name">Nina Patel</h3>
          <p className="mentor-field">Research Scientist | Biomedical Engineering</p>
          <p className="mentor-description">
            Nina is a biomedical engineer researching innovative health solutions. She's dedicated to helping women in STEM fields by sharing her knowledge and experience.
          </p>
          <a href="mailto:nina.patel@biomedmail.com" className="contact-link">Contact Nina</a>
        </div>
      </div>
    </div>
  );
}

export default MentorConnect;
