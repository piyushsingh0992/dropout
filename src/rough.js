//index.js

import { createContext, useContext, useEffect, useReducer } from "react";
import { themeHandler } from "./reducer.js";
import { light, dark } from "./data.js";

const ThemeContext = createContext();


export function ThemeProvider({ children }) {
  useEffect(() => {
    let previousTheme = localStorage.getItem("theme");
    if (previousTheme === "dark") {
      themeDispatch({ payload: true });
    } else if (previousTheme === "light") {
      themeDispatch({ payload: false });
    }
  });

  const [theme, themeDispatch] = useReducer(themeHandler, dark);

  return (
    <ThemeContext.Provider value={{ theme, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

//reducer.js

import { light, dark } from "./data.js";

export function themeHandler(state, action) {
  const { payload } = action;

  
  localStorage.setItem("theme", `${payload ? "dark" : "light"}`);

  return payload ? dark : light;
}


// test.js

import { themeHandler } from "./reducer.js";
import { light, dark } from "./data.js";

test("Change to dark theme", () => {
  const initialState = light;
  const action = { payload: true };
  let result = themeHandler(initialState, action);

  
  const expectedState = dark;

  expect(localStorage.setItem).toHaveBeenLastCalledWith("theme", "dark");
  expect(result).toEqual(expectedState);
});

test("Change to light theme", () => {
  const initialState = dark;
  const action = { payload: false };
  let result = themeHandler(initialState, action);

  const expectedState = light;

  expect(localStorage.setItem).toHaveBeenLastCalledWith("theme", "light");
  expect(result).toEqual(expectedState);
});
