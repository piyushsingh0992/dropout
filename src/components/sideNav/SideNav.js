import React from "react";
import "./sideNav.css";
import { NavLink } from "react-router-dom";
import dropout from "../../utils/images/brand/dropout.svg";
import setting from "../../utils/images/icons/settings.svg";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useSideNavRoute } from "../../utils/common.js";
import { useAuth } from "../../contexts/authContext/authContext.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";
const SideNav = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { sideNavRouteArray } = useSideNavRoute();
  const { login, loginSetter } = useAuth();
  const { toastDispatch } = useToast();
  return (
    <div
      className="sidenav"
      style={{ backgroundColor: theme.highLightBackground }}
    >
      <div className="sidenav-top">
        <NavLink to="/">
          <img src={dropout} className="sidenav-brand-logo" />
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
      </div>
      {login ? (
        <div
          className="sidenav-bottom"
          onClick={() => {
            toastDispatch({
              trigger: true,
              type: "success",
              message: "Logged Out",
            });
            loginSetter(false);
          }}
        >
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
      )}
    </div>
  );
};

export default SideNav;
