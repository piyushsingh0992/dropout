import React,{useState} from "react";
import "./navigation.css";
import SideNav from "../sideNav/SideNav.js";
import NavBar from "../navBar/NavBar.js";
const Navigation = () => {
  const [side, sideSetter] = useState(false);
  return (
    <div className="navigation">
      <NavBar trigger={sideSetter} />
      <div
        className={`sideNavContainer${
          side ? " sideNav-show" : " sideNav-hide"
        } `}
        onClick={() => {
          sideSetter((value) => !value);
        }}
      >
        <SideNav />
      </div>
    </div>
  );
};

export default Navigation;
