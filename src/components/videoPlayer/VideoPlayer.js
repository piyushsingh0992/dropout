import React from "react";
import "./videoPlayer.css";
import like from "../../utils/images/icons/like.svg";
import likeBlue from "../../utils/images/icons/likeBlue.svg";
import playlist from "../../utils/images/icons/playlist.svg";
import later from "../../utils/images/icons/later.svg";
import { useTheme } from "../../contexts/themeContext/themeContext.js";

import pic from "../../utils/images/mentors/tanay/profile.png";
import DoubtSolver from "../doubtSolver/DoubtSolver.js";
import Button from "../button/Button.js";

const VideoPlayer = ({ videoDetails }) => {
  const { video, mentor } = videoDetails;
  const { theme } = useTheme();

  return (
    <div className="videoPlayer">
      <iframe className="videoPlayerIframe" src={video.embededLink}></iframe>
      <div className="currentVideoDetails">
        <p className="videoTitle" style={{ color: theme.boldText }}>
          {video.title.length > 100
            ? `${video.title.slice(0, 96)}...`
            : video.title}
        </p>
        <div className="videoPlayerCTAContainer">
          <img src={like} />
          <div>
            <img src={playlist} />
            Add to Playlist
          </div>

          <div>
            <img src={later} />
            Watch Later
          </div>
        </div>
      </div>

      <div className="video-mentor-details-container">
        <div className="video-mentor-details">
          <img src={mentor.profile} className="video-mentor-img" />
          <div>
            <h6 style={{ color: theme.boldText }}> {mentor.name} </h6>
            <p style={{ color: theme.boldText }}> {mentor.cateogry} </p>
          </div>
        </div>
        <div>
          <Button text="Subscribe" size="subscribe-btn" />
        </div>
      </div>
      <DoubtSolver />
    </div>
  );
};

export default VideoPlayer;
