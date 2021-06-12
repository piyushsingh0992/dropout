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

  async function loginCheck(userName, password, errorHandler) {
    try {
      let { data } = await axios.post(
        "https://dropout.piyushsingh6.repl.co/auth",
        {
          userName,
          password,
        }
      );

      if (data.status === 200) {
        loginSetter(data.login);
        errorHandler(!data.login);
      }
    } catch (error) {
      console.log(error);
      errorHandler(true);
    }
  }

  return (
    <AuthContext.Provider value={{ login, loginCheck }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => {
  return useContext(AuthContext);
};
