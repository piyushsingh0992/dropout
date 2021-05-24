import { light, dark } from "./data.js";

export function themeHandler(state, action) {
  const { payload } = action;

  switch (payload) {
    case true:
      localStorage.setItem("theme", "dark");
      return dark;

    case false:
      localStorage.setItem("theme", "light");
      return light;
    default:
      return state;
  }
}
