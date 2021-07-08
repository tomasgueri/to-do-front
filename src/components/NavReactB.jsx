import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavReactB() {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <div className="container">
        <Navbar.Brand to="/" as={NavLink}>ToDo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link to="/" as={NavLink}>Folders</Nav.Link>
          <Nav.Link to="/Login" as={NavLink}>Login</Nav.Link>
          <Nav.Link to="/Register" as={NavLink}>Register</Nav.Link>
        </Nav>
        </div>
      </Navbar>
    </>
  );
}
