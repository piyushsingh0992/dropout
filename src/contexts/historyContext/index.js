import React, { useReducer, createContext, useContext,useEffect } from "react";
import { historyManager } from "./reducer";
import { useAuth } from "../authContext";
import { apiCall } from "../../apiCall";
const HistoryContext = createContext();

export function HistoryProvider({ children }) {
  const [history, historyDispatch] = useReducer(historyManager, {
    status: "idle",
    videos: [],
  });
  let { login } = useAuth();

  useEffect(() => {
    let { loginStatus, userKey } = login;

    if (loginStatus) {
      (async function () {
        let { success, data, message } = await apiCall(
          "GET",
          `history/${userKey}`
        );
          debugger;
        if (success === true) {
          historyDispatch({
            type: `FIRST_LOAD`,
            payload: { video: data },
          });
        }
      })();
    }
  }, []);

  return (
    <HistoryContext.Provider value={{ history, historyDispatch }}>
      {children}
    </HistoryContext.Provider>
  );
}
export const useHistory = () => {
  return useContext(HistoryContext);
};
