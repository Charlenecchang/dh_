// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './styles.css'; // Add your global styles here if any

function App() {
  const [profileData, setProfileData] = useState(null); // Initialize state for profile data

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home profileData={profileData} />} />
          <Route path="/profile" element={<Profile setProfileData={setProfileData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
