import { Outlet, useLocation } from "react-router";
import Navbar from "../Shared/Navbar";
import React from "react";
import Footer from "../Shared/MainFooter/Footer";

const Main = () => {
  const location = useLocation();

  const helpSupport = location.pathname === "/helpSupport";

  return (
    <>
      <div className="header">{helpSupport ? "" : <Navbar />}</div>

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
