import React from "react";
import { useNavigate } from "react-router-dom";
import Rectangle from "../../assets/images/rectangle-yellow.png";
import Star from "../../assets/images/Star.png";
const HeroSection = ({ name, img }) => {
  const navigate = useNavigate();

  const handleGoClick = () => {
    navigate("/products"); // Navigate to the home page or another page
  };
  return (
    <>
      <section className="relative flex flex-col-reverse md:block bg-[#F4F6F5] max-h-[450px] h-full">
        <div className="max-w-7xl flex justify-center items-center h-full mx-auto md:py-0 py-5 
        ">
          <div className="py-10 bg-transparent px-8 flex flex-col items-center justify-center  text-center h-full">
           
            <p className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold text-black w-full text-center md:leading-[80px]">
            LET’S  EXPLORE <br /> UNIQUE THINGS.
            </p>
            <img src={Rectangle} alt="" className="absolute -z-0 top-[115px] sm:top-[120px] md:top-24   h-12 md:h-20  w-[280px] sm:w-[370px] md:w-[500px]" />
            <p className="text-sm sm:text-md text-amber-950 my-4">
            Live for Influential and Innovative fashion! and your number one source for all things.
            </p>
            <button
              onClick={handleGoClick}
              className="bg-black text-white px-3 max-w-48 w-full py-3 hover:bg-white hover:text-black transition border-black border-2 font-semibold"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="absolute top-6 left-10 md:top-10 md:left-20">
          <img src={Star} alt="Star" className="w-10" />
        </div>
        <div className="absolute top-10 right-6  md:top-16 lg:right-40">
          <img src={Star} alt="Star" className="w-10 md:w-20" />
        </div>
        <div className="absolute bottom-10 left-12 md:bottom-20 md:left-40">
          <img src={Star} alt="Star" className="w-16" />
        </div>
        <div className="absolute bottom-16 right-10 md:bottom-20 md:right-52">
          <img src={Star} alt="Star" className="w-6 md:w-10" />
        </div>
       
      </section>
    </>
  );
};

export default HeroSection;
