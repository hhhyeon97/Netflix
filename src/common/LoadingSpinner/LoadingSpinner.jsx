import React from 'react';
import { Spinner } from 'react-bootstrap';
import './LoadingSpinner.style.css';

const LoadingSpinner = () => {
  return (
    <div className="spinner-area">
      <div className="spinner-wrapper">
        <Spinner animation="border" variant="light" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
