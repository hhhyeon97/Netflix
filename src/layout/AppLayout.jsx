import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import './AppLayout.style.css';
import { useNavigate } from 'react-router-dom';

const AppLayout = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault(); // 새로고침 방지
    // url 바꿔주기
    navigate(`/movies?q=${keyword}`);
    setKeyword('');
  };

  return (
    <div className="navbar-wrap">
      <Navbar expand="lg" className="bg-body-dark text-light">
        <Container fluid className="wrap-con">
          <Navbar.Brand href="/" className="text-light logo">
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
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
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
