import React from 'react';
import { NavLink } from 'react-router-dom';
import { CurrencyFormat } from '../Utility/CurrencyFormat'; // Adjust the import path as needed
import AddToCartbtn from './AddToCartbtn';

const ProductCard = ({ product }) => {
  const { id, image, title, price, rating } = product;

  return (
    <NavLink
      to={`/singleproduct/${id}`}
      className="flex flex-col border rounded-xl shadow-lg overflow-hidden"
    >
      <div className="w-full h-72 relative flex justify-center items-center overflow-hidden px-4 py-5 bg-white">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain object-center"
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-amber-950 mb-2">{title}</h3>
        <p className="text-amber-900 mb-4 text-md font-semibold">{CurrencyFormat(price)}</p>
        <div className="flex items-center mb-4">
          <span className="text-sm font-semibold text-green-900">{rating.rate}</span>
          <span className="text-sm text-green-900 ml-1">/ 5</span>
        </div>
        <div className="flex  flex-col gap-3">
          <button className="w-full bg-green-900 text-white py-2 px-4 rounded-lg hover:bg-amber-900 transition-colors duration-300">
            View Details
          </button>
          <AddToCartbtn />
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
