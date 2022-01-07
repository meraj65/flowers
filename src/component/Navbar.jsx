import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar-main navbar-expand-lg bg-dark">
        <div className="content-nav">
          
          <NavLink to="/" className="m-2">
            Home
          </NavLink>
          <NavLink to="/searchonline" className="m-2">
            Serach More
          </NavLink>
          <NavLink to="/contact" className="m-2">
            AboutUs
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
