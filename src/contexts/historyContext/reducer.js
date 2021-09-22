export const historyManager = (state, value) => {
  const { type, payload } = value;
  switch (type) {
    case "FIRST_LOAD":
      
      return { status: "fullfilled", videos: payload.videos };

    case "ADD_VIDEO":
      
      return {  ...state,videos: [payload.video, ...state.videos] };

    case "LOGOUT":
      return {
        status: "idle",
        videos: [],
      };
  }
};
