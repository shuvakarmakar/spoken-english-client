import React, { useState, useEffect, useContext } from "react";
import Rating from "react-rating";
import {
  AuthContext,
  AuthContextType,
} from "../../../Provider/AuthProvider/AuthProvider";

const ReviewCourses = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const { user } = useContext(AuthContext) as AuthContextType;

  useEffect(() => {
    fetch(`https://spoken-english-server-xi.vercel.app/course-feedback`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error("Error fetching course reviews:", error);
      });
  }, []); // Add an empty dependency array to run this effect only once

  return (
    <div className="max-w-lg mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Whats Our Student Says!</h2>
      {reviews.length === 0 ? (
        <p>No reviews available for this course.</p>
      ) : (
        <div>
          {reviews.map((review, index) => (
            <div key={index} className="shadow-lg mb-4 p-4">
              <div className="flex items-center mb-2">
                <div className="flex-shrink-0 w-10 h-10">
                  <img
                    src={
                      user?.photoURL ||
                      `https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg`
                    }
                    alt="User Profile"
                    className="w-10 h-10 rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-blue-500 font-semibold">{review.name}</p>
                  <Rating
                    initialRating={parseFloat(review.rating)}
                    emptySymbol={
                      <span className="text-gray-400 text-2xl">☆</span>
                    }
                    fullSymbol={
                      <span className="text-yellow-400 text-2xl">☆</span>
                    }
                    readonly
                  />
                </div>
              </div>
              <p className="text-gray-600">{review.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewCourses;
