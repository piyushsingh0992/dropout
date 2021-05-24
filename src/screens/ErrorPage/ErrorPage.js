import React from "react";
import "./errorPage.css";
import error from "../../utils/images/icons/error.png";
const ErrorPage = () => {
  return (
    <div className="errorPage">
      <img src={error} />
    </div>
  );
};

export default ErrorPage;
