
import React from 'react';
import Star from './Star';

const StarRating = ({ rating, onRatingChange }) => {
  const handleStarClick = (index) => {
    onRatingChange(index + 1);
  };

  return (
    <div style={{ display:'flex', flexDirection: 'row', justifyContent:'center'}}>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          selected={index < rating}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

export default StarRating;
