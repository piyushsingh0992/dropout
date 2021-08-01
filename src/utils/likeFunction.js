import { apiCall } from "../apiCall/apiCall";

export async function addLikedVideo(
  videoId,
  likedVideoStateDispatch,
  toastDispatch,
  likedVideoSetter,
  userKey
) {
  likedVideoSetter(true);

  let { success, data, message } = await apiCall(
    "POST",
    `likedVideos/${videoId}`,
    { userKey }
  );

  if (success === true) {
    likedVideoStateDispatch({
      type: "ADD_LIKED_VIDEO",
      payload: { video: data.video },
    });
    toastDispatch("success", "Liked the Video");
  } else {
    toastDispatch("error", message);
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

  let { success, data, message } = await apiCall(
    "DELETE",
    `likedVideos/${videoId}`,
    {
      userKey,
    }
  );

  if (success === true) {
    likedVideoStateDispatch({
      type: "REMOVE_LIKED_VIDEO",
      payload: { video: data.video },
    });
    toastDispatch("success", "Unliked the Video");
  } else {
    likedVideoSetter(true);
    toastDispatch("error", message);
  }
}
