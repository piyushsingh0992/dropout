import React, { useState } from "react";
import "./playlistCard.css";
import VideoCard from "../videoCard/VideoCard.js";
import deleteIcon from "../../utils/images/icons/delete.svg";
import editIcon from "../../utils/images/icons/edit.svg";
import Button from "../button/Button";
import TextField from "../textField/TextField.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { usePlaylist } from "../../contexts/playlistContext/playlistContext.js";
import {
  deleteVideoFromPlaylist,
  deletePlaylist,
  playlistNameChanger,
} from "../../utils/playlistFunction.js";
import { useToast } from "../../contexts/toastContext/toastContext";
const PlaylistCard = ({ name, videos }) => {
  const { theme } = useTheme();
  const { playlistState, playlistDispatch } = usePlaylist();
  const [edit, editSetter] = useState(false);
  const [newName, newNameSetter] = useState("");
  const { toastDispatch } = useToast();
  function deletePlaylistTrigger() {
    deletePlaylist(name, playlistDispatch, toastDispatch);
  }
  function deleteVideo(videoId) {
    deleteVideoFromPlaylist(videoId, name, playlistDispatch, toastDispatch);
  }

  function nameChangeHandler() {
    playlistNameChanger(
      name,
      newName,
      playlistDispatch,
      newNameSetter,
      toastDispatch
    );
  }
  return (
    <div className="playlistCard">
      <div className="playlistName">
        {edit ? (
          <>
            <TextField
              value={newName}
              changeFunction={(e) => {
                newNameSetter(e.target.value);
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


                  deleteVideo(item.videoId);
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
