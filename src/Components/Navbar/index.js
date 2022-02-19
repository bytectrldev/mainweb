import React from 'react';
import './Navbar.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { BiMoon, BiSun } from 'react-icons/bi';

const Navbar1 = (props) => {
  const toggle = () => {
    props.Theme ? props.setTheme(false) : props.setTheme(true);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="transperant" variant="dark">
      <Container className="NavContainer">
        <Navbar.Brand href="#home">
          <div className="navbarlogo">
            <div className="navbarLogo"></div>
          </div>
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#meetup">Meetup</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link className="themeLink">
          {props.Theme ? (
            <BiSun onClick={toggle} />
          ) : (
            <BiMoon onClick={toggle} />
          )}
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default Navbar1;
