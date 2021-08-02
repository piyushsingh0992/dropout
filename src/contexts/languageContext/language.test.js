import {
  English,
  Hindi,
  Gujarati,
  Bangla,
  Marathi,
  Spanish,
  French,
  Italian,
} from "./data.js";
import { languageHandler } from "./reducer.js";

test("changing language to French", () => {
  const initialState = English;
  const action = { type: "French" };
  let result = languageHandler(initialState, action);

  const expectedState = French;

  expect(result).toEqual(expectedState);
});

test("changing language to Italian", () => {
  const initialState = English;
  const action = { type: "Italian" };
  let result = languageHandler(initialState, action);

  const expectedState = Italian;
  expect(result).toEqual(expectedState);
});

test("changing language to Bangla", () => {
  const initialState = English;
  const action = { type: "Bangla" };
  let result = languageHandler(initialState, action);

  const expectedState = Bangla;

  expect(result).toEqual(expectedState);
});

test("changing language to Marathi", () => {
  const initialState = English;
  const action = { type: "Marathi" };
  let result = languageHandler(initialState, action);

  const expectedState = Marathi;

  expect(result).toEqual(expectedState);
});

test("changing language to Spanish", () => {
  const initialState = English;
  const action = { type: "Spanish" };
  let result = languageHandler(initialState, action);

  const expectedState = Spanish;

  expect(result).toEqual(expectedState);
});

test("changing language to Hindi", () => {
  const initialState = English;
  const action = { type: "Hindi" };
  let result = languageHandler(initialState, action);

  const expectedState = Hindi;

  expect(result).toEqual(expectedState);
});

test("changing language to Gujarati", () => {
  const initialState = English;
  const action = { type: "Gujarati" };
  let result = languageHandler(initialState, action);

  const expectedState = Gujarati;

  expect(result).toEqual(expectedState);
});

test("changing language to English", () => {
  const initialState = Hindi;
  const action = { type: "English" };
  let result = languageHandler(initialState, action);

  const expectedState = English;

  expect(result).toEqual(expectedState);
});
