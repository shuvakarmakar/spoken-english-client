import React, { useState, useEffect, useContext } from "react";
// import * as Rating from "react-rating";

import {
  AuthContext,
  AuthContextType,
} from "../../../Provider/AuthProvider/AuthProvider";
import Marquee from "react-fast-marquee"; // Import Marquee component

interface Review {
  name: string;
  rating: string;
  description: string;
}

const ReviewCourses: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const { user } = useContext(AuthContext) as AuthContextType;

  useEffect(() => {
    fetch(`https://spoken-english-server-xi.vercel.app/course-feedback`)
      .then((response) => response.json())
      .then((data: Review[]) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error("Error fetching course reviews:", error);
      });
  }, []); // Add an empty dependency array to run this effect only once

  return (
    <div className="max-w-lg mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">What Our Students Say!</h2>
      {reviews.length === 0 ? (
        <p>No reviews available for this course.</p>
      ) : (
        <Marquee
          speed={50} // Adjust the speed as needed (higher value = slower)
          gradient={false} // Disable gradient effect
          className="scrolling-marquee"
        >
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="bg-gray-100 p-4  ml-6  rounded-lg shadow-xl">
                <div className="flex gap-6 items-center mb-4">
                  <div className="ml-4">
                    <p className="text-blue-500 font-semibold text-lg">
                      {review.name}
                    </p>
                 
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
                  <div>
                    {/* <Rating.default
                      initialRating={parseFloat(review.rating)}
                      emptySymbol={
                        <span className="text-gray-400 text-2xl">☆</span>
                      }
                      fullSymbol={
                        <span className="text-yellow-400 text-2xl">☆</span>
                      }
                      readonly
                    > */}
                     
                  </div>
                </div>
                <p className="text-gray-600 mt-2">{review.description}</p>
              </div>
                    </div>
                  </div>
                </div>
                
              </div>
              </div>
          ))}
        </Marquee>
      )}
    </div>
  );
};

export default ReviewCourses;
