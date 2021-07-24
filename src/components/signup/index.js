import React, { useState } from "react";
import "./signup.css";
import dropout from "../../utils/images/brand/dropout.svg";
import TextField from "../textField/index.js";
import Button from "../button";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useAuth } from "../../contexts/authContext/authContext.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";
import { signUpService } from "./common.js";
const SignUp = ({ userSetter, signUpDetails, signUpDetailsSetter ,signInDetailsSetter}) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { toastDispatch } = useToast();
  const { login, loginDispatch } = useAuth();

  function userIdHanlder(newValue) {
    signUpDetailsSetter((value) => {
      return { ...value, userId: newValue };
    });
  }

  function passwordHandler(newPassword) {
    signUpDetailsSetter((value) => {
      return { ...value, password: newPassword };
    });
  }

  function userNameHandler(newUserName) {
    signUpDetailsSetter((value) => {
      return { ...value, userName: newUserName };
    });
  }
  return (
    <div className="signUp" style={{ backgroundColor: theme.cardBackground }}>
      <img src={dropout} />
      <TextField
        label="UserName"
        value={signUpDetails.userName}
        onChangeFunction={userNameHandler}
      />

      <TextField
        label={language.auth.email}
        value={signUpDetails.userId}
        onChangeFunction={userIdHanlder}
      />
      <TextField
        label={language.auth.password}
        value={signUpDetails.password}
        onChangeFunction={passwordHandler}
        type="password"
      />

      <div className="signUp-btn-container">
        <Button
          text="Sign Up"
          clickFunction={() => {
            signUpService(
              signUpDetails,
              toastDispatch,
              signUpDetailsSetter,
              signInDetailsSetter,
              userSetter
            );
          }}
        />
        <p style={{ color: theme.boldText }}>
          {language.auth.msg1}
          <span
            style={{
              color: theme.hightLightText,
            }}
            onClick={() => {
              signUpDetailsSetter({
                userName: "",
                password: "",
                userId: "",
              });
              userSetter((value) => !value);
            }}
          >
            {language.auth.signin}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
