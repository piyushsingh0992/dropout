import React, { useEffect, useState } from "react";
import "./style.css";
import dropout from "../../assets/brand/dropout.svg";
import TextField from "../textField";
import Button from "../button";
import { useTheme } from "../../contexts/themeContext";
import { useLanguage } from "../../contexts/languageContext";
import { useAuth } from "../../contexts/authContext";
import { useSignIn } from "../../customHooks/signIn";
const Signin = ({ userSetter, signInDetails, signInDetailsSetter }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { login } = useAuth();
  const [loader, setLoader] = useState(false);
  const signInService = useSignIn(setLoader);
  useEffect(() => {
    return () => {
      signInDetailsSetter({
        password: "",
        userId: "",
      });
    };
  }, [login]);

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
            signInService(signInDetails);
            setLoader(true);
          }}
          loading={loader}
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
            {language.auth.signup}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
