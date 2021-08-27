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
import MiniLoader from "../miniloader";
const PlaylistCard = ({ name, videos, playlistId }) => {
  const { theme } = useTheme();
  const { playlistState, playlistDispatch } = usePlaylist();
  const [edit, editSetter] = useState(false);
  const [newName, newNameSetter] = useState("");
  const { toastDispatch } = useToast();
  const [currentDeletingVideo, currentDeletingVideoSetter] = useState("");

  const [playlistLoader, playlistLoaderSetter] = useState(false);
  const {
    login: { userKey },
  } = useAuth();
  function deletePlaylistTrigger() {
    playlistLoaderSetter(true);
    deletePlaylist({
      playlistId,
      playlistDispatch,
      toastDispatch,
      userKey,
      playlistLoaderSetter,
    });
  }
  function deleteVideo(videoId) {
    deleteVideoFromPlaylist({
      videoId,
      playlistId,
      playlistDispatch,
      toastDispatch,
      userKey,
      currentDeletingVideoSetter,
    });
  }
  const [loader, setLoader] = useState(false);

  function nameChangeHandler() {
    setLoader(true);
    let present = playlistState.find((item) => item.name === newName);
    if (present) {
      toastDispatch({ type: "error", message: "name alreadry present" });
      setLoader(false);
      editSetter((value) => !value);
      return;
    }

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
                newNameSetter(name);
                editSetter((value) => !value);
              }}
            />
          </>
        )}

        {playlistLoader ? (
          <div className="playlistDelete">
            <MiniLoader />
          </div>
        ) : (
          <img
            src={deleteIcon}
            className="playlistDelete"
            onClick={deletePlaylistTrigger}
          />
        )}
      </div>
      <div className="playlistVideoContainer">
        {videos.length > 0 ? (
          videos.map((item) => {
            return (
              <div className="playlistVideo">
                {currentDeletingVideo == item._id ? (
                  <div className="playlistVideoDelete">
                    <MiniLoader />
                  </div>
                ) : (
                  <img
                    src={deleteIcon}
                    className="playlistVideoDelete"
                    onClick={() => {
                      deleteVideo(item._id);
                      currentDeletingVideoSetter(item._id);
                    }}
                  />
                )}

                <VideoCard videosDetails={item} />
              </div>
            );
          })
        ) : (
          <h3
            style={{ color: theme.boldText }}
            className="empty-playlist-message"
          >
            Currenty you have no Video in "{name}"
          </h3>
        )}
      </div>
    </div>
  );
};

export default PlaylistCard;
