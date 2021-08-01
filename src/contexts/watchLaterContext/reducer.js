export function watchLaterManger(state, action) {
  const { payload, type } = action;
  const { video, videos } = payload || {};

  switch (type) {
    case "FIRST_LOAD":
      return videos;
    case "ADD_TO_WATCH_LATER":
      return [video, ...state];

    case "REMOVE_FROM_WATCH_LATER":
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
