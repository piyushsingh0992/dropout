import React, { useEffect, useReducer, createContext, useContext } from "react";
import axios from "axios";
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
  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("loginStatus"));
    if (login) {
      (async function () {
        let { userKey } = login;
        try {
          let { status, data } = await axios.get(
            `https://dropout.piyushsingh6.repl.co/subscribe/${userKey}`
          );

          if (status === 200) {
            subscribeDispatch({
              payload: "FIRST_LOAD",
              subscribedMentors: data.mentor.subscriptions,
            });
          }
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, []);

  return (
    <SubscribeContext.Provider value={{ subscribeState, subscribeDispatch }}>
      {children}
    </SubscribeContext.Provider>
  );
}

export function useSubscribe() {
  return useContext(SubscribeContext);
}
