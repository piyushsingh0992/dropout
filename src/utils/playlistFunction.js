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
    }
  } catch (error) {
    console.log(error);
  }
}

export async function addVideoToPlaylist(videoId,selectedPlaylists,playlistDispatch,modalTriggerSetter) {
  try {
    let { data } = await axios.post(`/playlist/${videoId}`, {
      playlistarray: selectedPlaylists,
    });
    playlistDispatch({ payload: `ADD_VIDEO`, playlist: data.playlist });
    modalTriggerSetter(false);
  } catch (error) {
    console.log({ error });
  }
}
