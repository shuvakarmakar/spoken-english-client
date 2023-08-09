import React from "react";
import { FaDesktop, FaBookReader, FaFacebookMessenger } from "react-icons/fa";

const Process = () => {
  return (
    <div className="my-10">
      <h1 className="text-5xl text-center">How it works</h1>
      {/* Icons */}
      <div className="grid ms-40 my-10 grid-cols-3">
        <div>
          <div className="border-2 border-black w-36 h-36 p-9 rounded-full  text-center text-7xl">
            <FaDesktop />
          </div>
          <h3 className="text-2xl mt-3">1. Join a Course</h3>
        </div>{" "}
        <div>
          <div className="border-2 border-black  w-36 h-36  p-9 rounded-full  text-center text-7xl">
            <FaBookReader />
          </div>{" "}
          <h3 className="text-2xl mt-3">2. Study, Practice and Review</h3>
        </div>
        <div>
          <div className="border-2 border-black  w-36 h-36  p-9 rounded-full  text-center text-7xl">
            <FaFacebookMessenger />
          </div>
          <h3 className="text-2xl mt-3">
            3. Speak Confidently & Ace the IELTS test
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Process;
