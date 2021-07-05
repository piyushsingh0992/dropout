import React, { useEffect, useReducer, createContext, useContext } from "react";
import axios from "axios";

const PlaylistContext = createContext();
function playlistManager(state, action) {
  const {
    payload,
    playlistId,
    playlistIdArray,
    video,
    playlist,
    newPlaylist,
    playlists,
  } = action;
  switch (payload) {
    case "LOADING_PLAYLIST":
      return playlists;
    case "CREATE_PLAYLIST":
      return [...state, newPlaylist];
    case "DELETE_PLAYLIST":
      return playlist;
    case "ADD_VIDEO":
      return playlist;
    case "DELETE_VIDEO":
      return playlist;
    case "RENAME_PLAYLIST":
      return playlist;
    default:
      return state;
  }
}
export function PlaylistProvider({ children }) {
  const [playlistState, playlistDispatch] = useReducer(playlistManager, []);
  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("loginStatus"));

    if (login) {
      (async function () {
        let { userKey } = login;

        try {
          let { status, data } = await axios.get(
            `https://dropout.piyushsingh6.repl.co/playlist/${userKey}`
          );

          if (status === 200) {
            playlistDispatch({ payload: `LOADING_PLAYLIST`, playlists: data });
          }
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, []);
  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
}

export const usePlaylist = () => {
  return useContext(PlaylistContext);
};
