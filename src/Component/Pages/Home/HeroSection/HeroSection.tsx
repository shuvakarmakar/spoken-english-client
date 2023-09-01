import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <div className="md:mt-20">
      <div className="max-w-6xl m-7 mx-auto px-4 md:px-8">
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
            className="mb-7 bg-slate-200 border-lime-100 shadow-2xl  p-5 md:p-8"
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
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <Link
                to="/freelivelessons"
                className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
              >
                Get Started
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
