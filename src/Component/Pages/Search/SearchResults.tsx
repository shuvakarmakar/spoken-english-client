// SearchResults.tsx

import React, { useEffect, useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

interface Course {
    _id: string;
    courseName: string;
    imageURL: string;
    price: number;
    numberOfStudents: number;
  }
const SearchResults: React.FC = () => {

    const [popularCourses, setPopularCourses] = useState<Course[]>([]);
    const location = useLocation();
    const searchQuery=location.state?.value;

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(
              " https://spoken-english-server-xi.vercel.app/courses"
            );
            const jsonData = await response.json();
            // setLoading(false);
            setPopularCourses(jsonData);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
    
        fetchData();
      }, []);
  // Use the searchValue to display search results or perform further actions
  return ( 
    <div className="py-5 md:py-10 mt-[80px]">
        <div className="w-[96%] md:w-[90%] mx-auto">
            <h2 className="text-xl font-semibold bg-[rgba(0,0,0,0.1)] px-3 py-2">Search Results for: <span className='text-red-600'>{searchQuery}</span> </h2>

            {
                !searchQuery && <div className="text-red-500 text-xl">No result found</div>
            }
            <section className='py-3'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5">
            {searchQuery && popularCourses.filter(course => course.courseName.toLowerCase().includes(searchQuery)).map((pc) => (
              <div
                key={pc._id}
                className="bg-[#ffffff] card pb-5 box-border  bg-opacity-58 border-white border-1 shadow-xl backdrop-blur-6 rounded-17 text-center  transition-all duration-500 flex items-center justify-center  font-semibold text-black cardbg"
              >
                <img
                  src={pc.imageURL}
                  className="w-full mx-auto h-[250px] rounded-tr-lg rounded-tl-lg"
                  alt=""
                />
                <p className="text-xl darkText">{pc.courseName}</p>
                <div className="flex items-center justify-around w-full py-2 text-lg darkText">
                  <p className="darkText">${pc.price}</p>
                  <div className="flex items-center font-bold text-lg gap-1 darkText">
                    <FaUsers />
                    <p> {pc.numberOfStudents}</p>
                  </div>
                </div>
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <Link
                    to={`/course-details/${pc._id}`}
                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                  >
                    Course Details
                  </Link>
                </button>
              </div>
            ))}
          </div>
            </section>
        </div>
      
      {/* Display your search results here */}
    </div>
  );
};

export default SearchResults;
