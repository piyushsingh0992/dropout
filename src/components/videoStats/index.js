import React from "react";
import "./style.css";

import { useTheme } from "../../contexts/themeContext/index.js";
import { useNavigate } from "react-router";

const VideoStats = ({ stats }) => {
  let { theme } = useTheme();
  const Navigate = useNavigate();
  return (
    <div
      className="videoStats"
      style={{ backgroundColor: theme.cardBackground ,color:theme.boldText}}
      onClick={() => {
        Navigate(`/videoplayer/${stats._id}`);
      }}
    >
      <img src={stats.thumbnail} />
      <div className="stats">
        <h6> {stats.likes} </h6>
        <p> likes </p>
      </div>

      <div className="stats">
        <h6> {stats.views} </h6>
        <p> views </p>
      </div>
      <div className="stats">
        <h6> {stats.comments.length} </h6>
        <p> comments </p>
      </div>
    </div>
  );
};

export default VideoStats;
