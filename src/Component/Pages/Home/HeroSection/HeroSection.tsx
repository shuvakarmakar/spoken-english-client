import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import herobg from "../../../../assets/herobg.jpeg";

const HeroSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <div
      className="bg-cover bg-no-repeat flex border-b-2 justify-center pt-12 md:pt-24 items-center min-h-screen"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4 md:gap-8">
          <div data-aos="fade-right">
            <img
              src="https://keithspeakingacademy.com/wp-content/uploads/2023/05/Keith_Web.png"
              className="max-w-full md:max-w-sm rounded-lg shadow-2xl p-8 md:p-10"
              alt="Speaker"
            />
          </div>
          <div
            data-aos="fade-left"
            className="mx-0 border-lime-100 shadow-2xl p-5 md:p-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold border-b-2 mb-4 md:mb-6">
              Become a Confident English Speaker
            </h1>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed py-4 md:py-6 lg:py-10">
              So you are preparing for IELTS, but you are not confident when you
              need to speak English, right? Maybe you’ve been learning English
              since you were at school, but you still get stuck when you speak.
              Also, and I am just guessing here, sometimes you feel the English
              in your head is great, but when you speak, it comes out much
              worse. If this sounds familiar, then you’re what I call a
              Struggling English Student but relax, because I can help you
              become a Confident English Speaker.
            </p>
            <button className="btn btn-primary hover:bg-yellow-300 hover:text-blue-900 py-2 md:py-3 lg:py-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
