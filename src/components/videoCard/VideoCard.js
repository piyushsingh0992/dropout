import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./videoCard.css";
import LikeButton from "../likeButton/LikeButton.js";
import ThumbNail from "../thumbNail/ThumbNail.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
const VideoCard = ({ videosDetails }) => {
  const { title, mentor,mentorId, thumbnail, views, videoId, liked, profile } =
    videosDetails;

  console.log({mentorId});
  const { theme } = useTheme();
  return (
    <div className="videoCard">
      <ThumbNail
        thumbnail={thumbnail}
        type={"mentorplaylistThumbnail"}
        videoId={videoId}
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
    </div>
  );
};

export default VideoCard;
