import React, {
  useEffect,
  useReducer,
  createContext,
  useContext,
  useState,
} from "react";
import axios from "axios";

const AuthContext = createContext();

function loginHandler(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return payload;

    case "LOGOUT":
      localStorage.removeItem("loginStatus");
      return {
        loginStatus: false,
        mentor: false,
        userKey: null,
        userName: null,
        token: null,
      };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [login, loginDispatch] = useReducer(loginHandler, {
    loginStatus: false,
    mentor: false,
    userKey: null,
    userName: null,
    token: null,
  });

  useEffect(() => {
    let response = JSON.parse(localStorage.getItem("loginStatus")) || {
      loginStatus: false,
      mentor: false,
      userKey: null,
      userName: null,
      token: null,
    };

    if (response.loginStatus) {
      loginDispatch({ type: "LOGIN", payload: response });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ login, loginDispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => {
  return useContext(AuthContext);
};
