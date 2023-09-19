import React from "react";
import { Link } from "react-router-dom";

import { Nav, Navbar, Container } from "react-bootstrap";

const NavbarFlow = () => {
  return (
    <>
      <Navbar className="navBg" bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Contacto">
              Contacto
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Happy Cake
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarFlow;
