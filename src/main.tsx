import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Component/Home/Home.tsx'
import Login from './Component/Pages/Login/Login.tsx';
import SignUp from './Component/Pages/SignUp/SignUp.tsx';
import AuthProvider from './Provider/AuthProvider/AuthProvider.tsx';

const route = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element:<Home></Home>

      },
      {
        path: '/Login',
        element:<Login></Login>

      },
      {
        path: '/SignUp',
        element:<SignUp></SignUp>

      }
    ]
   }

])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  </React.StrictMode>
);
