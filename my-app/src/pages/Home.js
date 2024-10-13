// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Ensure this path is correct

function Home({ profileData }) {
  const name = profileData?.name || 'Guest'; // Fallback to "Guest" if no profile data

  return (
    <div className="home">
      <h1>Welcome back, {name}!</h1>
      <p>Here are some recent events for you:</p>
      <ul>
        <li>🌟 Student Org Activity: Hackathon this weekend!</li>
        <li>📅 Career Fair: October 15th</li>
        <li>💼 Internship: Applications open for Spring 2025</li>
      </ul>
      <div className="button-container">
        <Link to="/profile">
          <button className="action-button">Edit Profile</button>
        </Link>
        <Link to="/StudyMatch">
          <button className="action-button">Find your study buddy</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
