import React from "react";
import "./videoPlayer.css";
import playlist from "../../utils/images/icons/playlist.svg";
import later from "../../utils/images/icons/later.svg";
import LikeButton from "../likeButton/LikeButton.js";
import DoubtSolver from "../doubtSolver/DoubtSolver.js";
import Button from "../button/Button.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import {useLikedVideos} from "../../contexts/likedVideoContext/likedVideoContext.js";

const VideoPlayer = ({ videoDetails }) => {
  let  { video, mentor } = videoDetails;
  const {likedVideoState}=useLikedVideos();
  const { theme } = useTheme();
  let likedVideo=likedVideoState.find(item =>item?.videoId===video.videoId);
  if(likedVideo){
    video=likedVideo
  }
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
          <LikeButton size={1.5} liked={video.liked}  videoId={video.videoId}/>
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
