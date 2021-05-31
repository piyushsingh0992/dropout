import React from "react";

import { NavLink } from "react-router-dom";
import "./videoCard.css";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import playlist from "../../utils/images/icons/playlistWhite.svg";
import later from "../../utils/images/icons/laterWhite.svg";
import like from "../../utils/images/icons/like.svg";

const VideoCard = ({ videosDetails, mentorImg }) => {
  const { title, mentor, embededLink, thumbnail, views, videoId } =
    videosDetails;

  const { theme } = useTheme();
  return (
    <NavLink to={`/videoplayer/${videoId}`}>
      <div className="videoCard">
        <div className="videoCardImageContainer">
          <div className="videoPlayerBtnScreen">
            <div className="playlistBtnContainer">
              <p>Add to Playlist</p>
              <img
                src={playlist}
                className="playlistVideoCardBtn"
                onClick={() => {}}
              />
            </div>
            <div className="watchLaterButtonContainer">
              <p>Watch Later</p>
              <img
                src={later}
                className="laterVideoCardBtn"
                onClick={() => {}}
              />
            </div>
          </div>
          <img src={thumbnail} className="thumbNail" />
        </div>
        <div className="videoDetailsContainer">
          <div className="videoTitle">
            <img src={mentorImg} className="videoMentor" />
            <p style={{ color: theme.boldText }}>
              {title.length > 30 ? `${title.slice(0, 30)}...` : title}
            </p>
          </div>

          <div className="videoDetails">
            <div>
              <p>{mentor} </p>
              <p>{views} views . 1 days ago</p>
            </div>
            <img src={like} className="videoDetailsLikeButton" />
          </div>

          
        </div>
      </div>
    </NavLink>
  );
};

export default VideoCard;
