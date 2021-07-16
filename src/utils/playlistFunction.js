
import { apiCall } from "../apiCall/apiCall";
export async function createPlaylist(
  newPlaylistName,
  playlistDispatch,
  newPlaylistNameSetter,
  toastDispatch,
  userKey
) {

    let { data, success, message } = await apiCall("POST", `playlist/create`, {
      userKey,
      playlistName: newPlaylistName,
    });

    if (success === true) {
      playlistDispatch({
        payload: `CREATE_PLAYLIST`,
        newPlaylist: data.newPlaylist,
      });
      newPlaylistNameSetter("");
      toastDispatch("success", "playlist Created");
    } else {
      toastDispatch("error", message);
    }
  
}

export async function addVideoToPlaylist(
  videoId,
  playlistIdArray,
  playlistDispatch,
  modalTriggerSetter,
  toastDispatch,
  userKey
) {

    let { data, success, message } = await apiCall("POST", `playlist`, {
      playlistArray: playlistIdArray,
      videoId: videoId,
      userKey,
    });

    if (success === true) {
      playlistDispatch({ payload: `ADD_VIDEO`, playlist: data.playlist });
      modalTriggerSetter(false);
      toastDispatch("success", "Video Added to playlist");
    } else {
      toastDispatch("error", message);
    }
  
}

export async function deleteVideoFromPlaylist(
  videoId,
  playlistId,
  playlistDispatch,
  toastDispatch,
  userKey
) {

    let { data, success, message } = await apiCall(
      "DELETE",
      `playlist/${videoId}`,
      {
        playlistId,
        userKey,
      }
    );

    if (success === true) {
      playlistDispatch({ payload: "DELETE_VIDEO", playlist: data.playlist });
      toastDispatch("success", "Video deleted");
    } else {
      toastDispatch("error", message);
    }
  
}

export async function deletePlaylist(
  playlistId,
  playlistDispatch,
  toastDispatch,
  userKey
) {

    let { data, success, message } = await apiCall("DELETE", `playlist`, {
      playlistId,
      userKey,
    });

    if (success === true) {
      playlistDispatch({
        payload: "DELETE_PLAYLIST",
        playlist: data.playlist,
      });
      toastDispatch("success", "Playlist deleted");
    } else {
      toastDispatch("error", message);
    }
  
}

export async function playlistNameChanger(
  playlistId,
  newName,
  playlistDispatch,
  newNameSetter,
  toastDispatch,
  userKey
) {
  (async function () {
    
      let { data, success, message } = await apiCall(
        "POST",
        `playlist/${playlistId}/${newName}`,
        {
          userKey,
        }
      );

      if (success === true) {
        newNameSetter("");
        playlistDispatch({
          payload: "RENAME_PLAYLIST",
          playlist: data.playlist,
        });
        toastDispatch("success", " Playlist is renamed");
      } else {
        toastDispatch("error", message);
      }
    
  })();
}
