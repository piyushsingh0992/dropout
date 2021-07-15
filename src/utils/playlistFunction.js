
import { apiCall } from "../apiCall/apiCall";
export async function createPlaylist(
  newPlaylistName,
  playlistDispatch,
  newPlaylistNameSetter,
  toastDispatch,
  userKey
) {
  try {
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
  } catch (error) {
    console.error(error);
    toastDispatch("error", "error! Cannot create a new playlist");
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
  try {
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
  } catch (error) {
    console.error(error);
    toastDispatch("error", "error! Cannot add video to playlist");
  }
}

export async function deleteVideoFromPlaylist(
  videoId,
  playlistId,
  playlistDispatch,
  toastDispatch,
  userKey
) {
  try {
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
  } catch (error) {
    console.error({ error });
    toastDispatch("error", "error! Cannot delete the video from Playlist");
  }
}

export async function deletePlaylist(
  playlistId,
  playlistDispatch,
  toastDispatch,
  userKey
) {
  try {
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
  } catch (error) {
    console.error({ error });
    toastDispatch("error", "error! Cannot delete the Playlist");
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
    try {
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
    } catch (error) {
      console.error({ error });
      toastDispatch("error", "error! Cannot rename the Playlist");
    }
  })();
}
