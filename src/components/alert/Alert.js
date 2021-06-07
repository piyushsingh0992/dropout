import React, { useEffect, useState } from "react";
import "./alert.css";
import Error from "./images/error.svg";
import Success from "./images/success.svg";
import Warning from "./images/warning.svg";
import Info from "./images/info.svg";
function Alert({ type, message, trigger }) {
  const [show, showSetter] = useState(false);

  useEffect(() => {
    if (trigger) {
      showSetter(trigger);
      setTimeout(() => {
        showSetter(false);
      }, 3000);
    }
  }, [trigger]);

  function showIcon(type) {
    switch (type?.toLowerCase()) {
      case "error":
        return Error;
      case "success":
        return Success;
      case "warning":
        return Warning;
      case "info":
        return Info;
      default:
        return Info;
    }
  }

  return (
    <div
      className={`alert alert-${type ? type.toLowerCase() : "info"} ${
        show ? "alert-slide" : `alert-hide`
      }`}
    >
      <img className="alert-icon" src={showIcon(type)} alt={type} />
      <p>{message}</p>
    </div>
  );
}

export default Alert;