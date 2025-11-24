import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-title">Sudoku</Link>

        <ul className="navbar-links">
          <li> <Link className={isActive("/")} to="/"> Home </Link> </li>
          <li> <Link className={isActive("/games")} to="/games"> Selection </Link> </li>
          <li> <Link className={isActive("/games/easy")} to="/games/easy"> Easy Game </Link> </li>
          <li> <Link className={isActive("/games/normal")} to="/games/normal"> Hard Game </Link> </li>
          <li> <Link className={isActive("/rules")} to="/rules"> Rules </Link> </li>
          <li> <Link className={isActive("/scores")} to="/scores"> High Scores </Link> </li>
          <li> <Link className={isActive("/login")} to="/login"> Login </Link> </li>
          <li> <Link className={isActive("/register")} to="/register"> Register </Link> </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
