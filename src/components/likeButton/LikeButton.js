import React, { useState, useEffect } from "react";
import like from "../../utils/images/icons/like.svg";
import likeBlue from "../../utils/images/icons/likeBlue.svg";
import axios from "axios";
import { useLikedVideos } from "../../contexts/likedVideoContext/likedVideoContext.js";

const LikeButton = ({ size, videoId, liked }) => {
  const [likedVideo, likedVideoSetter] = useState(false);

  const { likedVideoStateDispatch } = useLikedVideos();

  useEffect(() => {
    likedVideoSetter(liked);
    console.log(`useEffect ran for ${videoId}-> `, liked);
  }, [liked]);

  const likeButtonClickHandler = () => {
    likedVideoSetter((value) => !value);
    console.log({likedVideo});
    debugger;
    if (likedVideo) {
      debugger;
      (async function () {
        try {
          let { data } = await axios.delete("/likedVideos", {
            params:{videoId} 
          });
          debugger;
          likedVideoStateDispatch({
            payload: "REMOVE_LIKED_VIDEO",
            video: data.video,
          });
        } catch (error) {
          console.error("error");
        }
      })();
    } else {
      (async function () {
        try {
          let { data } = await axios.post("/likedVideos", {
            videoId,
          });

          likedVideoStateDispatch({
            payload: "ADD_LIKED_VIDEO",
            video: data.video,
          });
        } catch (error) {
          console.error("error");
        }
      })();
    }
  };
  console.log(`liked value  for ${videoId}- >`, liked);
  console.log(`likedVideo value for ${videoId}->`, likedVideo);
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
