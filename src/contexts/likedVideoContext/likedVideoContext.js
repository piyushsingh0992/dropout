import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const LikedVideoContext = createContext();

function likedVideoManager(state, action) {
  const { payload, video, videos } = action;
  switch (payload) {
    case "FIRST_LOAD":
      return videos;

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

  useEffect(() => {
    (async function () {
      try {
        let { data } = await axios.get("/likedVideos");

        likedVideoStateDispatch({ payload: "FIRST_LOAD", videos: data.videos });
       
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

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
