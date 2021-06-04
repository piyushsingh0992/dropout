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

export function languageHandler(state, action) {
  const { payload } = action;
  switch (payload) {
    case "English":
      return English;
    case "Hindi":
      return Hindi;
    case "Gujarati":
      return Gujarati;
    case "Bangla":
      return Bangla;
    case "Marathi":
      return Marathi;
    case "Spanish":
      return Spanish;
    case "French":
      return French;
    case "Italian":
      return Italian;
    default:
      return state;
  }
}
