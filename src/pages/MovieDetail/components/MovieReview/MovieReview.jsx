import React, { useState } from 'react';
import './MovieReview.style.css';
import { useMovieReviewQuery } from '../../../../hooks/useMovieReview';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';
import { Alert } from 'bootstrap';
import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const MAX_CONTENT_LENGTH = 200; // 최대 표시할 리뷰 내용의 길이

const MovieReview = () => {
  const { id } = useParams();
  const {
    data: review,
    isLoading,
    isError,
    error,
  } = useMovieReviewQuery({ id });

  const [expanded, setExpanded] = useState(false); // 리뷰 내용이 접혀 있는지 여부

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <h2>Movie Reviews</h2>
      {review &&
        review.map((reviewItem, index) => (
          <ReviewItem key={index} review={reviewItem} expanded={expanded} />
        ))}
      <Button variant="primary" onClick={() => setExpanded(!expanded)}>
        {expanded ? '접기' : '더 보기'}
      </Button>
    </div>
  );
};

const ReviewItem = ({ review, expanded }) => {
  const shouldShowButton = review.content.length > MAX_CONTENT_LENGTH;

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{review.author}</Card.Title>
        {expanded || review.content.length <= MAX_CONTENT_LENGTH ? (
          <Card.Text>{review.content}</Card.Text>
        ) : (
          <div>
            <Card.Text>{review.content.slice(0, MAX_CONTENT_LENGTH)}</Card.Text>
            <Button variant="link">더 보기</Button>
          </div>
        )}
        {shouldShowButton && !expanded && (
          <Button variant="link">더 보기</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default MovieReview;
