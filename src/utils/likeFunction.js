
import { apiCall } from "../apiCall/apiCall";

export async function addLikedVideo(
  videoId,
  likedVideoStateDispatch,
  toastDispatch,
  likedVideoSetter,
  userKey
) {
  likedVideoSetter(true);
  
  try {
    let { success, data, message } = await apiCall(
      "POST",
      `likedVideos/${videoId}`,
      { userKey }
    );
    
    if (success === true) {
      
      likedVideoStateDispatch({
        payload: "ADD_LIKED_VIDEO",
        video: data.video,
      });
      toastDispatch("success", "Liked the Video");
    } else {
      
      toastDispatch("error", message);
      likedVideoSetter(false);
    }
  } catch (error) {
    console.error("error ->", error);
    toastDispatch("error", "error occured can't like video");
    likedVideoSetter(false);
  }
}

export async function deleteLikedVideo(
  videoId,
  likedVideoStateDispatch,
  toastDispatch,
  likedVideoSetter,
  userKey
) {
  likedVideoSetter(false);
  try {
    let { success, data, message } = await apiCall(
      "DELETE",
      `likedVideos/${videoId}`,
      {
        userKey,
      }
    );

    if (success === true) {
      likedVideoStateDispatch({
        payload: "REMOVE_LIKED_VIDEO",
        video: data.video,
      });
      toastDispatch("success", "Unliked the Video");
    } else {
      likedVideoSetter(true);
      toastDispatch("error", message);
    }
  } catch (error) {
    console.error("error");
    likedVideoSetter(true);
    toastDispatch("error", "error occured can't Unlike video");
  }
}
