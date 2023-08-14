import { createBrowserRouter } from "react-router-dom";
import SignUp from "../Component/Pages/SignUp/SignUp";
import Login from "../Component/Pages/Login/Login";
import Home from "../Component/Home/Home";
import Main from "../Layout/Main";
import Error from "../Component/Pages/Error/Error";
import FreeLiveLessons from "../Component/Pages/FreeLiveLessons/FreeLiveLessons";
import Blogs from "../Component/Pages/Blogs/Blogs";
import BlogDetails from "../Component/Pages/Blogs/BlogDetails";

import React from "react";
import AllBlogs from "../Component/Pages/Blogs/AllBlogs";
import PopularCourse from "../Component/Pages/Courses/PopularCourse";
import Dashboard from "../Layout/DashBoard/Dashboard";
import Users from "../Layout/DashBoard/AdminPages/Users/Users";
import FreeVideos from "../Component/Pages/FreeVideos/FreeVideos";
import AllCourse from "../Component/Pages/Courses/AllCourse";
import MyClasses from "../Layout/DashBoard/StudentPages/MyClasses/MyClasses";
import AddClasses from "../Layout/DashBoard/InstructorPages/AddClasses/AddClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/freelivelessons",
        element: <FreeLiveLessons></FreeLiveLessons>,
      },
      {
        path: "/free-videos",
        element: <FreeVideos></FreeVideos>
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "blog/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(`https://spoken-english-server.vercel.app/blog/${params.id}`),
      },
      {
        path: "all-blogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path:"popular-courses",
        element:<PopularCourse></PopularCourse>
    },
    {
      path:"all-courses",
      element:<AllCourse></AllCourse>
  },
    ],
  },
  // dashboard routes
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      //  admin routes
        {
            path: "/dashboard/users",
            element:<Users></Users>
      },

      
        // students routes
        {
            path: "/dashboard/MyClasses",
            element:<MyClasses></MyClasses>
      },

        // instructor routes
        {
            path: "/dashboard/AddClasses",
            element:<AddClasses></AddClasses>
        }
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
