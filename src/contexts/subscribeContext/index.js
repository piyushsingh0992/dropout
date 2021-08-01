import React, { useEffect, useReducer, createContext, useContext } from "react";
import { subscribeManager } from "./reducer";
import { apiCall } from "../../apiCall/apiCall";
import { useAuth } from "../authContext";
import { useToast } from "../toastContext";

const SubscribeContext = createContext();

export function SubscribeProvider({ children }) {
  const [subscribeState, subscribeDispatch] = useReducer(subscribeManager, []);
  let { login } = useAuth();
  const { toastDispatch } = useToast();

  useEffect(() => {
    let { loginStatus, userKey } = login;
    if (loginStatus) {
      (async function () {
        let { success, data, message } = await apiCall(
          "GET",
          `subscribe/${userKey}`
        );

        if (success === true) {
          subscribeDispatch({
            type: "FIRST_LOAD",
            payload: {
              subscribedMentors: data.mentor.subscriptions,
            },
          });
        } else {
          toastDispatch("error", message);
        }
      })();
    }
  }, [login]);

  return (
    <SubscribeContext.Provider value={{ subscribeState, subscribeDispatch }}>
      {children}
    </SubscribeContext.Provider>
  );
}

export function useSubscribe() {
  return useContext(SubscribeContext);
}
