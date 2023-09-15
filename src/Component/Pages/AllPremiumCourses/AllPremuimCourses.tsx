import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SideIcons from "../Home/Home/Side";

interface Course {
  _id: string;
  imageURL: string;
  courseName: string;
  courseDetails: string;
  price:string;
  instructorName: string;
  instructorEmail: string;
}

const MainComponent: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://spoken-english-server-xi.vercel.app/courses")
      .then((response) => response.json())
      .then((data: Course[]) => setCourses(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto py-8 pt-32">
      <Helmet>
        <title>Premium Classes</title>
      </Helmet>
      <SideIcons />
      <h1 className="text-5xl font-semibold text-center underline mb-6">
        All Premium Courses
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course._id}
            className="card py-5 box-border bg-gradient-to-br from-blue-400 to-purple-500 border-white border-2 shadow-lg backdrop-blur-6 rounded-lg text-center transition-all duration-500 flex flex-col items-center justify-center font-semibold hover:text-white hover:scale-105 hover:bg-gradient-to-br hover:from-pink-500 hover:to-red-500 hover:shadow-xl"
          >
            <div className="relative">
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={course.imageURL}
                alt={course.courseName}
              />
              <div className="absolute top-0 right-0 bg-gradient-to-b from-blue-400 to-blue-600 p-2 rounded-tl-lg">
                <span className="text-white font-semibold text-xs">New</span>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white darkText mb-2">
                {course.courseName}
              </h2>
              <p className="text-white darkText">{course.courseDetails}</p>
              <div className="mt-3">
                <p className="text-white font-semibold darkText">
                  Course Price: ${course.price}
                </p>
                <p className="text-white darkText mt-1">
                  Instructor: {course.instructorName}
                </p>
                <p className="text-white darkText mt-1">
                  Instructor Email: {course.instructorEmail}
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <Link
                  to={`/course-details/${course._id}`}
                  className="text-white font-semibold py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
