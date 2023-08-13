import Blogs from "../Pages/Blogs/Blogs";
import Banner from "../Banner/Banner";
import HeroSection from "../HeroSection/HeroSection";
import Process from "../Process/Process";
import React from "react";
import Review from "../Review/Review";
import JoinCourse from "../JoinCourse/JoinCourse";
const Home = () => {
  return (
    <div>
      <Banner />
      <HeroSection />
      <Process />
      <JoinCourse />
      <Review />
      <Blogs />
    </div>
  );
};

export default Home;
