import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const BeInstructor: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  // https://i.ibb.co/fN7s1vW/become-a-teacher-hero-image-removebg-preview.png
  return (
    <div className=" mx-auto py-8 my-[100px] md:flex  justify-between items-center px-[10%] bg-slate-100 gap-20  md:h-[400px]">
      <div className=" md:w-[50%] w-full">
        <h2 className="md:text-4xl text-2xl font-bold mb-4 ">Become an Instructor</h2>
        <p className="text-gray-600 mb-4 text-sm leading-7">
          Would you like to expand your experience in English sector? Do you
          want to share your knowledge with Student and working professionals?
          If so, we would love to hire you as an instructor
        </p>

        <NavLink to={"/applyInstructor"}>
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-5 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={toggleForm}
          >
            Apply Now
          </button>
        </NavLink>
      </div>

      <div className="right-img md:w-[50%] w-full mt-10 md:mt-0">
        <img
          src="https://i.ibb.co/fN7s1vW/become-a-teacher-hero-image-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default BeInstructor;
