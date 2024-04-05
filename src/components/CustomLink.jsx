import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavLink = ({ to, children }) => {
  return (
    <Nav.Link as={Link} to={to}>
      {children}
    </Nav.Link>
  );
};

export default CustomNavLink;
