import React from "react";
import bannervideo from "../../../../assets/animation_llvau3zl.mp4";
import { Link } from "react-router-dom";

const Banner1: React.FC = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat  flex justify-center md:pt-8 items-center min-h-screen"
        style={{
          backgroundImage: `url('https://i.ibb.co/NLJ7BHj/bgimage.jpg')`,
        }}
      >
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4 md:px-8">
          {/* Left side with text */}
          <div className="md:w-1/2 text-white md:py-16">
            <h1 className="text-4xl font-sans md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Learn Spoken English
            </h1>
            <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6">
              Improve Your Communication Skills
            </h3>
            <p className="text-sm md:text-lg mb-8">
              Join our courses to enhance your spoken English proficiency and
              gain confidence in conversations.
            </p>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <Link
                to="/freelivelessons"
                className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
              >
                Attend a Free Class
              </Link>
            </button>
          </div>

          {/* Right side with image */}
          <div className="md:w-1/2 shadow-2xl   mt-4 md:mt-0">
            <video
              src={bannervideo}
              autoPlay
              loop
              muted
              className="md:w-full md:h-96 text-center  rounded-lg w-auto h-60"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner1;
