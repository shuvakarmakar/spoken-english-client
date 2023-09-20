import { Outlet, useLocation } from "react-router";
import Navbar from "../Shared/Navbar";
import React from "react";
import Footer from "../Shared/MainFooter/Footer";
// import Spinner from "../Component/Pages/Spinner/Spinner";


const Main = () => {
  const location = useLocation();
  // const [isLoading, setIsLoading] = useState(true);
  const helpSupport = location.pathname === "/helpSupport";
  const connected= location.pathname ==="/Connect"

 
  // window.onload = () => {
  //   setIsLoading(false)
  // };

  // if(isLoading){
  //   return <Spinner/>
  // }
 
  return (
    <>
      <div className="header">
        {helpSupport || connected ? "" : <Navbar />}
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
