import React, { useEffect, useState } from "react";
import "./style.css";
import dropout from "../../assets/brand/dropout.svg";
import TextField from "../textField";
import Button from "../button";
import { useTheme } from "../../contexts/themeContext";
import { useLanguage } from "../../contexts/languageContext";
import { useAuth } from "../../contexts/authContext";

import { useSignUp } from "../../customHooks/signUp";
const SignUp = ({
  userSetter,
  signUpDetails,
  signUpDetailsSetter,
  signInDetailsSetter,
}) => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const { login } = useAuth();
  const [loader, setLoader] = useState(false);

  const signUpService = useSignUp(signInDetailsSetter, userSetter, setLoader);
  useEffect(() => {
    return () => {
      signUpDetailsSetter({
        userName: "",
        password: "",
        userId: "",
      });
    };
  }, [login]);

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
          loading={loader}
          clickFunction={() => {
            signUpService(signUpDetails);
          }}
        />
        <p style={{ color: theme.boldText }}>
          {language.auth.msg1}
          <span
            style={{
              color: theme.hightLightText,
            }}
            onClick={() => {
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
