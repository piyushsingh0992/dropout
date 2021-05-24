import React from "react";
import book from "./images/try.jpg";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import playlist from "../../utils/images/icons/playlistWhite.svg";
import later from "../../utils/images/icons/laterWhite.svg";
import "./recommendVideoCard.css";
const RecommendVideoCard = () => {
  const { theme } = useTheme();
  return (
    <div className="recommendVideoCard">
      <div className="recommendImageContainer">
        <div className="recommendBtnScreen">
          <img
            src={playlist}
            className="playlistRecommendVideoCardBtn"
            onClick={() => {
              console.log("playlist");
            }}
          />
          <img
            src={later}
            className="laterRecommendVideoCardBtn"
            onClick={() => {
              console.log("watch later");
            }}
          />
        </div>
        <img src={book} className="recommendthumbNail" />
      </div>
      <div className="recommendVideoDetailsContainer">
        <p style={{ color: theme.boldText }}>Lesson Name</p>

        <div className="recommendvideoDetails">
          <p>mentor name </p>
          <p>66k views . 1 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendVideoCard;
