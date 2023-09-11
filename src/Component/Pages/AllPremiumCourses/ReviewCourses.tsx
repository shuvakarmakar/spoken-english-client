import React, { useState, useEffect } from "react";
import Rating from "react-rating";
import Marquee from "react-fast-marquee";

interface Review {
  name: string;
  rating: string;
  description: string;
}

const ReviewCourses: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

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
    <div>
      <h2 className="text-2xl font-semibold text-center m-8">
        What Our Students Say!
      </h2>
      {reviews.length === 0 ? (
        <p>No reviews available for this course.</p>
      ) : (
        <Marquee speed={50} gradient={false} className="scrolling-marquee">
          {reviews.map((review, index) => (
            <div key={index} className="shadow-xl mb-4 p-4">
              <div className="flex items-center mb-2">
                <div className="ml-4">
                  <p className="text-blue-500 font-semibold">{review.name}</p>
                  <div className="">
                    <Rating
                      initialRating={parseFloat(review.rating)} // Convert rating to a number
                      emptySymbol={
                        <span className="text-gray-400 text-2xl">☆</span>
                      }
                      fullSymbol={
                        <span className="text-yellow-400 text-2xl">☆</span>
                      }
                      readonly
                    />
                  </div>
                  <p className="text-gray-600 mt-2">{review.description}</p>
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
