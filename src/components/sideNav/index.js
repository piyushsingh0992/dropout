import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

import brandLogo from "../../assets/brand/brandLogo.png";
import { useTheme } from "../../contexts/themeContext";

import { useSideNavRoute } from "../../utils/common.js";
import { useAuth } from "../../contexts/authContext";
import { useToast } from "../../contexts/toastContext";
import dashboard from "../../assets/icons/dashboard.png";
import dashboardWhite from "../../assets/icons/dashboardWhite.png";

import LoginButton from "../loginButton";
const SideNav = () => {
  const { theme } = useTheme();

  const { sideNavRouteArray } = useSideNavRoute();
  const {
    login: { loginStatus, mentor },
  } = useAuth();
  
  const { toastDispatch } = useToast();
  return (
    <div
      className="sidenav"
      style={{ backgroundColor: theme.highLightBackground }}
    >
      <div className="sidenav-top">
        <NavLink to="/" className="sidenav-brand-container">
          <img src={brandLogo} className="sidenav-brand-logo" />
        </NavLink>

        {sideNavRouteArray.map((item) => {
          return (
            <NavLink
              end
              to={item.link}
              className="sidenav-route"
              activeClassName="current-route"
            >
              <img src={item.icon} className="sidenav-grey-icon" />
              <img src={item.iconWhite} className="sidenav-white-icon" />
              <p>{item.routeName}</p>
            </NavLink>
          );
        })}

        {mentor && (
          <NavLink
            end
            to="/dashboard"
            className="sidenav-route"
            activeClassName="current-route"
          >
            <img src={dashboard} className="sidenav-grey-icon" />
            <img src={dashboardWhite} className="sidenav-white-icon" />
            <p>DashBoard</p>
          </NavLink>
        )}
      </div>
      <LoginButton />
    </div>
  );
};

export default SideNav;
