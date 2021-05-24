import React from "react";
import "./navBar.css";
import logo from "../../utils/images/brand/dropout.svg";
import {useTheme} from "../../contexts/themeContext/themeContext.js";
const Navbar = ({trigger}) => {

    const {theme}=useTheme();
  return (
    <div className="navbar" style={{background:theme.highLightBackground}}>
      <img src={logo} className="navbarBrandlogo" />
      <img
        src={theme.menu}
        className="navbarMenu"
        onClick={() => {
            trigger(value=>!value)
        }}
      />
    </div>
  );
};

export default Navbar;
