import Blogs from "../Pages/Blogs/Blogs";
import Banner from "../Banner/Banner";
import HeroSection from "../HeroSection/HeroSection";
import Process from "../Process/Process";
import React from "react";
const Home = () => {
  return (
    <div>
      <Banner />
      <HeroSection />
      <Process />
      <Blogs></Blogs>
    </div>
  );
};

export default Home;
