import React, { useState } from "react";
import Swal from "sweetalert2";
// import {
//   AuthContext,
//   AuthContextType,
// } from "../../../../Provider/AuthProvider/AuthProvider";

const CourseFeedback = () => {
  // const { user } = useContext(AuthContext) as AuthContextType;

  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    description: "",
  });

  const handleInputChange = (e: {
    target: { name: any; value: any };
    preventDefault: () => void;
  }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://spoken-english-server-xi.vercel.app/course-feedback/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        Swal.fire("Thanks For Your Feedback");

        // Clear the form
        setFormData({
          name: "",
          rating: 0,
          description: "",
        });
      } else {
        console.error("Error sending data");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-xl rounded-md boeder changebg">
      <h2 className="text-2xl font-semibold mb-4">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="darkText block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="lightText w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-400 focus:outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="darkText block text-gray-700 font-medium mb-2"
          >
            Rating
          </label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            className="lightText w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-400 focus:outline-none"
            required
          >
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="darkText block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="lightText w-full px-4 py-2 border border-gray-300 rounded-md resize-none h-36 focus:ring focus:ring-indigo-200 focus:border-indigo-400 focus:outline-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CourseFeedback;
