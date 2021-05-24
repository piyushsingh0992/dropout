import React from "react";
import "./signin.css";
import dropout from "../../utils/images/brand/dropout.svg";
import TextField from "../textField/TextField.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import Button from "../button/Button.js";
const Signin = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <div
      className="signin"
      style={{ backgroundColor: theme.cardBackground }}
    >
      <img src={dropout} />
      <TextField label={language.auth.email} />
      <TextField label={language.auth.password} />
      <div className="signin-btn-container">
        <Button text={language.auth.signin}/>
        {/* <button className="btn btn-primary">{}</button> */}
        <p style={{ color: theme.boldText }}>
          {language.auth.msg1}
          <span style={{ color: theme.hightLightText, fontWeight: "bold" }}>
            {language.auth.signup}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
