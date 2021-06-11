import { createContext, useContext, useReducer ,useEffect} from "react";
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
        if (item.videoId === video.videoId) {
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
    (async function () {
      try {
        let { data } = await axios.get("/watchlater");
        watchLaterDispatch({ payload: "FIRST_LOAD", videos: data.videos });
      } catch (error) {
        console.error(error);
      }
    })();
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
