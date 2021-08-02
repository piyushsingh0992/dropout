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
