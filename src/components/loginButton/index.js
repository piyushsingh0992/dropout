import React from "react";
import "./style.css";
import setting from "../../assets/icons/settings.svg";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

import useLogout from "../../customHooks/logout";

export default function LoginButton() {
  
  const {
    login: { loginStatus },
  } = useAuth();
  const logoutHandler = useLogout();

  return loginStatus ? (
    <div className="sidenav-bottom" onClick={logoutHandler}>
      <img src={setting} className="sidenav-grey-icon" />
      <p>Logout</p>
    </div>
  ) : (
    <NavLink to="/login">
      <div className="sidenav-bottom">
        <img src={setting} className="sidenav-grey-icon" />
        <p>Login</p>
      </div>
    </NavLink>
  );
}
