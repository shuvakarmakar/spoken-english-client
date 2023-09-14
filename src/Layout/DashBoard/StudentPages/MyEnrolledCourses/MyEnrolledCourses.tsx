import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  AuthContext,
  AuthContextType,
} from "../../../../Provider/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

interface Course {
  _id: string;
  product_name: string;
  total_amount: number;
  instructor_name: string;
  instructor_email: string;
}

const MyEnrolledCourses: React.FC = () => {
  const { user } = useContext(AuthContext) as AuthContextType;
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (user) {
      fetch(
        `https://spoken-english-server-xi.vercel.app/enrolled-courses/${user.email}`
      )
        .then((response) => response.json())
        .then((data) => {
          setEnrolledCourses(data);
          console.log(data);
        })
        .catch((error) =>
          console.error("Error fetching enrolled courses:", error)
        );
    }
  }, [user]);

  return (
    <div className=" mx-auto py-8">
      <Helmet>
        <title>Enroll | Dashboard</title>
      </Helmet>
      <h1 className="text-3xl text-white font-semibold text-center mb-8 my-5">
        My Enrolled Courses
      </h1>
      <div className="grid md:grid-cols-2 gap-6">


        {
          enrolledCourses.map((course) =>  (
    
            <div className="card flex flex-col sm:flex-row w-100%   bg-[#494eaf] text-white shadow-xl">
              <div className="w-1/3">
                <figure className="px-10 pt-10">
                  <img src="" alt="Thumbnails " className="rounded-xl" />
                </figure>
              </div>
              <div>
                <div className="card-body items-center text-center mb-4">
                  <h2 className="card-title mb-4">{course.product_name}</h2>
                  <p className="mb-4">{course.instructor_name}</p>
                  <progress className="progress progress-info w-48 h-4 mb-4" value="20" max="100">20%</progress>
                  <Link
                    className="btn border-0  bg-gradient-to-r from-[#ca62e4] to-[#211c6b] text-white"
                    to={`/dashboard/startCourse/${course._id}`}
                    state={course}
                  >
                    Continue Course
                  </Link>
                </div>
              </div>


            </div>
          ))
        }
      </div>
      {/* <div className="overflow-x-auto"> */}

      {/* <table className="table ">
          <thead>
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>Price</th>
              <th>Instructor</th>
              <th className="flex justify-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourses.map((course, index) => (
              <tr key={course._id}>
                <td>{index + 1}</td>
                <td className="font-bold">{course.product_name}</td>
                <td>${course.total_amount}</td>
                <td>{course.instructor_name}</td>
                <td className="flex justify-center">
                  <Link
                    className="btn btn-primary text-white"
                    to={`/dashboard/startCourse/${course._id}`}
                    state={course}
                  >
                    Start Now
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      {/* </div> */}
    </div>
  );
};

export default MyEnrolledCourses;
