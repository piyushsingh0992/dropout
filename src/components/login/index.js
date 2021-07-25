import React from "react";
import "./style.css";
import setting from "../../assets/icons/settings.svg";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { useToast } from "../../contexts/toastContext";
import { useLanguage } from "../../contexts/languageContext";

const Login = () => {
  const { language } = useLanguage();
  const {
    login: { loginStatus },
    loginDispatch,
  } = useAuth();
  const { toastDispatch } = useToast();

  function logoutHandler() {
    toastDispatch("success", "Logged Out");
    loginDispatch({
      type: "LOGOUT",
    });
  }

  return loginStatus ? (
    <div className="sidenav-bottom" onClick={logoutHandler}>
      <img src={setting} className="sidenav-grey-icon" />
      <p>{language.logout}</p>
    </div>
  ) : (
    <NavLink to="/login">
      <div className="sidenav-bottom">
        <img src={setting} className="sidenav-grey-icon" />
        <p>{language.login}</p>
      </div>
    </NavLink>
  );
};

export default Login;
