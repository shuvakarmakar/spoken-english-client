import Blogs from "../Pages/Blogs/Blogs";
import Banner from "../Banner/Banner";
import HeroSection from "../HeroSection/HeroSection";
import Process from "../Process/Process";
import React from "react";
import Review from "../Review/Review";
import PopularCourse from "../Pages/Courses/PopularCourse";
const Home = () => {
  return (
    <div>
      <Banner />
      <HeroSection />
      <PopularCourse></PopularCourse>
      <Process />
      <Review />
      <Blogs />
    </div>
  );
};

export default Home;
