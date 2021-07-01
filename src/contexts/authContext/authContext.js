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

  const { payload } = action;
  const {
    type,

    loginStatus,
    mentor,
    userKey,
  } = payload;
  debugger;
  switch (type) {
    case "LOGIN":
      return {
        loginStatus,
        mentor,
        userKey,
      };

    case "LOGOUT":
      return { loginStatus: false, mentor: false, userKey: null };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [login, loginDispatch] = useReducer(loginHandler, {
    loginStatus: false,
    mentor: false,
    userKey: null,
  });

  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("loginStatus"));
    login &&
      login.loginStatus &&
      loginDispatch({ payload: { type: "LOGIN", ...login } });
  }, []);

  async function loginCheck(userId, password, errorHandler) {
    try {
      let { data, status } = await axios.post(
        "https://dropout.piyushsingh6.repl.co/auth",
        {
          userId,
          password,
        }
      );
      debugger;
      if (status === 200) {
        loginDispatch({
          payload: {
            type: "LOGIN",
            loginStatus: data.loginStatus,
            mentor: data.mentor,
            userKey: data.userKey,
          },
        });
        errorHandler(false);
        localStorage.setItem(
          "loginStatus",
          JSON.stringify({
            loginStatus: data.loginStatus,
            mentor: data.mentor,
            userKey: data.userKey,
          })
        );
      } else {
        errorHandler(true);
      }
    } catch (error) {
      console.error(error);
      errorHandler(true);
    }
  }

  return (
    <AuthContext.Provider value={{ login, loginCheck, loginDispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => {
  return useContext(AuthContext);
};
