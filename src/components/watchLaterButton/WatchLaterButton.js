import React, { useState, useEffect } from "react";
import "./watchLaterButton.css";
import axios from "axios";

import laterWhite from "../../utils/images/icons/laterWhite.svg";
import laterGrey from "../../utils/images/icons/later.svg";
import check from "../../utils/images/icons/check.svg";
import { useWatchLater } from "../../contexts/watchLaterContext/watchLaterContext";

const WatchLaterButton = ({ videoId, videoPlayer }) => {
  const [addedVideo, addedVideoSetter] = useState(false);
  let { watchLaterState, watchLaterDispatch } = useWatchLater();
  useEffect(() => {
    let present = watchLaterState.find((item) => item.videoId === videoId);
    if (present) {
      addedVideoSetter(true);
    } else {
      addedVideoSetter(false);
    }
    return () => {
      addedVideoSetter(false);
    };
  }, [videoId]);

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
  return videoPlayer ? (
    addedVideo ? (
      <div onClick={watchLater}  className="videoPlayerWatchLaterButton">
        <img src={check} />
        Added to watch Later
      </div>
    ) : (
      <div onClick={watchLater}>
        <img src={laterGrey} />
        Watch Later
      </div>
    )
  ) : (
    <div className="watchLaterButtonContainer">
      {addedVideo ? (
        <>
          <p>Added </p>
          <img src={check} className="watchLaterCardBtn" onClick={watchLater} />
        </>
      ) : (
        <>
          <p>Watch Later</p>
          <img src={laterWhite} className="watchLaterCardBtn" onClick={watchLater} />
        </>
      )}
    </div>
  );
};

export default WatchLaterButton;
