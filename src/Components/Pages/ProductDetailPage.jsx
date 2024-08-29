import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useProductContext } from '../Context/ProductContext';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Stars from '../Product/Stars';
import AddToCartbtn from '../Common/AddToCartbtn';
import CartAmoToggle from '../Product/CartAmoToggle';
import { CurrencyFormat } from '../Utility/CurrencyFormat'; // Adjust the import path as needed


const productApi = "https://fakestoreapi.com/products";

const ProductDetailPage = () => {
  const { isSingleLoading, singleProduct, getSingleProduct } = useProductContext();
  const { id } = useParams();
  
  useEffect(() => {
    getSingleProduct(`${productApi}/${id}`);
  }, [id]);

  if (!singleProduct) {
    return <h1 className="text-center text-2xl mt-20">No product found</h1>;
  }

  const {
    category,
    description,
    image,
    price,
    rating,
    title
  } = singleProduct;

  // for Amoun Toggling
  const [amount, setAmount] = useState(1);
  const setDecrese = () =>{
    if(amount > 1) {
      setAmount(amount - 1);
    }
  }
  const setIncrease = () =>{
    setAmount(amount + 1);
  }

  return (
    <div className="mx-auto p-6">
       <NavLink 
            to="/" 
            className="bg-black text-[#fefbf1] p-3 rounded-full mb-6 hover:bg-gray-300 transition duration-200 inline-block"
          >
            <IoMdArrowRoundBack fontSize={20} />
          </NavLink>
      {isSingleLoading ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <h2 className="text-4xl font-bold text-center mb-12 text-black uppercase">
            Loading...
          </h2>
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-t-4 border-black border-solid rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto overflow-hidden mb-10">
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center bg-white py-7 px-4 rounded-lg shadow-md">
              <img src={image} alt={title} className="w-[300px] h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 py-6 px-10">
              <h1 className="text-4xl font-bold mb-4 text-black">{title}</h1>
              <p className="text-black mb-6">{description}</p>
              <div className="mb-4">
                <span className="bg-black text-white py-1 px-5  font-semibold rounded-full text-sm uppercase tracking-wide">{category}</span>
              </div>
              <div className="text-3xl font-semibold text-gray-900 mb-4">{CurrencyFormat(price)}</div>
              <div className="flex items-center mb-6">
              <Stars reviews={rating?.count} rating={rating?.rate} />
              </div>
              <div className="flex gap-4 items-start">
              <CartAmoToggle amount={amount}
              setDecrease={setDecrese}
              setIncrease={setIncrease} />
             <AddToCartbtn />  
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetailPage;
