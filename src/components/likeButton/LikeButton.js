import React, { useState, useEffect } from "react";
import like from "../../utils/images/icons/like.svg";
import likeBlue from "../../utils/images/icons/likeBlue.svg";
import { useLikedVideos } from "../../contexts/likedVideoContext/likedVideoContext.js";
import { addLikedVideo, deleteLikedVideo } from "../../utils/likeFunction.js";
import {useToast} from "../../contexts/toastContext/toastContext.js";
const LikeButton = ({ size, videoId, liked }) => {
  const [likedVideo, likedVideoSetter] = useState(false);
  const { likedVideoState, likedVideoStateDispatch } = useLikedVideos();
  const {toastState, toastDispatch}=useToast();
  useEffect(() => {
    let present = likedVideoState.find((item) => item.videoId === videoId);
    if (present) {
      likedVideoSetter(true);
    } else {
      likedVideoSetter(false);
    }
    return () => {
      likedVideoSetter(false);
    };
  }, [liked, videoId]);

  const likeButtonClickHandler = () => {
    if (likedVideo) {
      deleteLikedVideo(videoId, likedVideoStateDispatch,toastDispatch,likedVideoSetter);
    } else {
      addLikedVideo(videoId, likedVideoStateDispatch,toastDispatch,likedVideoSetter);
    }
  };
  return likedVideo ? (
    <img
      src={likeBlue}
      onClick={likeButtonClickHandler}
      style={{ height: `${size}rem` }}
    />
  ) : (
    <img
      src={like}
      onClick={likeButtonClickHandler}
      style={{ height: `${size}rem` }}
    />
  );
};

export default LikeButton;
