import React, { useState } from "react";
import MenuItems from "./MenuItems"; // Ensure correct import path
import "./navbar.css";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          react <i className="fab fa-react"></i>
        </h1>
        <div
          className={`menu-icon ${clicked ? "clicked" : ""}`}
          onClick={handleClick}
        >
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={`nav-menu ${clicked ? "active" : ""}`}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
