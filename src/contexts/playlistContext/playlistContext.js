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
    (async function () {
      try {
        let { data } = await axios.get("/playlist");
        const { status, playlists } = data;

        playlistDispatch({ payload: `LOADING_PLAYLIST`, playlists: playlists });
      } catch (error) {
        console.error(error);
      }
    })();
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
