import React, { useReducer, createContext, useContext} from "react";
import { historyManager } from "./reducer";

const HistoryContext = createContext();

export function HistoryProvider({ children }) {
  const [history, historyDispatch] = useReducer(historyManager, {
    status: "idle",
    videos: [],
  });


  return (
    <HistoryContext.Provider value={{ history, historyDispatch }}>
      {children}
    </HistoryContext.Provider>
  );
}
export const useHistory = () => {
  return useContext(HistoryContext);
};
