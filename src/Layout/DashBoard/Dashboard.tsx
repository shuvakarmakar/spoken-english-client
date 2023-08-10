import React from 'react';
import {NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {

  const admin: boolean = true;
  const student: boolean = false;
  return (
    <div className="flex  gap-10">
      {/* left nav */}
      <div className="left-nav h-[100vh]  w-[300px] bg-slate-100 shadow-lg">
        {admin && (
          <>
            <ul className=' p-10 uppercase'>
              <NavLink to={"/dashboard/users"}>
                {" "}
                <li>Users</li>
              </NavLink>
            </ul>
          </>
        )}

        {student && (
          <>
            <ul className=' uppercase p-10'>
              <NavLink to={"/dashboard/users"}>
                {" "}
                <li>Users</li>
              </NavLink>
            </ul>
          </>
        )}


      </div>

      {/* main  */}
      <div className="main w-full ">
        <Outlet></Outlet>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Dashboard;