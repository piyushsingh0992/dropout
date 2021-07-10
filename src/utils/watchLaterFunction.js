import axios from "axios";

export async function addWatchLater(
  videoId,
  watchLaterDispatch,
  toastDispatch,
  addedVideoSetter,
  userKey
) {
  addedVideoSetter(true);
  try {
    let { status, data } = await axios.post(
      `https://dropout.piyushsingh6.repl.co/watchlater/${videoId}`,
      {
        userKey,
      }
    );

    if (status === 200) {
      watchLaterDispatch({
        payload: "ADD_TO_WATCH_LATER",
        video: data.video,
      });
      toastDispatch("success", "Added to Watch Later");
    } else {
      addedVideoSetter(false);
      toastDispatch("error", "error Occured Cann't add to Watch Later");
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
    let { status, data } = await axios.delete(
      `https://dropout.piyushsingh6.repl.co/watchlater/${videoId}`,
      {
        data: {
          userKey,
        },
      }
    );

    if (status === 200) {
      watchLaterDispatch({
        payload: "REMOVE_FROM_WATCH_LATER",
        video: data.video,
      });
      toastDispatch("success", "Removed from Watch Later");
    } else {
      addedVideoSetter(true);
      toastDispatch("error", "error Occured Cann't  remove from  Watch Later");
    }
  } catch (error) {
    addedVideoSetter(true);
    console.error(error);
    toastDispatch("error", "error Occured Cann't  remove from  Watch Later");
  }
}
