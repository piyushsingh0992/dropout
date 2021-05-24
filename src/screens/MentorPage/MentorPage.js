import React from "react";
import Navigation from "../../components/navigation/Navigation.js";
import Mentor from "../../components/mentor/Mentor.js";


import "./mentorPage.css";
const MentorPage = () => {
  return (
    <div className="mentorPage">
      <Navigation />
      <Mentor />
  
    </div>
  );
};

export default MentorPage;
