import { useContext, useState } from "react";
import {
  AuthContext,
  AuthContextType,
} from "../Provider/AuthProvider/AuthProvider";
import React from "react";
import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
import logo from "../assets/logo.png";
// import useAdmin from "../Hooks/UseAdmin";
// import UseInstructor from "../Hooks/UseInstructor";
// import UseStudent from "../Hooks/UseStudent";
import UserProfileModal from "../Component/Pages/UserProfilemodal/UserProfileModal";
// import useUser from "../Hooks/useUser";
const Navbar = () => {
  const { user } = useContext(AuthContext) as AuthContextType;
  //  const [refreshUsers] = useUser();
  const [showModal, setShowModal] = useState(false);
  // const [isAdmin] = useAdmin();
  // const [isInstructor] = UseInstructor();
  // const [isStudent] = UseStudent();
  // // // make a logout button

  return (
    <>
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link
                    className="font-bold text-gray-900 hover:text-indigo-500"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-bold text-gray-900 hover:text-indigo-500"
                    to="freelivelessons"
                  >
                    Free Live Lesson
                  </Link>
                </li>
                <li className="font-bold text-gray-900 hover:text-indigo-500">
                  <a>IELTS Speaking</a>
                  <ul className="p-2">
                    <li>
                      <a>Test Format 1</a>
                    </li>
                    <li>
                      <a>Evalution </a>
                    </li>{" "}
                    <li>
                      <a>IELTS Speaking Test </a>
                    </li>
                  </ul>
                </li>
                <li className="font-bold text-gray-900 hover:text-indigo-500">
                  <Link to="all-premium-courses">All Premium Courses</Link>
                </li>

                <div className="flex gap-5 my-5">
                  {" "}
                  <Link to={"/SignUp"}>
                    {" "}
                    <button className="btn btn-outline p-3 btn-info ">
                      SignUp
                    </button>
                  </Link>
                  <Link to="/Login">
                    <button className="btn btn-outline p-7 btn-secondary">
                      Login
                    </button>
                  </Link>
                </div>
              </ul>
            </div>
            <Link to="/">
              <img className="w-40 h-14" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex items-center gap-5">
              <li>
                <Link
                  to="/"
                  className="font-bold text-gray-900 hover:text-indigo-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Connect"
                  className="font-bold text-gray-900 hover:text-indigo-500"
                >
                  Connect
                </Link>
              </li>
              <li>
                <Link
                  to="freelivelessons"
                  className="font-bold text-gray-900 hover:text-indigo-500"
                >
                  Free Live Lesson
                </Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary className="font-bold text-gray-900 hover:text-indigo-500">
                    IELTS Speaking
                  </summary>
                  <ul className="p-2">
                    <li>
                      <a>Test Format 1</a>
                    </li>
                    <li>
                      <a>Evalution </a>
                    </li>{" "}
                    <li>
                      <a>IELTS Speaking Test </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li className="font-bold text-gray-900 hover:text-indigo-500">
                <Link to="all-premium-courses">All Premium Courses</Link>
              </li>
              {/* {user && (
                <>
                  {isAdmin && (
                    <>
                      <Link to={"/dashboard/users"}>
                        <li className="font-bold text-gray-900 hover:text-indigo-500">
                          Dashboard
                        </li>
                      </Link>
                    </>
                  )}
                  {isStudent && (
                    <>
                      <Link to={"/dashboard/MyClasses"}>
                        <li className="font-bold text-gray-900 hover:text-indigo-500">
                          Dashboard
                        </li>
                      </Link>
                    </>
                  )}
                  {isInstructor && (
                    <>
                      <Link to={"/dashboard/AddClasses"}>
                        <li className="font-bold text-gray-900 hover:text-indigo-500">
                          Dashboard
                        </li>
                      </Link>
                    </>
                  )}
                </>
              )} */}

              {user ? (
                <>
                  <div className="flex items-center relative">
                    {/* <button onClick={handleLogOut} className="btn btn-sm ml-2">
                    LogOut
                  </button> */}
                    <li>
                      <Link
                        to="/dictionary"
                        className="font-bold text-gray-900 hover:text-indigo-500"
                      >
                        Dictionary
                      </Link>
                    </li>
                    <div
                      onClick={() => setShowModal(!showModal)}
                      className="w-10 cursor-pointer h-10 bg-gray-500 rounded-full"
                    >
                      <img
                        src={user?.photoURL || ""}
                        className="rounded-full"
                        alt=""
                      />
                    </div>
                    <div className=" absolute right-0 z-50 top-[60px]">
                      {showModal ? <UserProfileModal /> : ""}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <Link to={"/SignUp"}>
                    {" "}
                    <li className="btn btn-outline btn-info">SignUp</li>
                  </Link>
                  <Link to="/Login">
                    <li className="btn btn-outline btn-secondary">Login</li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
