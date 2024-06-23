import React from "react";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <header>
      <Navbar className="navbar-style" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">
              <img
                src={process.env.PUBLIC_URL + "/media/logo.jpg"}
                alt="logo"
                className="logo-img-style "
              />

              <h6 className="logo-text-style">
                Visvesvaraya Technological University
              </h6>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link href="#home">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link href="#link">About us</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Acadamic" id="basic-nav-dropdown">
                <LinkContainer to="/admition">
                  <NavDropdown.Item href="#">admition</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/circulars">
                  <NavDropdown.Item href="#">
                    Circulars and notification
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/certification">
                  <NavDropdown.Item href="#">Certification</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Certificates issued
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Eaxamination" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">
                  Examination Guidlines
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Examination Application
                </NavDropdown.Item>
                <LinkContainer to="/result/login">
                  <NavDropdown.Item href="#">Results</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
              </NavDropdown>

              <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">
                  Electrical engineering
                </NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Mechnical Engineering
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Civil Engineering</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Computer Science Engineering{" "}
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
