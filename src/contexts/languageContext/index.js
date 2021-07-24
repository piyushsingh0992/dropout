import { createContext, useContext, useReducer } from "react";
import { languageHandler } from "./reducer.js";
import { English } from "./data.js";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, languageDispatch] = useReducer(languageHandler, English);

  return (
    <LanguageContext.Provider value={{ language, languageDispatch }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
