import React, { useEffect } from "react";
import "./loginPage.css";
import close from "../../utils/images/icons/close.svg";
import Signin from "../../components/signin/Signin.js";
import Signup from "../../components/signup/Signup.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useAuth } from "../../contexts/authContext/authContext.js";
import { useLocation, useNavigate } from "react-router-dom";
const LoginPage = () => {
  const { theme } = useTheme();
  const { login } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (login) {
      navigate(state && state.from ? state.from : "/");
    }
  }, [login]);

  return (
    <div
      className="loginPage"
      style={{ backgroundColor: theme.primaryBackground }}
    >
      {/* <Signup /> */}
      <Signin />
      <img src={close} className="login-close" />
    </div>
  );
};

export default LoginPage;
