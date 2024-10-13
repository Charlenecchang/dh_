// src/pages/Notifications.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Notification = () => {
  const [notifications] = useState([
    { text: 'Study Match! Lisa Ong', profileImg: 'https://via.placeholder.com/50' },
    { text: 'New Internship Opportunity', profileImg: 'https://via.placeholder.com/50' },
    { text: 'New internship opportunity available!', profileImg: 'https://via.placeholder.com/50' },
    { text: 'Workshop: Effective Networking Strategies on Oct 15, 2024.', profileImg: 'https://via.placeholder.com/50' },
    { text: 'Volunteer Opportunity: Community Service Day on Nov 5, 2024.', profileImg: 'https://via.placeholder.com/50' },
  ]);

  return (
    <div className="notification-page">
      <h1>Your Notifications</h1>
      {notifications.length === 0 ? (
        <p>No notifications at this time.</p>
      ) : (
        <ul className="notification-list">
          {notifications.map((notification, index) => (
            <li key={index} className="notification-item">
              <img src={notification.profileImg} alt="Profile" className="profile-img" />
              <span className="notification-text">{notification.text}</span>
            </li>
          ))}
        </ul>
      )}
      <Link to="/">
        <button className="action-button">Home</button>
      </Link>
    </div>
  );
};

export default Notification;