import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Outlet } from 'react-router-dom';
import './AppLayout.style.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
    <div className="wrap">
      <div className="navbar-wrap">
        <div className="nav-left">
          <div className="nav-logo">
            <Link to="/" className="logo-text">
              SOLFLIX
            </Link>
          </div>
          <div className="navbar-list">
            <Link to="/">Home</Link>
            <Link to="/movies">Movie</Link>
            <Link to="/tv">TV</Link>
          </div>
        </div>
        <Form className="d-flex" onSubmit={searchByKeyword}>
          <Form.Control
            type="search"
            placeholder="제목, 장르, 배우로 찾아보세요"
            className={`me-2 ${keyword ? '' : 'form-mobile-hidden'}`}
            aria-label="Search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
          <Button variant="outline-light">Search</Button>
        </Form>
      </div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
