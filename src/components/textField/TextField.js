import React, { useState } from "react";
import "./textField.css";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";

const TextField = ({ label, type }) => {
  const { theme } = useTheme();
  const [value, valueSetter] = useState("");
  const [empty, emptySetter] = useState(true);
  function inputValueHandler(e) {
    valueSetter(e.target.value);
    if (e.target.value.length > 0) {
      emptySetter(false);
    } else {
      emptySetter(true);
    }
  }

  return (
    <span className="textField">
      <input
        className="empty"
        type={type ? type : "text"}
        value={value}
        onChange={(e) => {
          inputValueHandler(e);
        }}
        required

        style={{backgroundColor:theme.primaryBackground}}
      />
      <label >{label}</label>
    </span>
  );
};

export default TextField;
