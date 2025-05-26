// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="section">
        <div className="header-textt">
          <h1>Ahmad</h1>
          <h1>Umar</h1>
        </div>
        <p className="journey-text">Journey</p>
      </div>
      <hr className="separator" />
      <div className="section">
        <h2>Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="date">Aug 21 - May 25</div>
            <div className="content">
              <h3>Lahore University of Management Sciences</h3>
              <p>BSc Computer Science</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="date">Aug 18 - May 21</div>
            <div className="content">
              <h3>Aitchison College</h3>
              <p>A-Level: 2A* 1A – SAT: 1520</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="separator" />
      <div className="section">
        <h2>Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="date">May 25 - Present</div>
            <div className="content">
              <h3>BigUp</h3>
              <p>Intern</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="date">Jul 24 - Aug 24</div>
            <div className="content">
              <h3>PepsiCo Pakistan</h3>
              <p>Sales and IT Intern</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="date">Jul 24 - Sep 24</div>
            <div className="content">
              <h3>Headstarter AI</h3>
              <p>Software Engineering Fellow</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="date">Jun 24 - Jul 24</div>
            <div className="content">
              <h3>ProSports PK</h3>
              <p>Sports Research Analyst</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="date">Dec 22 - Feb 24</div>
            <div className="content">
              <h3>Suno TV</h3>
              <p>Sports Data Analyst</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="date">Jun 23 - Aug 23</div>
            <div className="content">
              <h3>Glowing Soft Technology Pvt. Ltd.</h3>
              <p>Software Engineering Intern</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="date">Jun 22 - Aug 22</div>
            <div className="content">
              <h3>GenXe Technology Pvt. Ltd.</h3>
              <p>Web Development Intern</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;