import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";

interface AdminNavProps {
  setSidebarOpen: (open: boolean) => void;
}

const AdminNav: React.FC<AdminNavProps> = ({
  setSidebarOpen,
}: AdminNavProps): ReactElement => {
  return (
    <>
      <NavLink to="/" onClick={() => setSidebarOpen(false)}>
        <li className="p-2 transition duration-1000 ease-in-out transform hover:bg-gray-200">
          Home
        </li>
      </NavLink>

      <NavLink to="/dashboard/users" onClick={() => setSidebarOpen(false)}>
        <li className="p-2 transition duration-1000 ease-in-out transform hover:bg-gray-200">
          Users
        </li>
      </NavLink>
      <NavLink
        to="/dashboard/Application"
        onClick={() => setSidebarOpen(false)}
      >
        <li className="p-2 transition duration-1000 ease-in-out transform hover:bg-gray-200">
          Application
        </li>
      </NavLink>
    </>
  );
};

export default AdminNav;
