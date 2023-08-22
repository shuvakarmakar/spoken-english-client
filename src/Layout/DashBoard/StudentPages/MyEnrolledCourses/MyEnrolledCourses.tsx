import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  AuthContext,
  AuthContextType,
} from "../../../../Provider/AuthProvider/AuthProvider";

interface Course {
  _id: string;
  product_name: string;
  total_amount: number;
}

const MyEnrolledCourses: React.FC = () => {
  const { user } = useContext(AuthContext) as AuthContextType;
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);

  useEffect(() => {
    if (user) {
      fetch(
        `https://spoken-english-server.vercel.app/enrolled-courses/${user.email}`
      )
        .then((response) => response.json())
        .then((data) => setEnrolledCourses(data))
        .catch((error) =>
          console.error("Error fetching enrolled courses:", error)
        );
    }
  }, [user]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold text-center my-5">
        My Enrolled Courses
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Course Name</th>
              <th>Price</th>
              <th className="flex justify-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourses.map((course, index) => (
              <tr key={course._id}>
                <td>{index + 1}</td>
                <td>
                  <Link className="text-blue-500" to={`/course/${course._id}`}>
                    {course.product_name}
                  </Link>
                </td>
                <td>${course.total_amount}</td>
                <td className="flex justify-center">
                  <Link
                    className="btn btn-secondary text-white"
                    to={`/start-course/${course._id}`}
                  >
                    Start Now
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledCourses;
