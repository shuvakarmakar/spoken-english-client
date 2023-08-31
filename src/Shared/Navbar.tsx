import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  AuthContext,
  AuthContextType,
} from "../Provider/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import UserProfileModal from "../Component/Pages/UserProfilemodal/UserProfileModal";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const { user } = useContext(AuthContext) as AuthContextType;
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setShowModal(false);
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-indigo-800 p-4   fixed z-10 top-0 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-32 mr-2" />
          </Link>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        <ul
          className={`md:flex space-y-4 md:space-y-0 md:space-x-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className="font-bold text-lg  font-mono hover:text-indigo-500 text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Connect"
              className="font-bold text-lg font-mono  hover:text-indigo-500 text-white"
            >
              Connect
            </Link>
          </li>
          <li>
            <Link
              to="freelivelessons"
              className="font-bold text-lg font-mono  hover:text-indigo-500 text-white"
            >
              Free Live Lesson
            </Link>
          </li>
          <li className="font-bold text-lg font-mono  hover:text-indigo-500 text-white">
            <Link to="all-premium-courses">All Premium Courses</Link>
          </li>
          {user && (
            <li>
              <Link
                to="/dictionary"
                className="font-bold text-lg font-mono  hover:text-indigo-500 text-white"
              >
                Dictionary
              </Link>
            </li>
          )}
        </ul>
        <div className="md:flex space-x-4">
          {user ? (
            <div className="flex items-center relative">
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
                {showModal ? <UserProfileModal /> : ""}
              </div>
            </div>
          ) : (
            <>
              <Link to="/SignUp">
                <li className="btn btn-outline mb-2  btn-info">Sign Up</li>
              </Link>
              <Link to="/Login">
                <li className="btn btn-outline btn-secondary">Login</li>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
