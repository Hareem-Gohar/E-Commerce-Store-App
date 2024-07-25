import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useProductContext } from '../Context/ProductContext';
import { IoMdArrowRoundBack } from 'react-icons/io';

const productApi = "https://fakestoreapi.com/products";

const ProductPage = () => {
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

  return (
    <div className="mx-auto p-6">
       <NavLink 
            to="/" 
            className="bg-gray-200 text-sky-700 p-3 rounded-full mb-6 hover:bg-gray-300 transition duration-200 inline-block"
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
              <div className="w-12 h-12 border-t-4 border-sky-700 border-solid rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto overflow-hidden mb-10">
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={image} alt={title} className="w-[300px] h-full object-cover" />
            </div>
            <div className="w-full md:w-1/2 p-6">
              <h1 className="text-4xl font-bold mb-4 text-black">{title}</h1>
              <p className="text-gray-700 mb-6">{description}</p>
              <div className="mb-4">
                <span className="bg-sky-700 text-white py-1 px-5  font-semibold rounded-full text-sm uppercase tracking-wide">{category}</span>
              </div>
              <div className="text-3xl font-semibold text-gray-900 mb-4">${price}</div>
              <div className="flex items-center mb-6">
                {/* <div className="text-yellow-500 flex space-x-1">
                  {[...Array(5)].map((star, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${index < rating.rate ? 'text-yellow-500' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.26 3.888a1 1 0 00.95.69h4.104c.969 0 1.371 1.24.588 1.81l-3.32 2.432a1 1 0 00-.364 1.118l1.26 3.888c.3.921-.755 1.688-1.54 1.118l-3.32-2.432a1 1 0 00-1.175 0l-3.32 2.432c-.784.57-1.838-.197-1.54-1.118l1.26-3.888a1 1 0 00-.364-1.118L2.65 8.515c-.783-.57-.381-1.81.588-1.81h4.104a1 1 0 00.95-.69l1.26-3.888z" />
                    </svg>
                  ))}
                </div> */}
                {/* <span className="text-gray-700 ml-2">{rating.rate} ({rating.count} reviews)</span> */}
              </div>
              <NavLink to="/cart" className="w-full inline-block text-center md:w-1/2 bg-sky-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-sky-800 transition duration-300">Add to Cart</NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
