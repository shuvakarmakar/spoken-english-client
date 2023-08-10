import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";
import React from "react";
import Footer from "../Shared/Footer";
const Main = () => {
  return (
    <>
      <div className="header">
        {/* Header */}
        <Navbar />
      </div>

      {/* main  */}
      <div className="main">
        <Outlet></Outlet>
      </div>

      {/* Footer */}

      <div className="Footer">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Main;
