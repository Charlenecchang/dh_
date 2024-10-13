// src/components/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Ensure the path is correct

const Hero = () => {
  return (
    <div className="hero-section">
      <h1>Welcome to Your Dashboard!</h1>
      <div className="button-container">
        <Link to="/profile">
          <button className="action-button">Edit Profile</button>
        </Link>
        <Link to="/StudyMatch">
          <button className="action-button">Find Your Study Buddy</button>
        </Link>
        <Link to="/Notifications">
          <button className="action-button">Your Notifications</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
