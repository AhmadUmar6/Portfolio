import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Tile.css';

const Tile = ({ title, subtitle, date, media, link }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (Array.isArray(media) && media.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % media.length);
      }, 9000 + Math.random() * 2000); // Original interval: 9-11 seconds

      return () => clearInterval(interval);
    }
  }, [media]);

  const currentImageSrc = Array.isArray(media) && media.length > 0
    ? media[currentImageIndex]
    : (typeof media === 'string' ? media : '/default-placeholder.png');

  return (
    <div className="tile-container">
      <Link to={link} className="tile-link-wrapper">
        <div className="tile"> {/* Image container */}
          <img
            key={currentImageSrc} // Important to re-trigger the animation
            src={currentImageSrc}
            alt={title}
            className="tile-media"
          />
        </div>
      </Link>
      <div className="tile-content"> {/* Text content container */}
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