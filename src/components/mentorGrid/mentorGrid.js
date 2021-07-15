import React from "react";
import "./mentorGrid.css";
import MentorCard from "../mentorCard/MentorCard";


const MentorGrid = ({ mentorArray }) => {


  return (
    <div className="mentorGrid">
      <div className="grid">
        {mentorArray.map((mentor) => {
          return (
            <MentorCard
              banner={mentor.banner}
              profile={mentor.displayImage}
              category={mentor.subject}
              description={mentor.description}
              name={mentor.name}
              route={`/mentor/${mentor._id}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MentorGrid;
