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
      <h2 className="text-3xl font-bold text-center m-8 uppercase my-20">
        What Our Students Say!
      </h2>
      {reviews.length === 0 ? (
        <p>No reviews available for this course.</p>
      ) : (
        <Marquee
          speed={50}
          gradient={false}
          className="scrolling-marquee course-details "
        >
          <div className="flex gap-5">
            {reviews.map((review, index) => (
              <div key={index} className="shadow-xl mb-4 p-4 w-[300px] bg-slate-100">
                <div className="flex items-center mb-2">
                  <div className="ml-4">
                    <p className="text-blue-500 font-semibold">{review.name}</p>

                    <p className="text-gray-600 mt-5">{review.description}</p>
                    <div className=" mt-2">
                      <StarRatings
                        rating={parseFloat(review.rating)}
                        starDimension="20px"
                        starRatedColor="gold"
                        starEmptyColor="gray"
                        numberOfStars={5}
                        name={`rating-${index}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      )}
    </div>
  );
};

export default ReviewCourses;



