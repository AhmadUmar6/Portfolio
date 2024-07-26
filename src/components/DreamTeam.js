import React, { useState, useEffect } from 'react';
import './DreamTeam.css';

const images = ["/DT1.png", "/DT2.png"];

const DreamTeam = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dreamteam-container">
      <div className="image-tile">
        <img src={images[currentImageIndex]} alt="Dream Team" className="tile-image" />
      </div>
      <div className="content-section">
        <h1>Dream Team</h1>
        <h2>MGMT 346 Project</h2>
        <p>
          Last spring, driven by my passion for sports, I enrolled in a Sports Management course. Little did I know this class would become a pivotal moment in my academic journey, ultimately guiding me towards my future career path.
          The course was genuinely intriguing, offering insights into the business side of sports that I had never considered before. 
        </p>
        <p>
          For our final project, we were tasked with presenting a marketable idea that addressed a sports-related issue in Pakistan. Our team focused on two main objectives:
        </p>
        <ol>
          <li>Develop a safe and legal alternative to traditional sports betting in Pakistan.</li>
          <li>Promote and expand sports beyond the dominant cricket culture.</li>
        </ol>
        <p>
          To bring our concept to life, we created a mock fantasy sports app. But we didn't stop at a simple presentation - we turned it into an interactive experience for everyone in the hall. Attendees could scan a code, build their team within a budget, and participate in a demo fantasy round based on a hypothetical cricket match scorecard.
          The excitement was palpable as a live leaderboard displayed on stage showed real-time points and rankings. This hands-on demonstration not only showcased our idea but also engaged our audience in a unique and memorable way.
        </p>
      </div>
      <hr className="separator" />
      <div className="content-section">
        <div className="stack">
          <h2>Stack</h2>
          <p>Vercel, React.js, Next.js, Node.js, Express.js, MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default DreamTeam;
