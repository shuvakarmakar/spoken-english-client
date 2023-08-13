import React from "react";

const VideoPlayer: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-16 px-32">
      <div className=" text-center">
        <div>
          <h1 className="text-5xl font-bold">What My Students Says</h1>
          <p className="py-6">
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
