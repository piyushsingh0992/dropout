import React, { useState } from "react";
import "./textField.css";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
const TextField = ({
  label,
  type,
  value,
  valueSetter,
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
        onChange={(e)=>{valueSetter(e.target.value)}}
        required
        style={{ backgroundColor: theme.primaryBackground }}
      />
      <label>{label}</label>
      {errorHandler && <p className="textFieldError">{errorMessage}</p>}
    </span>
  );
};

export default TextField;
