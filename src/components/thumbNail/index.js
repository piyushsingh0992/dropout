import React from "react";
import "./thumbNail.css";
import { useNavigate } from "react-router-dom";

import WatchLaterButton from "../watchLaterButton/index.js";
import PlaylistButton from "../playlistButton/index.js";
const ThumbNail = ({ type, thumbnail, videoId, modalTriggerSetter }) => {
  let navigate = useNavigate();
  function thumbnailClickHandler(e) {
    if (e.target.className === "thumbNailBtnScreen") {
      navigate(`/videoplayer/${videoId}`);
    }
  }
  return (
    <div className="thumbNailContainer">
      <div
        className="thumbNailBtnScreen"
        onClick={(e) => {
          if (e.target.className === "thumbNailBtnScreen") {
            thumbnailClickHandler(e);
          }
        }}
      >
        <PlaylistButton modalTriggerSetter={modalTriggerSetter} />
        <WatchLaterButton videoId={videoId} />
      </div>
      <img src={thumbnail} className={type} />
    </div>
  );
};

export default ThumbNail;
