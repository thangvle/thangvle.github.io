import React from "react";
import ReactDom from "react-dom";
import { Navbar, Nav } from "react-bootstrap";

import styled from "styled-components";
const Styles = styled.div`
  .navbar {
    background-color: transparent;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    text-align: center;
    min-width: 7em;
    font-size: 1em;
    padding: 0.15em 0.25em;
    margin: 0.5em;
    display: inline-block;
    background: transparent;
    color: #000000 !important;
    background-position: center center;

    background-size: 110% 110%;
    transition: 0.4s;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 2.4em;
    color: #ff6600;
    &:hover {
      color: white;
    }
  }
`;
export const NavBar = () => {
  return (
    <Styles>
      <Navbar variant="dark" expand="md">
        <Navbar.Brand href="/">Telefoto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/aboutme">About Me</Nav.Link>
            <Nav.Link href="/photography">Photography</Nav.Link>
            <Nav.Link href="/video">Video</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
