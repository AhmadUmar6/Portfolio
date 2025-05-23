// src/components/projects/SerenityNow.js
import React, { useState, useEffect } from 'react';
import './SerenityNow.css'; 

const images = ["/sn1.jpg", "/sn2.jpg", "/sn3.jpg", "/sn4.jpg"];

const SerenityNow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="serenitynow-container">
      <div className="image-tile">
        <img src={images[currentImageIndex]} alt="Serenity Now App" className="tile-image" />
      </div>
      <div className="content-section">
        <h1>Serenity Now</h1>
        <h2>Mental Health & Wellness App Prototype</h2>
        <p>
          "Serenity Now" is a mental health and wellness application prototyped during my senior spring semester as part of an intensive Human-Computer Interaction (HCI) course. The project was an immersive dive into creating user-centric digital solutions designed to support well-being.
        </p>
        <p>
          The development of Serenity Now meticulously followed the complete HCI development cycle:
        </p>
        <ol>
          <li><strong>User Research:</strong> We began by conducting thorough user research, including surveys and interviews, to understand the needs, pain points, and desires of potential users regarding mental wellness apps.</li>
          <li><strong>Design & Ideation:</strong> Based on research insights, we brainstormed features and designed user personas and journey maps. This led to wireframing and low-fidelity prototypes to explore different interaction models.</li>
          <li><strong>Prototyping:</strong> High-fidelity, interactive prototypes were then created, focusing on intuitive navigation and a calming user interface.</li>
          <li><strong>Evaluation:</strong> The prototypes underwent several rounds of user testing and heuristic evaluation, with feedback iteratively incorporated to refine the design and user experience.</li>
        </ol>
      </div>
      <hr className="separator" />
      <div className="content-section">
        <div className="stack">
          <h2>Stack & Tools</h2>
          <p>Figma (for all stages of UX/UI design, wireframing, and interactive prototyping). </p>
        </div>
      </div>
    </div>
  );
};

export default SerenityNow;