import React from "react";

import book from "./images/try.jpg";
import pic from "../../utils/images/mentors/tanay/profile.png";
import "./videoCard.css";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import playlist from "../../utils/images/icons/playlistWhite.svg";
import later from "../../utils/images/icons/laterWhite.svg";
import like from "../../utils/images/icons/like.svg";
const VideoCard = () => {
  const { theme } = useTheme();
  return (
    <div className="videoCard">
      <div className="videoCardImageContainer">
        <div className="videoPlayerBtnScreen">
          <img
            src={playlist}
            className="playlistVideoCardBtn"
            onClick={() => {
              console.log("playlist");
            }}
          />
          <img
            src={later}
            className="laterVideoCardBtn"
            onClick={() => {
              console.log("watch later");
            }}
          />
        </div>
        <img src={book} className="thumbNail" />
      </div>
      <div className="videoDetailsContainer">
        <div className="videoTitle">
          <img src={pic} className="videoMentor" />
          <p style={{ color: theme.boldText }}>Lesson Name</p>
        </div>

        <div className="videoDetails">
          <div>
            <p>mentor name </p>
            <p>66k views . 1 days ago</p>
          </div>
          <img src={like} className="videoDetailsLikeButton" />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
