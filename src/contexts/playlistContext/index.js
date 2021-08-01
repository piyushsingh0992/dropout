import React, { useEffect, useReducer, createContext, useContext } from "react";

import { apiCall } from "../../apiCall/apiCall";
import { useAuth } from "../authContext";
import { useToast } from "../toastContext";

const PlaylistContext = createContext();
function playlistManager(state, action) {
  const { type, payload } = action;
  const {
    playlistId,
    playlistIdArray,
    video,
    playlist,
    newPlaylist,
    playlists,
  } = payload||{};
  switch (type) {
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
    case "LOGOUT":
      return []
    default:
      return state;
  }
}
export function PlaylistProvider({ children }) {
  const [playlistState, playlistDispatch] = useReducer(playlistManager, []);

  let { login } = useAuth();
  const { toastDispatch } = useToast();

  useEffect(() => {
    let { loginStatus, userKey } = login;

    if (loginStatus) {
      (async function () {
        let { success, data, message } = await apiCall(
          "GET",
          `playlist/${userKey}`
        );

        if (success === true) {
          playlistDispatch({
            type: `LOADING_PLAYLIST`,
            payload: { playlists: data },
          });
        } else {
          toastDispatch("error", message);
        }
      })();
    }
  }, [login]);
  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
}

export const usePlaylist = () => {
  return useContext(PlaylistContext);
};
