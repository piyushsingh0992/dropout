import React, { useState } from "react";
import "./style.css";
import VideoCard from "../videoCard";
import deleteIcon from "../../assets/icons/delete.svg";
import editIcon from "../../assets/icons/edit.svg";
import Button from "../button";
import TextField from "../textField";
import { useTheme } from "../../contexts/themeContext";
import { useAuth } from "../../contexts/authContext";
import { usePlaylist } from "../../contexts/playlistContext";
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
  const [loader, setLoader] = useState(false);

  function nameChangeHandler() {
    playlistNameChanger(
      playlistId,
      newName,
      playlistDispatch,
      newNameSetter,
      toastDispatch,
      userKey,
      editSetter,
      setLoader
    );
  }
  console.log("new name ->", newName);
  return (
    <div className="playlistCard">
      <div className="playlistName">
        {edit ? (
          <>
            <TextField
              value={newName}
              onChangeFunction={(e) => {
                newNameSetter(e.target.value);
              }}
            />
            <Button
              clickFunction={() => {
                nameChangeHandler();
                setLoader(true);
              }}
              text="Update"
              size="playlistNameUpdate"
              loading={loader}
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
