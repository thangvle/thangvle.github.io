import React, { useState } from "react";
import ReactDom from "react-dom";
import { Navbar, Nav, Tab } from "react-bootstrap";

import styled from "styled-components";
const Styles = styled.div`
  .navbar {
    background-color: transparent;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    text-align: center;
    min-width: 3em;
    font-size: 1em;
    padding: 0.15em 0.1em;
    margin: 0.5em;

    background: transparent;
    color: #000000 !important;
    background-size: 110% 110%;
    transition: 0.4s;
    &:hover {
      color: red;
    }
  }
  .navbar-nav {
    margin-right: 0rem !important ;
  }
  .navbar-toggle {
    position: absolute;
    left: 50px;
  }
  .navbar-brand {
    font-size: 2.5rem;
    color: #000000;
    text-align: center;
    &:hover {
      color: white;
    }
  }
`;
export const NavBar = () => {
  const [activeKey, setActivateKey] = useState(1);

  const handleSelect = (eventKey) => {
    setActivateKey(eventKey);
  };
  return (
    <Styles>
      <Navbar
        bsStyle="tabs"
        variant="tabs"
        expand="sm"
        fixed="top"
        activeKey={activeKey}
        onSelect={handleSelect}
      >
        <Navbar.Brand href="/">Telefoto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/aboutme">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/photography">Photography</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/video">Video</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};
