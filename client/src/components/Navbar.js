import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  let ulClass = "navlinks";
  if (dropDown) {
    ulClass = "navlinks show";
  } else {
    ulClass = "navlinks hide";
  }

  const changeDropDown = (e) => {
    setDropDown((prev) => !prev);
  };
  return (
    <nav>
      <div className="navbar-wrapper container">
        <div className="logo-wrapper">
          <a href="/" className="link">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <ul className={ulClass}>
          <li className="link">
            <a href="#about-me">About Me</a>
          </li>
          <li className="link">
            <a href="#skills">Skills</a>
          </li>
          <li className="link">
            <a href="#projects">Projects</a>
          </li>
          <li className="link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {dropDown ? (
          <i
            className="fas fa-times"
            onClick={changeDropDown}
          ></i>
        ) : (
          <i
            className="fas fa-bars"
            onClick={changeDropDown}
          ></i>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
