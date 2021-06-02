import React from "react";
import like from "../../utils/images/icons/like.svg";
import likeBlue from "../../utils/images/icons/likeBlue.svg";

import {useLikedVideos} from "../../contexts/likedVideoContext/likedVideoContext.js"

const LikeButton = ({ size }) => {
  let x=useLikedVideos();
  console.log({x});
  return (
    <span className="likeButton">
      <img src={like} style={{ height: `${size}rem` }} />
    </span>
  );
};

export default LikeButton;
