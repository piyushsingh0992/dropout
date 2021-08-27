import { apiCall } from "../apiCall";
export async function createPlaylist({
  newPlaylistName,
  playlistDispatch,
  newPlaylistNameSetter,
  toastDispatch,
  userKey,playlistAddloaderSetter}
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
    toastDispatch({ type: "success", message: "playlist Created" });
  } else {
    toastDispatch({ type: "error", message });
  }
  playlistAddloaderSetter(false)
}

export async function addVideoToPlaylist({
  videoId,
  playlistIdArray,
  playlistDispatch,
  modalTriggerSetter,
  toastDispatch,
  userKey,
  setLoader,setIsChecked,playlistIdArraySetter,playlistState}
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
    toastDispatch({ type: "success", message: "Video Added to playlist" });
    setLoader(false);
  } else {
    toastDispatch({ type: "error", message });
    setLoader(false);
  }

  playlistIdArraySetter([]);
  setIsChecked(new Array(playlistState.length).fill(false));
}

export async function deleteVideoFromPlaylist(
  {videoId,
  playlistId,
  playlistDispatch,
  toastDispatch,
  userKey,currentDeletingVideoSetter}
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
    toastDispatch({ type: "success", message: "Video deleted" });
  } else {
    toastDispatch({ type: "error", message });
  }
  currentDeletingVideoSetter("")
}

export async function deletePlaylist(
  {playlistId,
  playlistDispatch,
  toastDispatch,
  userKey,playlistLoaderSetter}
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
    toastDispatch({ type: "success", message: "Playlist deleted" });
  } else {
    toastDispatch({ type: "error", message });
  }
  playlistLoaderSetter(false);
}

export async function playlistNameChanger(
  playlistId,
  newName,
  playlistDispatch,
  newNameSetter,
  toastDispatch,
  userKey,
  editSetter,
  setLoader
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
      toastDispatch({ type: "success", message: " Playlist is renamed" });
      editSetter((value) => !value);
      setLoader(false);
    } else {
      toastDispatch({ type: "error", message });
      editSetter((value) => !value);
      setLoader(false);
    }
  })();
}
