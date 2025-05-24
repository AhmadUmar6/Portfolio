import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
const [projectsHidden, setProjectsHidden] = useState(false);
const [contactHidden, setContactHidden] = useState(false);
const location = useLocation();

const toggleProjects = () => setProjectsHidden(!projectsHidden);
const toggleContact = () => setContactHidden(!contactHidden);

// Helper function to check if current path matches the link
const isCurrentPage = (path) => {
  return location.pathname === path;
};

  return (
    <Navbar className="header-nav">
      <div className="header-section">
        <div className="header-content">
          <Navbar.Brand as={Link} to="/" className="brand-text">
            احمد عمر
          </Navbar.Brand>
          <Nav className="primary-nav">
            <Nav.Link as={Link} to="/about" className={`primary-text ${isCurrentPage('/about') ? 'current-page' : ''}`}>
              About
              {isCurrentPage('/about') && <span className="page-indicator">→</span>}
            </Nav.Link>
            <Nav.Link href="/Resume.pdf" className="primary-text">CV</Nav.Link>
            <Nav.Link href="https://github.com/AhmadUmar6" className="primary-text">GitHub</Nav.Link>
          </Nav>
        </div>
      </div>
      <div className="header-section projects-section">
        <div className={`primary-text ${projectsHidden ? '' : 'active'}`} onClick={toggleProjects}>
          Projects
        </div>
        <div className={`secondary-links ${projectsHidden ? 'hidden' : ''}`}>
          <Nav.Link as={Link} to="/projects/fieldfinder" className={`secondary-text ${isCurrentPage('/projects/fieldfinder') ? 'current-page' : ''}`}>
            FieldFinder
            {isCurrentPage('/projects/fieldfinder') && <span className="page-indicator">→</span>}
          </Nav.Link>
          <Nav.Link as={Link} to="/projects/chronos-scheduler" className={`secondary-text ${isCurrentPage('/projects/chronos-scheduler') ? 'current-page' : ''}`}>
            Chronos Scheduler
            {isCurrentPage('/projects/chronos-scheduler') && <span className="page-indicator">→</span>}
          </Nav.Link>
          <Nav.Link as={Link} to="/projects/dreamteam" className={`secondary-text ${isCurrentPage('/projects/dreamteam') ? 'current-page' : ''}`}>
            DreamTeam
            {isCurrentPage('/projects/dreamteam') && <span className="page-indicator">→</span>}
          </Nav.Link>
          <Nav.Link as={Link} to="/projects/pantry-app" className={`secondary-text ${isCurrentPage('/projects/pantry-app') ? 'current-page' : ''}`}>
            Pantry App
            {isCurrentPage('/projects/pantry-app') && <span className="page-indicator">→</span>}
          </Nav.Link>
          <Nav.Link as={Link} to="/projects/ChampionsTrophyPredictor" className={`secondary-text ${isCurrentPage('/projects/ChampionsTrophyPredictor') ? 'current-page' : ''}`}>
            Champions Trophy Predictor
            {isCurrentPage('/projects/ChampionsTrophyPredictor') && <span className="page-indicator">→</span>}
          </Nav.Link>
          <Nav.Link as={Link} to="/projects/serenity-now" className={`secondary-text ${isCurrentPage('/projects/serenity-now') ? 'current-page' : ''}`}>
            Serenity Now
            {isCurrentPage('/projects/serenity-now') && <span className="page-indicator">→</span>}
          </Nav.Link>
          <Nav.Link as={Link} to="/projects/CMTAdvocates" className={`secondary-text ${isCurrentPage('/projects/CMTAdvocates') ? 'current-page' : ''}`}>
            CMT Advocates
            {isCurrentPage('/projects/CMTAdvocates') && <span className="page-indicator">→</span>}
          </Nav.Link>
          <Nav.Link as={Link} to="/projects/eclat-ecommerce" className={`secondary-text ${isCurrentPage('/projects/eclat-ecommerce') ? 'current-page' : ''}`}>
            ÉCLAT
            {isCurrentPage('/projects/eclat-ecommerce') && <span className="page-indicator">→</span>}
          </Nav.Link>
        </div>
      </div>
      <div className="header-section contact-section">
        <div className={`primary-text ${contactHidden ? '' : 'active'}`} onClick={toggleContact}>
          Contact
        </div>
        <div className={`secondary-links ${contactHidden ? 'hidden' : ''}`}>
          <Nav.Link href="mailto:ahmadumar5485@gmail.com" className="secondary-text">Mail</Nav.Link>
          <Nav.Link href="https://x.com/crank0cean" className="secondary-text">Twitter</Nav.Link>
          <Nav.Link href="https://linkedin.com/in/ahmadumarfarooq/" className="secondary-text">LinkedIn</Nav.Link>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;