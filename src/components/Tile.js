import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Tile.css';

const Tile = ({ title, subtitle, date, media, link }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (Array.isArray(media) && media.length > 1) {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % media.length);
          setIsAnimating(false);
        }, 1500);
      }, 5000 + Math.random() * 2000); // Random interval between 5-7 seconds

      return () => clearInterval(interval);
    }
  }, [media]);

  const currentImage = Array.isArray(media) ? media[currentImageIndex] : media;

  return (
    <div className="tile-container">
      <Link to={link}>
        <div className="tile">
          <img 
            src={currentImage} 
            alt={title} 
            className={`tile-media ${isAnimating ? 'animating' : ''}`} 
          />
        </div>
      </Link>
      <div className="tile-content">
        <div className="tile-text">
          <h3 className="tile-title">{title}</h3>
          <h5 className="tile-subtitle">{subtitle}</h5>
        </div>
        <div className="tile-date">{date}</div>
      </div>
    </div>
  );
};

export default Tile;