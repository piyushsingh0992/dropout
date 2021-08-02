import { apiCall } from "../apiCall";

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
    toastDispatch({type:"success",message: "Liked the Video"});
  } else {
    toastDispatch({type:"error", message});
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
    toastDispatch({type:"success",message: "Unliked the Video"});
  } else {
    likedVideoSetter(true);
    toastDispatch({type:"error", message});
  }
}
