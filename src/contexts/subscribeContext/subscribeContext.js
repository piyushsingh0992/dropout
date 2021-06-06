import React, { useEffect, useReducer, createContext, useContext } from "react";

const SubscribeContext = createContext();

function subscribeManager(state, action) {
  const { payload, mentorId } = action;
  switch (payload) {
    case "SUBSCRIBE":
      return [...state, mentorId];
    case "UNSUBSCRIBE":
      return state.filter(item=>item != mentorId);
    default:
      return state;
  }
}

export function SubscribeProvider({ children }) {
  const [subscribeState, subscribeDispatch] = useReducer(subscribeManager, []);

  return (
    <SubscribeContext.Provider value={{ subscribeState, subscribeDispatch }}>
      {children}
    </SubscribeContext.Provider>
  );
}

export function useSubscribe() {
  return useContext(SubscribeContext);
}
