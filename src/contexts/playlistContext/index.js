import React, { useEffect, useReducer, createContext, useContext } from "react";

import { apiCall } from "../../apiCall";
import { useAuth } from "../authContext";
import { useToast } from "../toastContext";
import { playlistManager } from "./reducer";
const PlaylistContext = createContext();


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
          toastDispatch({type:"error", message});
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
