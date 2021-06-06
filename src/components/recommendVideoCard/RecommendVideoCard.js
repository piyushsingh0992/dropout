import React from "react";
import "./recommendVideoCard.css";
import { NavLink } from "react-router-dom";
import ThumbNail from "../thumbNail/ThumbNail.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";

const RecommendVideoCard = ({ videoDetails, mentor }) => {
  let { mentorName, title, thumbnail, mentorId, videoId, views } = videoDetails;
  const { theme } = useTheme();
  return (
    <div className="recommendVideoCard">
      <ThumbNail
        thumbnail={thumbnail}
        type={"recommendThumbnail"}
        videoId={videoId}
      />

      <div className="recommendVideoDetailsContainer">
        <p style={{ color: theme.boldText }}>{title.slice(0, 45)}...</p>
        <NavLink to={`/mentor/${mentorId}`}>
          <div className="recommendvideoDetails">
            <img src={mentor.profile} />
            <div>
              <p>{mentorName} </p>
              <p>{views} views</p>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default RecommendVideoCard;
