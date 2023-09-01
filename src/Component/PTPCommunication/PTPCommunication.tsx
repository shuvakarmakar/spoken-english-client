import React, { ChangeEvent, useState } from "react";
// 
// import useUser from '../../Hooks/useUser';
// import Spinner from '../Pages/Spinner/Spinner';
// import UserProfileCard from './UserProfleCard/UserProfileCard';

// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import axios from 'axios';
import { FaHome, } from "react-icons/fa";
// FaUserCheck, FaUserFriends, FaUserPlus
// import FriendRequest from "./FriendRequest/FriendRequest";
// import Suggestion from "./Suggestion/Suggestion";
import './PTPCommunication.css'
import {NavLink, Outlet } from "react-router-dom";
// interface MyObject {
//   _id: number;
//   name: string;
//   uid: string;
//   // other properties
// }
// import { Pagination } from "swiper/modules";
const PTPCommunication = () => {
  // const [users, loading] = useUser();
  // const [data, setData] = useState<MyObject[]>([]); // Store your fetched data here
  // const Student = users.filter((user) => user.Roll=="student");

  const [searchQuery, setSearchQuery] = useState<string>("");
  //  const [filteredData, setFilteredData] = useState<MyObject[]>([]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    // const filtered = users.filter((item) =>
    //   item.name.toLowerCase().includes(query.toLowerCase())
    // );

    // setFilteredData(filtered);
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://spoken-english-server-xi.vercel.app/GetUsers"
  //     ); // Replace with your API endpoint
  //     setData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // // Fetch data when the component mounts
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="header">
      <div className="nav-section w-full py-2  bg-[#10315E] flex justify-around items-center text-white">
        <ul className="flex gap-10 font-semibold font-serif ">
          <NavLink to={"/Connect/Friend"}>
            <li>Friends</li>
          </NavLink>
          <NavLink to={"/Connect/FriendRequest"}>
            <li>Friends Request</li>
          </NavLink>
          <NavLink to={"/Connect/FriendSuggestions"}>
            <li>Suggestions</li>
          </NavLink>
          <NavLink to={"/Connect/messaging"}>
            <li>Messenger</li>
          </NavLink>
        </ul>

        <div className="flex gap-10 items-center ml-[-100px]">
          <div className="input-group ml-[-40px]">
            <input
              type="text"
              placeholder="Search…"
              className="d-input w-[200px] md:w-[500px]
              input-bordered"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn-custom  bg-blue-500  h-[40px ] px-2">
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

          <p className="ml-20">
            <NavLink to={'/'}>
              <FaHome className={"w-10 h-10"}></FaHome>
            </NavLink>
          </p>
        </div>
      </div>
      <Outlet></Outlet>

      {/* <div className=" my-[100px]">
        <div className="slid my-[20px] flex justify-end mr-5 "></div>
        <>
          {loading ? (
            <Spinner></Spinner>
          ) : (
            <>
              <div className="flex gap-10 md:mx-0 mx-[10%]">
                <div className="left  relative">
                  <Tabs className={"flex gap-10 "}>
                    <div className="list border p-3  shadow-md hidden md:flex w-[500px]">
                      <TabList
                        className={
                          "font-serif font-semibold uppercase w-full border-none outline-none p-2 flex flex-col gap-4 cursor-pointer"
                        }
                      >
                        <Tab className={"flex gap-2 p-2"}>
                          {" "}
                          <>
                            <FaUserFriends
                              className={"w-6 h-6 text-blue-500"}
                            ></FaUserFriends>
                          </>{" "}
                          All Friend
                        </Tab>
                        <Tab className={"flex gap-2 p-2"}>
                          {" "}
                          <FaUserPlus
                            className={"w-6 h-6 text-blue-500"}
                          ></FaUserPlus>{" "}
                          Request
                        </Tab>
                        <Tab className={"flex gap-2 p-2"}>
                          {" "}
                          <FaUserCheck
                            className={"w-6 h-6 text-blue-500"}
                          ></FaUserCheck>{" "}
                          Suggestion
                        </Tab>
                      </TabList>
                    </div>
                    <div className="panel overflow-y-scroll h-[80vh] scroll-m-0">
                      <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
                          {searchQuery === "" ? (
                            <>
                              {data.map((std) => (
                                <UserProfileCard
                                  key={std._id}
                                  student={std}
                                ></UserProfileCard>
                              ))}
                            </>
                          ) : (
                            <>
                              {filteredData.map((std) => (
                                <UserProfileCard
                                  key={std._id}
                                  student={std}
                                ></UserProfileCard>
                              ))}
                            </>
                          )}
                          {filteredData.length < 0 && (
                            <>
                              <p className="text-center font-bold">
                                Not Found any Friend
                              </p>
                            </>
                          )}
                        </div>
                      </TabPanel>
                      {/* <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full">
                          {users.map((std) => (
                            <FriendRequest
                              key={std._id}
                              student={std}
                            ></FriendRequest>
                          ))}
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
                          {users.map((std) => (
                            <Suggestion
                              key={std._id}
                              student={std}
                            ></Suggestion>
                          ))}
                        </div>
        //               </TabPanel> */}
      {/* //             </div> */}
      {/* //       */}
      {/* //       </div>     </Tabs>
        //         </div> */}
      {/* //     </> */}
      {/* //   )}
        // </>
        // o
      // </div> */}
    </div>
  );
};

export default PTPCommunication;