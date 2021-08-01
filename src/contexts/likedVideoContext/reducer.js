export function likedVideoManager(state, action) {
  const { type, payload } = action;
  const { video, videos } = payload || {};

  switch (type) {
    case "FIRST_LOAD":
      return videos;

    case "ADD_LIKED_VIDEO":
      return [video, ...state];

    case "REMOVE_LIKED_VIDEO":
      return state.filter((item) => {
        if (item._id === video._id) {
          return false;
        } else {
          return true;
        }
      });
    case "LOGOUT":
      return [];
    default:
      return state;
  }
}
