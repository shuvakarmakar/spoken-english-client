import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <>
      <div className=" bg-[#f3f5fc]">
        <div style={{ overflow: "hidden" }}>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: "#1CA0E2", width: "157%", height: 157 }}
          >
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
          </svg>
        </div>
        <div className=" bg-[#f3f5fc]">
          <div className="">
            <div className="md:flex justify-between gap-20  items-center">
              <div data-aos="fade-right " className="md:w-[50%] ">
                <img
                  src="https://i.ibb.co/f9GDLWC/christina-wocintechchat-com-swi1-DGRCsh-Q-unsplash.png"
                  className="p-8 w-full  md:p-10"
                  alt="Speaker"
                />
              </div>
              <div
                data-aos="fade-left"
                className="mb-7 border-lime-100  p-5 md:p-8  md:w-[50%] "
              >
                <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold mb-3 uppercase">
                  Be a Confident <span className="text-blue-500">English</span>{" "}
                  Speaker
                </h1>
                <hr />
                <p className="text-sm md:text-base lg:text-lg leading-7 font-serif mt-4">
                  So you are preparing for IELTS, but you are not confident when
                  you need to speak English, right? Maybe you’ve been learning
                  English since you were at school, but you still get stuck when
                  you speak. Also, and I am just guessing here, sometimes you
                  feel the English in your head is great, but when you speak, it
                  comes out much worse. If this sounds familiar, then you’re
                  what I call a Struggling English Student but relax, because I
                  can help you become a Confident English Speaker.
                </p>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 mt-10">
                  <Link
                    to="/freelivelessons"
                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-blue-500 text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                  >
                    Get Started
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
