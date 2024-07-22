import React from 'react';
import { NavLink } from 'react-router-dom';
import { CurrencyFormat } from '../Utility/CurrencyFormat'; // Adjust the import path as needed

const ProductCard = ({ product }) => {
  const { id, image, title, price, rating } = product;

  return (
    <NavLink
      to={`/singleproduct/${id}`}
      className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="w-full h-72 relative flex justify-center items-center overflow-hidden px-4 py-5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain object-center"
          style={{ objectFit: 'contain' }} // Ensures image covers the area without stretching
        />
      </div>
      <div className="flex flex-col flex-1 p-6 bg-gray-100">
        <h3 className="text-lg font-bold text-black mb-2">{title}</h3>
        <p className="text-black mb-4 text-md font-semibold">{CurrencyFormat(price)}</p>
        <div className="flex items-center mb-4">
          <span className="text-sm font-semibold text-black">{rating.rate}</span>
          <span className="text-sm text-gray-500 ml-1">/ 5</span>
        </div>
        <div className="mt-auto">
          <button className="w-full bg-sky-700 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
