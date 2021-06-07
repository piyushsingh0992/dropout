import React, { useState } from "react";
import "./signin.css";
import dropout from "../../utils/images/brand/dropout.svg";
import TextField from "../textField/TextField.js";
import Button from "../button/Button.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useAuth } from "../../contexts/authContext/authContext.js";

const Signin = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { login, loginCheck } = useAuth();
  const [userName, userNameSetter] = useState("");
  const [password, passwordSetter] = useState("");
  const [error,errorHandler]=useState(false);



  function submitHandler(){
    loginCheck(userName, password);
    errorHandler(true);
  }

  return (
    <div className="signin" style={{ backgroundColor: theme.cardBackground }}>
      <img src={dropout} />
      <TextField
        label={language.auth.email}
        value={userName}
        changeFunction={(e) => {
          userNameSetter(e.target.value);
        }}
        errorMessage={"Username/Password is Wrong"}
        errorHandler={error}
      />
      <TextField
        label={language.auth.password}
        value={password}
        changeFunction={(e) => {
          passwordSetter(e.target.value);
        }}
        errorMessage={"Username/Password is Wrong"}
        errorHandler={error}
      />
      <div className="signin-btn-container">
        <Button
          text={language.auth.signin}
          clickFunction={submitHandler}
        />
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
