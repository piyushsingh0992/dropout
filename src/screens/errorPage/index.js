import React from "react";
import "./style.css";
import error from "../../utils/images/icons/error.png";
const ErrorPage = () => {
  return (
    <div className="errorPage">
      <img src={error} />
    </div>
  );
};

export default ErrorPage;
