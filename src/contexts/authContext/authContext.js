import React, {
  useEffect,
  useReducer,
  createContext,
  useContext,
  useState,
} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function loginHandler(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      setupAuthHeaderForServiceCalls(payload.token);
      return payload;

    case "LOGOUT":
      localStorage.removeItem("loginStatus");
      setupAuthHeaderForServiceCalls(null);
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
function setupAuthHeaderForServiceCalls(token) {
  
  if (token) {
    return (axios.defaults.headers.common["auth"] = token);
  }
  delete axios.defaults.headers.common["auth"];
}

  function setupAuthExceptionHandler(loginDispatch, navigate) {
    const UNAUTHORIZED = 401;
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error?.response?.status === UNAUTHORIZED) {
          console.log("here");
          loginDispatch({ type: "LOGOUT" });
          navigate("login");
        }
        return Promise.reject(error);
      }
    );
  }

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
    setupAuthHeaderForServiceCalls(response.token);
    setupAuthExceptionHandler(loginDispatch, navigate)
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
