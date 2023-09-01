import React, { useEffect } from "react";
import { FaCheckSquare } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const JoinCourse = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <div
      className="bg-black bg-no-repeat flex justify-center items-center"
      // style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="container mx-auto grid md:grid-cols-2 p-8 md:p-16 gap-16">
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center space-y-8 md:space-y-12"
        >
          <h1 className="text-3xl md:text-5xl text-gray-50 font-bold">
            Learn With US
          </h1>
          <p className="text-lg md:text-xl text-white">
            You can{" "}
            <span className="text-sky-500 font-semibold">
              develop your speaking skills
            </span>{" "}
            with us through:
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-lg md:text-xl text-white">
              <FaCheckSquare className="text-sky-500" />
              Our Online Courses
            </li>
            <li className="flex items-center gap-4 text-lg md:text-xl text-white">
              <FaCheckSquare className="text-sky-500" />
              Our Free Website Resources
            </li>
            <li className="flex items-center gap-4 text-lg md:text-xl text-white">
              <FaCheckSquare className="text-sky-500" />
              Our YouTube Channel - English Speaking Success
            </li>
            <li className="flex items-center gap-4 text-lg md:text-xl text-white">
              <FaCheckSquare className="text-sky-500" />
              Our Live Lessons with Video and PDF
            </li>
          </ul>
          <div className="flex flex-col md:flex-row mt-8 md:space-x-10">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl text-red-500 font-semibold">
                2.7M
              </h1>
              <p className="text-xl text-white">YouTube Followers</p>
            </div>
            <div className="text-center md:text-left mt-4 md:mt-0">
              <h1 className="text-4xl md:text-5xl text-red-500 font-semibold">
                2.7M
              </h1>
              <p className="text-xl text-white">YouTube Subscribers</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="flex justify-center">
          <img
            src="https://keithspeakingacademy.com/wp-content/uploads/2023/06/Mobile-Learning-Keit-OHare.png"
            alt="Mobile Learning"
            className="max-w-full md:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinCourse;
