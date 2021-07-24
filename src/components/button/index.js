import React from "react";
import "./style.css";
function Button({ text, type, clickFunction,size }) {
  function clickHandler() {
    clickFunction && clickFunction();
  }
  return (
    <button
      onClick={clickHandler}
      className={`btn btn-${type ? type : "primary"} ${size?size:'default'}`}
    >
      {text}
    </button>
  );
}

export default Button;
