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

export async function deleteVideoFromPlaylist(
  videoId,
  playlistName,
  playlistDispatch,
  toastDispatch
) {
  try {
    let { data } = await axios.delete(`/playlist/${playlistName}/${videoId}`);

    if (data.status === 200) {
      playlistDispatch({ payload: "DELETE_VIDEO", playlist: data.playlist });
      toastDispatch({
        trigger: true,
        type: "success",
        message: "Video deleted",
      });
    } else {
      toastDispatch({
        trigger: true,
        type: "error",
        message: "error! Cannot delete the video",
      });
    }
  } catch (error) {
    console.log({ error });
    toastDispatch({
      trigger: true,
      type: "error",
      message: "error! Cannot delete the video",
    });
  }
}

export async function deletePlaylist(
  playlistName,
  playlistDispatch,
  toastDispatch
) {
  try {
    let { data } = await axios.delete(`/playlist/${playlistName}`);

    if (data.status === 200) {
      playlistDispatch({
        payload: "DELETE_PLAYLIST",
        playlist: data.playlist,
      });
      toastDispatch({
        trigger: true,
        type: "success",
        message: "Playlist deleted",
      });
    } else {
      toastDispatch({
        trigger: true,
        type: "error",
        message: "error! Cannot delete the Playlist",
      });
    }
  } catch (error) {
    console.error({ error });
    toastDispatch({
      trigger: true,
      type: "error",
      message: "error! Cannot delete the Playlist",
    });
  }
}

export async function playlistNameChanger(
  name,
  newName,
  playlistDispatch,
  newNameSetter,
  toastDispatch
) {
  (async function () {
    try {
      let { data } = await axios.post(`/playlist/${name}/${newName}`);
      console.log({ data });
      if (data.status === 200) {
        newNameSetter("");
        playlistDispatch({
          payload: "RENAME_PLAYLIST",
          playlist: data.playlist,
        });
        toastDispatch({
          trigger: true,
          type: "success",
          message: " Playlist is renamed",
        });
      } else {
        toastDispatch({
          trigger: true,
          type: "error",
          message: "error! Cannot rename the Playlist",
        });
      }
    } catch (error) {
      console.log({ error });
      toastDispatch({
        trigger: true,
        type: "error",
        message: "error! Cannot rename the Playlist",
      });
    }
  })();
}
