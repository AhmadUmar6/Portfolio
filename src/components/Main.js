// src/components/Main.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Tile from './Tile';
import './Main.css';

const Main = () => {
  const tilesData = [
    {
      title: "Field Finder",
      subtitle: "Sports Ground Marketplace",
      date: "May 2023",
      media: ["FF1.png", "FF2.png", "FF3.png", "FF4.png"],
      link: "/projects/fieldfinder"
    },
    {
      title: "Dream Team",
      subtitle: "Pakistan's First Fantasy Sports App (concept)",
      date: "June 2023",
      media: ["DT1.png", "DT2.png"],
      link: "/projects/dreamteam"
    },
    {
      title: "Chronos App",
      subtitle: "University Course Scheduler",
      date: "July 2023",
      media: ["C1.png", "C2.png", "C3.png"],
      link: "/projects/chronos-scheduler"
    },
    {
      title: "Pantry App",
      subtitle: "Inventory Management System and AI Recipe Suggestions",
      date: "August 2024",
      media: ["P4.png", "P3.png", "P2.png", "P1.png"],
      link: "/projects/pantry-app"
    }
  ];

  return (
    <Container fluid className="main-content">
      <Row>
        <Col xs={12}>
          <div className="header-text">
            <p>Hello there, خوش امدید! <sup>/khush aam-theeth/</sup></p>
            <h1>
              Ahmad's innate curiosity and love for sports have guided him to his ikigai at the nexus of sports and data science. Previously a sports research analyst, he is now broadening his professional scope as an IT intern at PepsiCo.
            </h1>
          </div>
          <hr className="separator" />
          <p className="header-text2">CRAFT</p> 
        </Col>
        {tilesData.map((tile, index) => (
          <Col xs={12} md={6} lg={4} key={index}>
            <Tile
              title={tile.title}
              subtitle={tile.subtitle}
              date={tile.date}
              media={tile.media}
              link={tile.link}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Main;
