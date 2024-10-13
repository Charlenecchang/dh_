// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

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
      <Link to="/profile">Edit Profile</Link>
    </div>
  );
}

export default Home;
