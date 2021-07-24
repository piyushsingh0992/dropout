import React from "react";
import "./mentorHeader.css";
import { Navlink } from "react-router-dom";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import Button from "../button";
import SubscribeButton from "../subscribeButton/SubscribeButton.js";
import MentorPlaylistSetter from "../mentorPlaylistSetter/MentorPlaylistSetter";
const MentorHeader = ({ mentorData, playlistId, playlistIdSetter }) => {
  let { name, banner, _id: mentorId, profile, subject, playlists } = mentorData;
  
  const { theme } = useTheme();
  const { language } = useLanguage();

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
