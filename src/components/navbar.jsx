import React from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";

//Modules externes

//Ressources
import logo from "../assets/logo.jpg";

//Components

//Styles
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <NavLink to={"/"}>
            <img src={logo} alt="XYZ Logo" />
          </NavLink>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to={"/about"}>À propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
