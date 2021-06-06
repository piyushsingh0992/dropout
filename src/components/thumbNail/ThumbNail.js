import React from "react";
import "./thumbNail.css";
import { useNavigate } from "react-router-dom";

import WatchLaterButton from "../watchLaterButton/WatchLaterButton.js";
import PlaylistButton from "../playlistButton/PlaylistButton.js";
const ThumbNail = ({ type, thumbnail, videoId,  to }) => {
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
        <PlaylistButton />
        <WatchLaterButton videoId={videoId}  />
      </div>
      <img src={thumbnail} className={type} />
    </div>
  );
};

export default ThumbNail;
