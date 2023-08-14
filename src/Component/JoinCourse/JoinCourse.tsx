import React, { useEffect } from "react";
import { FaCheckSquare } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const JoinCourse = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <div className="bg-slate-100 mt-10  ">
      <div className="grid  md:grid-cols-2 p-10 grid-cols-1">
        <div data-aos="fade-right" className="pl-10">
          <h1 className="text-4xl">Learn With Me</h1>
          <p className="my-3">
            You can <b>develop you speaking skills</b> with me via
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4 text-2xl">
              <div className="text-sky-500">
                {" "}
                <FaCheckSquare />
              </div>{" "}
              My Online Courses
            </li>
            <li className="flex gap-4 text-2xl">
              <div className="text-sky-500">
                {" "}
                <FaCheckSquare />
              </div>{" "}
              My Free Website Resources
            </li>
            <li className="flex gap-4 text-2xl">
              <div className="text-sky-500">
                {" "}
                <FaCheckSquare />
              </div>{" "}
              My YouTube Channel - English Speaking Success
            </li>
            <li className="flex gap-4 text-2xl">
              <div className="text-sky-500">
                {" "}
                <FaCheckSquare />
              </div>{" "}
              My Live Lessons with Video and PDF
            </li>
          </ul>
          <div className="flex mt-10 gap-10">
            <div>
              {" "}
              <h1 className="text-5xl">2.7 million</h1>
              <p>Youtube Followers</p>
            </div>
            <div>
              <h1 className="text-5xl">2.7 million</h1>
              <p>Youtube Followers</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          {" "}
          <img src="https://keithspeakingacademy.com/wp-content/uploads/2023/06/Mobile-Learning-Keit-OHare.png" />
        </div>
      </div>
      <div className="text-center py-5">
        <button className=" btn hover:bg-black btn-secondary">
          JOIN THE GOLD COURSE
        </button>
      </div>
    </div>
  );
};

export default JoinCourse;
