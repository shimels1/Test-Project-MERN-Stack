import React from "react";
import "./Toolbar.css";

const toolbar = () => {
  return (
    <header className="Toolbar">
      <ul>
        <li>
          <a href="/home">CRUD</a>
        </li>
        <li>
          <a href="/stat">Stastics</a>
        </li>
      </ul>
    </header>
  );
};

export default toolbar;
