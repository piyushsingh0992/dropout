import { createContext, useContext, useEffect, useReducer } from "react";
import { themeHandler } from "./reducer.js";
import { light, dark } from "./data.js";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  useEffect(() => {
    let previousTheme = JSON.parse(localStorage.getItem("theme"));

    previousTheme && themeDispatch({ payload: previousTheme });
  }, []);

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
