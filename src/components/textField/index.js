import React from "react";
import "./style.css";
import { useTheme } from "../../contexts/themeContext";
const TextField = ({ label, type, value, onChangeFunction, name }) => {
  const { theme } = useTheme();

  return (
    <span className="textField">
      <input
        className="empty"
        type={type ? type : "text"}
        value={value}
        onChange={onChangeFunction}
        required
        style={{
          backgroundColor: theme.primaryBackground,
          color: theme.boldText,
        }}
        name={name}
      />
      <label>{label}</label>
    </span>
  );
};

export default TextField;
