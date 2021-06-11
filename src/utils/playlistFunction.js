import axios from "axios";

export async function createPlaylist(
  newPlaylistName,
  playlistDispatch,
  newPlaylistNameSetter,
  toastDispatch
) {
  try {
    let { data } = await axios.post("/playlist", {
      playlistName: newPlaylistName,
    });
    if (data.status === 200) {
      playlistDispatch({
        payload: `CREATE_PLAYLIST`,
        newPlaylist: data.newPlaylist,
      });
      newPlaylistNameSetter("");
      toastDispatch({
        trigger: true,
        type: "success",
        message: "playlist Created",
      });
    } else {
      toastDispatch({
        trigger: true,
        type: "error",
        message: "error! Cannot create a new playlist",
      });
    }
  } catch (error) {
    console.log(error);
    toastDispatch({
      trigger: true,
      type: "error",
      message: "error! Cannot create a new playlist",
    });
  }
}

export async function addVideoToPlaylist(
  videoId,
  selectedPlaylists,
  playlistDispatch,
  modalTriggerSetter,
  toastDispatch
) {
  try {
    let { data } = await axios.post(`/playlist/${videoId}`, {
      playlistarray: selectedPlaylists,
    });
    if (data.status === 200) {
      playlistDispatch({ payload: `ADD_VIDEO`, playlist: data.playlist });
      modalTriggerSetter(false);
      toastDispatch({
        trigger: true,
        type: "success",
        message: "Video Added to playlist",
      });
    } else {
      toastDispatch({
        trigger: true,
        type: "error",
        message: "error! Cannot add video to playlist",
      });
    }
  } catch (error) {
    console.log({ error });
    toastDispatch({
      trigger: true,
      type: "error",
      message: "error! Cannot add video to playlist",
    });
  }
}
