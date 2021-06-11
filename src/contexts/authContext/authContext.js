import React, { useEffect, useReducer, createContext, useContext , useState} from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [login, loginSetter] = useState(true);

  function loginCheck(userName ,password){
    if(userName==="piyush" && password==="neog@1997"){
      loginSetter(true)
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
