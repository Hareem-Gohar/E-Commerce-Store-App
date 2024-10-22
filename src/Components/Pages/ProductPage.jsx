import React from 'react'
import FilterProducts from '../Product/FilterProducts'
import ProductlList from '../Product/ProductlList'
import { useFilterContext } from '../Context/Filter'
import NavigateBack from '../Common/NavigateBack'

const ProductPage = ({ }) => {
  const { filterProducts } = useFilterContext();
  console.log("products", filterProducts)
  return (
    <>
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="mt-4">
          <NavigateBack />

        </div>
        <div className="flex flex-wrap justify-between">
          <div className=" w-full sm:w-[40%] md:w-[25%] ">
            <FilterProducts />
          </div>
          <div className="w-full sm:w-[55%] md:w-[70%]">
            <ProductlList />
          </div>
        </div>

      </div>
    </>
  )
}

export default ProductPage