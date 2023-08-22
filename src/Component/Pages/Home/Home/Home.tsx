import React from "react";
import Process from "../../../Process/Process";
import Review from "../../../Review/Review";
import BeInstructor from "../../Be-Instructor/BeInstructor";
import Blogs from "../../Blogs/Blogs";
import PopularCourse from "../../Courses/PopularCourse";
import Banner from "../Banner/Banner";
import ContactForm from "../ContactForm/ContactForm";
import HeroSection from "../HeroSection/HeroSection";
import JoinCourse from "../JoinCourse/JoinCourse";


const Home = () => {
  return (
    <div className="overflow-x-hidden">
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
