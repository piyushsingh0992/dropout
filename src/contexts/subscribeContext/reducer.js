export function subscribeManager(state, action) {
  const { payload, type } = action;

  const { mentorId, subscribedMentors } = payload || {};
  switch (type) {
    case "FIRST_LOAD":
      return subscribedMentors;
    case "SUBSCRIBE":
      return [...state, mentorId];
    case "UNSUBSCRIBE":
      return state.filter((item) => item != mentorId);
    case "LOGOUT":
      return [];
    default:
      return state;
  }
}
