import React, { useState, useEffect } from "react";
import "./playlistModal.css";
import axios from "axios";
import close from "../../utils/images/icons/close.svg";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import Button from "../button/Button.js";
import { usePlaylist } from "../../contexts/playlistContext/playlistContext.js";

const PlaylistModal = ({ modalTriggerSetter, videoId }) => {
  const [playlistArray, playlistArraySetter] = useState([]);
  const [newPlaylistName, newPlaylistNameSetter] = useState("");
  const [selectedPlaylists, selectedPlaylistsSetter] = useState([]);
  const [trigger, triggerSetter] = useState(false);
  const { theme } = useTheme();
  const { playlistState, playlistDispatch } = usePlaylist();
  function closingModal() {
    modalTriggerSetter(false);
  }

  useEffect(() => {
    playlistArraySetter(playlistState);
  }, [playlistState]);

  function enterKeyHandler(e) {
    if (e.keyCode === 13 && newPlaylistName?.length > 0) {
      const present = playlistState.find((item) => item === newPlaylistName);
      if (present) {
        triggerSetter(true);
        setTimeout(() => {
          triggerSetter(false);
        }, 1);
      } else {
        (async function () {
          try {
            let { data } = await axios.post("/playlist", {
              playlistName: newPlaylistName,
            });

            playlistDispatch({
              payload: `CREATE_PLAYLIST`,
              newPlaylist: data.newPlaylist,
            });
            newPlaylistNameSetter("");
          } catch (error) {
            console.log(error);
          }
        })();
      }
    }
  }

  function selectedPlaylistsHandler(checked, value) {
    if (checked) {
      selectedPlaylistsSetter((item) => [value, ...item]);
    } else {
      selectedPlaylistsSetter((item) => {
        return item.filter((play) => play != value);
      });
    }
  }

  function submitHandler() {
    (async function () {
      try {
        let { data } = await axios.post(`/playlist/${videoId}`, {
          playlistarray: selectedPlaylists,
        });
        playlistDispatch({ payload: `ADD_VIDEO`, playlist: data.playlist });
        modalTriggerSetter(false);
      } catch (error) {
        console.log({ error });
      }
    })();

    selectedPlaylistsSetter([]);
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
            className={`createPlaylist ${
              playlistArray?.length > 5 && `addScroll`
            }`}
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

          {playlistArray.map((item) => {
            return (
              <div className="existingPlaylist">
                <input
                  type="checkbox"
                  value={item.name}
                  onChange={(e) => {
                    selectedPlaylistsHandler(e.target.checked, e.target.value);
                  }}
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
        <div>
          <Button text="Add to Playlist" clickFunction={submitHandler} />
        </div>
      </div>
    </div>
  );
};

export default PlaylistModal;
