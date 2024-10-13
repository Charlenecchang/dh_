// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import StudyMatch from './pages/StudyMatch'; // Include the StudyMatch component
import Notifications from './pages/Notifications';
import './styles.css'; // Add your global styles here if any

function App() {
  const [profileData, setProfileData] = useState(null); // Initialize state for profile data

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home profileData={profileData} />} />
          <Route path="/profile" element={<Profile setProfileData={setProfileData} />} />
          <Route path="/studymatch" element={<StudyMatch />} /> {/* Add StudyMatch route */}
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;