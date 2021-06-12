import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./videoCard.css";
import LikeButton from "../likeButton/LikeButton.js";
import ThumbNail from "../thumbNail/ThumbNail.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import PlaylistModal from "../playlistModal/PlaylistModal.js";
const VideoCard = ({ videosDetails }) => {
  const [modalTrigger, modalTriggerSetter] = useState(false);
  const { title, mentor, mentorId, thumbnail, views, videoId, liked, profile } =
    videosDetails;


  const { theme } = useTheme();
  return (
    <div className="videoCard">
      <ThumbNail
        thumbnail={thumbnail}
        type={"mentorplaylistThumbnail"}
        videoId={videoId}
        modalTriggerSetter={modalTriggerSetter}
      />

      <div className="videoDetailsContainer">
        <NavLink to={`/mentor/${mentorId}`}>
          <div className="videoTitleDetails">
            <img src={profile} className="videoMentor" />
            <p style={{ color: theme.boldText }}>
              {title.length > 30 ? `${title.slice(0, 30)}...` : title}
            </p>
          </div>
        </NavLink>

        <div className="videoDetails">
          <div>
            <p>{mentor} </p>
            <p>{views} views</p>
          </div>
          <LikeButton size={1.4} videoId={videoId} liked={liked} />
        </div>
      </div>

      {modalTrigger && (
        <PlaylistModal
          modalTriggerSetter={modalTriggerSetter}
          videoId={videoId}
        />
      )}
    </div>
  );
};

export default VideoCard;
