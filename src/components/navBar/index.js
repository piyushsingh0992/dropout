import React from "react";
import "./style.css";

import brandLogo from "../../assets/brand/brandLogo.png";
import { useTheme } from "../../contexts/themeContext";
const Navbar = ({ trigger }) => {
  const { theme } = useTheme();
  return (
    <div className="navbar" style={{ background: theme.highLightBackground }}>
      <img src={brandLogo} className="navbarBrandlogo" />
      <img
        src={theme.menu}
        className="navbarMenu"
        onClick={() => {
          trigger((value) => !value);
        }}
      />
    </div>
  );
};

export default Navbar;
