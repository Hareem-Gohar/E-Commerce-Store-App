import React from 'react';
import { NavLink } from 'react-router-dom';
import { CurrencyFormat } from '../Utility/CurrencyFormat';
import AddToCartbtn from '../Common/AddToCartbtn';

const ProductCard = ({ product }) => {
  const { id, image, title, price, rating } = product;
   
 

  return (
    <div className='flex flex-col border '>
      <div className="w-full h-72 relative flex justify-center items-center overflow-hidden px-4 py-5 bg-white">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain object-center"
        />
      </div>
      <div className="flex flex-col flex-1 p-6 bg-[#F4F6F5]">
        <h3 className="text-lg h-[85px] flex justify-center items-center font-bold text-black mb-2">{title}</h3>
        <p className="text-black mb-4 text-md font-semibold">{CurrencyFormat(price)}</p>
        <div className="flex items-center mb-4">
          <span className="text-sm font-semibold text-black">{rating.rate}</span>
          <span className="text-sm text-black ml-1">/ 5</span>
        </div>
        <div className="flex flex-col gap-3">
          <NavLink
            to={`/singleproduct/${id}`} className="w-full bg-white text-black border border-black py-2 px-4  hover:bg-black hover:text-white transition-colors duration-300 text-center">
            View Details
            </NavLink>
          {/* <AddToCartbtn  product={product} /> */}
          <AddToCartbtn amount={1} product={product} />
        </div>
      </div></div>
  );
};

export default ProductCard;

