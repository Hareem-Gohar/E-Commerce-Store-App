import React from 'react';
import { Link } from 'react-router-dom';
import { MdDoneOutline } from "react-icons/md";


const OrderConfirm = () => {
  return (
    <div className="container mx-auto p-9 flex flex-col items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg px-10 py-8 max-w-md text-center">
        <h2 className="text-3xl font-bold text-green-900 mb-4">Order Confirmed!</h2>
        <p className="text-gray-700 mb-2">Your order has been placed successfully. Thank you for shopping with us!</p>
        
        <MdDoneOutline className="w-20 h-20 mx-auto text-green-900 mb-4" />

        <Link to="/" className="inline-block bg-green-900 text-white py-2 px-4 rounded-md hover:bg-green-800 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirm;
