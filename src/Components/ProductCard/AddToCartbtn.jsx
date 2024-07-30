import React from 'react'
import { NavLink } from 'react-router-dom'

const AddToCartbtn = () => {
  return (
    <NavLink to="/cart" className="w-full inline-block text-center md:w-1/2 bg-amber-900 text-white py-2 rounded-lg text-md  hover:bg-green-800 transition duration-300">Add to Cart</NavLink>
  )
}

export default AddToCartbtn