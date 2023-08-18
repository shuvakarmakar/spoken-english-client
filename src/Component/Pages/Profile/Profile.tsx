// src/UserProfile.js
import React, { useContext } from "react";
import useUser from "../../../Hooks/useUser";
import { AuthContext, AuthContextType } from "../../../Provider/AuthProvider/AuthProvider";
import './Profile.css'
const Profile = () => {

  const [users] = useUser()
 const { user } = useContext(AuthContext) as AuthContextType;
  return (
    <div className="container mx-auto bg-slate-200 ">
      <div className="flex justify-center p-10 w-full">
        <div className="bg-white shadow-lg rounded-lg w-full">
          {/* Header */}
          <div className="bg-blue-500 h-[300px] rounded-t-lg"></div>

          {/* Profile Picture */}
          <div className="flex justify-center -mt-16">
            <img
              src={user?.photoURL || ""}
              alt="User"
              className="w-[150px] h-[150px] rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* User Info */}
          <div className="text-center pt-4">
            <h2 className="text-xl font-semibold">{user?.displayName}</h2>
            <p className="text-gray-500">@Faruk</p>
            <p className="text-gray-700 my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* intro List */}
          <div className="intro md:flex gap-10">
            <div className=" border-t p-10 bg-white shadow-xl">
              <h3 className="text-lg font-semibold my-2">Friends</h3>
              <div className="grid grid-cols-3 gap-5">
                {users.slice(0, 6).map((friend) => {
                  return (
                    <>
                      <div className="card w-[100px] h-[100px] bg-base-100 shadow-xl border p">
                        <img
                          className="rounded-md"
                          src={user?.photoURL || ""}
                          alt="friends"
                        />

                        <h2 className="font-bold">{friend?.name}</h2>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            {/* Posts */}
            <div className="p-10 border-t shadow-xl">
              <h3 className="text-lg font-semibold">Intro</h3>
              <div className="mt-2">
                <ul className="flex flex-col gap-4 profile-ul">
                  <li>
                    Runnig Student at Student Of The Year, Runnig Student at I'm
                    Student.
                  </li>
                  <li>Studied at Mohalchari Degree College Started in 2020</li>
                  <li>
                    Lives in Mahalchari, Chittagong, Bangladesh From Mahalchari,
                    Chittagong, Bangladesh
                  </li>
                  <li>From Mahalchari, Chittagong, Bangladesh</li>
              
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
