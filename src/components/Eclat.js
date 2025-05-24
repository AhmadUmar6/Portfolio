// src/components/projects/Eclat.js
import React, { useState, useEffect } from 'react';
import './Eclat.css'; // Ensure this CSS file exists and is correctly named

const images = ["/eclat1.jpg", "/eclat2.jpg", "/eclat3.jpg"];

const Eclat = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="eclat-container">
      <div className="image-tile">
        <img src={images[currentImageIndex]} alt="ÉCLAT Online Jewellery Store" className="tile-image" />
      </div>
      <div className="content-section">
        <h1>
          <a href="https://eclat-tau.vercel.app" target="_blank" rel="noopener noreferrer" className="eclat-link">
            Try ÉCLAT!
            <span className="link-indicator">↗</span>
            <span className="try-it-label">Try it live</span>
          </a>
        </h1>
        <h2>Online Jewellery Store</h2>
        <p>
          ÉCLAT is an e-commerce platform designed and developed for an online jewellery store based in the UK, developed as a freelance project. The vision was to create a luxurious and intuitive digital boutique that beautifully showcases exquisite jewellery collections and provides a seamless shopping experience for discerning customers.
        </p>
      </div>
      <hr className="separator" />
      <div className="content-section">
        <div className="stack">
          <h2>Stack</h2>
          <p>React.js and Next.js (for a fast, SEO-friendly, and interactive frontend), Node.js with Express.js (for a custom backend API), Supabase (for flexible product and user data storage), Stripe (for secure payment processing), and deployed on Vercel.</p>
        </div>
      </div>
    </div>
  );
};

export default Eclat;