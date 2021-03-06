import React, { useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import ThumbNail from "../thumbNail";
import { useTheme } from "../../contexts/themeContext";
import PlaylistModal from "../playlistModal";

const SearchVideoCard = ({ videosDetails }) => {
  const [modalTrigger, modalTriggerSetter] = useState(false);
  const { title, mentor, thumbnail, views, _id, profile } = videosDetails;
  const { theme } = useTheme();
  return (
    <div className="searchVideoCard">
      <ThumbNail
        thumbnail={thumbnail}
        type={"searchThumnail"}
        videoId={_id}
        modalTriggerSetter={modalTriggerSetter}
      />
      <div className="searchVideoDetailsContainer">
        <p style={{ color: theme.boldText }}>
          {title.length > 70 ? `${title.slice(0, 40)}...` : title}
        </p>

        <div className="searchVideoDetails">
          <NavLink to={`/mentor/${mentor._id}`}>
            <div className="searchVideoCardMentorDetails">
              <img src={profile} className="searchVideoCardMentorImg" />
              <p style={{ color: theme.primaryText }}>{mentor.name} </p>
            </div>
          </NavLink>
          <p>{views} views </p>
        </div>
      </div>
      {modalTrigger && (
        <PlaylistModal
          modalTriggerSetter={modalTriggerSetter}
          videoId={_id}
        />
      )}
    </div>
  );
};

export default SearchVideoCard;
