import React, { useState } from 'react';
import './MovieReview.style.css';
import { useMovieReviewQuery } from '../../../../hooks/useMovieReview';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';
import { Alert } from 'bootstrap';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const MAX_CONTENT_LENGTH = 200;

const MovieReview = () => {
  const { id } = useParams();
  const {
    data: review,
    isLoading,
    isError,
    error,
  } = useMovieReviewQuery({ id });

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="movie-review-area">
      <h2 className="movie-review-title">Movie Reviews ({review.length})</h2>
      {review &&
        review.map((reviewItem, index) => (
          <ReviewItem key={index} review={reviewItem} />
        ))}
    </div>
  );
};

const ReviewItem = ({ review }) => {
  const [expanded, setExpanded] = useState(false); // 리뷰 내용이 접혀 있는지 여부

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const shouldShowButton = review.content.length > MAX_CONTENT_LENGTH;

  return (
    <Card className="review-card mb-3 bg-dark text-white">
      <Card.Body>
        <Card.Title>{review.author}</Card.Title>
        <div className={`review-content ${expanded ? 'open' : ''}`}>
          {review.content.length > MAX_CONTENT_LENGTH ? (
            <>
              {expanded ? (
                <span>{review.content}</span>
              ) : (
                <span>{review.content.slice(0, MAX_CONTENT_LENGTH)}...</span>
              )}
              {shouldShowButton && (
                <Button variant="link" onClick={toggleExpand}>
                  {expanded ? 'close' : 'more'}
                </Button>
              )}
            </>
          ) : (
            <span>{review.content}</span>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default MovieReview;
