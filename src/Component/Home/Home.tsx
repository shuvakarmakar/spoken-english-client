import Blogs from "../Pages/Blogs/Blogs";
import Banner from "../Banner/Banner";
import HeroSection from "../HeroSection/HeroSection";
import Process from "../Process/Process";
import React from "react";
import Review from "../Review/Review";
import PopularCourse from "../Pages/Courses/PopularCourse";
import JoinCourse from "../JoinCourse/JoinCourse";
import BeInstructor from "../Pages/Be-Instructor/BeInstructor";
import ContactForm from "../ContactForm/ContactForm";

const Home = () => {
  return (
    <div>
      <Banner />
      <HeroSection />
      <BeInstructor></BeInstructor>
      <PopularCourse></PopularCourse>
      <Process />
      <JoinCourse />
      <Review />
      <Blogs />
      <ContactForm />
    </div>
  );
};

export default Home;
