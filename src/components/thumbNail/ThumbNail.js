import React, { useState, useEffect } from "react";
import "./thumbNail.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import playlist from "../../utils/images/icons/playlistWhite.svg";
import later from "../../utils/images/icons/laterWhite.svg";
import check from "../../utils/images/icons/check.svg";
import { useWatchLater } from "../../contexts/watchLaterContext/watchLaterContext";
const ThumbNail = ({ type, thumbnail, videoId, watchlater, to }) => {
  const [addedVideo, addedVideoSetter] = useState(false);
  let { watchLaterState,watchLaterDispatch } = useWatchLater();
  console.log({videoId});
  debugger;
  useEffect(() => {
    let present=watchLaterState.find(item=>item.videoId===videoId);
    if(present){
      addedVideoSetter(true);
    }else{
      addedVideoSetter(false);
    }
    debugger;
    return () => {
      addedVideoSetter(false);
    };
  }, [videoId, watchlater]);

  let navigate = useNavigate();
  function thumbnailClickHandler(e) {
    switch (e.target.className) {
      case "playlistVideoCardBtn":
        return;

      case "watchLaterCardBtn":
        watchLater();
        return;

      default:
        navigate(to);
        return;
    }
  }

  function watchLater() {
    addedVideoSetter((value) => !value);

    if (addedVideo) {
      (async function () {
        try {
          let { data } = await axios.delete(`/watchlater/${videoId}`);
          watchLaterDispatch({
            payload: "REMOVE_FROM_WATCH_LATER",
            video: data.video,
          });
        } catch (error) {}
      })();
    } else {
      (async function () {
        try {
          let { data } = await axios.post(`/watchlater/${videoId}`);

          watchLaterDispatch({
            payload: "ADD_TO_WATCH_LATER",
            video: data.video,
          });
        } catch (error) {}
      })();
    }
  }

  return (
    <div className="thumbNailContainer">
      <div
        className="thumbNailBtnScreen"
        onClick={(e) => {
          if (e.target.className === "thumbNailBtnScreen") {
            thumbnailClickHandler(e);
          }
        }}
      >
        <div className="playlistBtnContainer">
          <p>Add to Playlist</p>
          <img
            src={playlist}
            className="playlistVideoCardBtn"
            onClick={() => {}}
            onClick={(e) => {
              if (e.target.className === "playlistVideoCardBtn") {
                thumbnailClickHandler(e);
              }
            }}
          />
        </div>

        <div className="watchLaterButtonContainer">
          {addedVideo ? (
            <>
              <p>Added </p>
              <img
                src={check}
                className="watchLaterCardBtn"
                onClick={(e) => {
                  if (e.target.className === "watchLaterCardBtn") {
                    thumbnailClickHandler(e);
                  }
                }}
              />
            </>
          ) : (
            <>
              <p>Watch Later</p>
              <img
                src={later}
                className="watchLaterCardBtn"
                onClick={(e) => {
                  if (e.target.className === "watchLaterCardBtn") {
                    thumbnailClickHandler(e);
                  }
                }}
              />
            </>
          )}
        </div>
      </div>
      <img src={thumbnail} className={type} />
    </div>
  );
};

export default ThumbNail;
