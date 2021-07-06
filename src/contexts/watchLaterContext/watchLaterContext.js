import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

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

  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("loginStatus"));
    if (login) {
      (async function () {
        let { userKey } = login;
        try {


          let { status,data } = await axios.get(
            `https://dropout.piyushsingh6.repl.co/watchlater/${userKey}`
          );
            if(status===200){
              watchLaterDispatch({ payload: "FIRST_LOAD", videos: data.videos });
            }


        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, []);
  return (
    <WatchLaterContext.Provider value={{ watchLaterState, watchLaterDispatch }}>
      {children}
    </WatchLaterContext.Provider>
  );
}

export function useWatchLater(params) {
  return useContext(WatchLaterContext);
}
