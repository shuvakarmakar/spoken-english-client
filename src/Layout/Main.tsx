import { Outlet, useLocation } from "react-router";
import Navbar from "../Shared/Navbar";
import React from "react";
import Footer from "../Shared/Footer";

const Main = () => {
  const location = useLocation();

  return (
    <>
      <div className="header">
        {/* Header */}
        <Navbar />
      </div>

      {/* main  */}
      <div className="main min-h-[100vh]">
        <Outlet></Outlet>
      </div>

      {/* Footer */}

      <div className="Footer">
        {location.pathname === "/Connect" ? "" : <Footer></Footer>}
      </div>
    </>
  );
};

export default Main;
