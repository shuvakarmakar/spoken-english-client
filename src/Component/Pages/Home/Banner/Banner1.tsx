import React from "react";
import bannervideo from "../../../../assets/animation_llvau3zl.mp4";
import { Link } from "react-router-dom";
import bgimage from "../../../../assets/bgimage.jpg";

const Banner1: React.FC = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat  flex justify-center pt-24 items-center min-h-screen"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
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
              Join our courses to enhance your spoken English proficiency and
              gain confidence in conversations.
            </p>
            <Link to="/freelivelessons">
              <button className="btn btn-outline btn-info hover:bg-white hover:text-blue-900">
                Attend Free Classes
              </button>
            </Link>
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
