import React from "react";

const VideoPlayer: React.FC = () => {
  return (
    <div className="flex gap-10 mt-10 px-32">
      <div className=" text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">What My Students Sayh</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/topBLaz4zgk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
