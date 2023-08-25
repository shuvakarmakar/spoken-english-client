import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import './PSstyle.css'

interface Course {
  _id: string;
  courseName: string;
  imageURL: string;
  price: number;
  numberOfStudents: number;
}

const PopularCourse: React.FC = () => {
  const [popularCourses, setPopularCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const filterPopularCourses = popularCourses.sort(
    (a, b) => b.numberOfStudents - a.numberOfStudents
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          " https://spoken-english-server-xi.vercel.app/courses"
        );
        const jsonData = await response.json();
        setLoading(false);
        setPopularCourses(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="bg-[#F1F5F9] pb-4">
      <section className="flex items-center justify-between py-5 w-[96%] md:w-[90%] mx-auto">
        <p className="text-2xl">Popular Courses</p>
        <Link
          to={`/all-courses`}
          className="PupularCourseButton"
        >
          View All
        </Link>
      </section>
      <section className="w-[96%] md:w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
          {filterPopularCourses.slice(0, 3).map((pc) => (
            <div
              key={pc._id}
              className="bg-slate-50 card pb-5 box-border  bg-opacity-58 border-white border-1 shadow-xl backdrop-blur-6 rounded-17 text-center  transition-all duration-500 flex items-center justify-center  font-semibold text-black"
            >
              <img
                src={pc.imageURL}
                className="w-full mx-auto h-[250px] rounded-tr-lg rounded-tl-lg"
                alt=""
              />
              <p className="text-xl">{pc.courseName}</p>
              <div className="flex items-center justify-around w-full py-2 text-lg">
                <p>${pc.price}</p>
                <div className="flex items-center font-bold text-lg gap-1">
                  <FaUsers />
                  <p> {pc.numberOfStudents}</p>
                </div>
              </div>
              <Link
                to={`course-details/${pc._id}`}
                className="PupularCourseButton"
              >
                Course Details
                
              </Link>
            </div>
          ))}
        </div>
      </section>

      <p></p>
    </div>
  );
};

export default PopularCourse;
