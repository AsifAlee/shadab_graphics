import React from "react";
import logo from "../assets/logo.png";
import consultIcon from "../assets/consult-icon.png";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <img src={logo} />
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="get-consultation">
        <img src={consultIcon} />
        <span>Get Free Consultation</span>
      </div>
    </header>
  );
};

export default Navbar;
