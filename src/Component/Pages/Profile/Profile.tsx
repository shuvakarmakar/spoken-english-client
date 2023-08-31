import React, { useContext, useState } from "react";

import {
  AuthContext,
  AuthContextType,
} from "../../../Provider/AuthProvider/AuthProvider";
import "./Profile.css";
import Modal from "./ProfileImageUpdat/ProfileImageUPdate";
import { BiEdit } from "react-icons/bi";
import ProfileBannerUpdate from "./ProfileBannerUpdate/ProfieBannerUpdate";
import useUser from "../../../Hooks/useUser";
// import { set } from "react-hook-form";

const Profile = () => {
  const [users] = useUser();
  const { user } = useContext(AuthContext) as AuthContextType;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bannerModalOpen, setBannerModalOpen] = useState(false)
  
  const userProfile = users.find(u => u.email == user?.email)
  console.log(userProfile,"user");

  const openBannerModal = () => {
    setBannerModalOpen(true)
  }
  const closeBannerModal = () => {
     setBannerModalOpen(false)
  }
  const openModal = () => {
   
     setIsModalOpen(true);
   };

   const closeModal = () => {
     setIsModalOpen(false);
   };

  return (
    <>
      <div className="container mx-auto ">
        <div className="flex justify-start p-4"></div>
        <div className="flex justify-center p-10 w-full">
          <div className="bg-white shadow-lg rounded-lg w-full relative">
            <div
              className="bg-blue-500 overflow-auto aspect-auto  md:h-[300px] rounded-t-lg relative "
              onClick={openBannerModal}
            >
              <img
                className="w-full h-full bg-cover aspect-auto"
                src={userProfile?.profileBanner}
                alt=""
              />
            </div>
            <div
              className=" absolute z-10 right-3 top-[10px]  cursor-pointer "
              onClick={openBannerModal}
            >
              <BiEdit className={"w-7 h-7 text-white"}></BiEdit>
            </div>

            <div
              className=" z-20 top-[130px] md:top-[200px] md:left-[calc(50%-80px)] flex  left-[calc(50%-53px)]  justify-center absolute cursor-pointer"
              onClick={openModal}
            >
              <div className=" relative ">
                <img
                  src={
                    userProfile?.profileImage
                      ? userProfile?.profileImage
                      : user?.photoURL || ""
                  }
                  alt="User"
                  className="md:w-[150px] w-[100px] h-[100px] md:h-[150px] rounded-full border-4 border-white shadow-lg"
                />
                <div className=" absolute z-10 md:right-0 right-[-5px] md:top-[120px] top-[60px]">
                  <BiEdit className={"w-5 h-5"}></BiEdit>
                </div>
              </div>
            </div>

            {/* User Info */}
            <div className="text-center mt-10 pt-4 mb-10">
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <p className="text-gray-500">@Faruk</p>
            </div>

            <div className="intro md:flex gap-10">
              {/* Friends */}
              <div className="border-t md:p-10 p-3 bg-white shadow-xl">
                <h3 className="text-lg font-semibold my-2">Friends</h3>
                <div className="grid grid-cols-3 gap-5">
                  {users.slice(0, 6).map((friend) => (
                    <div
                      key={friend._id}
                      className="card w-[90px] md:w-[100px] h-[90px] md:h-[100px] bg-base-100 shadow-xl border p"
                    >
                      <img
                        className="rounded-md"
                        src={user?.photoURL || ""}
                        alt="friends"
                      />
                      <h2 className="font-bold">{friend?.name}</h2>
                    </div>
                  ))}
                </div>
              </div>

              {/* Intro */}
              <div className="p-10 border-t shadow-xl">
                <h3 className="text-lg font-semibold">Intro</h3>
                <div className="mt-2">
                  <ul className="flex flex-col gap-4 profile-ul">
                    <li>
                      Running Student at Student Of The Year, Running Student at
                      I'm Student.
                    </li>
                    <li>
                      Studied at Mohalchari Degree College Started in 2020
                    </li>
                    <li>
                      Lives in Mahalchari, Chittagong, Bangladesh From
                      Mahalchari, Chittagong, Bangladesh
                    </li>
                    <li>From Mahalchari, Chittagong, Bangladesh</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <>
          {" "}
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
      )}

      {bannerModalOpen && (
        <>
          <ProfileBannerUpdate
            isOpen={bannerModalOpen}
            onClose={closeBannerModal}
          ></ProfileBannerUpdate>
        </>
      )}
    </>
  );
};

export default Profile;
