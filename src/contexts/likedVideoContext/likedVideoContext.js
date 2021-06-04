import { createContext, useContext, useEffect, useReducer } from "react";

const LikedVideoContext = createContext();

function likedVideoManager(state, action) {
  const { payload, video } = action;
  switch (payload) {
    case "ADD_LIKED_VIDEO":
      return [video, ...state];

    case "REMOVE_LIKED_VIDEO":
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

export function LikedVideoProvider({ children }) {
  const [likedVideoState, likedVideoStateDispatch] = useReducer(
    likedVideoManager,
    []
  );

  return (
    <LikedVideoContext.Provider
      value={{ likedVideoState, likedVideoStateDispatch }}
    >
      {children}
    </LikedVideoContext.Provider>
  );
}

export const useLikedVideos = () => {
  return useContext(LikedVideoContext);
};
