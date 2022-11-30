import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
  return (
    <div className='background-overlay'>
      <Spinner animation="border" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <span className='spinner-text'>Loading...</span>
    </div>
  );
}

export default LoadingSpinner;