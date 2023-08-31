import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
          <button className="btn btn-primary">Get Started</button>
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
