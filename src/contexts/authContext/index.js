import { setupAuthExceptionHandler } from "../../utils/common";
import { loginHandler } from "./reducer.js";
import React, { useEffect, useReducer, createContext, useContext } from "react";

import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [login, loginDispatch] = useReducer(loginHandler, {
    loginStatus: false,
    mentor: false,
    userKey: null,
    userName: null,
    token: null,
  });
  const navigate = useNavigate();

  useEffect(() => {
    let response = JSON.parse(localStorage.getItem("loginStatus")) || {
      loginStatus: false,
      mentor: false,
      userKey: null,
      userName: null,
      token: null,
    };

    setupAuthExceptionHandler(loginDispatch, navigate);
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
