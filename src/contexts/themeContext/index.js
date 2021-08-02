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
