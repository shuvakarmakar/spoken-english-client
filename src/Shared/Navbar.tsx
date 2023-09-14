import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
import { FiSun, FiMoon } from "react-icons/fi";
import { FaSearch, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import "aos/dist/aos.css";
import LanguageDropdown from "../Component/LanguageDropdown/LanguageDropdown";
import Aos from "aos";
import useNotification from "../Hooks/useNotification";

interface Course {
  _id: string;
  imageURL: string;
  courseName: string;
  courseDetails: string;
  price: string;
  instructorName: string;
  instructorEmail: string;
}

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext) as AuthContextType;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    Aos.init(); // Initialize AOS library
  }, []);

  const toggleMenu = () => {
    setShowModal(false);
    setIsMenuOpen(!isMenuOpen);
  };
  const [unReadNotifications, unReadFriendRequest] = useNotification();
  const navItems = (
    <>
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
          Connect{" "}
          <div className=" badge bg-blue-500 text-white">
            {unReadNotifications || unReadFriendRequest}
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/freelivelessons"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Free Live Lesson{" "}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-premium-courses"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Premium Courses
        </NavLink>
      </li>
    </>
  );

  // DarkMode

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));
    if (newDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  // Search Functionality
  // const displaySearchedCourses =(event)=>{

  // }

  const openSearchBar = () => {
    document.getElementById("searchBarContainer")?.classList.remove("hidden");
  };

  const [query, setQuery] = useState<string>("");

  const handleSearch = () => {
    navigate("/search", { state: { value: query } });
    document.getElementById("SearchResultContainer")?.classList.add("hidden");
  };

  const hideSearchPopUp = () => {
    document.getElementById("searchBarContainer")?.classList.add("hidden");
    document.getElementById("SearchResultContainer")?.classList.add("hidden");
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Handle the Enter key press here
      handleSearch();
      // You can perform any action you want when the Enter key is pressed
      // For example, submit a form, perform a search, etc.
    }
  };
  // Courses

  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://spoken-english-server-xi.vercel.app/courses")
      .then((response) => response.json())
      .then((data: Course[]) => setCourses(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const hideSerachBar = () => {
    document.getElementById("SearchResultContainer")?.classList.add("hidden");
  };

  return (
    <div className="bg-[#FDFDFD] border-b shadow-2xl px-4 py-5 w-full md:px-24 lg:px-8 changebg nav-bg fixed top-0 z-50 navbarStyle">
      {/* Searchbar */}
      
      <div
        id="searchBarContainer"
        className="top-0 absolute w-full h-full bg-blue-500 z-50 left-0 hidden changebg"
      >
        <div className="absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-2 md:gap-8">
          {/* <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-l px-2 py-3 w-[50vw] shadow-xl"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="bg-blue-700 text-white rounded-r px-3 py-3 shadow-xl"
              onClick={handleSearch}
            >
              Saerch
            </button>
          </div> */}

          <div className="relative rounded-lg  p-4">
            <input
              type="text"
              data-aos="fade-down"
              className="cardbg darkText outline-none shadow-xl block w-[70vw] md:w-[50vw] pl-5  pr-4 py-2 md:py-3 border rounded-lg leading-5focus:outline-none  focus:border-blue-500 sm:text-sm"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <div className="absolute inset-y-0 right-8 pl-3 flex items-center ">
              <svg
                className="w-5 h-5 text-blue-700 cursor-pointer font-bold text-lg md:text-xl"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleSearch}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
                />
              </svg>
            </div>
          </div>

          <button
            className=" focus:outline-none right-0 textDark "
            onClick={hideSearchPopUp}
          >
            {<FaTimes size={24} className="" />}
          </button>
        </div>
      </div>
      {query && (
        <div
          id="SearchResultContainer"
          className="changebg cursor-pointer p-4 absolute SearchResultContainer w-[96vw] md:w-[50vw] top-20 bg-white z-50 left-1/2 -translate-x-1/2 shadow-2xl"
        >
          {query &&
            courses
              .filter((course) =>
                course.courseName.toLowerCase().includes(query)
              )
              .map((c) => (
                <div
                  onClick={hideSerachBar}
                  className="searchCard  py-2 hover:bg-slate-400 hover:shadow-xl hover:translate-x-1 px-1"
                  key={c._id}
                >
                  <Link to={`/course-details/${c._id}`} key={c._id}>
                    <div className="flex items-center gap-4 md:gap-6">
                      <img
                        src={c.imageURL}
                        className="w-[50px] md:w-[100px] md:h-auto h-full"
                        alt=""
                      />
                      <div className="">
                        <p className=" textDark text-sm md:text-lg">
                          {c.courseName}
                        </p>
                        <p className="font-bold text-sm md:text-lg">
                          ${c.price}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
        </div>
      )}
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <AcademicCapIcon className="h-6 w-6 text-blue-500" />
          <span className="siteTitle ml-2 text-xl font-bold tracking-wide text-gray-800 darkText">
            Elearner{" "}
          </span>
        </Link>

        {/* Nav Items Section */}
        {/* <ul className="items-center font-mono hidden space-x-8 lg:flex">
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
        </ul>
         */}
        <ul className="items-center font-sans hidden space-x-8 lg:flex">
          {navItems}

          {/* Display Sign Up and Login buttons if not authenticated */}
          {!user ? (
            <>
              <li>
                <Link
                  to="/Login"
                  className="text-white bg-gradient-to-br from-cyan-500 to-blue-500  group-hover:to-blue-700 hover:bg-gradient-to-tl  hover:scale-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
        <div className="flex gap-2 md:gap-4 items-center">
          {/* Dark Mode */}
          <button className=" focus:outline-none" onClick={toggleDarkMode}>
            {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>

          {/* search */}
          <button className="searchBtn" onClick={openSearchBar}>
            <FaSearch size={24} />
          </button>

          {/* Language */}
          <button>
            <LanguageDropdown
              changeLanguage={function (_language: string): void {
                throw new Error("Function not implemented.");
              }}
            />
          </button>
        </div>

        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Toggle Menu"
            title="Toggle Menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-5 text-black font-bold text-xl" />
            ) : (
              <Bars3BottomRightIcon className="w-5 text-black  font-bold text-lg darkText" />
            )}
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-20">
              <div className="p-5 bg-white border rounded shadow-sm darkText changebg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <AcademicCapIcon className="h-6 w-6 text-blue-500" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase darkText">
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
                    {navItems}

                    {/* Display Sign Up and Login buttons if not authenticated */}
                    {!user ? (
                      <>
                        <div className="flex">
                          <li>
                            <Link
                              to="/Login"
                              className="text-white bg-gradient-to-br from-cyan-500 to-blue-500  group-hover:to-blue-700 hover:bg-gradient-to-tl  hover:scale-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
