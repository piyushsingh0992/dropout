import { apiCall } from "../apiCall";
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
      type: `CREATE_PLAYLIST`,
      payload: {
        newPlaylist: data.newPlaylist,
      },
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
    playlistDispatch({
      type: `ADD_VIDEO`,
      payload: { playlist: data.playlist },
    });
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
    playlistDispatch({
      type: "DELETE_VIDEO",
      payload: { playlist: data.playlist },
    });
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
      type: "DELETE_PLAYLIST",
      payload: {
        playlist: data.playlist,
      },
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
        type: "RENAME_PLAYLIST",
        payload: {
          playlist: data.playlist,
        },
      });
      toastDispatch("success", " Playlist is renamed");
    } else {
      toastDispatch("error", message);
    }
  })();
}
