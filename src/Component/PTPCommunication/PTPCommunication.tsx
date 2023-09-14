import React, { ChangeEvent, useContext, useEffect, useState } from "react";
//
// import useUser from '../../Hooks/useUser';
// import Spinner from '../Pages/Spinner/Spinner';
// import UserProfileCard from './UserProfleCard/UserProfileCard';

// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import axios from 'axios';
import { FaBars, FaHome } from "react-icons/fa";
// FaUserCheck, FaUserFriends, FaUserPlus
// import FriendRequest from "./FriendRequest/FriendRequest";
// import Suggestion from "./Suggestion/Suggestion";
import "./PTPCommunication.css";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
// import {
//   AuthContext,
//   AuthContextType,
// } from "../../Provider/AuthProvider/AuthProvider";
import useNotification from "../../Hooks/useNotification";
import axios from "axios";
import useUser from "../../Hooks/useUser";
import { AuthContext, AuthContextType } from "../../Provider/AuthProvider/AuthProvider";
// import { changeLanguage } from "i18next";


interface MyObject {
  _id: number;
  name: string;
  uid: string;
  profileImage: string;
  // other properties
}

const PTPCommunication = () => {
  const [users] = useUser();
  const [data, setData] = useState<MyObject[]>([]); // Store your fetched data here
  // const Student = users.filter((user) => user.Roll == "student");
  const {onlineUsers } = useContext(AuthContext) as AuthContextType;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<MyObject[]>([]);
  console.log(data)

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    console.log(query);
    setSearchQuery(query);

    const filtered = users.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filtered);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://spoken-english-server-xi.vercel.app/GetUsers"
      ); // Replace with your API endpoint
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
console.log(data);

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

 

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  //  const toggleMobileMenu = () => {
  //    setMobileMenuOpen(!mobileMenuOpen);
  //  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  // notifications
  const [unReadNotifications, unReadFriendRequest] = useNotification();

  const location = useLocation();

  const searchPath = location.pathname === "/Connect/FriendSuggestions";
  return (
    <div className=" relative">
      <div className="header">
        <div className="nav-section w-full py-2 bg-[#10315E] flex flex-col md:flex-row justify-between items-center text-white px-8">
          {/* Mobile and Tablet Menu (Hidden on Desktop) */}
          <div className="md:hidden flex items-center justify-between w-full">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mr-4 text-2xl focus:outline-none"
            >
              <FaBars />
            </button>

            <p className="text-xl">
              <NavLink to={"/"}>
                <FaHome className={"w-8 h-8"}></FaHome>
              </NavLink>
            </p>
          </div>

          {/* Desktop Menu (Hidden on Mobile and Tablet) */}
          <ul
            className={`${
              mobileMenuOpen
                ? "flex flex-col gap-5 p-10 bg-gray-800 rounded  absolute z-10 left-1 top-[114px] transition-all "
                : "hidden"
            } md:flex md:gap-10 font-semibold font-serif`}
          >
            <li>
              <NavLink to={"/Connect/Friend"} onClick={closeMobileMenu}>
                Friends
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Connect/FriendRequest"} onClick={closeMobileMenu}>
                Friends Request{" "}
                <div className=" badge bg-blue-500 text-white">
                  {unReadFriendRequest}
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/Connect/FriendSuggestions"}
                onClick={closeMobileMenu}
              >
                Suggestions
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Connect/notification"} onClick={closeMobileMenu}>
                Notification{" "}
                <div className=" badge bg-blue-500 text-white">
                  {unReadNotifications}
                </div>
              </NavLink>
            </li>
          </ul>

          {/* Search Bar */}
          {searchPath && (
            <>
              <div className="flex items-center mt-4 md:mt-0">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search…"
                    className="d-input w-full md:w-[500px]  text-gray-900 input-bordered "
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <button className="btn-custom bg-blue-500 h-10 px-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>

                {/* Home Icon (Hidden on Mobile and Tablet) */}
              </div>
            </>
          )}
          <p className="hidden md:block ml-6">
            <NavLink to={"/"}>
              <FaHome className={"w-10 h-10"}></FaHome>
            </NavLink>
          </p>
        </div>
      </div>

      <div className=" overflow-auto h-[100vh]">
        <Outlet></Outlet>
      </div>

      {filteredData.length > 0 && searchQuery.length>0 ? (
        <>
          <div className="search-result w-full absolute top-[130px] md:top-[50px] bg-[#10315E] z-20 border p-10  flex justify-center ">
            <div className="item  grid grid-cols-1 gap-5 md:grid-cols-3 ">
              {filteredData?.map((student) => {
                const isUserOnline = onlineUsers[student?.uid] === true;
                return (
                  <>
                    <Link to={`/profile/${student._id}`}>
                      <div className="bg-white shadow-md w-[300px] rounded-md p-4 relative border ">
                        <div className="flex items-center">
                          <div className="w-16 h-16 bg-blue-500 rounded-full">
                            <img
                              src={student?.profileImage}
                              className="rounded-full w-full h-full"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <h2 className="text-lg font-semibold">
                              {student.name}
                            </h2>
                          </div>
                          <div
                            className={`ml-2 w-2 h-2 rounded-full ${
                              isUserOnline ? "bg-green-500" : "bg-gray-400"
                            }`}
                          ></div>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default PTPCommunication;
