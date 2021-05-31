import React from "react";
import book from "./images/try.jpg";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import playlist from "../../utils/images/icons/playlistWhite.svg";
import later from "../../utils/images/icons/laterWhite.svg";
import "./recommendVideoCard.css";

import { NavLink } from "react-router-dom";
const RecommendVideoCard = ({ videoDetails, mentor }) => {
  let { mentorName, title, thumbnail, embededLink, videoId, views } =
    videoDetails;
  const { theme } = useTheme();
  return (
    
    <div className="recommendVideoCard">
      <NavLink to={`/videoplayer/${videoId}`}>
      <div className="recommendImageContainer">
        <div className="recommendBtnScreen">
          <div className="recommendPlaylistBtnContainer"><p>Add to playlist</p>
          <img
            src={playlist}
            className="playlistRecommendVideoCardBtn"
            onClick={() => {
            }}
          /></div>
         <div className="recommendwatchLaterBtnContainer"><p>Watch Later</p> <img
            src={later}
            className="laterRecommendVideoCardBtn"
            onClick={() => {
            }}
          /></div>
        </div>
        <img src={thumbnail} className="recommendthumbNail" />
      </div>
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
