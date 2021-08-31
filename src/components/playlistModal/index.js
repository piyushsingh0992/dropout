import React, { useState, useEffect } from "react";
import "./style.css";
import close from "../../assets/icons/close.svg";
import { useTheme } from "../../contexts/themeContext";
import Button from "../button";
import { usePlaylist } from "../../contexts/playlistContext";
import { useToast } from "../../contexts/toastContext";
import {
  createPlaylist,
  addVideoToPlaylist,
  deleteVideoFromPlaylist,
} from "../../utils/playlistFunction.js";
import addPlaylist from "../../assets/icons/addPlaylist.png";
import { useAuth } from "../../contexts/authContext";
import MiniLoader from "../miniloader";
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
  const [loader, setLoader] = useState(false);
  const [playlistAddloader, playlistAddloaderSetter] = useState(false);
  const {
    login: { userKey },
  } = useAuth();

  useEffect(() => {
    setIsChecked(new Array(playlistState.length).fill(false));
  }, [playlistState]);

  function closingModal() {
    modalTriggerSetter(false);
  }

  useEffect(() => {
    playlistArraySetter(playlistState);
  }, [playlistState]);

  async function createNewPlaylist() {
    playlistAddloaderSetter(true);
    const present = playlistState.find((item) => item.name === newPlaylistName);
    if (present) {
      toastDispatch({
        type: "error",
        message: "playlist already exist",
      });
      playlistAddloaderSetter(false);
    } else {
      const created = await createPlaylist({
        newPlaylistName,
        playlistDispatch,
        newPlaylistNameSetter,
        toastDispatch,
        userKey,
        playlistAddloaderSetter,
      });

      let playlistIdArray = [created.newPlaylistId];
      let setLoader = playlistAddloaderSetter;
      if (created.status) {
        addVideoToPlaylist({
          videoId,
          playlistIdArray,
          playlistDispatch,
          toastDispatch,
          userKey,
          setLoader,
          playlistIdArraySetter,
          setIsChecked,
          playlistState,
        });
      } else {
        playlistAddloaderSetter(false);
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

  const [currentPlaylist, currentPlaylistSetter] = useState("");

  return (
    <div className="playlistModalContainer">
      <div
        className="playlistModal"
        style={{ backgroundColor: theme.cardBackground }}
      >
        <img className="playlistClose" src={close} onClick={closingModal} />
        <div>
          <div className="createPlaylist-container">
            <input
              placeholder="Create new"
              className="createPlaylist"
              style={{
                backgroundColor: theme.cardBackground,
                color: theme.boldText,
                borderBottom: `2px solid ${theme.boldText}`,
              }}
              value={newPlaylistName}
              onChange={(e) => {
                newPlaylistNameSetter(e.target.value);
              }}
            />
            {playlistAddloader ? (
              <MiniLoader />
            ) : (
              <img
                onClick={createNewPlaylist}
                src={addPlaylist}
                className="add-playlist-icon"
              />
            )}
          </div>
          <div className="allPlaylistsContainer">
            {playlistArray.map((item, index) => {
              let present = item.videos.find((item) => item._id === videoId);
              return (
                <div className="existingPlaylist">
                  {currentPlaylist === item._id ? (
                    <div className="mini-loaderContainer">
                      <MiniLoader />
                    </div>
                  ) : (
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        if (present) {
                          let playlistId = item._id;
                          deleteVideoFromPlaylist({
                            videoId,
                            playlistId,
                            playlistDispatch,
                            toastDispatch,
                            userKey,
                            currentPlaylistSetter,
                          });
                        } else {
                          let playlistIdArray = [item._id];
                          addVideoToPlaylist({
                            videoId,
                            playlistIdArray,
                            playlistDispatch,
                            toastDispatch,
                            userKey,
                            setLoader,
                            playlistIdArraySetter,
                            setIsChecked,
                            playlistState,
                            currentPlaylistSetter,
                          });
                        }
                        selectedPlaylistsHandler(index, e.target.value);
                      }}
                      checked={present ? true : false}
                    />
                  )}

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
      </div>
    </div>
  );
};

export default PlaylistModal;
