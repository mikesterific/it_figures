import React from 'react';
import hero from '../assets/images/heroBranner.jpg';
import ThreeCols from '../components/ThreeCols';
import OurServices from '../sections/OurServices';
import OurApproach from '../sections/OurApproach';
import Pricing from '../sections/Pricing';
const Home = () => {
  return (
    <div>
      <img src={hero} alt="logo" />
      <ThreeCols />
      <OurServices />
      <OurApproach />
      <Pricing />
    </div>
  );
};

export default Home;
