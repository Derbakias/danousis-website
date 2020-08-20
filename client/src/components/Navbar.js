import React, { useState } from "react";
import logo from "../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

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

  let offsetValue = 75;
  if (window.innerWidth <= 600) {
    offsetValue = 250;
  }
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
            <AnchorLink
              offset={offsetValue}
              href="#about-me"
            >
              About Me
            </AnchorLink>
          </li>
          <li className="link">
            <AnchorLink offset={offsetValue} href="#skills">
              Skills
            </AnchorLink>
          </li>
          <li className="link">
            <AnchorLink
              offset={offsetValue}
              href="#projects"
            >
              Projects
            </AnchorLink>
          </li>
          <li className="link">
            <AnchorLink
              offset={offsetValue}
              href="#contact"
            >
              Contact
            </AnchorLink>
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
