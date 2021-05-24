import React from 'react';
import "./loginPage.css";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import Signin from "../../components/signin/Signin.js";
import Signup from "../../components/signup/Signup.js";
import close from "../../utils/images/icons/close.svg";
const LoginPage = () => {
    const {theme}=useTheme();


    return (
        <div className="loginPage" style={{backgroundColor:theme.primaryBackground}} >
            <Signup/>
            {/* <Signin/> */}
            <img src={close} className="login-close"/>
        </div>
    );
};

export default LoginPage;