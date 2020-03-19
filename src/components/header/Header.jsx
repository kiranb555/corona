import React, { useState } from "react";
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
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/history" exact activeClassName="active">
              History
            </NavLink>
          </li>
          <li>
            <NavLink to="/safety" exact activeClassName="active">
              Precaution
            </NavLink>
          </li>
          <li>
            <NavLink to="/update" exact activeClassName="active">
              Updates
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
