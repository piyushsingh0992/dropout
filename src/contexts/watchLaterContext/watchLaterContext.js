import { createContext, useContext, useReducer } from "react";

const WatchLaterContext = createContext();

function watchLaterManger(state, action) {
  const { payload, video } = action;

  switch (payload) {
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
  return <WatchLaterContext.Provider value={{watchLaterState, watchLaterDispatch}}>{children}</WatchLaterContext.Provider>;
}

export function useWatchLater(params) {
  return useContext(WatchLaterContext);
}
