import React from 'react';
import { useCartContext } from '../Context/CartContext';

const AddToCartbtn = ({ product, id, amount }) => {
  const { AddToCart } = useCartContext();

  const handleAddToCart = () => {
    console.log("Product Details:", product, amount);
    AddToCart(id, amount, product);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full md:w-56 max-w-full inline-block text-center bg-black text-white py-2 text-md border border-black hover:text-black hover:bg-white transition duration-300"
    >
      Add to Cart
    </button>
  );
}

export default AddToCartbtn;
