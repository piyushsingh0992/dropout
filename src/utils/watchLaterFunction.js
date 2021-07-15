
import { apiCall } from "../apiCall/apiCall";

export async function addWatchLater(
  videoId,
  watchLaterDispatch,
  toastDispatch,
  addedVideoSetter,
  userKey
) {
  addedVideoSetter(true);
  try {
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
  } catch (error) {
    addedVideoSetter(false);
    console.error(error);
    toastDispatch("error", "error Occured Cann't add to Watch Later");
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

  try {
    let { status, data, success, message } = await apiCall(
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
  } catch (error) {
    addedVideoSetter(true);
    console.error(error);
    toastDispatch("error", "error Occured Cann't  remove from  Watch Later");
  }
}
