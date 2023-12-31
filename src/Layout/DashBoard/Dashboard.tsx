import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/UseAdmin";
import UseInstructor from "../../Hooks/UseInstructor";
import UseStudent from "../../Hooks/UseStudent";
import Spinner from "../../Component/Pages/Spinner/Spinner";
import { FaBars,FaHome } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import AdminNav from "./AdminPages/AdminNav/AdminNav";
const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = UseInstructor();
  const [isStudent, isStudentLoading] = UseStudent();

  return (
    <div
      className="bg-[#0d1446]  min-h-screen"
      // style={{
      //   backgroundImage:
      //     "url('https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg?w=900&t=st=1691992198~exp=1691992798~hmac=b8c9e4f94bf34ff4f185e4d90db42722d8b164c03572352c9dc80751264b8ecf')",
      //   backgroundPosition: "cover",
      //   opacity: "0.9",
      // }}
      // className="flex h-[100vh] "
    >
      {/* Mobile and Tablet Sidebar */}
      <div
        className={` fixed top-0 left-0 bottom-0 bg-[#150F2D] text-white shadow-md w-2/3 sm:w-1/3 md:w-1/4 lg:w-1/5 z-10 ${
          sidebarOpen ? "block" : "hidden"
        } transition-transform duration-[0.5s] ease-in-out transform translate-x-0 lg:translate-x-0`}
      >
        <div className="p-4">
          {isAdmin && (
            <ul className="uppercase font-semibold font-serif">
              <AdminNav setSidebarOpen={setSidebarOpen}></AdminNav>
            </ul>
          )}

          {isStudent && (
            <ul className="uppercase ">
              <NavLink to="/" onClick={() => setSidebarOpen(false)}>
                <li className="p-2 transition duration-1000 ease-in-out transform hover:bg-gray-200 flex">
                  <FaHome className={"w-6 h-6 me-2 "}></FaHome>
                  Home
                </li>
              </NavLink>
              <NavLink
                to="/dashboard/MyEnrolledCourses"
                onClick={() => setSidebarOpen(false)}
              >
                <li className="p-2 transition duration-1000 text-sky-700 ease-in-out transform hover:bg-gray-200">
                  My Enrolled Courses
                </li>
              </NavLink>
              <NavLink to="/dashboard/PaymentHistory">
                <li className="p-2 transition duration-1000 text-white ease-in-out transform hover:bg-gray-200">
                  Payment History
                </li>
              </NavLink>
            </ul>
          )}
          {isInstructor && (
            <ul className="uppercase">
              <NavLink to="/" onClick={() => setSidebarOpen(false)}>
                <li className="p-2 transition duration-1000 ease-in-out transform hover:bg-gray-200 flex">
                  <FaHome className={"w-6 h-6 me-2 "}></FaHome>
                  Home
                </li>
              </NavLink>
              <NavLink
                to="/dashboard/AddClasses"
                onClick={() => setSidebarOpen(false)}
              >
                <li className="p-2 transition duration-1000 ease-in-out transform hover:bg-gray-200">
                  Add Classes
                </li>
              </NavLink>
              <NavLink
                to="/dashboard/AllAddedClasses"
                onClick={() => setSidebarOpen(false)}
              >
                <li className="p-2 transition duration-1000 ease-in-out transform hover:bg-gray-200">
                  All Added Classes
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
          className=" absolute top-6 right-10 text-gray-600"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <>
              <AiOutlineClose className="text-[3vw] text-white"></AiOutlineClose>
            </>
          ) : (
            <FaBars className="text-[3vw] text-white"></FaBars>
          )}
        </button>

        {/* Main Content*/}

        {isAdminLoading || isInstructorLoading || isStudentLoading ? (
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

export default Dashboard;
