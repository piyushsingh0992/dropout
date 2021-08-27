import React, { useEffect, useState } from "react";
import "./style.css";

import brandLogo from "../../assets/brand/brandLogo.png";
import TextField from "../textField";
import Button from "../button";
import { useTheme } from "../../contexts/themeContext";
import { useAuth } from "../../contexts/authContext";
import { useSignIn } from "../../customHooks/signIn";
const Signin = ({ userSetter, signInDetails, signInDetailsSetter }) => {
  const { theme } = useTheme();

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
        label="Email"
        value={signInDetails.userId}
        onChangeFunction={handleChange}
        name="userId"
      />
      <TextField
        label="Password"
        value={signInDetails.password}
        onChangeFunction={handleChange}
        type="password"
        name="password"
      />
      <div className="signin-btn-container">
        <Button
          text="Sign In"
          clickFunction={() => {
            setLoader("USER");
            signInService(signInDetails);
          }}
          loading={loader === "USER"}
        />
        <p style={{ color: theme.boldText }}>
          not a member yet ?
          <span
            style={{
              color: theme.hightLightText,
            }}
            onClick={() => {
              userSetter((value) => !value);
            }}
          >
            signup
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

        <span className="extra-info" style={{ color: theme.boldText }}>
          You get stats/upload Video feature only on mentor login
        </span>
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
