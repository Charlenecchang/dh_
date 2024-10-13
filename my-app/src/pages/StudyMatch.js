import React, { useState } from 'react';
import StudentProfile from '../components/StudentProfile'; // Import the StudentProfile component
import '../components/StudyMatch.css'; // Import the CSS file

const StudyMatch = () => {
 const students = [
  {
    name: 'Alice Johnson',
    major: 'Computer Science',
    year: 'Sophomore',
    profileImage: 'https://via.placeholder.com/150',
    interests: ['Algorithms', 'Machine Learning', 'Web Development'],
    bio: 'I am a second-year student majoring in Computer Science, passionate about AI and web technologies.'
  },
  {
    name: 'Bob Smith',
    major: 'Mathematics',
    year: 'Junior',
    profileImage: 'https://via.placeholder.com/150',
    interests: ['Statistics', 'Probability', 'Calculus'],
    bio: 'Math is my passion and I love helping others. Looking to form a study group for upcoming exams.'
  },
  {
    name: 'Charlie Lee',
    major: 'Physics',
    year: 'Senior',
    profileImage: 'https://via.placeholder.com/150',
    interests: ['Quantum Mechanics', 'Astrophysics'],
    bio: 'I’m a senior studying Physics. I enjoy discussing complex problems and collaborating with others.'
  }
 ];
 const [currentIndex, setCurrentIndex] = useState(0);

  const nextProfile = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length);
  };

  const prevProfile = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? students.length - 1 : prevIndex - 1
    );
  };

  return (
   <div className="study-match-container"> {/* Main container */}
     <div className="header"> {/* Header class */}
       <h1>Study Match</h1>
       <p>Suggest Study Buddy</p>
     </div>

     <StudentProfile 
       student={students[currentIndex]} 
       prevProfile={prevProfile}
       nextProfile={nextProfile}
     />
     
     <p className="match-prompt"> {/* Prompt text */}
       What's next? Once the match is complete, message them!
     </p>
   </div>
 );
};

export default StudyMatch;