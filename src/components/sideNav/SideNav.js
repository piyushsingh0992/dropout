import React from "react";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useSideNavRoute } from "../../utils/common.js";
import "./sideNav.css";

import dropout from "../../utils/images/brand/dropout.svg";
import setting from "../../utils/images/icons/settings.svg";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { sideNavRouteArray } = useSideNavRoute();
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
            <NavLink end to={item.link} className="sidenav-route" activeClassName="current-route">
              
                <img src={item.icon} className="sidenav-grey-icon" />
                <img src={item.iconWhite} className="sidenav-white-icon" />
                <p>{item.routeName}</p>
              
            </NavLink>
          );
        })}
      </div>

      <div className="sidenav-bottom">
        <img src={setting} className="sidenav-grey-icon" />
        <p>Login</p>
      </div>
    </div>
  );
};

export default SideNav;
