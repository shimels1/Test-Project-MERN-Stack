import React from "react";
import "./Toolbar.css";

const toolbar = () => {
  return (
    <header className="Toolbar">
      <ul>
        <li>
          <a href="#">CRUD</a>
        </li>
        <li>
          <a href="#">Stastics</a>
        </li>
      </ul>
    </header>
  );
};

export default toolbar;
