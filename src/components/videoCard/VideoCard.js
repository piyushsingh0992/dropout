import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./videoCard.css";
import LikeButton from "../likeButton/LikeButton.js";
import ThumbNail from "..//thumbNail/ThumbNail.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
const VideoCard = ({ videosDetails }) => {
  const { title, mentor, thumbnail, views, videoId, liked, profile } =
    videosDetails;

  const { theme } = useTheme();
  return (
    <div className="videoCard">
      <ThumbNail
        thumbnail={thumbnail}
        to={`/videoplayer/${videoId}`}
        type={"mentorplaylistThumbnail"}
      />
      <div className="videoDetailsContainer">
        <div className="videoTitleDetails">
          <img src={profile} className="videoMentor" />
          <p style={{ color: theme.boldText }}>
            {title.length > 30 ? `${title.slice(0, 30)}...` : title}
          </p>
        </div>

        <div className="videoDetails">
          <div>
            <p>{mentor} </p>
            <p>{views} views</p>
          </div>
          <LikeButton size={1.4} videoId={videoId} liked={liked} />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
