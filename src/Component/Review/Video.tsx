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
      className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-16 px-4 md:px-16 lg:px-32"
    >
      <div className="text-center md:text-left">
        <div>
          <h1 className="text-2xl md:text-5xl font-bold">
            What My Students Say
          </h1>
          <p className="py-3 md:py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
      <div className="md:aspect-w-16 md:aspect-h-9">
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
