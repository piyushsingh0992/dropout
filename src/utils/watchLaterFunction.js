import axios from "axios";

export async function addWatchLater(
  videoId,
  watchLaterDispatch,
  toastDispatch,
  addedVideoSetter
) {
  addedVideoSetter(true);
  try {
    let { data } = await axios.post(`/watchlater/${videoId}`);
    if (data.status === 200) {
      watchLaterDispatch({
        payload: "ADD_TO_WATCH_LATER",
        video: data.video,
      });
      toastDispatch({
        trigger: true,
        type: "success",
        message: "Added to Watch Later",
      });
    } else {
      addedVideoSetter(false);
      toastDispatch({
        trigger: true,
        type: "error",
        message: "error Occured Cann't add to Watch Later",
      });
    }
  } catch (error) {
    addedVideoSetter(false);
    console.error(error);
    toastDispatch({
      trigger: true,
      type: "error",
      message: "error Occured Cann't add to Watch Later",
    });
  }
}

export async function removeWatchLater(
  videoId,
  watchLaterDispatch,
  toastDispatch,
  addedVideoSetter
) {
  addedVideoSetter(false);
  try {
    let { data } = await axios.delete(`/watchlater/${videoId}`);
    if (data.status === 200) {
      watchLaterDispatch({
        payload: "REMOVE_FROM_WATCH_LATER",
        video: data.video,
      });
      toastDispatch({
        trigger: true,
        type: "success",
        message: "Removed from Watch Later",
      });
    } else {
      addedVideoSetter(true);
      toastDispatch({
        trigger: true,
        type: "error",
        message: "error Occured Cann't  remove from  Watch Later",
      });
    }
  } catch (error) {
    addedVideoSetter(true);
    console.error(error);
    toastDispatch({
      trigger: true,
      type: "error",
      message: "error Occured Cann't  remove from  Watch Later",
    });
  }
}
