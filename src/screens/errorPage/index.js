import React from "react";
import "./style.css";
import error from "../../assets/icons/error.png";
const ErrorPage = () => {
  return (
    <div className="errorPage">
      <img src={error} />
    </div>
  );
};

export default ErrorPage;
