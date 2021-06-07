import React, { useState } from "react";
import "./textField.css";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";

const TextField = ({
  label,
  type,
  value,
  changeFunction,
  errorMessage,
  errorHandler,
}) => {
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
      {errorHandler && <p className="textFieldError">{errorMessage}</p>}
    </span>
  );
};

export default TextField;
