import React, { useState } from 'react';
import { useCartContext } from '../Context/CartContext';
import { CurrencyFormat } from '../Utility/CurrencyFormat'; // Adjust the import path as needed
import { CiCircleRemove } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import NavigateBack from '../Common/NavigateBack';
import CartAmoToggle from '../Product/CartAmoToggle';

const Cart = () => {
  const { cart, total_items, total_amount, removeItem, updateItemAmount, checkout  } = useCartContext();

  // Helper function to render cart items
  const renderCartItems = () => {
    if (!cart || cart.length === 0) {
      return <p>Your cart is empty.</p>;
    }

    return cart.map((item) => (
      <div key={item.id} className="flex justify-between items-center border-b py-4 flex-wrap">
        <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
        <div className="flex-1 px-4 py-4">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <CartAmoToggle 
            amount={item.amount} 
            setDecrease={() => updateItemAmount(item.id, item.amount - 1)} 
            setIncrease={() => updateItemAmount(item.id, item.amount + 1)} 
          />
          <p>Quantity: {item.amount}</p>
          <p>{CurrencyFormat(item.price)} each</p>
        </div>
        <div className="w-full md:w-auto text-right flex gap-4 items-center justify-end">
          <p className='font-medium'>Subtotal: {CurrencyFormat(item.amount * item.price)}</p>
          <button onClick={() => removeItem(item.id)}>
            <CiCircleRemove fontSize={28} />
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex gap-6 items-center mb-6">
        <NavigateBack />
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
      </div>
      
      <div className="mb-6">
        {renderCartItems()}
      </div>
      {cart && cart.length > 0 &&(
        <>
          <div className="flex flex-wrap justify-between items-center border-t pt-4">
            <h2 className="text-xl font-semibold">Total Items: {total_items}</h2>
            <h2 className="text-xl font-semibold">Total Amount: {CurrencyFormat(total_amount)}</h2>
          </div>
          <div className="flex gap-3 justify-end my-5">
            <NavLink to="/products" className="bg-black text-white py-3 px-5">
              Continue Shopping
            </NavLink>
            <NavLink className="bg-black text-white py-3 px-5" to="/checkout">
              Checkout
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
