import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="shadow-sm px-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          Rashad Ashraf
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          {/* Dark Mode Toggle on Right */}
          <div className="ms-auto">
            <DarkModeToggle />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
