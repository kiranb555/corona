import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <h2 className="heading">COVID-19</h2>
      <div className="space"></div>
      <nav>
        <ul className="list">
          <li>
            <NavLink to="/home" exact activeClassName="active">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/precaution" exact activeClassName="active">
              PRECAUTION
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" exact activeClassName="active">
              FAQ
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
