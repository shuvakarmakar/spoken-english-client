import { createBrowserRouter } from "react-router-dom";
import SignUp from "../Component/Pages/SignUp/SignUp";
import Login from "../Component/Pages/Login/Login";
import Home from "../Component/Pages/Home/Home/Home";
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
import AddClasses from "../Layout/DashBoard/InstructorPages/AddClasses/AddClasses";
import InstructorApplicationForm from "../Component/Pages/InstructorForm/InstructorForm";
import AllPremuimCourses from "../Component/Pages/AllPremiumCourses/AllPremuimCourses";
import CourseDetails from "../Component/Pages/AllPremiumCourses/CourseDetails";
import PTPCommunication from "../Component/PTPCommunication/PTPCommunication";
import PrivetRout from "./PrivetRout/PrivetRout";
// import { element } from "prop-types";
import Checkout from "../Component/Pages/Checkout/Checkout";
import AboutUs from "../Component/Pages/Footer/AboutUs";
import Profile from "../Component/Pages/Profile/Profile";
import ProfileDetails from "../Component/Pages/ProfileDetails/ProfileDetails";
import Dictionary from "../Component/Pages/Dictionary/Dictionary";
import Messaging from "../Component/Messageing/Messaging";
import Applications from "../Layout/DashBoard/AdminPages/Applications/Applications";
import PaymentSuccess from "../Component/Pages/PaymentSuccess/PaymentSuccess";
import PrivecyPolicy from "../Component/Pages/Footer/PrivecyPolicy";
import TermsAndConditations from "../Component/Pages/Footer/TermsAndConditations";
import ProfileSettings from "../Component/Pages/Profile/Setting/Setting";
import MyEnrolledCourses from "../Layout/DashBoard/StudentPages/MyEnrolledCourses/MyEnrolledCourses";
import PrivetRoute from "./PrivetRout/PrivetRout";

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
        element: <FreeVideos></FreeVideos>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/applyInstructor",
        element: <InstructorApplicationForm></InstructorApplicationForm>,
      },
      {
        path: "/Connect",
        element: (
          <PrivetRout>
            <PTPCommunication></PTPCommunication>
          </PrivetRout>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
      // Dictionary (rashik)
      {
        path: "/dictionary",
        element: (
          <PrivetRout>
            <Dictionary />
          </PrivetRout>
        ),
      },
      {
        path: "/profile/:id",
        element: (
          <PrivetRout>
            <ProfileDetails></ProfileDetails>
          </PrivetRout>
        ),
      },
      {
        path: "/profileSetting",
        element: (
          <PrivetRout>
            {" "}
            <ProfileSettings></ProfileSettings>
          </PrivetRout>
        ),
      },
      {
        path: "/messaging",
        element: (
          <PrivetRout>
            {" "}
            <Messaging></Messaging>
          </PrivetRout>
        ),
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
        path: "popular-courses",
        element: <PopularCourse></PopularCourse>,
      },
      {
        path: "all-courses",
        element: <AllCourse></AllCourse>,
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "privacy-policy",
        element: <PrivecyPolicy></PrivecyPolicy>,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditations></TermsAndConditations>,
      },
      // shuva-work
      {
        path: "all-premium-courses",
        element: <AllPremuimCourses></AllPremuimCourses>,
      },
      {
        path: "course-details/:id",
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "payment/success/:tranId",
        element: <PaymentSuccess></PaymentSuccess>,
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
        element: <Users></Users>,
      },

      // students routes
      {
        path: "/dashboard/MyEnrolledCourses",
        element: <MyEnrolledCourses></MyEnrolledCourses>,
      },

      // instructor routes
      {
        path: "/dashboard/AddClasses",
        element: <AddClasses></AddClasses>,
      },
      {
        path: "/dashboard/Application",
        element: <Applications></Applications>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
