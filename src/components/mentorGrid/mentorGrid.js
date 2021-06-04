import React from "react";
import "./mentorGrid.css";
import MentorCard from "../mentorCard/MentorCard";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useMentorDetails } from "../../utils/common.js";
const MentorGrid = () => {
  const { theme } = useTheme();
  const { mentorDetails } = useMentorDetails();

  return (
    <div className="mentorGrid">
      <div className="grid">
        {mentorDetails.map((mentor) => {
          return (
            <MentorCard
              banner={mentor.banner}
              profile={mentor.profile}
              category={mentor.category}
              name={mentor.name}
              route={mentor.route}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MentorGrid;
