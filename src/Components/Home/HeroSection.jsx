import React from 'react'
import { useNavigate } from 'react-router-dom';



const HeroSection = ({name , img}) => {
    const navigate = useNavigate();

    const handleGoClick = () => {
        navigate('/products'); // Navigate to the home page or another page
    };
    return (
        <section className="max-w-7xl mx-auto px-10 py-2">
            <div className="flex flex-wrap  items-center justify-center text-black gap-10">
                <div className=" w-full md:w-[43%] order-2 px-4">
                    <img
                        src={img}
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className=" mt-8 l:mt-0 w-full md:w-[50%] flex flex-col items-center text-center md:text-start md:items-start order-1">
                    <p className='text-lg text-gray-800 mb-3 md:mb-0'>
                    Welcome to
                    </p>
                    <h1 className="text-4xl lg:text-5xl font-bold text-black md:text-start mb-4 uppercase">
                      {name}
                    </h1>
                    <p className="text-lg lg:text-2xl text-gray-800 mb-8 w-[70%] md:w-full">
                        Discover the best products at unbeatable prices.
                        your number one source for all things. 
                    </p>
                    <button
                        onClick={handleGoClick}
                        className="bg-black text-white px-6 py-3 hover:bg-sky-600 transition"
                    >
                        Shop Now
                    </button>
                </div>
            </div>

        </section>
    )
}

export default HeroSection