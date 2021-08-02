import { useAuth } from "../contexts/authContext";
import { useToast } from "../contexts/toastContext";
import { useLikedVideos } from "../contexts/likedVideoContext";
import { usePlaylist } from "../contexts/playlistContext";
import { useSubscribe } from "../contexts/subscribeContext";
import { useWatchLater } from "../contexts/watchLaterContext";
const useLogout = () => {
  const { loginDispatch } = useAuth();
  const { toastDispatch } = useToast();

  const { likedVideoStateDispatch } = useLikedVideos();
  const { playlistDispatch } = usePlaylist();
  const { subscribeDispatch } = useSubscribe();
  const { watchLaterDispatch } = useWatchLater();

  const logoutFunction = () => {
    toastDispatch({ type: "success", message: "Logged Out" });
    loginDispatch({
      type: "LOGOUT",
    });
    likedVideoStateDispatch({ type: "LOGOUT" });
    playlistDispatch({ type: "LOGOUT" });
    subscribeDispatch({ type: "LOGOUT" });
    watchLaterDispatch({ type: "LOGOUT" });
  };
  return logoutFunction;
};

export default useLogout;
