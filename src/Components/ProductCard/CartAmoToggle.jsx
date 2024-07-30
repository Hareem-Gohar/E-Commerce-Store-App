import React from 'react'

const CartAmoToggle = ({amount , setDecrease, setIncrease}) => {
  return (
    <div className=' inline-block mb-6'>
        <div className="flex gap-5 border-2 py-2 px-3 rounded-lg">
            <button className='bg-green-900 text-white font-bold px-2 rounded-full' onClick={() => setDecrease()}>-</button>
        <span>{amount}</span>
        <button className='bg-green-900 text-white font-bold px-2 rounded-full'  onClick={() => setIncrease()}>+</button>
        </div>
        

    </div>
  )
}

export default CartAmoToggle