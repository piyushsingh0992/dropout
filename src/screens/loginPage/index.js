import React, { useEffect, useState } from "react";
import "./style.css";
import SignIn from "../../components/signin";
import SignUp from "../../components/signup";
import { useTheme } from "../../contexts/themeContext";
import { useAuth } from "../../contexts/authContext";
import { useLocation, useNavigate } from "react-router-dom";
const LoginPage = () => {
  const { theme } = useTheme();
  const {
    login: { loginStatus, mentor },
  } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [user, userSetter] = useState(true);

  useEffect(() => {
    if (loginStatus) {
      navigate(state && state.from ? state.from : mentor ? "/dashboard" : "/");
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
