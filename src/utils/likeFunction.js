import axios from "axios";

export async function addLikedVideo(
  videoId,
  likedVideoStateDispatch,
  toastDispatch,
  likedVideoSetter,
  userKey
) {
  likedVideoSetter(true);
  try {
    let { status, data } = await axios.post(
      `https://dropout.piyushsingh6.repl.co/likedVideos/${videoId}`,
      { userKey }
    );
    if (status === 200) {
      likedVideoStateDispatch({
        payload: "ADD_LIKED_VIDEO",
        video: data.video,
      });
      toastDispatch("success", "Liked the Video");
    } else {
      toastDispatch("error", "error occured can't like video");
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
    let { status, data } = await axios.delete(
      `https://dropout.piyushsingh6.repl.co/likedVideos/${videoId}`,
      {
        data: {
          userKey,
        },
      }
    );

    if (status === 200) {
      likedVideoStateDispatch({
        payload: "REMOVE_LIKED_VIDEO",
        video: data.video,
      });
      toastDispatch("success", "UnLiked the Video");
    } else {
      likedVideoSetter(true);
      toastDispatch("error", "error occured can't unlike video");
    }
  } catch (error) {
    console.error("error");
    likedVideoSetter(true);
    toastDispatch("error", "error occured can't like video");
  }
}
