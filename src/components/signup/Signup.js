import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import dropout from "../../utils/images/brand/dropout.svg";
import TextField from "../textField/TextField.js";
import Button from "../button/Button.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";

const Signup = ({ userSetter }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [userName, userNameSetter] = useState("");
  const [userId, userIdSetter] = useState("");
  const [password, passwordSetter] = useState("");
  const { toastDispatch } = useToast();
  async function createAccount() {
    try {
      let { data } = await axios.post(
        "https://dropout.piyushsingh6.repl.co/auth/create",
        { userName, userId, password }
      );
      if (data.status === 200) {
        toastDispatch({
          trigger: true,
          type: "success",
          message: data.message,
        });
      } else {
        toastDispatch({ trigger: true, type: "error", message: data.message });
      }
    } catch (error) {
      console.error(error);
      toastDispatch({
        trigger: true,
        type: "error",
        message: "Error ! Cann't create Account",
      });
    }
  }
  return (
    <div className="signup" style={{ backgroundColor: theme.cardBackground }}>
      <img src={dropout} />
      <TextField
        label={language.auth.name}
        value={userName}
        valueSetter={userNameSetter}
      />
      <TextField
        label={language.auth.email}
        value={userId}
        valueSetter={userIdSetter}
      />
      <TextField
        label={language.auth.password}
        value={password}
        valueSetter={passwordSetter}
      />
      <div className="signup-btn-container">
        <Button text={language.auth.signup} clickFunction={createAccount} />
        <p style={{ color: theme.boldText }}>
          {language.auth.msg2}{" "}
          <span
            style={{
              color: theme.hightLightText,
              fontWeight: "bold",
              cursor: "pointer",
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

export default Signup;
