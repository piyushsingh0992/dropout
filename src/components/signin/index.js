import React, { useEffect, useState } from "react";
import "./style.css";

import brandLogo from "../../assets/brand/brandLogo.png";
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
  const [loader, setLoader] = useState("");

  const signInService = useSignIn(setLoader);
  useEffect(() => {
    return () => {
      signInDetailsSetter({
        password: "",
        userId: "",
      });
    };
  }, [login]);

  const handleChange = (event) => {
    const name = event.target.name;
    signInDetailsSetter((state) => {
      return {
        ...state,
        [name]: event.target.value,
      };
    });
  };

  return (
    <div className="signin" style={{ backgroundColor: theme.cardBackground }}>
      <img src={brandLogo} />
      <TextField
        label={language.auth.email}
        value={signInDetails.userId}
        onChangeFunction={handleChange}
        name="userId"
      />
      <TextField
        label={language.auth.password}
        value={signInDetails.password}
        onChangeFunction={handleChange}
        type="password"
        name="password"
      />
      <div className="signin-btn-container">
        <Button
          text={language.auth.signin}
          clickFunction={() => {
            setLoader("USER");
            signInService(signInDetails);
          }}
          loading={loader === "USER"}
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
        <br />

        <Button
          text="Sign in as guest MENTOR"
          clickFunction={() => {
            setLoader("MENTOR");
            signInService({
              password: "tanay@2020",
              userId: "tanay@neog.com",
            });
          }}
          loading={loader === "MENTOR"}
        />
        <br />

        <Button
          text="Sign in as guest STUDENT"
          clickFunction={() => {
            setLoader("STUDENT");
            signInService({
              password: "test123@test123.com",
              userId: "test123@test123.com",
            });
          }}
          loading={loader === "STUDENT"}
        />
      </div>
    </div>
  );
};

export default Signin;
