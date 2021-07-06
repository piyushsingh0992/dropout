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

export function LikedVideoProvider({ children }) {
  const [likedVideoState, likedVideoStateDispatch] = useReducer(
    likedVideoManager,
    []
  );

  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("loginStatus"));

    if (login) {
      (async function () {
        let { userKey } = login;

        try {
          let { status, data } = await axios.get(
            `https://dropout.piyushsingh6.repl.co/likedVideos/${userKey}`
          );

          if (status === 200) {
            likedVideoStateDispatch({
              payload: "FIRST_LOAD",
              videos: data.videos,
            });
          }
        } catch (error) {
          console.error(error);
        }
      })();
    }
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
