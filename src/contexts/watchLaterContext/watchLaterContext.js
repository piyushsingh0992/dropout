import { createContext, useContext, useReducer, useEffect } from "react";

import { apiCall } from "../../apiCall/apiCall";
import { useAuth } from "../authContext/authContext";
import { useToast } from "../toastContext/toastContext";
const WatchLaterContext = createContext();

function watchLaterManger(state, action) {
  const { payload, video, videos } = action;

  switch (payload) {
    case "FIRST_LOAD":
      return videos;
    case "ADD_TO_WATCH_LATER":
      return [video, ...state];

    case "REMOVE_FROM_WATCH_LATER":
      return state.filter((item) => {
        if (item._id === video._id) {
          return false;
        } else {
          return true;
        }
      });

    default:
      return state;
  }
}
export function WatchLaterProvider({ children }) {
  const [watchLaterState, watchLaterDispatch] = useReducer(
    watchLaterManger,
    []
  );
  let { login } = useAuth();
  const { toastDispatch } = useToast();

  useEffect(() => {
    let { loginStatus, userKey } = login;
    if (loginStatus) {
      (async function () {
        
          let { success, data, message } = await apiCall(
            "GET",
            `watchlater/${userKey}`
          );
          if (success === true) {
            watchLaterDispatch({ payload: "FIRST_LOAD", videos: data.videos });
          } else {
            toastDispatch("error", message);
          }
        
      })();
    }
  }, [login]);
  return (
    <WatchLaterContext.Provider value={{ watchLaterState, watchLaterDispatch }}>
      {children}
    </WatchLaterContext.Provider>
  );
}

export function useWatchLater(params) {
  return useContext(WatchLaterContext);
}
