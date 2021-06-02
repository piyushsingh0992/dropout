import React from "react";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import "./recommendVideoCard.css";
import ThumbNail from "../thumbNail/ThumbNail.js";
import { NavLink } from "react-router-dom";
const RecommendVideoCard = ({ videoDetails, mentor }) => {
  let { mentorName, title, thumbnail, embededLink, videoId, views } =
    videoDetails;
  const { theme } = useTheme();
  return (
    <div className="recommendVideoCard">
      <NavLink to={`/videoplayer/${videoId}`}>
        <ThumbNail thumbnail={thumbnail} type={"recommendThumbnail"} />
      </NavLink>
      <div className="recommendVideoDetailsContainer">
        <p style={{ color: theme.boldText }}>{title.slice(0, 45)}...</p>

        <div className="recommendvideoDetails">
          <img src={mentor.profile} />
          <div>
            <p>{mentorName} </p>
            <p>{views} views</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendVideoCard;
