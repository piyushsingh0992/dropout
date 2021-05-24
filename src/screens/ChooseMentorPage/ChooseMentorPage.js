import React from "react";

import Navigation from "../../components/navigation/Navigation.js";
import MentorGrid from "../../components/mentorGrid/mentorGrid";

import "./ChooseMentorPage.css";
const ChooseMentorPage = () => {
  return (
    <div className="ChooseMentorPage">
      <Navigation/>
      <MentorGrid/>
   
    </div>
  );
};

export default ChooseMentorPage;
