// src/components/projects/ChampionsTrophyPredictor.js

import React, { useState, useEffect } from 'react';
import './ChampionsTrophyPredictor.css'; // Ensure this CSS file exists and is correctly named

const images = ["/ctp1.jpg", "/ctp2.jpg", "/ctp3.jpg"];

const ChampionsTrophyPredictor = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="championstrophypredictor-container">
      <div className="image-tile">
        <img src={images[currentImageIndex]} alt="Champions Trophy Predictor" className="tile-image" />
      </div>
      <div className="content-section">
        <h1>
          <a href="https://ctpredictor.vercel.app" target="_blank" rel="noopener noreferrer" className="ct-link">
            Try CT Predictor!
            <span className="link-indicator">↗</span>
            <span className="try-it-label">Try it live</span>
          </a>
        </h1>
        <h2>Fantasy Cricket Game</h2>
        <p>
          The Champions Trophy Predictor was born out of a personal passion for cricket and an admiration for fantasy sports platforms like the Fantasy Premier League (FPL). I noticed a gap in the market for a dedicated, engaging prediction game specifically tailored to major cricket tournaments. This project aimed to fill that void, offering cricket enthusiasts a unique way to test their knowledge and intuition.
        </p>
        <p>
          The core concept allows users to make predictions for each match of a tournament, focusing on key outcomes such as the 'Man of the Match' and the 'Winning Team'. Correct predictions earn users points, which are tallied up to determine their standing on a leaderboard.
        </p>
        <ol>
          <li><strong>Match Predictions:</strong> Users predict the winner and standout player for upcoming matches.</li>
          <li><strong>Points System:</strong> A clear and rewarding points system for accurate predictions.</li>
          <li><strong>Community Leagues:</strong> A significant aspect of the platform is its community features. Users can create private leagues to compete against friends for bragging rights, or join public leagues to challenge a wider community of cricket fans. This social dimension was crucial to emulate the camaraderie found in FPL.</li>
        </ol>
      </div>
      <hr className="separator" />
      <div className="content-section">
        <div className="stack">
          <h2>Stack</h2>
          <p>React.js, Next.js (for Server-Side Rendering and Static Site Generation), Supabase (for backend and database), Tailwind CSS (for modern and responsive UI), Vercel (for deployment).</p>
        </div>
      </div>
    </div>
  );
};

export default ChampionsTrophyPredictor;