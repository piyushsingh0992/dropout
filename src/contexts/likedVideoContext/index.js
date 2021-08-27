import { createContext, useContext, useEffect, useReducer } from "react";
import { apiCall } from "../../apiCall";
import { useAuth } from "../authContext";
import { useToast } from "../toastContext";
import { likedVideoManager } from "./reducer";
const LikedVideoContext = createContext();

export function LikedVideoProvider({ children }) {
  const [likedVideoState, likedVideoStateDispatch] = useReducer(
    likedVideoManager,
    null
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
            type: "FIRST_LOAD",
            payload: { videos: data.videos },
          });
        } else {
          toastDispatch({ type: "error", message });
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
