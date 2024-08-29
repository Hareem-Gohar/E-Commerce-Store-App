import React from 'react'
import { useProductContext } from '../Context/ProductContext';
import { useFilterContext } from '../Context/Filter';
import ProductCard from './ProductCard';


const ProductlList = () => {
  const { filterProducts } = useFilterContext();

  return (
    <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filterProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
  )
}

export default ProductlList