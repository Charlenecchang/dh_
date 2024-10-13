// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Ensure this path is correct

function Home({ profileData }) {
  const name = profileData?.name || 'Guest'; // Fallback to "Guest" if no profile data

  return (
    <div className="home">
      {/* Navigation Bar */}
      <nav className="navbar">
        <Link to="/profile" className="nav-item">Edit Profile</Link>
        <Link to="/StudyMatch" className="nav-item">Find your study buddy</Link>
        <Link to="/Notifications" className="nav-item">Your Notifications</Link>
      </nav>

      <h1>Welcome back, {name}!</h1>
      <p>Here are some recent events for you:</p>
      
      {/* Student Org Activities Section */}
      <div className="event-category">
        <h2 className="title">🌟 Student Org Activities</h2>
        <div className="event-cards">
          <div className="event-card">Hackathon this weekend! 🚀</div>
          <div className="event-card">Guest speaker: Industry Leader on October 20th</div>
          <div className="event-card">Weekly Study Group: Thursdays at 5 PM</div>
        </div>
      </div>
      
      {/* Career Fairs Section */}
      <div className="event-category">
        <h2 className="title">📅 Career Fairs</h2>
        <div className="event-cards">
          <div className="event-card">Career Fair: October 15th</div>
          <div className="event-card">Virtual Career Expo: November 10th</div>
          <div className="event-card">Networking Event: December 5th</div>
        </div>
      </div>
      
      {/* Internship Opportunities Section */}
      <div className="event-category">
        <h2 className="title">💼 Internship Opportunities</h2>
        <div className="event-cards">
          <div className="event-card">Applications open for Spring 2025!</div>
          <div className="event-card">Internship at T-Mobile released! Apply now!</div>
          <div className="event-card">Summer Internship: Google - Applications due November 30th</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
