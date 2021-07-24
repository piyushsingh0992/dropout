import React, { useEffect, useState } from "react";
import "./style.css";
import SignIn from "../../components/signin/Signin.js";
import SignUp from "../../components/signup/Signup.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useAuth } from "../../contexts/authContext/authContext.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";
import { useLocation, useNavigate } from "react-router-dom";
const LoginPage = () => {
  const { theme } = useTheme();
  const {
    login: { loginStatus },
  } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [user, userSetter] = useState(true);

  useEffect(() => {
    if (loginStatus) {
      navigate(state && state.from ? state.from : "/");
    }
  }, [loginStatus]);

  const [signInDetails, signInDetailsSetter] = useState({
    password: "",
    userId: "",
  });

  const [signUpDetails, signUpDetailsSetter] = useState({
    userName: "",
    password: "",
    userId: "",
  });

  return (
    <div
      className="loginPage"
      style={{ backgroundColor: theme.primaryBackground }}
    >
      {user ? (
        <SignIn
          userSetter={userSetter}
          signInDetails={signInDetails}
          signInDetailsSetter={signInDetailsSetter}
        />
      ) : (
        <SignUp
          userSetter={userSetter}
          signUpDetails={signUpDetails}
          signUpDetailsSetter={signUpDetailsSetter}
          signInDetailsSetter={signInDetailsSetter}
        />
      )}
    </div>
  );
};

export default LoginPage;
