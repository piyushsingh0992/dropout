import React, { useState } from "react";
import "./playlistCard.css";
import VideoCard from "../videoCard/index.js";
import deleteIcon from "../../utils/images/icons/delete.svg";
import editIcon from "../../utils/images/icons/edit.svg";
import Button from "../button";
import TextField from "../textField/index.js";
import { useTheme } from "../../contexts/themeContext/index.js";
import { useAuth } from "../../contexts/authContext/index.js";
import { usePlaylist } from "../../contexts/playlistContext/index.js";
import {
  deleteVideoFromPlaylist,
  deletePlaylist,
  playlistNameChanger,
} from "../../utils/playlistFunction.js";
import { useToast } from "../../contexts/toastContext";
const PlaylistCard = ({ name, videos, playlistId }) => {
  const { theme } = useTheme();
  const { playlistState, playlistDispatch } = usePlaylist();
  const [edit, editSetter] = useState(false);
  const [newName, newNameSetter] = useState("");
  const { toastDispatch } = useToast();

  const {
    login: { userKey },
  } = useAuth();
  function deletePlaylistTrigger() {
    deletePlaylist(playlistId, playlistDispatch, toastDispatch, userKey);
  }
  function deleteVideo(videoId) {
    deleteVideoFromPlaylist(
      videoId,
      playlistId,
      playlistDispatch,
      toastDispatch,
      userKey
    );
  }

  function nameChangeHandler() {
    playlistNameChanger(
      playlistId,
      newName,
      playlistDispatch,
      newNameSetter,
      toastDispatch,
      userKey
    );
  }
  return (
    <div className="playlistCard">
      <div className="playlistName">
        {edit ? (
          <>
            <TextField
              value={newName}
              onChangeFunction={(newValue) => {
                newNameSetter(newValue);
              }}
            />
            <Button
              clickFunction={() => {
                editSetter((value) => !value);
                nameChangeHandler();
              }}
              text="Update"
              size="playlistNameUpdate"
            />
          </>
        ) : (
          <>
            <h2 style={{ color: theme.boldText }}>{name}</h2>
            <img
              src={editIcon}
              className="playlistNameEdit"
              onClick={() => {
                editSetter((value) => !value);
              }}
            />
          </>
        )}

        <img
          src={deleteIcon}
          className="playlistDelete"
          onClick={deletePlaylistTrigger}
        />
      </div>
      <div className="playlistVideoContainer">
        {videos.map((item) => {
          return (
            <div className="playlistVideo">
              <img
                src={deleteIcon}
                className="playlistVideoDelete"
                onClick={() => {
                  deleteVideo(item._id);
                }}
              />
              <VideoCard videosDetails={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlaylistCard;
