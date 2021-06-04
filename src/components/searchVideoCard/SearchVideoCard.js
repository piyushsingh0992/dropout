import React from "react";
import "./searchVideoCard.css";
import book from "./images/try.jpg";
import pic from "../../utils/images/mentors/tanay/profile.png";
import ThumbNail from "../thumbNail/ThumbNail.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
const SearchVideoCard = () => {
  const { theme } = useTheme();
  let x =
    "ssssssssssssssssssssssssdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd";
  return (
    <div className="searchVideoCard">
      <ThumbNail thumbnail={book} type={"searchThumnail"} />
      <div className="searchVideoDetailsContainer">
        <p style={{ color: theme.boldText }}>
          {x.length > 70 ? `${x.slice(0, 40)}...` : x}
        </p>

        <div className="searchVideoDetails">
          <div className="searchVideoCardMentorDetails">
            <img src={pic} className="searchVideoCardMentorImg" />
            <p>mentor name </p>
          </div>
          <p>66k views </p>
        </div>
      </div>
    </div>
  );
};

export default SearchVideoCard;
