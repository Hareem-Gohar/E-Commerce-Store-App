import React from 'react';

const FilterProducts = () => {
  return (
    <div className="w-full sm:w-[25%] p-6 rounded-lg shadow-lg my-6 border border-gray-200 bg-white text-black">
      <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 pb-3">Filters</h2>

      {/* Search Filter */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Search</h3>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-amber-500"
          placeholder="Search products..."
        />
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Category</h3>
        <ul>
          <li><button className="w-full p-3 text-left rounded-lg hover:bg-yellow-100 focus:outline-none focus:ring-1 focus:ring-gray-950">Men's clothing</button></li>
          <li><button className="w-full p-3 text-left rounded-lg hover:bg-yellow-100 focus:outline-none focus:ring-1 focus:ring-gray-950">Jewelry</button></li>
          <li><button className="w-full p-3 text-left rounded-lg hover:bg-yellow-100 focus:outline-none focus:ring-1 focus:ring-gray-950">Electronics</button></li>
          <li><button className="w-full p-3 text-left rounded-lg hover:bg-yellow-100 focus:outline-none focus:ring-1 focus:ring-gray-950">Women's clothing</button></li>
        </ul>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Price Range</h3>
        <input type="range" min="0" max="1000" className="w-full appearance-none h-2 bg-gray-200 rounded-lg cursor-pointer accent-amber-500" />
        <div className="flex justify-between mt-2 text-sm text-black">
          <span>$0</span>
          <span>$1000</span>
        </div>
      </div>

        {/* Clear Filters Button */}
        <div className="mt-6">
        <button
          className="w-full py-2 bg-black text-white rounded-lg shadow-sm hover:bg-white hover:text-black border-black border focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-300"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterProducts;
