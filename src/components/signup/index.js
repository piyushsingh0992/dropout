import React, { useEffect, useState } from "react";
import "./style.css";

import brandLogo from "../../assets/brand/brandLogo.png";
import TextField from "../textField";
import Button from "../button";
import { useTheme } from "../../contexts/themeContext";

import { useAuth } from "../../contexts/authContext";
import { useSignUp } from "../../customHooks/signUp";
const SignUp = ({
  userSetter,
  signUpDetails,
  signUpDetailsSetter,
  signInDetailsSetter,
}) => {
  const { theme } = useTheme();


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

  const handleChange = (event) => {
    const name = event.target.name;
    signUpDetailsSetter((state) => {
      return {
        ...state,
        [name]: event.target.value,
      };
    });
  };
  return (
    <div className="signUp" style={{ backgroundColor: theme.cardBackground }}>
      <img src={brandLogo} />
      <TextField
        label="UserName"
        value={signUpDetails.userName}
        onChangeFunction={handleChange}
        name="userName"
      />

      <TextField
        label="Email"
        value={signUpDetails.userId}
        onChangeFunction={handleChange}
        name="userId"
      />
      <TextField
        label="Password"
        value={signUpDetails.password}
        onChangeFunction={handleChange}
        name="password"
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
          Already a Member ?
          <span
            style={{
              color: theme.hightLightText,
            }}
            onClick={() => {
              userSetter((value) => !value);
            }}
          >
Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
