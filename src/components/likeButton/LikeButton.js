import React, { useState, useEffect } from "react";
import like from "../../utils/images/icons/like.svg";
import likeBlue from "../../utils/images/icons/likeBlue.svg";
import { useLikedVideos } from "../../contexts/likedVideoContext/likedVideoContext.js";
import { addLikedVideo, deleteLikedVideo } from "../../utils/likeFunction.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";
import { useAuth } from "../../contexts/authContext/authContext.js";

const LikeButton = ({ size, videoId }) => {
  const [likedVideo, likedVideoSetter] = useState(false);
  const { likedVideoState, likedVideoStateDispatch } = useLikedVideos();
  const { toastDispatch } = useToast();
  const {
    login: { userKey },
  } = useAuth();

  console.log("likedVideoState ->", likedVideoState);
  useEffect(() => {
    let present = likedVideoState.find((item) => item._id === videoId);

    if (present) {
      likedVideoSetter(true);
    } else {
      likedVideoSetter(false);
    }
    return () => {
      likedVideoSetter(false);
    };
  }, [likedVideoState, videoId]);

  const likeButtonClickHandler = () => {
    if (likedVideo) {
      deleteLikedVideo(
        videoId,
        likedVideoStateDispatch,
        toastDispatch,
        likedVideoSetter,
        userKey
      );
    } else {
      addLikedVideo(
        videoId,
        likedVideoStateDispatch,
        toastDispatch,
        likedVideoSetter,
        userKey
      );
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
