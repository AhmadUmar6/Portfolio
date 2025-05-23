// src/components/projects/CMTAdvocates.js
import React, { useState, useEffect } from 'react';
import './CMTAdvocates.css'; // Ensure this CSS file exists and is correctly named

const images = ["/cmt1.jpg", "/cmt2.jpg"];

const CMTAdvocates = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cmtadvocates-container">
      <div className="image-tile">
        <img src={images[currentImageIndex]} alt="CMT Advocates Website" className="tile-image" />
      </div>
      <div className="content-section">
        <h1>
          <a href="https://cmtadvocates.vercel.app" target="_blank" rel="noopener noreferrer" className="cmtadvocates-link"> Try CMT Advocates!</a>
        </h1>
        <h2>Law Firm Website</h2>
        <p>
          CMT Advocates is a professional website developed as a freelance project for a major Pakistani law firm. The primary objective was to establish a credible and sophisticated online presence that effectively communicates the firm's expertise, values, and services to potential clients and the wider community.
        </p>
      </div>
      <hr className="separator" />
      <div className="content-section">
        <div className="stack">
          <h2>Stack</h2>
          <p>React.js, Next.js (for optimal performance, SEO, and a professional structure), Material-UI (for a polished and comprehensive component library), and deployed on Vercel for continuous integration and robust hosting.</p>
        </div>
      </div>
    </div>
  );
};

export default CMTAdvocates;