import React from "react";
import "./style.css";
import Loader from "../miniloader";
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
      
      {/* <Loader/> */}
    </button>
  );
}

export default Button;
