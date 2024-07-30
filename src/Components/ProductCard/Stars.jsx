import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Stars = ({ reviews, rating }) => {
    console.log(reviews , rating)
  const ratingStar = Array.from({ length: 5 }, (elem, i) => {
    let num = i + 0.5;
    return (
      <span key={i} className="text-yellow-500">
        {
          rating >= i + 1
            ? <FaStar />
            : rating >= num
              ? <FaStarHalfAlt />
              : <AiOutlineStar />
        }
      </span>
    );
  });

  return (
    <div className="flex items-center space-x-1">
      {ratingStar}
      <p className="ml-2 text-gray-700">(Customer reviews: {reviews})</p>
    </div>
  );
};

export default Stars;
