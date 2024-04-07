import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import './AppLayout.style.css';

const AppLayout = () => {
  return (
    <div className="navbar-wrap">
      <Navbar expand="lg" className="bg-body-dark text-light">
        <Container fluid className="wrap-con">
          <Navbar.Brand href="#" className="text-light logo">
            {/* <img src="logo.png" width={110} alt="" /> */}
            {/* <img
              id="logo"
              src="https://www.wavve.com/img/ci-wavve.5b304973.svg"
              width={120}
              alt=""
            /> */}
            SOLFLIX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/" className="text-light link-st">
                Home
              </Nav.Link>
              <Nav.Link href="/movies" className="text-light link-st">
                Movie
              </Nav.Link>
              <Nav.Link href="/tv" className="text-light link-st">
                TV
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
