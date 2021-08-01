import { light, dark } from "./data.js";

export function themeHandler(state, action) {
  const { payload } = action;

  localStorage.setItem("theme", `${payload ? "dark" : "light"}`);

  return payload ? dark : light;
}
