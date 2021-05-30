import React from "react";
import MentorHeader from "../mentorHeader/MentorHeader.js";
import VideoCard from "../videoCard/VideoCard.js";
import "./mentor.css";
const Mentor = ({mentorDetails}) => {
  const {videos,mentor}=mentorDetails
  debugger;
  
  return (
    <div className="mentor">
      <MentorHeader mentor={mentor}/>
      <div className="mentor-grid">
        {videos.map(item=>{
          return <VideoCard mentorImg={mentor.profile} videosDetails={item}/>
        })}
      </div>
    </div>
  );
};

export default Mentor;
