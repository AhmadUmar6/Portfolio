// src/components/PantryApp.js
import React, { useState, useEffect } from 'react';
import './PantryApp.css';

const images = ["/P4.png", "/P3.png", "/P2.png"];

const PantryApp = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pantryapp-container">
      <div className="image-tile">
        <img src={images[currentImageIndex]} alt="Pantry App" className="tile-image" />
      </div>
      <div className="content-section">
        <a href="https://pantry-app-ruddy.vercel.app/login" target="_blank" rel="noopener noreferrer" className="pantry-link">Try Pantry App!</a>
        <h2>Inventory Management System and AI Recipe Suggestions</h2>
        <p>
          This project focuses on managing pantry inventory and providing smart, AI-driven recipe suggestions based on available ingredients. It features Firebase for authentication and database handling, a light and dark mode toggle, and utilizes the GroqCloud API for generating healthy recipes.
        </p>
      </div>
      <hr className="separator" />
      <div className="content-section">
        <div className="stack-github">
          <div className="stack">
            <h2>Stack</h2>
            <p>Firebase, Next.js, Material UI, GroqCloud API</p>
          </div>
          <div className="github">
            <h2>Repository</h2>
            <p>
              <a href="https://github.com/AhmadUmar6/pantry-app" target="_blank" rel="noopener noreferrer" className="github-link">Github Repository</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PantryApp;
