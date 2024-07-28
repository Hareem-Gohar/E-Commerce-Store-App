import React from 'react';
import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';
import FeaturedMenCol from './FeaturedMenCol';
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
