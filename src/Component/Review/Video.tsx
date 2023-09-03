import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const VideoPlayer: React.FC = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <div
      data-aos="zoom-in-down"
      className="grid md:grid-cols-2 grid-cols-1 gap-10  px-4 md:px-16 lg:px-32 mt-[150px] mb-10"
    >
      <div className="md:text-center  border">
        <div className="p-8">
          <h1 className="text-2xl md:text-4xl font-bold uppercase">
            What Our Students Say
          </h1>
          <p className="py-3 md:py-6 text-justify">
          Our students have provided positive feedback about our Spoken English courses. They appreciate the engaging and interactive nature of the classes, which has helped them improve their speaking skills with confidence. They also value the supportive and patient instructors who create a comfortable learning environment. Overall, they find our courses effective and enjoyable for enhancing their spoken English abilities.
          </p>
          <button className="relative mt-5 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <Link
              to="/freelivelessons"
              className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
            >
              Get Started
            </Link>
          </button>
        </div>
      </div>
      <div className="md:aspect-w-16 md:aspect-h-9 p-8 border">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/topBLaz4zgk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
