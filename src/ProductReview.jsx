
import React, { useState } from 'react';
import StarRating from './StarRating';

const ProductReview = ({ productId, productName, imageUrl }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className='bg-image hover-overlay'>
      <h3>{productName}</h3>
      <img src={imageUrl} alt={productName} style={{ width: '200px', height: '200px' , background: 'linear-gradient(45deg, rgba(29, 236, 197, 0.5), rgba(91, 14, 214, 0.5) 100%)' }} />
      <p>Selected rating: {rating}</p>
      <StarRating rating={rating} onRatingChange={handleRatingChange}/>
    </div>

    
  );
};

export default ProductReview;
