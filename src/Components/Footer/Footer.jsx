import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate()
  const goToContact =  () =>{
    navigate('/contactUs')
  }
  return (
    
      <footer className="bg-sky-800 text-white py-12 relative">
        {/* Coupon Section */}
        <div className="absolute inset-x-0 top-[-80px] text-black flex justify-center z-10">
          <div className="bg-gray-50 shadow-xl p-6 rounded-lg max-w-3xl w-full text-center relative z-10">
            <h3 className="text-2xl font-bold mb-2">Want to Start?</h3>
            <p className="text-lg mb-4">  Contact us TODAY <button 
            onClick={goToContact}
            className="bg-sky-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-black transition-colors duration-300 mx-3 mt-3">Get Sarted</button></p>
           
          </div>
        </div>
  
        <div className="max-w-7xl mx-auto px-6 relative z-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {/* About Section */}
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold mb-4">About Us</h3>
              <p className="text-gray-300 mb-6">
                We are dedicated to delivering high-quality products and exceptional service. Our goal is to exceed your expectations and provide an outstanding shopping experience.
              </p>
              <Link to="/aboutUs" className="text-gray-200 hover:text-gray-100 transition-colors duration-300 text-lg font-medium">Learn More</Link>
            </div>
  
            {/* Quick Links Section */}
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-gray-200 text-lg transition-colors duration-300">Home</Link></li>
                <li><Link to="/aboutUs" className="hover:text-gray-200 text-lg transition-colors duration-300">About Us</Link></li>
                <li><Link to="/contactUs" className="hover:text-gray-200 text-lg transition-colors duration-300">Contact</Link></li>
                <li><Link to="/products" className="hover:text-gray-200 text-lg transition-colors duration-300">Products</Link></li>
              </ul>
            </div>
  
            {/* Contact Section */}
            <div className="flex flex-col">
              <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-300 mb-2">123 Main Street, San Francisco, CA 94105</p>
              <p className="text-gray-300 mb-2">Phone: (123) 456-7890</p>
              <p className="text-gray-300 mb-4">Email: info@example.com</p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors duration-300 border border-gray-200 rounded-full p-2">
                  <FaFacebookF size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors duration-300 border border-gray-200 rounded-full p-2">
                  <FaTwitter size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors duration-300 border border-gray-200 rounded-full p-2">
                  <FaInstagram size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors duration-300 border border-gray-200 rounded-full p-2">
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-16 border-t border-gray-600 pt-6 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
