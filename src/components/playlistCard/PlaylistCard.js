import React, { useState } from "react";
import "./playlistCard.css";
import axios from "axios";
import VideoCard from "../videoCard/VideoCard.js";
import deleteIcon from "../../utils/images/icons/delete.svg";
import editIcon from "../../utils/images/icons/edit.svg";
import Button from "../button/Button";
import TextField from "../textField/TextField.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { usePlaylist } from "../../contexts/playlistContext/playlistContext.js";

const PlaylistCard = ({ name, videos }) => {
  const { theme } = useTheme();
  const { playlistState, playlistDispatch } = usePlaylist();
  const [edit, editSetter] = useState(false);
  const [newName, newNameSetter] = useState("");
  function deletePlaylist() {
    (async function () {
      try {
        let { data } = await axios.delete(`/playlist/${name}`);
        console.log({ data });
        debugger;
        playlistDispatch({
          payload: "DELETE_PLAYLIST",
          playlist: data.playlist,
        });
      } catch (error) {
        console.log({ error });
      }
    })();
  }
  function deleteVideo(videoId) {
    (async function () {
      try {
        let { data } = await axios.delete(`/playlist/${name}/${videoId}`);
        console.log({ data });
        debugger;
        playlistDispatch({ payload: "DELETE_VIDEO", playlist: data.playlist });
      } catch (error) {
        console.log({ error });
      }
    })();
  }

  function nameChangeHandler() {
    (async function () {
      try {
        let { data } = await axios.post(`/playlist/${name}/${newName}`);
        console.log({ data });
        debugger;
        newNameSetter("");
        playlistDispatch({
          payload: "RENAME_PLAYLIST",
          playlist: data.playlist,
        });
      } catch (error) {
        console.log({ error });
      }
    })();
  }
  console.log("edit ->");
  return (
    <div className="playlistCard">
      <div className="playlistName">
        {edit ? (
          <>
            <TextField
              value={newName}
              changeFunction={(e) => {
                console.log(e.target.value);
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
          onClick={deletePlaylist}
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
                  console.log("item ->", item);
                  debugger;
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
