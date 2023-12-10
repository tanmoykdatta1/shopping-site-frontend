import React from "react";
import "../styles/Global.css";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
        <p>
            <Link to="/">Quick Shopping</Link>
        </p>
        <ul className="navItems">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Shop">Shop </Link>
          </li>
          <li>
            <Link to="/profile">Profile </Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;