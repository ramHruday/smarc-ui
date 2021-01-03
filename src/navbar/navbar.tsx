import React from "react";
import { Navbar as BSNavbar, Nav, NavDropdown } from "react-bootstrap";
import "./navbar.scss";

interface NavbarProps {
  brandName?: string;
}

const Navbar: React.FC<NavbarProps> = ({ brandName }) => {
  return (
    <BSNavbar bg="light" expand="lg" sticky="top">
      <BSNavbar.Brand className="font-weight-bold" href="#home">{brandName}</BSNavbar.Brand>
      <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BSNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Players</Nav.Link>
          <NavDropdown title="About us" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">People</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Something else
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="#home">Settings</Nav.Link>
        </Nav>
      </BSNavbar.Collapse>
    </BSNavbar>
  );
};

export default Navbar;
