import React from "react";
import book from "./images/try.jpg";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import playlist from "../../utils/images/icons/playlistWhite.svg";
import later from "../../utils/images/icons/laterWhite.svg";
import "./searchVideoCard.css";
import pic from "../../utils/images/mentors/tanay/profile.png";
const SearchVideoCard = () => {
  const { theme } = useTheme();
  let x =
    "ssssssssssssssssssssssssdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd";
  return (
    <div className="searchVideoCard">
      <div className="searchImageContainer">
        <div className="searchBtnScreen">
          <div className="searchPlaylistBtnContainer">
            <p>Add to Playlist</p>
            <img
              src={playlist}
              className="playlistSearchVideoCardBtn"
              onClick={() => {}}
            />
          </div>
          <div className="searchWatchLaterBtnContainer">
          <p>Watch Later</p>
            <img
              src={later}
              className="laterSearchVideoCardBtn"
              onClick={() => {}}
            />
          </div>
        </div>
        <img src={book} className="searchThumbnail" />
      </div>

      <div className="searchVideoDetailsContainer">
        <p style={{ color: theme.boldText }}>
          {x.length > 70 ? `${x.slice(0, 70)}...` : x}
        </p>

        <div className="searchVideoDetails">
          <div className="searchVideoCardMentorDetails">
            <img src={pic} className="searchVideoCardMentorImg" />
            <p>mentor name </p>
          </div>
          <p>66k views . 1 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default SearchVideoCard;
