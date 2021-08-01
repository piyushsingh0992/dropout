import { light, dark } from "./data.js";

export function themeHandler(state, action) {
  debugger;
  const { payload } = action;

  localStorage.setItem("theme", `${payload}`);

  return payload ? dark : light;
}
