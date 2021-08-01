export function playlistManager(state, action) {
  const { type, payload } = action;
  const {
    playlistId,
    playlistIdArray,
    video,
    playlist,
    newPlaylist,
    playlists,
  } = payload || {};
  switch (type) {
    case "LOADING_PLAYLIST":
      return playlists;
    case "CREATE_PLAYLIST":
      return [...state, newPlaylist];
    case "DELETE_PLAYLIST":
      return playlist;
    case "ADD_VIDEO":
      return playlist;
    case "DELETE_VIDEO":
      return playlist;
    case "RENAME_PLAYLIST":
      return playlist;
    case "LOGOUT":
      return [];
    default:
      return state;
  }
}
