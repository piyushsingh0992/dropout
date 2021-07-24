import React from "react";
import "./style.css";

const Avatar = ({ name, size }) => {
  return (
    <div className={`avatar avatar-${size ? size : "small"}`}>
      {name && <p>{name[0].toUpperCase()}</p>}
    </div>
  );
};

export default Avatar;
