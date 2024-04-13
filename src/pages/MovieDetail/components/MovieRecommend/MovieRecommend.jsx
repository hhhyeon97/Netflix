import React from 'react';
import MovieRecommendCard from './MovieRecommendCard';
import './MovieRecommend.style.css';

const MovieRecommend = ({ recommend }) => {
  return (
    <div className="detail-recommend-wrap">
      <h2 className="recommend-title">Related ({recommend.length})</h2>
      {recommend?.length === 0 ? (
        <div className="recommend-none">관련 컨텐츠가 없습니다.</div>
      ) : (
        <ul className="recommend-list">
          {recommend?.map((item, index) => (
            <li key={index}>
              <MovieRecommendCard item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieRecommend;
