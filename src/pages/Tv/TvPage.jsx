import React from 'react';
import './TvPage.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOtter } from '@fortawesome/free-solid-svg-icons';
const TvPage = () => {
  return (
    <div className="tv-wrap">
      <h2 className="tv-text">
        업데이트 예정입니다 <FontAwesomeIcon icon={faOtter} color="white" fo />
      </h2>
      <img
        src="https://i.pinimg.com/564x/7d/25/6b/7d256b17502ab0ae1a901bf47a546f5e.jpg"
        alt=""
      />
    </div>
  );
};

export default TvPage;
