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
import Contact from "../Component/Pages/Footer/Contact";
import CookiePolicy from "../Component/Pages/Footer/CookiePolicy";
import FAQs from "../Component/Pages/Footer/FAQs";
import HelpSupportPage from "../Component/Pages/HelpAndSupport/HelpASupport";
import GiveFeedbackPage from "../Component/Pages/Feedback/Feedback";
import HelpSupportAdminPage from "../Layout/DashBoard/AdminPages/HelpAndSup/HelpAForm";
import FeedbackReviewPage from "../Layout/DashBoard/AdminPages/GetFeedback/GetFeedback";
import PaymentFailed from "../Component/Pages/PaymentFailed/PaymentFailed";
import AllAddesClasses from "../Layout/DashBoard/InstructorPages/AllAddedClasses/AllAddesClasses";
import StartCourse from "../Layout/DashBoard/StudentPages/StartCourse/StartCourse";
import FriendRequest from "../Component/PTPCommunication/FriendRequest/FriendRequest";
import Friends from "../Component/PTPCommunication/Friends/Friends";
import Suggestion from "../Component/PTPCommunication/Suggestion/Suggestion";
import Joinroom from "../Component/Calls/Joinroom";
import Calling from "../Component/Calls/Calling";
import SearchResults from "../Component/Pages/Search/SearchResults";
import Quiz from "../Component/Pages/Quiz/Quiz";
import QuizStarter from "../Component/Pages/Quiz/QuizStarter";
import Notification from "../Component/PTPCommunication/GetCallNotification/Notification";
import LanguageTranslator from "../Component/Pages/Dictionary/LanguageTranslator ";
import VoiceToText from "../Component/VoiceToText/VoiceToText";
import Text from "../Component/Pages/TextToSpeach/Tesxt";

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
      // {
      //   path: "/Connect",
      //   element: (
      //     <PrivetRout>
      //       <PTPCommunication></PTPCommunication>
      //     </PrivetRout>
      //   ),
      // },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
      {
        path: "/Feedback",
        element: (
          <PrivetRout>
            <GiveFeedbackPage></GiveFeedbackPage>
          </PrivetRout>
        ),
      },

      {
        path: "/helpSupport",
        element: (
          <PrivetRoute>
            <HelpSupportPage></HelpSupportPage>
          </PrivetRoute>
        ),
      },

      // Dictionary (rashik)
      {
        path: "/translator",
        element: (
          <PrivetRout>
            <LanguageTranslator />
          </PrivetRout>
        ),
      },
      {
        path: "/dictionary",
        element: (
          <PrivetRout>
            <Dictionary />
          </PrivetRout>
        ),
      },
      {
        path: "/VoiceToText",
        element: <VoiceToText />,
      },
      {
        path: "/TextToSpeach",
        element: <Text />,
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
        path: "blog/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(
            ` https://spoken-english-server-xi.vercel.app/blog/${params.id}`
          ),
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
      {
        path: "contact-us",
        element: <Contact></Contact>,
      },
      {
        path: "cookie-policy",
        element: <CookiePolicy></CookiePolicy>,
      },
      {
        path: "cookie-policy",
        element: <CookiePolicy></CookiePolicy>,
      },
      {
        path: "faqs",
        element: <FAQs></FAQs>,
      },
      {
        path: "search",
        element: <SearchResults></SearchResults>,
      },

      {
        path: "quiz",
        element: <Quiz></Quiz>,
      },
      {
        path: "quiz-starter",
        element: <QuizStarter></QuizStarter>,
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
      {
        path: "payment/fail/:tranId",
        element: <PaymentFailed></PaymentFailed>,
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
      {
        path: "/dashboard/HelpForm",
        element: <HelpSupportAdminPage></HelpSupportAdminPage>,
      },
      {
        path: "/dashboard/getFeedback",
        element: <FeedbackReviewPage></FeedbackReviewPage>,
      },
      {
        path: "/dashboard/startCourse/:id",
        element: <StartCourse></StartCourse>,
      },

      // instructor routes
      {
        path: "/dashboard/AddClasses",
        element: <AddClasses></AddClasses>,
      },
      {
        path: "/dashboard/AllAddedClasses",
        element: <AllAddesClasses></AllAddesClasses>,
      },
      {
        path: "/dashboard/Application",
        element: <Applications></Applications>,
      },
    ],
  },

  // connect pages
  {
    path: "/Connect",
    element: <PTPCommunication></PTPCommunication>,

    children: [
      {
        path: "/Connect/Friend",
        element: <Friends></Friends>,
      },
      {
        path: "/Connect/FriendRequest",
        element: <FriendRequest></FriendRequest>,
      },
      {
        path: "/Connect/FriendSuggestions",
        element: <Suggestion></Suggestion>,
      },
      {
        path: "/Connect/messaging",
        element: (
          <PrivetRout>
            {" "}
            <Messaging></Messaging>
          </PrivetRout>
        ),
      },
      {
        path: "/Connect/calling",
        element: (
          <PrivetRout>
            {" "}
            <Joinroom />
          </PrivetRout>
        ),
      },
      {
        path: "/Connect/room/:roomId",
        element: (
          <PrivetRout>
            {" "}
            <Calling />
          </PrivetRout>
        ),
      },
      {
        path: "/Connect/notification",
        element: <Notification></Notification>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
