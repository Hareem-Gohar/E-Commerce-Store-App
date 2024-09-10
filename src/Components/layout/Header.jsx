import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo-img.png";
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { CiMenuBurger } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';
import { useCartContext } from '../Context/CartContext';

const Header = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/aboutUs' },
    { name: 'Contact', path: '/contactUs' },
    { name: 'Product', path: '/products' },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  const {total_items} = useCartContext();

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div className="w-full mx-auto px-4 py-4 flex gap-4 items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex font-extrabold text-xl uppercase mb-0 items-center">
        <img src={logo} className='h-6 me-1' alt="" srcset="" />
          BoKoSM
        </NavLink>

        {/* Navigation Links */}
        <div className="flex gap-3 items-center">
          {/* Desktop Navigation */}
          <ul className='hidden gap-10 md:flex'>
            {navLinks.map((link, index) => (
              <li key={index} className='text-base font-semibold uppercase'>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => isActive ? 'border-b-2 border-black' : 'text-black'}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Toggle */}
          <div className='inline-block mt-2 md:hidden relative z-30'>
            <button onClick={toggleMenu} className="focus:outline-none">
              {openMenu ? (
                <IoCloseOutline fontSize={35} className='text-black' />
              ) : (
                <CiMenuBurger fontSize={25} className='text-black' />
              )}
            </button>
          </div>

          {/* Shopping Cart Icon */}
          <div className="flex items-center mt-2 md:mt-0 relative">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? 'text-black' : 'text-black'}
            >
              <HiOutlineShoppingCart fontSize={25} />
            </NavLink>
            {/* Cart Item Count (dummy value for demonstration) */}
            <span className='absolute bg-black text-white px-1 py-0 rounded-full text-sm bottom-[15px] left-0'>{console.log(total_items)}</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-20 bg-white/10 backdrop-blur-lg transform transition-transform duration-300 ${openMenu ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <li key={index} className='text-lg font-semibold'>
              <NavLink
                to={link.path}
                className={({ isActive }) => isActive ? 'text-black border-b border-b-black' : 'text-black'}
                onClick={toggleMenu}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
