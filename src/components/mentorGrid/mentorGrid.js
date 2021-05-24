import React from "react";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import "./mentorGrid.css";
import { useMentorDetails } from "../../utils/common.js";
import MentorCard from "../mentorCard/MentorCard"
const MentorGrid = () => {
  const { theme } = useTheme();
  const {mentorDetails}=useMentorDetails();

  return (
    <div className="mentorGrid">
      <div
        className="mentorGridHeading"
        style={{

          color: theme.boldText,
          borderBottom:`1px solid ${theme.boldText}`
        }}
      >
        <h1>Choose your Mentor</h1>
      </div>

      <div className="grid">
        {mentorDetails.map(mentor=>{
            return <MentorCard banner={mentor.banner}profile={mentor.profile} category={mentor.category} name={mentor.name}/>
        })}

      </div>
    </div>
  );
};

export default MentorGrid;
