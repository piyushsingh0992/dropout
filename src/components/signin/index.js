import React, { useState } from "react";
import "./style.css";
import dropout from "../../assets/brand/dropout.svg";
import TextField from "../textField/index.js";
import Button from "../button";
import { useTheme } from "../../contexts/themeContext/index.js";
import { useLanguage } from "../../contexts/languageContext/index.js";
import { useAuth } from "../../contexts/authContext/index.js";
import { useToast } from "../../contexts/toastContext/index.js";
import { signInService } from "./common.js";
const Signin = ({ userSetter, signInDetails, signInDetailsSetter }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { toastDispatch } = useToast();
  const { login, loginDispatch } = useAuth();

  function userIdHanlder(newValue) {
    signInDetailsSetter((value) => {
      return { ...value, userId: newValue };
    });
  }

  function passwordHandler(newPassword) {
    signInDetailsSetter((value) => {
      return { ...value, password: newPassword };
    });
  }

  return (
    <div className="signin" style={{ backgroundColor: theme.cardBackground }}>
      <img src={dropout} />
      <TextField
        label={language.auth.email}
        value={signInDetails.userId}
        onChangeFunction={userIdHanlder}
      />
      <TextField
        label={language.auth.password}
        value={signInDetails.password}
        onChangeFunction={passwordHandler}
        type="password"
      />
      <div className="signin-btn-container">
        <Button
          text={language.auth.signin}
          clickFunction={() => {
            signInService(signInDetails, loginDispatch, toastDispatch);
          }}
        />
        <p style={{ color: theme.boldText }}>
          {language.auth.msg1}
          <span
            style={{
              color: theme.hightLightText,
            }}
            onClick={() => {
              signInDetailsSetter({
                password: "",
                userId: "",
              });
              userSetter((value) => !value);
            }}
          >
            {language.auth.signup}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
