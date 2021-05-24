import React from "react";
import "./signup.css";
import dropout from "../../utils/images/brand/dropout.svg";
import TextField from "../textField/TextField.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import Button from "../button/Button.js";
const Signup = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <div
      className="signup"
      style={{ backgroundColor: theme.cardBackground }}
    >
      <img src={dropout} />
      <TextField label={language.auth.name} />
      <TextField label={language.auth.email} />
      <TextField label={language.auth.password} />
      <div className="signup-btn-container">
      <Button text={language.auth.signup}/>
        {/* <button className="btn btn-primary">{language.auth.signup}</button> */}
        <p style={{ color: theme.boldText }}>
          {language.auth.msg2}{" "}
          <span style={{ color: theme.hightLightText, fontWeight: "bold" }}>
            {language.auth.signin}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
