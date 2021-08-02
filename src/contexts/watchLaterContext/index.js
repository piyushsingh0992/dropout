import { createContext, useContext, useReducer, useEffect } from "react";
import { watchLaterManger } from "./reducer";
import { apiCall } from "../../apiCall";
import { useAuth } from "../authContext";
import { useToast } from "../toastContext";
const WatchLaterContext = createContext();

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
          watchLaterDispatch({
            type: "FIRST_LOAD",
            payload: { videos: data.videos },
          });
        } else {
          toastDispatch({type:"error", message});
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
