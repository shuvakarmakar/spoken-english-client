import { Outlet, useLocation } from "react-router";
import Navbar from "../Shared/Navbar";
import React from "react";
import Footer from "../Shared/MainFooter/Footer";

const Main = () => {
  const location = useLocation();

  const helpSupport = location.pathname === "/helpSupport";
  const connected= location.pathname ==="/Connect"
 
  return (
    <>
      <div className="header">
        {helpSupport || connected ? "" : <Navbar  />}
      </div>

      {/* main  */}
      <div className="main min-h-[100vh]">
        <Outlet></Outlet>
      </div>

      {/* Footer */}

      <div className="Footer">{connected ? "" : <Footer></Footer>}</div>
    </>
  );
};

export default Main;
