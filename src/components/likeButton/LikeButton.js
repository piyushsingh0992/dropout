import React from "react";
import like from "../../utils/images/icons/like.svg";
import likeBlue from "../../utils/images/icons/likeBlue.svg";

const LikeButton = ({ size }) => {
  return (
    <span className="likeButton">
      <img src={like} style={{ height: `${size}rem` }} />
    </span>
  );
};

export default LikeButton;
