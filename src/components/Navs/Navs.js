import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navs.css";
import logo from "./../../assets/logo.jpeg";

const Navs = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} title="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#home">Explore Foods</Nav.Link>
            <Nav.Link href="#home">Reviews</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link id="lastnav">234576870</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
