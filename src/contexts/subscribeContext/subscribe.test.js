import { subscribeManager } from "./reducer";

test("populating the Subscribed mentor array on first load", () => {
  const initialState = [];
  const action = {
    type: "FIRST_LOAD",
    payload: {
      subscribedMentors: [
        "60f05b27404b6e05e24d3a94",
        "60f05b27404b6e05e24d3a96",
      ],
    },
  };
  const expectedState = [
    "60f05b27404b6e05e24d3a94",
    "60f05b27404b6e05e24d3a96",
  ];

  let result = subscribeManager(initialState, action);

  expect(result).toEqual(expectedState);
});

test("Unsubscribing to a mentor ", () => {
  const initialState = ["60f05b27404b6e05e24d3a94", "60f05b27404b6e05e24d3a96"];
  const action = {
    type: "UNSUBSCRIBE",
    payload: {
      mentorId: "60f05b27404b6e05e24d3a96",
    },
  };
  const expectedState = ["60f05b27404b6e05e24d3a94"];

  let result = subscribeManager(initialState, action);

  expect(result).toEqual(expectedState);
});

test("Subscribing to a mentor ", () => {
  const initialState = ["60f05b27404b6e05e24d3a94"];
  const action = {
    type: "SUBSCRIBE",
    payload: {
      mentorId: "60f05b27404b6e05e24d3a96",
    },
  };
  const expectedState = [
    "60f05b27404b6e05e24d3a94",
    "60f05b27404b6e05e24d3a96",
  ];

  let result = subscribeManager(initialState, action);

  expect(result).toEqual(expectedState);
});

test("clearing the Subscribed mentor Array on logout", () => {
  const initialState = ["60f05b27404b6e05e24d3a94", "60f05b27404b6e05e24d3a96"];
  const action = {
    type: "LOGOUT",
  };
  const expectedState = [];

  let result = subscribeManager(initialState, action);

  expect(result).toEqual(expectedState);
});
