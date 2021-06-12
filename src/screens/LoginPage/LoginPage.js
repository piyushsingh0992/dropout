import React, { useEffect } from "react";
import "./loginPage.css";
import Signin from "../../components/signin/Signin.js";
import Signup from "../../components/signup/Signup.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useAuth } from "../../contexts/authContext/authContext.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";
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
    </div>
  );
};

export default LoginPage;
