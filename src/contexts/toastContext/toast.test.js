import { toastManager } from "./reducer";

test("reset the toast state to initial state", () => {
  const initialState = {
    trigger: true,
    type: "success",
    message: "success Message",
  };
  const action = { type: "RESET" };
  let result = toastManager(initialState, action);
  const expectedState = { trigger: false };

  expect(result).toEqual(expectedState);
});

test("activating toast ", () => {
  const initialState = {
    trigger: false,
  };
  const expectedState = {
    trigger: true,
    type: "success",
    message: "try message",
  };
  const action = { type: "success", message: "try message" };
  let result = toastManager(initialState, action);

  expect(result).toEqual(expectedState);
});
