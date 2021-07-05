import React, { useState } from "react";
import "./videoPlayer.css";
import { NavLink } from "react-router-dom";
import LikeButton from "../likeButton/LikeButton.js";
import DoubtSolver from "../doubtSolver/DoubtSolver.js";
import Button from "../button/Button.js";
import WatchLaterButton from "../watchLaterButton/WatchLaterButton.js";
import PlaylistButton from "../playlistButton/PlaylistButton.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLikedVideos } from "../../contexts/likedVideoContext/likedVideoContext.js";
import PlaylistModal from "../playlistModal/PlaylistModal.js";

const VideoPlayer = ({ videoDetails }) => {
  const [modalTrigger, modalTriggerSetter] = useState(false);
  let { embededLink, like, mentor, _id, title, comments } = videoDetails;
  debugger;
  const { theme } = useTheme();



  return (
    <div className="videoPlayer">
      <iframe className="videoPlayerIframe" src={embededLink}></iframe>
      <div className="currentVideoDetails">
        <p className="videoTitle" style={{ color: theme.boldText }}>
          {title.length > 100 ? `${title.slice(0, 96)}...` : title}
        </p>
        <div className="videoPlayerCTAContainer">
          <LikeButton size={1.5} liked={like} videoId={_id} />
          <PlaylistButton
            videoId={_id}
            playlist
            modalTriggerSetter={modalTriggerSetter}
          />
          <WatchLaterButton videoId={_id} videoPlayer />
        </div>
      </div>

      <div className="video-mentor-details-container">
        <NavLink to={`/mentor/${mentor._id}`}>
          <div className="video-mentor-details">
            <img src={mentor.profile} className="video-mentor-img" />
            <div>
              <h6 style={{ color: theme.boldText }}> {mentor.name} </h6>
              <p style={{ color: theme.boldText }}> {mentor.cateogry} </p>
            </div>
          </div>
        </NavLink>
        <div>
          <Button text="Subscribe" size="subscribe-btn" />
        </div>
      </div>
      <DoubtSolver comments={comments} videoId={_id} />
      {modalTrigger && (
        <PlaylistModal modalTriggerSetter={modalTriggerSetter} videoId={_id} />
      )}
    </div>
  );
};

export default VideoPlayer;
