import React from "react";
import "./historyVideoCard.css";
import {NavLink} from 'react-router-dom';
import pic from "../../utils/images/mentors/tanay/profile.png";
import ThumbNail from "../thumbNail/ThumbNail.js";
import book from "./images/try.jpg";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
const HistoryVideoCard = ({ title, thumbnail, mentorId,videoId, mentorName,views,profile }) => {
  const { theme } = useTheme();

  return (
    <div className="historyVideoCardContainer">
      <div className="historyVideoCard">
        <ThumbNail
          thumbnail={thumbnail}
          type={"historyThumnail"}
          videoId={videoId}
        />
        <div className="historyVideoDetailsContainer">
          <p style={{ color: theme.boldText }}>
            {title.length > 70 ? `${title.slice(0, 40)}...` : title}
          </p>

          <div className="historyVideoDetails">
          <NavLink to={`/mentor/${mentorId}`}>
            <div className="historyVideoCardMentorDetails">
              <img src={profile} className="historyVideoCardMentorImg" />
              <p style={{color:theme.primaryText}}>{mentorName} </p>
            </div>
            </NavLink>
            <p>{views} views </p>
          </div>
        </div>
      </div>

      <p style={{ color: theme.boldText }}>Time</p>
    </div>
  );
};

export default HistoryVideoCard;
