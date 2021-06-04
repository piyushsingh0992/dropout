import React from "react";
import "./mentorHeader.css";
import { Navlink } from "react-router-dom";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import Button from "../button/Button.js";
const MentorHeader = ({ mentor, categoryId, categoryIdSetter }) => {
  let { name, banner, profile, cateogry, playlist } = mentor;
  
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
            <p style={{ color: theme.boldText }}> {cateogry} </p>
          </div>
        </div>
        <Button text="Subscribe" size="subscribe-btn" />
      </div>
      <div
        className="playlistHeader"
        style={{ backgroundColor: theme.cardBackground }}
      >
        {playlist.map((item) => {
          if (item.id === categoryId) {
            return (
              <p
                style={{
                  borderBottom: `2px solid ${theme.hightLightText}`,
                  color: theme.hightLightText,
                  fontWeight: "bold",
                  
                }}
                
              >
                {item.name}
              </p>
            );
          } else {
            return (
              <p
                style={{
                  borderBottom: `1px solid ${theme.boldText}`,
                  color: theme.boldText,
                  
                }}
                onClick={()=>{categoryIdSetter(item.id)}}
              >
                {item.name}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
};

export default MentorHeader;
