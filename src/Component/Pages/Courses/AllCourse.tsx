import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import "./PSstyle.css";

interface Course {
  _id: string;
  courseName: string;
  imageURL: string;
  price: number;
  numberOfStudents: number;
}

const AllCourse: React.FC = () => {
  const [popularCourses, setPopularCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
    <div className="bg-white mt-20">
      <section className="flex justify-center py-5 w-[96%] md:w-[90%] mx-auto text-black underline">
        <p className="text-3xl font-semibold uppercase tracking-wider">
          Popular Courses
        </p>
      </section>

      <section className="w-[96%] md:w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
          {popularCourses.map((pc) => (
            <div
              key={pc._id}
              className="card py-5 box-border bg-gradient-to-br from-blue-400 to-purple-500 border-white border-2 shadow-lg backdrop-blur-6 rounded-lg text-center transition-all duration-500 flex flex-col items-center justify-center font-semibold text-white hover:scale-105 hover:bg-gradient-to-br hover:from-pink-500 hover:to-red-500 hover:shadow-xl"
            >
              <img
                src={pc.imageURL}
                className="w-[80%] mx-auto h-[250px] rounded-t-lg object-cover"
                alt=""
              />
              <p className="text-2xl mt-4 mb-2">{pc.courseName}</p>
              <div className="flex items-center justify-around w-full py-2 text-lg">
                <p className="text-yellow-500">${pc.price}</p>
                <div className="flex items-center font-bold text-lg gap-1">
                  <FaUsers className="text-blue-500" />
                  <p>{pc.numberOfStudents} Students</p>
                </div>
              </div>
              <Link
                to={`course-details/${pc._id}`}
                className="bg-gradient-to-br from-cyan-500 to-blue-500 bg-blue-500 hover:bg-red-500 py-2 px-4 mt-2 rounded-lg text-white font-bold transition-all duration-300 transform hover:scale-105"
              >
                Course Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllCourse;
