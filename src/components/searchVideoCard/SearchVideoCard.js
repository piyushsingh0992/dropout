import React from "react";
import "./searchVideoCard.css";

import { NavLink } from "react-router-dom";
import book from "./images/try.jpg";
import pic from "../../utils/images/mentors/tanay/profile.png";
import ThumbNail from "../thumbNail/ThumbNail.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
const SearchVideoCard = ({ videosDetails }) => {
  const { title, mentorName, thumbnail, views, videoId, mentorId,liked, profile } =
    videosDetails;
    
  const { theme } = useTheme();
  let x =
    "ssssssssssssssssssssssssdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd";
  return (
    <div className="searchVideoCard">
      <ThumbNail
        thumbnail={thumbnail}
        type={"searchThumnail"}
        videoId={videoId}
      />
      <div className="searchVideoDetailsContainer">
        <p style={{ color: theme.boldText }}>
          {title.length > 70 ? `${title.slice(0, 40)}...` : title}
        </p>

        <div className="searchVideoDetails">
          <NavLink to={`/mentor/${mentorId}`}>
          <div className="searchVideoCardMentorDetails">
            <img src={profile} className="searchVideoCardMentorImg" />
            <p style={{color:theme.primaryText}}>{mentorName} </p>
          </div>
          </NavLink>
          <p>{views} views </p>
        </div>
      </div>
    </div>
  );
};

export default SearchVideoCard;
