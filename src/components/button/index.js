import React from "react";
import "./style.css";
import Loader from "../miniloader";
function Button({ text, type, clickFunction, size, loading }) {
  function clickHandler() {
    clickFunction && clickFunction();
  }

  return (
    <button
      onClick={clickHandler}
      className={`btn btn-${type ? type : "primary"} ${
        size ? size : "default"
      }`}
    >
      {loading ? <Loader /> : text}
    </button>
  );
}

export default Button;
