import React, { useState } from 'react';
import MovieReview from '../MovieReview/MovieReview';
import MovieRecommend from '../MovieRecommend/MovieRecommend';
import { useMovieRecommendQuery } from '../../../../hooks/useMovieRecommend';
import { useParams } from 'react-router-dom';

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
          className={activeTab === 'review' ? 'active' : ''}
          onClick={() => handleTabClick('review')}
        >
          Review
        </button>
        <button
          className={activeTab === 'recommendation' ? 'active' : ''}
          onClick={() => handleTabClick('recommendation')}
        >
          Related Movies
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'review' && <MovieReview />}
        {activeTab === 'recommendation' && (
          <MovieRecommend recommend={recommend} />
        )}
      </div>
    </div>
  );
};

export default MovieTab;
