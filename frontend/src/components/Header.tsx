import React from "react";
import { LinkContainer } from "../../node_modules/@types/react-router-bootstrap";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

type Props = {};

const APP_NAME = process.env.REACT_APP_NAME;

const Header = (props: Props) => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">{APP_NAME}</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action1">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
