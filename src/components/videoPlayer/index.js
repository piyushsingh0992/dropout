import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import LikeButton from "../likeButton/index.js";
import Comments from "../comments";
import WatchLaterButton from "../watchLaterButton/index.js";
import PlaylistButton from "../playlistButton/index.js";
import { useTheme } from "../../contexts/themeContext/index.js";
import PlaylistModal from "../playlistModal/index.js";
import SubscribeButton from "../subscribeButton/index.js";

const VideoPlayer = ({ videoDetails }) => {
  const [modalTrigger, modalTriggerSetter] = useState(false);
  let { embededLink, like, mentor, _id, title, comments } = videoDetails;
  
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
        <SubscribeButton mentorId={mentor._id} />
        </div>
      </div>
      <Comments comments={comments} videoId={_id} />
      {modalTrigger && (
        <PlaylistModal modalTriggerSetter={modalTriggerSetter} videoId={_id} />
      )}
    </div>
  );
};

export default VideoPlayer;
