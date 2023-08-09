import { createBrowserRouter } from "react-router-dom";
import SignUp from "../Component/Pages/SignUp/SignUp";
import Login from "../Component/Pages/Login/Login";
import Home from "../Component/Home/Home";
import Main from "../Layout/Main";
import Error from "../Component/Pages/Error/Error";
import FreeLiveLessons from "../Component/Pages/FreeLiveLessons/FreeLiveLessons";
import React from "react";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/Login',
                element: <Login></Login>

            },
            {
                path: '/SignUp',
                element: <SignUp></SignUp>

            },
            {
                path: '/freelivelessons',
                element: <FreeLiveLessons></FreeLiveLessons>
            }
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
])