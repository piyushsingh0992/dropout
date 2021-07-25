import React, { useState, useEffect } from "react";
import "./style.css";

import laterWhite from "../../assets/icons/laterWhite.svg";
import laterGrey from "../../assets/icons/later.svg";
import check from "../../assets/icons/check.svg";
import { useWatchLater } from "../../contexts/watchLaterContext";
import { useToast } from "../../contexts/toastContext";
import {
  addWatchLater,
  removeWatchLater,
} from "../../utils/watchLaterFunction.js";
import { useAuth } from "../../contexts/authContext";

const WatchLaterButton = ({ videoId, videoPlayer }) => {
  const [addedVideo, addedVideoSetter] = useState(false);
  let { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { toastDispatch } = useToast();
  const {
    login: { userKey },
  } = useAuth();
  useEffect(() => {
    let present = watchLaterState.find((item) => item._id === videoId);
    if (present) {
      addedVideoSetter(true);
    } else {
      addedVideoSetter(false);
    }
    return () => {
      addedVideoSetter(false);
    };
  }, [watchLaterState, videoId]);

  function watchLater() {
    if (addedVideo) {
      removeWatchLater(
        videoId,
        watchLaterDispatch,
        toastDispatch,
        addedVideoSetter,
        userKey
      );
    } else {
      addWatchLater(
        videoId,
        watchLaterDispatch,
        toastDispatch,
        addedVideoSetter,
        userKey
      );
    }
  }
  return videoPlayer ? (
    addedVideo ? (
      <div onClick={watchLater} className="videoPlayerWatchLaterButton">
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
          <img
            src={laterWhite}
            className="watchLaterCardBtn"
            onClick={watchLater}
          />
        </>
      )}
    </div>
  );
};

export default WatchLaterButton;
