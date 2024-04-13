import React, { useState } from 'react';
import MovieReview from '../MovieReview/MovieReview';
import MovieRecommend from '../MovieRecommend/MovieRecommend';
import { useMovieRecommendQuery } from '../../../../hooks/useMovieRecommend';
import { useParams } from 'react-router-dom';
import './MovieTab.style.css';

const MovieTab = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('review'); // 현재 활성화된 탭
  const { data: recommend } = useMovieRecommendQuery({ id });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'review' ? 'active' : ''}`}
          onClick={() => handleTabClick('review')}
        >
          Review
        </button>
        <button
          className={`tab-button ${
            activeTab === 'recommendation' ? 'active' : ''
          }`}
          onClick={() => handleTabClick('recommendation')}
        >
          Related Movies
        </button>
        <div
          className={`tab-underline ${
            activeTab === 'review'
              ? 'underline-review'
              : 'underline-recommendation'
          }`}
        />
      </div>
      <div
        className={`tab-content ${
          activeTab === 'review' ? 'active-review' : 'active-recommendation'
        }`}
      >
        {activeTab === 'review' && <MovieReview />}
        {activeTab === 'recommendation' && (
          <MovieRecommend recommend={recommend} />
        )}
      </div>
    </div>
  );
};

export default MovieTab;
