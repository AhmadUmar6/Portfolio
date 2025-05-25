import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Folder, FolderOpen, File } from 'lucide-react';
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
            <Nav.Link as={Link} to="/about" className={`primary-text file-item ${isCurrentPage('/about') ? 'current-page' : ''}`}>
              <File size={16} className="file-icon" />
              About
            </Nav.Link>
            <Nav.Link href="/Resume.pdf" className="primary-text file-item">
              <File size={16} className="file-icon" />
              CV
            </Nav.Link>
            <Nav.Link href="https://github.com/AhmadUmar6" className="primary-text file-item">
              <File size={16} className="file-icon" />
              GitHub
            </Nav.Link>
          </Nav>
        </div>
      </div>
      <div className="header-section projects-section">
        <div className={`primary-text folder-item ${projectsHidden ? '' : 'active'}`} onClick={toggleProjects}>
          {projectsHidden ? <Folder size={16} className="folder-icon" /> : <FolderOpen size={16} className="folder-icon" />}
          Projects
        </div>
        <div className={`secondary-links ${projectsHidden ? 'hidden' : ''}`}>
          <div className="indent-container">
            <div className="indent-line"></div>
            <div className="indent-content">
              <Nav.Link as={Link} to="/projects/fieldfinder" className={`secondary-text file-item ${isCurrentPage('/projects/fieldfinder') ? 'current-page' : ''}`}>
                <File size={14} className="file-icon" />
                FieldFinder
              </Nav.Link>
              <Nav.Link as={Link} to="/projects/chronos-scheduler" className={`secondary-text file-item ${isCurrentPage('/projects/chronos-scheduler') ? 'current-page' : ''}`}>
                <File size={14} className="file-icon" />
                Chronos 
              </Nav.Link>
              <Nav.Link as={Link} to="/projects/dreamteam" className={`secondary-text file-item ${isCurrentPage('/projects/dreamteam') ? 'current-page' : ''}`}>
                <File size={14} className="file-icon" />
                DreamTeam
              </Nav.Link>
              <Nav.Link as={Link} to="/projects/pantry-app" className={`secondary-text file-item ${isCurrentPage('/projects/pantry-app') ? 'current-page' : ''}`}>
                <File size={14} className="file-icon" />
                Pantry App
              </Nav.Link>
              <Nav.Link as={Link} to="/projects/ChampionsTrophyPredictor" className={`secondary-text file-item ${isCurrentPage('/projects/ChampionsTrophyPredictor') ? 'current-page' : ''}`}>
                <File size={14} className="file-icon" />
                CT Predictor
              </Nav.Link>
              <Nav.Link as={Link} to="/projects/serenity-now" className={`secondary-text file-item ${isCurrentPage('/projects/serenity-now') ? 'current-page' : ''}`}>
                <File size={14} className="file-icon" />
                Serenity Now
              </Nav.Link>
              <Nav.Link as={Link} to="/projects/CMTAdvocates" className={`secondary-text file-item ${isCurrentPage('/projects/CMTAdvocates') ? 'current-page' : ''}`}>
                <File size={14} className="file-icon" />
                CMT Advocates
              </Nav.Link>
              <Nav.Link as={Link} to="/projects/eclat-ecommerce" className={`secondary-text file-item ${isCurrentPage('/projects/eclat-ecommerce') ? 'current-page' : ''}`}>
                <File size={14} className="file-icon" />
                ÉCLAT
              </Nav.Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header-section contact-section">
        <div className={`primary-text folder-item ${contactHidden ? '' : 'active'}`} onClick={toggleContact}>
          {contactHidden ? <Folder size={16} className="folder-icon" /> : <FolderOpen size={16} className="folder-icon" />}
          Contact
        </div>
        <div className={`secondary-links ${contactHidden ? 'hidden' : ''}`}>
          <div className="indent-container">
            <div className="indent-line"></div>
            <div className="indent-content">
              <Nav.Link href="mailto:ahmadumar5485@gmail.com" className="secondary-text file-item">
                <File size={14} className="file-icon" />
                Mail
              </Nav.Link>
              <Nav.Link href="https://x.com/crank0cean" className="secondary-text file-item">
                <File size={14} className="file-icon" />
                Twitter
              </Nav.Link>
              <Nav.Link href="https://linkedin.com/in/ahmadumarfarooq/" className="secondary-text file-item">
                <File size={14} className="file-icon" />
                LinkedIn
              </Nav.Link>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;