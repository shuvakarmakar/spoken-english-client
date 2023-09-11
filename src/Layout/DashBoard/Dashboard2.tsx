import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useStudent from "../../Hooks/UseStudent";
import Spinner from "../../Component/Pages/Spinner/Spinner";
import { FaBars, FaHome } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Dashboard2 = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isStudent, isStudentLoading] = useStudent();

  return (
    <div
      className={`flex flex-col md:flex-row h-screen`}
      style={{
        backgroundImage: `linear-gradient(to right, #007bff, #00ff00)`, // Replace with your preferred gradient colors
      }}
    >
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 md:relative md:flex md:flex-shrink-0 md:w-1/5 bg-gray-500 shadow-2xl w-2/3 sm:w-1/3 lg:w-1/5 z-10 ${
          sidebarOpen ? "block" : "hidden"
        } transition-transform duration-[0.5s] ease-in-out transform translate-x-0 lg:translate-x-0`}
      >
        {/* Sidebar Content */}
        <div className="p-4">
          {isStudent && (
            <ul className="uppercase">
              <NavLink to="/" onClick={() => setSidebarOpen(false)}>
                <li className="p-2  transition duration-1000 ease-in-out flex gap-4 transform hover:bg-gray-200">
                  <FaHome></FaHome> Home
                </li>
              </NavLink>
              <NavLink
                to="/dashboard/MyEnrolledCourses"
                onClick={() => setSidebarOpen(false)}
              >
                <li className="p-2 transition duration-1000 ease-in-out transform hover:bg-gray-200">
                  My Enrolled Courses
                </li>
              </NavLink>
            </ul>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="main flex-grow p-4">
        {/* Mobile and Tablet Sidebar Toggle */}
        <button
          className="md:hidden absolute top-6 right-10 text-gray-600"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <>
              <AiOutlineClose className="text-[3vw]"></AiOutlineClose>
            </>
          ) : (
            <FaBars className="text-[3vw]"></FaBars>
          )}
        </button>

        {/* Main Content */}
        {isStudentLoading ? (
          <>
            <Spinner></Spinner>
          </>
        ) : (
          <>
            <Outlet />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard2;
