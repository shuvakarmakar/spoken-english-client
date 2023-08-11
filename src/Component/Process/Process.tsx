import React from "react";
import { FaDesktop, FaBookReader, FaFacebookMessenger } from "react-icons/fa";

const Process = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="my-10">
        <h1 className="text-3xl md:text-5xl text-center mb-5 md:mb-10">
          How it works
        </h1>
        {/* Icons */}
        <div className="grid gap-5 md:gap-8 md:grid-cols-3">
          <div className="text-pink-600 text-center">
            <div className="border-2 border-pink-600 w-20 md:w-36 h-20 md:h-36 p-4 md:p-9 rounded-full mx-auto text-3xl md:text-7xl">
              <FaDesktop />
            </div>
            <h3 className="text-base md:text-2xl mt-2 md:mt-3">
              1. Join a Course
            </h3>
          </div>
          <div className="text-pink-600 text-center">
            <div className="border-2 border-pink-600 w-20 md:w-36 h-20 md:h-36 p-4 md:p-9 rounded-full mx-auto text-3xl md:text-7xl">
              <FaBookReader />
            </div>
            <h3 className="text-base md:text-2xl mt-2 md:mt-3">
              2. Study, Practice and Review
            </h3>
          </div>
          <div className="text-pink-600 text-center">
            <div className="border-2 border-pink-600 w-20 md:w-36 h-20 md:h-36 p-4 md:p-9 rounded-full mx-auto text-3xl md:text-7xl">
              <FaFacebookMessenger />
            </div>
            <h3 className="text-base md:text-2xl mt-2 md:mt-3">
              3. Speak Confidently & Ace the IELTS test
            </h3>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-secondary">JOIN A COURSE</button>
      </div>
    </div>
  );
};

export default Process;
