import React from "react";
import "./style.css";
import { useTheme } from "../../contexts/themeContext";
const TextField = ({ label, type, value, onChangeFunction }) => {
  const { theme } = useTheme();

  return (
    <span className="textField">
      <input
        className="empty"
        type={type ? type : "text"}
        value={value}
        onChange={(e) => {
          onChangeFunction(e.target.value);
        }}
        required
        style={{
          backgroundColor: theme.primaryBackground,
          color: theme.boldText,
        }}
      />
      <label>{label}</label>
    </span>
  );
};

export default TextField;
