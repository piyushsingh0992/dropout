import { apiCall } from "../apiCall";

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
      type: "ADD_TO_WATCH_LATER",
      payload: {
        video: data.video,
      },
    });
    toastDispatch({type:"success",message: "Added to Watch Later"});
  } else {
    addedVideoSetter(false);
    toastDispatch({type:"error", message});
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

  let { data, success, message } = await apiCall(
    "DELETE",
    `watchlater/${videoId}`,
    {
      userKey,
    }
  );

  if (success === true) {
    watchLaterDispatch({
      type: "REMOVE_FROM_WATCH_LATER",
      payload: {
        video: data.video,
      },
    });
    toastDispatch({type:"success",message: "Removed from Watch Later"});
  } else {
    addedVideoSetter(true);
    toastDispatch({type:"error", message});
  }
}
