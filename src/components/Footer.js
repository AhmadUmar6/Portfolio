// src/components/Footer.js
import SocialFooter from './SocialFooter';
import './Footer.css';
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center mt-auto">
      <SocialFooter />
      <p>Ahmad Umar &copy; 2025</p>
    </footer>
  );
};

export default Footer;
