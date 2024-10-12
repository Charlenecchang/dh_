// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import '../styles.css'

const Home = () => {
  const [userName] = useState('Charlotte');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchedEvents = [
      { id: 1, type: 'Student Org Activity', title: 'Hackathon Kickoff', date: 'Oct 14, 2024' },
      { id: 2, type: 'Career Fair', title: 'Tech Career Expo', date: 'Oct 20, 2024' },
      { id: 3, type: 'Internship Opportunity', title: 'Marketing Internship at XYZ', date: 'Nov 1, 2024' },
    ];
    setEvents(fetchedEvents);
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome back, {userName}!</h1>
      <p>Here are the latest updates:</p>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.type}:</strong> {event.title} - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
