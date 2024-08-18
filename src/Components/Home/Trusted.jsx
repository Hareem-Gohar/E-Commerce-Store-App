import React from 'react';
import { FaThumbsUp, FaUsers, FaAward, FaShieldAlt } from 'react-icons/fa';

const Trusted = () => {
  const trustedData = [
    {
      icon: <FaThumbsUp size={50} className="text-[#fefbf1] bg-black p-2 rounded-full" />,
      title: 'Quality Products',
      description: 'We provide only the highest quality products to our customers.',
    },
    {
      icon: <FaUsers size={50} className="text-[#fefbf1] bg-black p-2 rounded-full" />,
      title: 'Happy Customers',
      description: 'Our customers are our top priority, and their satisfaction is our goal.',
    },
    {
      icon: <FaAward size={50} className="text-[#fefbf1] bg-black p-2 rounded-full" />,
      title: 'Award-Winning',
      description: 'Recognized for our excellence and commitment to quality.',
    },
    {
      icon: <FaShieldAlt size={50} className="text-[#fefbf1] bg-black p-2 rounded-full" />,
      title: 'Trusted Service',
      description: 'Our services are trusted by thousands of customers worldwide.',
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-black mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {trustedData.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white shadow-lg  p-6">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-black mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
