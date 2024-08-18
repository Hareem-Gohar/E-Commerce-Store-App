import React from 'react'
import { NavLink } from 'react-router-dom'

const AddToCartbtn = () => {
  return (
    <NavLink to="/cart" className=" w-full md:w-56 max-w-full inline-block text-center bg-black text-white py-2 text-md border border-black hover:text-black  hover:bg-white transition duration-300">Add to Cart</NavLink>
  )
}

export default AddToCartbtn