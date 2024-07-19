import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import homeBanner from '../../assets/images/online-shopping-banner.png'
import Services from '../Services/Services';
import Trusted from '../Trusted/Trusted';
const Home = () => {
  return(
    <>
    <HeroSection name="Bokosm" img={homeBanner} />
    <Services />
    <Trusted />
    </>
  )
 
};

export default Home;
