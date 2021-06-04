import React from "react";
import "./thumbNail.css";
import { useLocation, useNavigate } from "react-router-dom";
import playlist from "../../utils/images/icons/playlistWhite.svg";
import later from "../../utils/images/icons/laterWhite.svg";
const ThumbNail = ({ type, thumbnail ,to}) => {
  let navigate=useNavigate();
  function thumbnailClickHandler(){
    navigate(to);
  }
  return (
    <div className="thumbNailContainer" onClick={thumbnailClickHandler}>
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
      <img src={thumbnail} className={type} />
    </div>
  );
};

export default ThumbNail;
