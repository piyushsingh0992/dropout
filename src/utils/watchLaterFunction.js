
import { apiCall } from "../apiCall/apiCall";

export async function addWatchLater(
  videoId,
  watchLaterDispatch,
  toastDispatch,
  addedVideoSetter,
  userKey
) {
  addedVideoSetter(true);
  
    let { status, data, success, message } = await apiCall(
      "POST",
      `watchlater/${videoId}`,
      {
        userKey,
      }
    );

    if (success === true) {
      watchLaterDispatch({
        payload: "ADD_TO_WATCH_LATER",
        video: data.video,
      });
      toastDispatch("success", "Added to Watch Later");
    } else {
      addedVideoSetter(false);
      toastDispatch("error", message);
    }
  
}

export async function removeWatchLater(
  videoId,
  watchLaterDispatch,
  toastDispatch,
  addedVideoSetter,
  userKey
) {
  addedVideoSetter(false);


    let {  data, success, message } = await apiCall(
      "DELETE",
      `watchlater/${videoId}`,
      {
        userKey,
      }
    );

    if (success === true) {
      watchLaterDispatch({
        payload: "REMOVE_FROM_WATCH_LATER",
        video: data.video,
      });
      toastDispatch("success", "Removed from Watch Later");
    } else {
      addedVideoSetter(true);
      toastDispatch("error", message);
    }
  
}
