import React, { useState } from "react";
import "./style.css";

import { useTheme } from "../../contexts/themeContext";
import { NavLink } from "react-router-dom";

const MentorCard = ({
  profile,
  banner,
  name,
  category,
  route,
  description,
}) => {
  const { theme } = useTheme();
  const [trigger, triggerSetter] = useState(false);
  const triggerHandler = () => {
    triggerSetter((value) => !value);
  };
  return (
    <div className="mentorCard" style={{ background: theme.cardBackground }}>
      <div className="mentorCard-mentor-pic-container" onClick={triggerHandler}>
        <img src={profile} className="mentorCard-mentor-pic" />
        <p style={{ color: theme.boldText }}>{category}</p>
      </div>
      <div
        className={`mentor-card-modal-container ${
          trigger ? "mentor-card-modal-show" : "mentor-card-modal-hide"
        }`}
        onClick={triggerHandler}
      >
        <div
          className="mentor-card-modal"
          style={{ backgroundColor: theme.primaryBackground }}
        >
          <div className="mentor-card-modal-banner-container">
            <img src={banner} className="mentor-card-modal-banner" />
          </div>

          <div
            className="mentor-card-modal-intro"
            style={{ backgroundColor: theme.highLightBackground }}
          >
            <img src={profile} className="mentor-card-modal-intro-pic" />
            <div className="mentor-card-modal-intro-text">
              <h1>{name}</h1>
            </div>
          </div>

          <div
            className="mentor-card-modal-mentor-description"
            style={{
              backgroundColor: theme.primaryBackground,
              color: theme.primaryText,
            }}
          >
            {description}
          </div>
          <NavLink to={route}>
            <div
              className="mentor-card-modal-btn-container"
              style={{ backgroundColor: theme.primaryBackground }}
            >
              <button>Start Learning</button>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
