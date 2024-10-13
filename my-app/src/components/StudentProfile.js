import React from 'react';
import './StudentProfile.css';

const StudentProfile = ({ student, prevProfile, nextProfile }) => {
 return (
   <div className="student-profile">
    <div className="navigation-button-left"><button onClick={prevProfile}>
      <i className="fas fa-arrow-left"></i> {/* Left arrow icon */}
    </button>
    </div>
     <div className="student-image">
       <img src={student.profileImage} alt={`${student.name}'s profile`} />
     </div>
     <div className="student-details">
       <h2>{student.name}</h2>
       <p><strong>Major:</strong> {student.major}</p>
       <p><strong>Year:</strong> {student.year}</p>
       <p><strong>Interests:</strong> {student.interests.join(', ')}</p>
       <p className="bio">{student.bio}</p>
       <button className="connectButton">Connect</button>
     </div>
     {/* Navigation buttons with Font Awesome icons */}
     <div className="navigation-button-right">
        <button onClick={nextProfile}>
          <i className="fas fa-arrow-right"></i> {/* Right arrow icon */}
        </button>
      </div>
   </div>
 );
};

export default StudentProfile;