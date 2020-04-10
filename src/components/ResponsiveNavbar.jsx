import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function ResponsiveNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar_container">
      <div className="logo_container">
        <div className="logo">
          <img src={require("../assets/images/logo.png")} alt="" />
          <FontAwesomeIcon
            onClick={() => {
              setOpen(!open);
            }}
            className="bars"
            icon={faBars}
            size="3x"
          />
        </div>
      </div>

      <nav className={open && "show"}>
        <ul className="nav_ul">
          <li className="nav_li">
            <a className="nav_a" href="#">
              Home
            </a>
          </li>
          <li className="nav_li">
            <a className="nav_a" href="#">
              Contact
            </a>
          </li>
          <li className="nav_li">
            <a className="nav_a" href="#">
              About
            </a>
          </li>
          <li className="nav_li">
            <a className="nav_a" href="#">
              Projects
            </a>
          </li>
          <li className="nav_li">
            <a className="nav_a" href="#">
              Profile
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ResponsiveNavbar;
