import { setupAuthHeaderForServiceCalls } from "../../utils/common";

export function loginHandler(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      setupAuthHeaderForServiceCalls(payload.token);
      return payload;

    case "LOGOUT":
      localStorage.removeItem("loginStatus");
      setupAuthHeaderForServiceCalls(null);
      return {
        loginStatus: false,
        mentor: false,
        userKey: null,
        userName: null,
        token: null,
      };
    default:
      return state;
  }
}
