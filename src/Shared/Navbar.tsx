import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import UserProfileModal from "../Component/Pages/UserProfilemodal/UserProfileModal";
import {
  AuthContext,
  AuthContextType,
} from "../Provider/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext) as AuthContextType;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setShowModal(false);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100 px-4 py-5 w-full md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <AcademicCapIcon className="h-6 w-6 text-blue-500" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            Elearner{" "}
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center font-mono hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Connect/Friend"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Connect
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/freelivelessons"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Free Live Lesson
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-premium-courses"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              All Premium Courses
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink
                to="/dictionary"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Dictionary
              </NavLink>
            </li>
          )}

          {/* Display Sign Up and Login buttons if not authenticated */}
          {!user ? (
            <>
              <li>
                <Link
                  to="/SignUp"
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/Login"
                  className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Login
                </Link>
              </li>
            </>
          ) : (
            <li>
              {/* Display avatar as a navigation item */}
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
              <div className="absolute right-0 z-50 top-[60px]">
                {showModal && <UserProfileModal />}
              </div>
            </li>
          )}
        </ul>

        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Toggle Menu"
            title="Toggle Menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-5 text-gray-600" />
            ) : (
              <Bars3BottomRightIcon className="w-5 text-gray-600" />
            )}
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <AcademicCapIcon className="h-6 w-6 text-blue-500" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        ELearner
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/Connect"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Connect
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/freelivelessons"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        Free Live Lesson
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/all-premium-courses"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }
                      >
                        All Premium Courses
                      </NavLink>
                    </li>
                    {user && (
                      <li>
                        <NavLink
                          to="/dictionary"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Dictionary
                        </NavLink>
                      </li>
                    )}

                    {/* Display Sign Up and Login buttons if not authenticated */}
                    {!user ? (
                      <>
                        <div className="flex">
                          <li>
                            <Link
                              to="/SignUp"
                              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                              Sign Up
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/Login"
                              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                              Login
                            </Link>
                          </li>
                        </div>
                      </>
                    ) : (
                      <li>
                        {/* Display avatar as a navigation item */}
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
                        <div className="absolute right-0 z-50 top-[60px]">
                          {showModal && <UserProfileModal />}
                        </div>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
