import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-info">
        <Container>
          <Navbar.Brand href="#home">Authentication</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav text-decoration-none">
            <Nav className="mx-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="login">Login</Nav.Link>
              <Nav.Link href="registration">Registration</Nav.Link>
              <Nav.Link href="/product">Product</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
      <Link to="/product">Product</Link> */}
    </div>
  );
};

export default Header;
