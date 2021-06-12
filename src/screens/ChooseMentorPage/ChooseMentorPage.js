import React from "react";
import "./ChooseMentorPage.css";
import Navigation from "../../components/navigation/Navigation.js";
import MentorGrid from "../../components/mentorGrid/mentorGrid.js";
import Heading from "../../components/heading/Heading.js";

const ChooseMentorPage = () => {
  return (
    <div className="pageContainer">
      <Navigation />
      <div className="screenContainer">
        <Heading text={"Choose Mentor"} />
        <MentorGrid />
      </div>
    </div>
  );
};

export default ChooseMentorPage;
