import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

const NavigateBack = () => {
      const navigate = useNavigate();
  return (
      <button
      onClick={() => navigate(-1)}
      className="bg-black text-[#fefbf1] p-3 rounded-full hover:bg-gray-300 transition duration-200 inline-block"
    >
      <IoMdArrowRoundBack fontSize={20} />
    </button>
  )
}

export default NavigateBack