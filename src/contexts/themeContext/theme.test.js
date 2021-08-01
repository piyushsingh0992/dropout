import { themeHandler } from "./reducer.js";
import { light, dark } from "./data.js";

test("Change to dark theme", () => {
  const initialState = light;
  const action = { payload: true };
  let result = themeHandler(initialState, action);

  const expectedState = dark;

  expect(localStorage.setItem).toHaveBeenLastCalledWith(
    "theme",
    `${action.payload}`
  );
  expect(result).toEqual(expectedState);
});

test("Change to light theme", () => {
  const initialState = dark;
  const action = { payload: false };
  let result = themeHandler(initialState, action);

  const expectedState = light;

  expect(localStorage.setItem).toHaveBeenLastCalledWith(
    "theme",
    `${action.payload}`
  );
  expect(result).toEqual(expectedState);
});
