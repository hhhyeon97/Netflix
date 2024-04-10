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

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const searchByKeyword = (event) => {
    event.preventDefault(); // 새로고침 방지
    // url 바꿔주기
    navigate(`/movies?q=${keyword}`);
    setKeyword('');
  };

  return (
    <div>
      <nav class="navbar">
        <div class="navbar-logo">
          <Link to="/">
            <span className="logo-color">S</span>OLFLIX
          </Link>
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movie</Link>
          </li>
          <li>
            <Link to="/tv">TV</Link>
          </li>
        </ul>
        <ul className={`navbar-search ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <form className={`d-flex search-area`} onSubmit={searchByKeyword}>
              <input
                type="search"
                className="search-in"
                placeholder="search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <FontAwesomeIcon
                className="search-con"
                icon={faSearch}
                color="#fff"
              />
            </form>
          </li>
        </ul>
        <FontAwesomeIcon
          className={`navbar-toggle-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={handleToggleMenu}
          icon={faBars}
          color="#fff"
        />
      </nav>
      <Outlet />
    </div>
  );
};

export default AppLayout;
