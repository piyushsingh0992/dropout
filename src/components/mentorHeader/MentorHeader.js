import React from "react";
import "./mentorHeader.css";
import pic from "../../utils/images/mentors/tanay/profile.png";
import banner from "../../utils/images/mentors/tanay/banner1.png";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import Button from "../button/Button.js";
const MentorHeader = ({mentor}) => {
  debugger;
  let {name,banner,profile,cateogry}=mentor;
  debugger;
  const { theme } = useTheme();
  const { language } = useLanguage();
 
  debugger;
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
            <h1 style={{ color: theme.highLightText }}> {name} </h1>
            <p style={{ color: theme.boldText }}> {cateogry} </p>
          </div>
        </div>
        <Button text="Subscribe" size="subscribe-btn" />
      </div>
    </div>
  );
};

export default MentorHeader;
