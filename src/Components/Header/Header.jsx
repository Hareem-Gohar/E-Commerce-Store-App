import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/store-logo.png";
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { CiMenuBurger } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';

const Header = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/aboutUs' },
    { name: 'Contact', path: '/contactUs' },
    { name: 'Product', path: '/products' },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div className="max-w-7xl w-full mx-auto px-4 py-3 flex gap-4 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <div className="flex gap-3 items-center">
          {/* Desktop Navigation */}
          <ul className='hidden gap-5 md:flex'>
            {navLinks.map((link, index) => (
              <li key={index} className='text-lg font-semibold'>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => isActive ? 'text-sky-700' : 'text-black'}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Toggle */}
          <div className='inline-block mt-2 md:hidden relative z-10'>
            <button onClick={toggleMenu} className="focus:outline-none">
              {openMenu ? (
                <IoCloseOutline fontSize={35} className='text-sky-700 absolute' />
              ) : (
                <CiMenuBurger fontSize={25} className='text-gray-800' />
              )}
            </button>
          </div>

          {/* Shopping Cart Icon */}
          <div className="flex items-center mt-2 md:mt-0 relative">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? 'text-sky-700' : 'text-black'}
            >
              <HiOutlineShoppingCart fontSize={25} />
            </NavLink>
            {/* Cart Item Count (dummy value for demonstration) */}
            <span className='absolute bg-sky-700 text-white px-1 py-0 rounded-full text-sm bottom-[15px] left-0'>0</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-0 bg-white/10 backdrop-blur-lg transform transition-transform duration-300 ${openMenu ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <li key={index} className='text-lg font-semibold'>
              <NavLink
                to={link.path}
                className={({ isActive }) => isActive ? 'text-sky-700' : 'text-black'}
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
