import { createContext, useContext, useEffect, useReducer } from "react";
import { apiCall } from "../../apiCall/apiCall";
import { useAuth } from "../authContext";
import { useToast } from "../toastContext";
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

  let { login } = useAuth();
  const { toastDispatch } = useToast();

  useEffect(() => {
    let { loginStatus, userKey } = login;
    if (loginStatus) {
      (async function () {
        
          let { success, data, message } = await apiCall(
            "GET",
            `likedVideos/${userKey}`
          );

          if (success === true) {
            likedVideoStateDispatch({
              payload: "FIRST_LOAD",
              videos: data.videos,
            });
          } else {
            toastDispatch("error", message);
          }
        
      })();
    }
  }, [login]);

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
