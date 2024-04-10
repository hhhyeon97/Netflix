import React, { useState } from 'react';
import './LayoutTest.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

const LayoutTest = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav class="navbar">
      <div class="navbar-logo">
        <a href="/">SOLFLIX</a>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Movie</a>
        </li>
        <li>
          <a href="/">TV</a>
        </li>
      </ul>
      <ul className={`navbar-search ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <input
            type="search"
            className="search-in"
            placeholder="search"
          ></input>
          <FontAwesomeIcon
            className="search-con"
            icon={faSearch}
            color="#fff"
          />
        </li>
      </ul>

      <a href="#" className="navbar-togglebtn" onClick={handleToggleMenu}>
        <FontAwesomeIcon
          icon={faBars}
          color="#fff"
          className={`${isMenuOpen ? 'active' : ''}`}
        />
      </a>
    </nav>
  );
};

export default LayoutTest;
