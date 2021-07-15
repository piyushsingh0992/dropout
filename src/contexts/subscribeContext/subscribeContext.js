import React, { useEffect, useReducer, createContext, useContext } from "react";


import { apiCall } from "../../apiCall/apiCall";
import { useAuth } from "../authContext/authContext";
import { useToast } from "../toastContext/toastContext";

const SubscribeContext = createContext();

function subscribeManager(state, action) {
  const { payload, mentorId, subscribedMentors } = action;

  switch (payload) {
    case "FIRST_LOAD":
      return subscribedMentors;
    case "SUBSCRIBE":
      return [...state, mentorId];
    case "UNSUBSCRIBE":
      return state.filter((item) => item != mentorId);
    default:
      return state;
  }
}

export function SubscribeProvider({ children }) {
  const [subscribeState, subscribeDispatch] = useReducer(subscribeManager, []);
  let { login } = useAuth();
  const { toastDispatch } = useToast();

  useEffect(() => {
    let { loginStatus, userKey } = login;
    if (loginStatus) {
      (async function () {
        try {
          let { success, data, message } = await apiCall(
            "GET",
            `subscribe/${userKey}`
          );

          if (success === true) {
            subscribeDispatch({
              payload: "FIRST_LOAD",
              subscribedMentors: data.mentor.subscriptions,
            });
          } else {
            toastDispatch("error", message);
          }
        } catch (error) {
          console.error(error);
          toastDispatch("error", "Some Error Occured");
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
