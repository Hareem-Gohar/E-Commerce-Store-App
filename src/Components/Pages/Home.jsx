import React from 'react';
import HeroSection from '../Common/HeroSection';
import Services from '../Home/Services';
import Trusted from '../Home/Trusted';
import FeaturedMenCol from '../Home/FeaturedMenCol';
const Home = () => {
  return(
    <>
    <HeroSection name="Bokosm" />
    <FeaturedMenCol />
    <Services />
    <Trusted />
    </>
  )
 
};

export default Home;
