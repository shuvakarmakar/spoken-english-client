import Blogs from "../Pages/Blogs/Blogs";
import Banner from "../Banner/Banner";
import HeroSection from "../HeroSection/HeroSection";
import Process from "../Process/Process";
import React from "react";
import Review from "../Review/Review";
import Footer from "../../Shared/Footer";
const Home = () => {
  return (
    <div>
      <Banner />
      <HeroSection />
      <Process />
      <Review />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
