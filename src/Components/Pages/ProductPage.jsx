import React from 'react'
import FilterProducts from '../Product/FilterProducts'
import ProductlList from '../Product/ProductlList'
import { useFilterContext } from '../Context/Filter'

const ProductPage = ({}) => {
  const {filterProducts} = useFilterContext();
  console.log(filterProducts)
  return (
    <>
    <div className="max-w-7xl w-full mx-auto px-4">
      <div className="">
       <FilterProducts />
      </div>
    </div> 
   <div className="">
    <ProductlList />
   </div>
    {/* <ProductCard /> */}
    </>
  )
}

export default ProductPage