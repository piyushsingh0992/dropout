import axios from "axios";

export async function addLikedVideo(
  videoId,
  likedVideoStateDispatch,
  toastDispatch,
  likedVideoSetter
) {
  likedVideoSetter(true);
  try {
    let { data } = await axios.post("/likedVideos", {
      videoId,
    });

    if (data.status === 200) {
      likedVideoStateDispatch({
        payload: "ADD_LIKED_VIDEO",
        video: data.video,
      });
      toastDispatch({
        trigger: true,
        type: "success",
        message: "Liked the Video",
      });
    } else {
      toastDispatch({
        trigger: true,
        type: "error",
        message: "error occured can't like video",
      });
      likedVideoSetter(false);
    }
  } catch (error) {
    console.error("error");
    toastDispatch({
      trigger: true,
      type: "error",
      message: "error occured can't like video",
    });
    likedVideoSetter(false);
  }
}

export async function deleteLikedVideo(
  videoId,
  likedVideoStateDispatch,
  toastDispatch,
  likedVideoSetter
) {
  likedVideoSetter(false);
  try {
    let { data } = await axios.delete("/likedVideos", {
      params: { videoId },
    });
    if (data.status === 200) {
      likedVideoStateDispatch({
        payload: "REMOVE_LIKED_VIDEO",
        video: data.video,
      });
      toastDispatch({
        trigger: true,
        type: "success",
        message: "UnLiked the Video",
      });
    } else {
      likedVideoSetter(true);
      toastDispatch({
        trigger: true,
        type: "error",
        message: "error occured can't unlike video",
      });
    }
  } catch (error) {
    console.error("error");
    likedVideoSetter(true);
    toastDispatch({
      trigger: true,
      type: "error",
      message: "error occured can't like video",
    });
  }
}
