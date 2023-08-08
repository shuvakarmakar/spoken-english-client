import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";

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

      <div className="Footer"></div>
    </>
  );
};

export default Main;
