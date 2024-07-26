// src/components/FieldFinder.js
import React, { useState, useEffect } from 'react';
import './FieldFinder.css';

const images = ["/FF11.jpeg", "/FF12.jpeg"];

const FieldFinder = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fieldfinder-container">
      <div className="image-tile">
        <img src={images[currentImageIndex]} alt="Field Finder" className="tile-image" />
      </div>
      <div className="content-section">
        <h1>Field Finder</h1>
        <h2>CS 360 Project</h2>
        <p>
          For our Software Engineering course project, my team and I developed a marketplace for sports fields in Lahore. The aim was to create a platform where users could easily find and book sports fields, ensuring a smooth and efficient booking process. We focused on providing a user-friendly interface and a robust backend to manage the bookings and field availability.
        </p>
        <p>
          The project allowed us to apply our knowledge in software engineering principles, including requirements analysis, system design, implementation, and testing. 
        </p>
      </div>
      <hr className="separator" />
      <div className="content-section">
        <div className="stack-github">
        <div className="stack-github">
          <div className="stack">
            <h2>Stack</h2>
            <p>MongoDB, Express.js, React.js, Node.js</p>
          </div>
          <div className="github">
            <h2>Repository</h2>
            <p>
              <a href="https://github.com/Junaid-Jamshed/Group_8_SE_S2" target="_blank" rel="noopener noreferrer" className="github-link">Github Repository</a>
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FieldFinder;
