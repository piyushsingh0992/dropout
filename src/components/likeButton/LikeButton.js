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
    return ()=>{
      likedVideoSetter(false)
    }
  },[liked, videoId] );

  const likeButtonClickHandler = () => {
    likedVideoSetter((value) => !value);
   
    
    if (likedVideo) {
     
      (async function () {
        try {
          let { data } = await axios.delete("/likedVideos", {
            params:{videoId} 
          });
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
