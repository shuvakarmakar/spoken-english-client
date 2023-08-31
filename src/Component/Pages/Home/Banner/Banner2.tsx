import React from "react";
import banner1 from "../../../../assets/images.jpg";
import { Link } from "react-router-dom";

const Banner2: React.FC = () => {
  return (
    <div className="bg-blue-900 flex border-b-2 border-indigo-600 justify-center pt-24 items-center min-h-screen">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4 md:px-8">
        {/* Left side with text */}
        <div className="md:w-1/2 text-white md:py-24">
          <h1 className="text-4xl font-sans md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Learn Spoken English
          </h1>
          <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6">
            Improve Your Communication Skills
          </h3>
          <p className="text-sm md:text-lg mb-8">
            Join our courses to enhance your spoken English proficiency and gain
            confidence in conversations.
          </p>
          <Link to="/Login">
            <button className="btn btn-outline btn-info hover:bg-white hover:text-blue-900">
              Attend Free Classes
            </button>
          </Link>
        </div>

        {/* Right side with image */}
        <div className="md:w-1/2 mt-4 md:mt-0">
          <img
            src={banner1}
            alt="Spoken English"
            className="md:w-full md:h-auto rounded-lg w-auto  h-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner2;
