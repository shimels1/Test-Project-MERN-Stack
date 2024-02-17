import React from "react";
import "./Toolbar.css";
import { NavLink } from "react-router-dom";

const toolbar = () => {
  return (
    <header className="Toolbar">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="home"
          >
            Song
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="stat"
          >
            Statistics
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default toolbar;
