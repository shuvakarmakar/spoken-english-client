// src/UserProfileModal.js
import React, { useContext, } from "react";
import { AuthContext, AuthContextType } from "../../../Provider/AuthProvider/AuthProvider";
import useAdmin from "../../../Hooks/UseAdmin";
import UseInstructor from "../../../Hooks/UseInstructor";
import UseStudent from "../../../Hooks/UseStudent";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const UserProfileModal = () => {

  const { Logout, user } = useContext(AuthContext) as AuthContextType;

  const [isAdmin] = useAdmin();
  const [isInstructor] = UseInstructor();
  const [isStudent] = UseStudent();
  // // make a logout button
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log out",
    }).then((result) => {
      if (result.isConfirmed) {
        Logout()
          .then(() => {
        
            Swal.fire(
              "LogOut",
              "Your successfully has been LogOut.",
              "success"
            );
          })
          .catch(() => {
            alert("something went wrong");
            return;
          });
      }
    });
  
  };


  return (
    <div className=" inset-0 flex z-50">
      <div className="bg-white rounded-lg p-6 shadow-md w-80">
        <div className="flex  items-center justify-center">
          <img
            src={user?.photoURL || ""}
            alt="User"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
        </div>
        <hr />
        <ul className="text-gray-600 space-y-2">
          <li>
            <Link to={"/profile"}>
              {" "}
              <p>Profile</p>
            </Link>
          </li>
          <li>
            {user && (
              <>
                {isAdmin && (
                  <>
                    <Link to={"/dashboard/users"}>
                      <li className="font-bold text-gray-900 hover:text-indigo-500">
                        Dashboard
                      </li>
                    </Link>
                  </>
                )}
                {isStudent && (
                  <>
                    <Link to={"/dashboard"}>
                      <li className="font-bold text-gray-900 hover:text-indigo-500">
                        Dashboard
                      </li>
                    </Link>
                  </>
                )}
                {isInstructor && (
                  <>
                    <Link to={"/dashboard/AddClasses"}>
                      <li className="font-bold text-gray-900 hover:text-indigo-500">
                        Dashboard
                      </li>
                    </Link>
                  </>
                )}
              </>
            )}
          </li>
          <li>
            <Link to={"/profileSetting"} state={user?.uid}>
              <p>Settings</p>
            </Link>
          </li>
          <li>
            <a href="#">Help and Support</a>
          </li>
          <li>
            <a href="#">Give Feedback</a>
          </li>
          <li onClick={handleLogOut}>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfileModal;
