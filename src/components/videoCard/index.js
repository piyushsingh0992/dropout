import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import LikeButton from "../likeButton";
import ThumbNail from "../thumbNail";
import { useTheme } from "../../contexts/themeContext";
import PlaylistModal from "../playlistModal";
const VideoCard = ({ videosDetails }) => {
  const [modalTrigger, modalTriggerSetter] = useState(false);
  const { title, name, mentor, thumbnail, views, _id } = videosDetails;
  const { theme } = useTheme();
  return (
    <div className="videoCard">
      <ThumbNail
        thumbnail={thumbnail}
        type={"mentorplaylistThumbnail"}
        videoId={_id}
        modalTriggerSetter={modalTriggerSetter}
      />

      <div className="videoDetailsContainer">
        <NavLink to={`/mentor/${mentor._id}`}>
          <div className="videoTitleDetails">
            <img src={mentor.profile} className="videoMentor" />
            <p style={{ color: theme.boldText }}>
              {title.length > 30 ? `${title.slice(0, 30)}...` : title}
            </p>
          </div>
        </NavLink>

        <div className="videoDetails">
          <div>
            <p>{name} </p>
            <p>{views} views</p>
          </div>
          <LikeButton size={1.4} videoId={_id} />
        </div>
      </div>

      {modalTrigger && (
        <PlaylistModal modalTriggerSetter={modalTriggerSetter} videoId={_id} />
      )}
    </div>
  );
};

export default VideoCard;
