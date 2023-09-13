import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import StarRatings from "react-star-ratings";

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
  }, []);

  return (
    <div className="my-16">
      <h2 className="text-3xl underline font-bold text-center m-8">
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
                    <StarRatings
                      rating={parseFloat(review.rating)}
                      starDimension="30px"
                      starRatedColor="gold"
                      starEmptyColor="gray"
                      numberOfStars={5}
                      name={`rating-${index}`}
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



