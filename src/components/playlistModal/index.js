import React, { useState, useEffect } from "react";
import "./style.css";
import close from "../../utils/images/icons/close.svg";
import { useTheme } from "../../contexts/themeContext/index.js";
import Button from "../button";
import { usePlaylist } from "../../contexts/playlistContext/index.js";
import { useToast } from "../../contexts/toastContext/index.js";
import {
  createPlaylist,
  addVideoToPlaylist,
} from "../../utils/playlistFunction.js";
import { useAuth } from "../../contexts/authContext/index.js";

const PlaylistModal = ({ modalTriggerSetter, videoId }) => {
  const [playlistArray, playlistArraySetter] = useState([]);
  const [newPlaylistName, newPlaylistNameSetter] = useState("");
  const { theme } = useTheme();
  const { playlistState, playlistDispatch } = usePlaylist();
  const { toastDispatch } = useToast();
  const [isChecked, setIsChecked] = useState(
    new Array(playlistState.length).fill(false)
  );
  const [playlistIdArray, playlistIdArraySetter] = useState([]);

  useEffect(() => {
    setIsChecked(new Array(playlistState.length).fill(false));
  }, [playlistState]);

  const {
    login: { userKey },
  } = useAuth();
  function closingModal() {
    modalTriggerSetter(false);
  }

  useEffect(() => {
    playlistArraySetter(playlistState);
  }, [playlistState]);

  function enterKeyHandler(e) {
    if (e.keyCode === 13 && newPlaylistName.length > 0) {
      const present = playlistState.find(
        (item) => item.name === newPlaylistName
      );
      if (present) {
        toastDispatch(
         "error",
          "playlist already exist",
        );
      } else {
        createPlaylist(
          newPlaylistName,
          playlistDispatch,
          newPlaylistNameSetter,
          toastDispatch,
          userKey
        );
      }
    }
  }

  function selectedPlaylistsHandler(index, value) {
    isChecked[index] = !isChecked[index];

    setIsChecked(isChecked);
    if (isChecked[index]) {
      playlistIdArraySetter((item) => [...item, value]);
    } else {
      playlistIdArraySetter((item) => item.filter((id) => id != value));
    }
  }
  function submitHandler() {

    if (playlistIdArray.length < 1) {
      toastDispatch(
      "error",
      "Please select a playlist"
      );
      return;
    }
    addVideoToPlaylist(
      videoId,
      playlistIdArray,
      playlistDispatch,
      modalTriggerSetter,
      toastDispatch,
      userKey
    );
    playlistIdArraySetter([]);
    setIsChecked(new Array(playlistState.length).fill(false));
  }

  return (
    <div className="playlistModalContainer">
      <div
        className="playlistModal"
        style={{ backgroundColor: theme.cardBackground }}
      >
        <img className="playlistClose" src={close} onClick={closingModal} />
        <div>
          <input
            placeholder="Create new"
            className="createPlaylist"
            style={{
              backgroundColor: theme.cardBackground,
              color: theme.boldText,
              borderBottom: `2px solid ${theme.boldText}`,
            }}
            value={newPlaylistName}
            onKeyDown={(e) => {
              enterKeyHandler(e);
            }}
            onChange={(e) => {
              newPlaylistNameSetter(e.target.value);
            }}
          />
          <div className="allPlaylistsContainer">
            {playlistArray.map((item, index) => {
              return (
                <div className="existingPlaylist">
                  <input
                    type="checkbox"
                    value={item._id}
                    onChange={(e) => {
                      selectedPlaylistsHandler(index, e.target.value);
                    }}
                    checked={isChecked[index]}
                  />
                  <p
                    style={{
                      color: theme.boldText,
                    }}
                  >
                    {item.name?.length > 12
                      ? `${item.name.slice(0, 12)} ...`
                      : item.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <Button text="Add to Playlist" clickFunction={submitHandler} />
        </div>
      </div>
    </div>
  );
};

export default PlaylistModal;
