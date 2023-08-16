import React, { useState } from "react";
import { NavLink } from "react-router-dom";


const BeInstructor: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="max-w-lg mx-auto py-8">
      <div className="bg-gray-100 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Apply to Become an Instructor
        </h2>
        <p className="text-gray-600 mb-4">
          Do you have expertise in a certain field? Share your knowledge and
          become an instructor!
        </p>

        <NavLink to={'/applyInstructor'}>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={toggleForm}
          >
            Apply Now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default BeInstructor;
