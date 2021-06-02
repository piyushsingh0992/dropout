import { createContext, useContext, useEffect, useReducer } from "react";

const LikedVideoContext = createContext();

export function LikedVideoProvider({ children }) {
  return (
    <LikedVideoContext.Provider value={{ check: "hey" }}>
      {children}
    </LikedVideoContext.Provider>
  );
}

export const useLikedVideos = () => {
  return useContext(LikedVideoContext);
};
