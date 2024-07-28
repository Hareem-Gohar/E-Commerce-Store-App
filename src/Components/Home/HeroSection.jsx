import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../../assets/images/hero-banner.jpg";

const HeroSection = ({ name, img }) => {
  const navigate = useNavigate();

  const handleGoClick = () => {
    navigate("/products"); // Navigate to the home page or another page
  };
  return (
    <>
      <section className="relative flex flex-col-reverse md:block">
        <div className="max-w-7xl mx-auto md:py-0 py-5 
        ">
          <div className="static md:absolute bg-transparent px-8 w-full  md:w-[50%] flex flex-col items-center justify-center  text-center md:text-start md:items-start h-full">
            <p className="text-lg text-amber-950 mb-3 md:mb-0">Welcome to</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-amber-950 md:text-start mb-3 uppercase">
              {name}
            </h1>
            <p className="text-md text-amber-950">
              Discover the best products at unbeatable prices.
            </p>
            <p className="text-md text-amber-950 mb-6">
              your number one source for all things.
            </p>
            <button
              onClick={handleGoClick}
              className="bg-green-900 text-white px-3 w-80 py-3 hover:bg-sky-600 transition"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="h-full md:h-[500px] w-full">
          <img src={bannerImage} className="h-full object-cover object-center w-full" srcset="" />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
