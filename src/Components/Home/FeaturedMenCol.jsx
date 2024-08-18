import React from 'react';
import { useProductContext } from '../Context/ProductContext'; // Adjust the import path as needed
import ProductCard from '../Product/ProductCard'; // Adjust the import path as needed

const FeaturedMenCol = () => {
  const { isLoading, featuredProducts } = useProductContext();

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-4xl font-bold text-center mb-12 text-amber-950  uppercase">
          Featured Men's Collection
        </h2>
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-t-4 border-amber-700 border-solid rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!featuredProducts.length) {
    return (
      <div className="text-center text-lg font-semibold text-black mt-10">
        No featured products available
      </div>
    );
  }

  return (
    <section className="max-w-7xl w-full mx-auto py-28 px-10">
      <h2 className="text-4xl font-bold text-center mb-12 text-black uppercase">
        Featured Men's Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedMenCol;
