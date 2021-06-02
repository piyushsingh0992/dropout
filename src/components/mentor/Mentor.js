import React, { useState } from "react";
import MentorHeader from "../mentorHeader/MentorHeader.js";
import VideoCard from "../videoCard/VideoCard.js";
import "./mentor.css";
const Mentor = ({ mentorDetails }) => {
  const { videos, mentor } = mentorDetails;
  debugger;
  const [categoryId, categoryIdSetter] = useState(mentor.playlist[0].id);

  let currentPlaylist = videos.filter((item) => {
    if (item.category.id === categoryId) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="mentor">
      <MentorHeader
        mentor={mentor}
        categoryId={categoryId}
        categoryIdSetter={categoryIdSetter}
      />
      <div className="mentor-grid">
        {currentPlaylist.map((item) => {
          return <VideoCard mentorImg={mentor.profile} videosDetails={item} />;
        })}
      </div>
    </div>
  );
};

export default Mentor;
