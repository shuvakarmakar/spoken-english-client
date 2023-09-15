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
  const [show, setShow] = useState(false);
  return (
    <div className="container mx-auto py-8 pt-32">
      <Helmet>
        <title>Premium Classes</title>
      </Helmet>
      <SideIcons />
      <h1 className="md:text-5xl text-2xl font-semibold text-center  mb-6 uppercase">
        Premium Courses
      </h1>
      <hr />
      <div className="flex justify-center ">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-10">
          {courses.map((course) => (
            <div
              key={course._id}
              className={`box-border bg-gradient-to-br w-[300px] ${ show ? " h-[450px]" :"min-h-[350px]"}  from-blue-400 to-purple-500 border-white border-2 shadow-lg backdrop-blur-6 rounded-lg transition-all duration-500  hover:text-white hover:scale-105 hover:bg-gradient-to-br hover:from-pink-500 hover:to-pink-400 hover:shadow-xl`}
            >
              <div className="relative w-full h-48  ">
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
                {/* <span className="bg-gray-200">
                  <IoBookSharp></IoBookSharp>
                </span> */}
                <h2 className={`font-semibold ${ show ? "hidden" :"block"} text-white darkText mb-2`}>
                  {course.courseName}
                </h2>
                {/* <p className={`text-white darkText ${show ? "hidden" : "block"}`}>
                  {course.courseDetails.slice(0, 100)}...
                </p> */}
                <div onClick={()=>setShow(!show)} className=" ">
                  <div className="collapse collapse-arrow ">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium uppercase">
                      more
                    </div>
                    <div className="collapse-content">
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
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link
                    to={`/course-details/${course._id}`}
                    className="text-white font-semibold py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm transition-colors duration-300"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
