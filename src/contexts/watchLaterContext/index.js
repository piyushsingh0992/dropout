import { createContext, useContext, useReducer, useEffect } from "react";

import { apiCall } from "../../apiCall/apiCall";
import { useAuth } from "../authContext";
import { useToast } from "../toastContext";
const WatchLaterContext = createContext();

function watchLaterManger(state, action) {
  const { payload, type } = action;
  const {  video, videos }=payload;

  switch (type) {
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
    case "LOGOUT":
      return [];

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
          watchLaterDispatch({ type: "FIRST_LOAD", payload:{videos: data.videos} });
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
