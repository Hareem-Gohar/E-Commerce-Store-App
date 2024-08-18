import React from 'react';
import { FaShippingFast, FaHeadset, FaExchangeAlt, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaShippingFast size={40} className="text-white" />,
      title: 'Fast Shipping',
      description: 'We provide fast and reliable shipping to ensure your products reach you on time.',
    },
    {
      icon: <FaHeadset size={40} className="text-white" />,
      title: '24/7 Support',
      description: 'Our customer support is available 24/7 to assist you with any questions.',
    },
    {
      icon: <FaExchangeAlt size={40} className="text-white" />,
      title: 'Easy Returns',
      description: 'Enjoy a hassle-free return process for your convenience.',
    },
    {
      icon: <FaShieldAlt size={40} className="text-white" />,
      title: 'Secure Payment',
      description: 'Shop safely with our secure and reliable payment options.',
    },
  ];

  return (
    <section className="py-20 bg-[#F4F6F5]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white  shadow-md transition-transform transform hover:scale-105 duration-300"
            >
              <div className="mb-4 p-4 bg-[#E5C643]  rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
