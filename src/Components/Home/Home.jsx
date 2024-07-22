import React from 'react';
import HeroSection from './HeroSection';
import homeBanner from '../../assets/images/online-shopping-banner.png'
import Services from './Services';
import Trusted from './Trusted';
import FeaturedMenCol from './FeaturedMenCol';
const Home = () => {
  return(
    <>
    <HeroSection name="Bokosm" img={homeBanner} />
    <FeaturedMenCol />
    <Services />
    <Trusted />
    </>
  )
 
};

export default Home;
