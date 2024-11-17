import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar sticky='top' expand="lg" style={{ backgroundColor: 'var(--MainColor)' }}>
      <Container>
        <Navbar.Brand href="#About"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Areas">Interests</Nav.Link>
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header