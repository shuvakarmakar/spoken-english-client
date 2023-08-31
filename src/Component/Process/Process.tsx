import { FaDesktop, FaBookReader, FaFacebookMessenger } from "react-icons/fa";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Process = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <div
      className="bg-cover bg-no-repeat mt-10 flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url("https://i.ibb.co/mTvMy4T/abstract-blue-circle-black-background-technology-1142-12714.jpg")`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl text-center my-6 text-gray-50 font-extrabold">
          How It Works
        </h1>

        {/* Icons */}
        <div
          data-aos="flip-down"
          className="grid gap-5 md:gap-8 md:grid-cols-3"
        >
          <div className="text-blue-700 text-center shadow-xl rounded-lg bg-white p-4 md:p-8 transition duration-300 hover:bg-blue-100">
            <div className="w-20 md:w-36 h-20 md:h-36 mx-auto text-3xl md:text-7xl flex justify-center items-center rounded-full bg-blue-100 transition duration-300 hover:bg-blue-200 shadow-md">
              <FaDesktop />
            </div>
            <h3 className="text-base md:text-xl mt-2 md:mt-3 text-blue-700">
              Join a Course
            </h3>
          </div>
          <div className="text-blue-700 text-center shadow-xl rounded-lg bg-white p-4 md:p-8 transition duration-300 hover:bg-blue-100">
            <div className="w-20 md:w-36 h-20 md:h-36 mx-auto text-3xl md:text-7xl flex justify-center items-center rounded-full bg-blue-100 transition duration-300 hover:bg-blue-200 shadow-md">
              <FaBookReader />
            </div>
            <h3 className="text-base md:text-xl mt-2 md:mt-3 text-blue-700">
              Study, Practice and Review
            </h3>
          </div>
          <div className="text-blue-700 text-center shadow-xl rounded-lg bg-white p-4 md:p-8 transition duration-300 hover:bg-blue-100">
            <div className="w-20 md:w-36 h-20 md:h-36 mx-auto text-3xl md:text-7xl flex justify-center items-center rounded-full bg-blue-100 transition duration-300 hover:bg-blue-200 shadow-md">
              <FaFacebookMessenger />
            </div>
            <h3 className="text-base md:text-xl mt-2 md:mt-3 text-blue-700">
              Speak Confidently
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
