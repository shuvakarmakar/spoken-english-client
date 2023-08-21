import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div>
      <p className="">About Us</p>
      <section>
        <div className="w-[96%] w-[90%] mx-auto">
          <div className="flex">
            <div className="w-48 h-64 bg-gray-100 p-6 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-105">
              <div className="flex flex-col justify-center items-center transition duration-200 ease-in-out transform hover:-translate-y-1 hover:opacity-80">
                <div className="w-16 h-16 bg-gradient-to-t from-yellow-300 to-orange-500 rounded-full mb-4 transition duration-200 ease-in-out transform hover:scale-110"></div>
                <div className="text-xl font-semibold text-gray-800">
                  Steve Jobs
                </div>
                <div className="text-sm text-gray-500">
                  CEO &amp; Co-Founder
                </div>

                <ul className="flex justify-around w-full opacity-0 transform -translate-y-2 transition duration-200 ease-in-out hover:translate-y-0 hover:opacity-100">
                <li className="list-none">
              <FaFacebook/>
                </li>
                <li className="list-none">
                 <FaLinkedin/>
                </li>
                <li className="list-none">
                  <FaGithub/>
                </li>
              </ul>
              </div>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
