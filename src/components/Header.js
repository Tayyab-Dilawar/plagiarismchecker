import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

import navLogo from '../images/nav-logo.png'

const Header = () => {
  return (
    <Navbar expand="lg" className='navbar-color'>
      <Container>
        <Navbar.Brand href="">
          <Image src={navLogo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#how-to-use">How to Use</Nav.Link>
            <Nav.Link href="#result">Result</Nav.Link>
            <Nav.Link href="#privacy">Privacy Policy</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header