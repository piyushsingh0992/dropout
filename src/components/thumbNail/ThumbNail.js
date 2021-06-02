import React from "react";
import "./thumbNail.css";

import playlist from "../../utils/images/icons/playlistWhite.svg";
import later from "../../utils/images/icons/laterWhite.svg";
const ThumbNail = ({ type, thumbnail }) => {
  return (
    <div>
      <div className="thumbNailContainer">
        <div className="thumbNailBtnScreen">
          <div className="playlistBtnContainer">
            <p>Add to Playlist</p>
            <img
              src={playlist}
              className="playlistVideoCardBtn"
              onClick={() => {}}
            />
          </div>
          <div className="watchLaterButtonContainer">
            <p>Watch Later</p>
            <img src={later} className="watchLaterCardBtn" onClick={() => {}} />
          </div>
        </div>
        <img
          src={thumbnail}
          className={type}
        />
      </div>
    </div>
  );
};

export default ThumbNail;
