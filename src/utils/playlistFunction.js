import axios from "axios";

export async function createPlaylist(
  newPlaylistName,
  playlistDispatch,
  newPlaylistNameSetter,
  toastDispatch,
  userKey
) {
  try {
    let { status, data } = await axios.post(
      `https://dropout.piyushsingh6.repl.co/playlist/create`,
      {
        userKey,
        playlistName: newPlaylistName,
      }
    );

    if (status === 200) {
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
    console.error(error);
    toastDispatch({
      trigger: true,
      type: "error",
      message: "error! Cannot create a new playlist",
    });
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
    let { status, data } = await axios.post(
      `https://dropout.piyushsingh6.repl.co/playlist`,
      {
        playlistArray: playlistIdArray,
        videoId: videoId,
        userKey,
      }
    );

    
    if (status === 200) {
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
    console.error({ error });
    toastDispatch({
      trigger: true,
      type: "error",
      message: "error! Cannot add video to playlist",
    });
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
    let { status, data } = await axios.delete(
      `https://dropout.piyushsingh6.repl.co/playlist/${videoId}`,
      {
        data: { playlistId, userKey },
      }
    );
    
    if (status === 200) {
      playlistDispatch({ payload: "DELETE_VIDEO", playlist: data.playlist });
      toastDispatch({
        trigger: true,
        type: "success",
        message: "Video deleted",
      });
    } else {
      delete toastDispatch({
        trigger: true,
        type: "error",
        message: "error! Cannot delete the video",
      });
    }
  } catch (error) {
    console.error({ error });
    toastDispatch({
      trigger: true,
      type: "error",
      message: "error! Cannot delete the video",
    });
  }
}

export async function deletePlaylist(
  playlistId,
  playlistDispatch,
  toastDispatch,
  userKey
) {
  
  try {
    let { status, data } = await axios.delete(
      `https://dropout.piyushsingh6.repl.co/playlist`,
      {
        data: {
          playlistId,
          userKey,
        },
      }
    );
    
    if (status === 200) {
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
  playlistId,
  newName,
  playlistDispatch,
  newNameSetter,
  toastDispatch,
  userKey
) {
  
  (async function () {
    try {
      let { status, data } = await axios.post(
        `https://dropout.piyushsingh6.repl.co/playlist/${playlistId}/${newName}`,
        {
          userKey,
        }
      );
      

      if (status === 200) {
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
      console.error({ error });
      toastDispatch({
        trigger: true,
        type: "error",
        message: "error! Cannot rename the Playlist",
      });
    }
  })();
}
