import React from "react";
import "./videoPlayer.css";
import like from "../../utils/images/icons/like.svg";
import likeBlue from "../../utils/images/icons/likeBlue.svg";
import playlist from "../../utils/images/icons/playlist.svg";
import later from "../../utils/images/icons/later.svg";
import { useTheme } from "../../contexts/themeContext/themeContext.js";

import pic from "../../utils/images/mentors/tanay/profile.png";

import Button from "../button/Button.js";

const VideoPlayer = () => {
  const { theme } = useTheme();
  let x = "ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt";

  return (
    <div className="videoPlayer">
      <iframe
        className="videoPlayerIframe"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
      ></iframe>
      <div className="currentVideoDetails">
        <p className="videoTitle" style={{ color: theme.boldText }}>
          {x.length > 100 ? `${x.slice(0, 96)}...` : x}
        </p>
        <div className="videoPlayerCTAContainer" >
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
            <img src={pic} className="video-mentor-img" />
            <p style={{ color: theme.boldText }}> Tanay Pratap </p>
        </div>
        <div>
        <Button text="Subscribe" size="subscribe-btn" />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
