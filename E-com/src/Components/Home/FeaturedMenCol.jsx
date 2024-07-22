import React from 'react';
import { useProductContext } from '../Context/ProductContext'; // Adjust the import path as needed

const FeaturedMenCol = () => {
  const { isLoading, featuredProducts } = useProductContext();

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
         <h2 className="text-4xl font-bold text-center mb-12 text-black uppercase">
        Featured Men's Collection
      </h2>
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-t-4 border-sky-700 border-solid rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }


  if (!featuredProducts.length) {
    return (
      <div className="text-center text-lg font-semibold text-gray-600 mt-10">
        No featured products available
      </div>
    );
  }

  return (
    <section className="max-w-7xl w-full mx-auto py-20 px-10">
      <h2 className="text-4xl font-bold text-center mb-12 text-black uppercase">
        Featured Men's Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {featuredProducts.map(product => (
          <div
            key={product.id}
            className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="w-full h-72 relative flex justify-center items-center overflow-hidden px-4 py-5">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain object-center"
                style={{ objectFit: 'contain' }} // Ensures image covers the area without stretching
              />
            </div>
            <div className="flex flex-col flex-1 p-6 bg-gray-100">
              <h3 className="text-lg font-semibold text-black mb-2">{product.title}</h3>
              <p className="text-black mb-4 text-md font-semibold">${product.price}</p>
              <div className="mt-auto">
                <button className="w-full bg-sky-700 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedMenCol;
