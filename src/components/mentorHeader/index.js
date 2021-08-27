import React from "react";
import "./style.css";
import { useTheme } from "../../contexts/themeContext";
import SubscribeButton from "../subscribeButton";
import MentorPlaylistSetter from "../mentorPlaylistSetter";
const MentorHeader = ({ mentorData, playlistId, playlistIdSetter }) => {
  let { name, banner, _id: mentorId, profile, subject, playlists } = mentorData;
  
  const { theme } = useTheme();


  return (
    <div className="mentorHeader">
      <div className="mentorHeader-banner-container">
        <img src={banner} className="mentorHeader-banner" />
      </div>
      <div
        className="mentorHeader-mentor-details-container"
        style={{ backgroundColor: theme.cardBackground }}
      >
        <div className="mentorHeader-mentor-details">
          <img src={profile} className="mentorHeader-mentor-img" />
          <div className="mentorHeader-mentor-text">
            <h1 style={{ color: theme.hightLightText }}> {name} </h1>
            <p style={{ color: theme.boldText }}> {subject} </p>
          </div>
        </div>
        <SubscribeButton mentorId={mentorId} />
      </div>
      <MentorPlaylistSetter
        playlists={playlists}
        playlistId={playlistId}
        playlistIdSetter={playlistIdSetter}
      />
    </div>
  );
};

export default MentorHeader;
