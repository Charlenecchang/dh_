// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './styles.css'; // Import the CSS globally
import StudyMatch from './pages/StudyMatch';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studymatch" element={<StudyMatch />} />
      </Routes>
    </Router>
  );
};

export default App;