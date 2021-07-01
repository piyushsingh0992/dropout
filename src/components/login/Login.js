import React from "react";
import "./login.css";
import setting from "../../utils/images/icons/settings.svg";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/authContext/authContext.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";
const Login = () => {
  const {
    login: { loginStatus },
    loginDispatch,
  } = useAuth();
  const { toastDispatch } = useToast();

  console.log("loginStatus ->", loginStatus);

  function logoutHandler() {
    toastDispatch({
      trigger: true,
      type: "success",
      message: "Logged Out",
    });
    loginDispatch({
      payload: { type: "LOGOUT" },
    });
    localStorage.removeItem("loginStatus");
  }

  return loginStatus ? (
    <div className="sidenav-bottom" onClick={logoutHandler}>
      <img src={setting} className="sidenav-grey-icon" />
      <p>Log out</p>
    </div>
  ) : (
    <NavLink to="/login">
      <div className="sidenav-bottom">
        <img src={setting} className="sidenav-grey-icon" />
        <p>Log in</p>
      </div>
    </NavLink>
  );
};

export default Login;
