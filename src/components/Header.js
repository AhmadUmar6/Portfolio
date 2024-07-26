import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  const [projectsHidden, setProjectsHidden] = useState(false);
  const [contactHidden, setContactHidden] = useState(false);

  const toggleProjects = () => setProjectsHidden(!projectsHidden);
  const toggleContact = () => setContactHidden(!contactHidden);

  return (
    <Navbar className="header-nav">
      <div className="header-section">
        <div className="header-content">
          <Navbar.Brand as={Link} to="/" className="brand-text">
            احمد عمر
          </Navbar.Brand>
          <Nav className="primary-nav">
            <Nav.Link as={Link} to="/about" className="primary-text">About</Nav.Link>
            <Nav.Link href ="/Resume.pdf" className="primary-text">CV</Nav.Link>
          </Nav>
        </div>
      </div>
      <div className="header-section projects-section">
        <div className={`primary-text ${projectsHidden ? '' : 'active'}`} onClick={toggleProjects}>
          Projects
        </div>
        <div className={`secondary-links ${projectsHidden ? 'hidden' : ''}`}>
          <Nav.Link as={Link} to="/projects/fieldfinder" className="secondary-text">FieldFinder</Nav.Link>
          <Nav.Link as={Link} to="/projects/chronos-scheduler" className="secondary-text">Chronos Scheduler</Nav.Link>
          <Nav.Link as={Link} to="/projects/dreamteam" className="secondary-text">DreamTeam</Nav.Link>
        </div>
      </div>
      <div className="header-section contact-section">
        <div className={`primary-text ${contactHidden ? '' : 'active'}`} onClick={toggleContact}>
          Contact
        </div>
        <div className={`secondary-links ${contactHidden ? 'hidden' : ''}`}>
          <Nav.Link href="mailto:ahmadumar5485@gmail.com" className="secondary-text">Mail</Nav.Link>
          <Nav.Link href="https://x.com/ahmadnotumar" className="secondary-text">Twitter</Nav.Link>
          <Nav.Link href="https://linkedin.com/in/ahmadumarfarooq/" className="secondary-text">LinkedIn</Nav.Link>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
