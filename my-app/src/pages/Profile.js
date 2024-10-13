// src/pages/Profile.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css'; // Ensure this path is correct

function Profile({ setProfileData }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const profile = { name, email, bio };
    setProfileData(profile);  // Save profile data to App.js state
    navigate('/');  // Redirect to Home after creating the profile
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Create Your Profile</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            className="form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Bio:</label>
          <textarea
            className="form-textarea"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </div>
        <button className="submit-button" type="submit">Create Profile</button>
      </form>

      {name && (
        <div className="profile-summary">
          <h3>Profile Summary:</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Bio:</strong> {bio}</p>
        </div>
      )}
      <a href="/" className="back-link">Go Back to Home</a>
    </div>
  );
}

export default Profile;
