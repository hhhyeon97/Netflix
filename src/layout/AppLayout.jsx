import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './AppLayout.style.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

const AppLayout = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
              <span style={{ color: '#72a4f0' }}>S</span>
              OLFLIX
            </Link>
          </div>
          <div className={`navbar-list ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/movies">Movie</Link>
            <Link to="/tv">TV</Link>
          </div>
        </div>
        <form className={`d-flex search-area`} onSubmit={searchByKeyword}>
          <input
            type="search"
            placeholder="제목, 장르, 배우로 찾아보세요"
            className="me-2 search-input"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
          <button className="search-btn">
            <FontAwesomeIcon
              icon={faSearch}
              color="#fff"
              className="search-icon"
            />
          </button>
        </form>
        <FontAwesomeIcon
          icon={faBars}
          color="#FFF"
          className="menu-toggle"
          onClick={handleMenuToggle}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
