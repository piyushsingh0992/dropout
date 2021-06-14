import React, {
  useEffect,
  useReducer,
  createContext,
  useContext,
  useState,
} from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [login, loginSetter] = useState(false);

  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("loginStatus"));
    login && login.loginStatus && loginSetter(true);
  }, []);

  async function loginCheck(userId, password, errorHandler) {
    try {

      let { data } = await axios.post(
        "https://dropout.piyushsingh6.repl.co/auth",
        {
          userId,
          password,
        }
      );

      if (data.status === 200) {
        if (data.login) {
          loginSetter(data.login);
          errorHandler(false);
          localStorage.setItem(
            "loginStatus",
            JSON.stringify({ loginStatus: true })
          );
        } else {
          errorHandler(true);
        }
      }
    } catch (error) {
      console.error(error);
      errorHandler(true);
    }
  }

  return (
    <AuthContext.Provider value={{ login, loginCheck, loginSetter }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => {
  return useContext(AuthContext);
};
