import React, { useState } from "react";
import "./textField.css";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";

const TextField = ({ label, type, value, changeFunction }) => {
  const { theme } = useTheme();


  return (
    <span className="textField">
      <input
        className="empty"
        type={type ? type : "text"}
        value={value}
        onChange={changeFunction}
        required
        style={{ backgroundColor: theme.primaryBackground }}
      />
      <label>{label}</label>
    </span>
  );
};

export default TextField;
