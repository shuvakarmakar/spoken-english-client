import Blogs from "../Pages/Blogs/Blogs";
import Banner from "../Banner/Banner";
import HeroSection from "../HeroSection/HeroSection";
import Process from "../Process/Process";
import React from 'react'
const Home = () => {
  return (
    <div>
    
      <h1>This is home</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis atque nostrum id sed, enim laboriosam illo odio ea ipsam fugit esse accusamus accusantium quod culpa quo unde alias! Error, eligendi!</p>
      <Blogs></Blogs>
      <Banner />
      <HeroSection />
      <Process />
    </div>
  );
};

export default Home;
