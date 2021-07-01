import React, { useEffect, useState } from "react";
import "./loginPage.css";
import Signin from "../../components/signin/Signin.js";
import Signup from "../../components/signup/Signup.js";
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

  return (
    <div
      className="loginPage"
      style={{ backgroundColor: theme.primaryBackground }}
    >
      {user ? (
        <Signin userSetter={userSetter} />
      ) : (
        <Signup userSetter={userSetter} />
      )}
    </div>
  );
};

export default LoginPage;
