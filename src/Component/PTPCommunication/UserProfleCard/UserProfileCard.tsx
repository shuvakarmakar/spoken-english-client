import React, { useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import {
  AuthContext,
  AuthContextType,
} from "../../../Provider/AuthProvider/AuthProvider";
import ViewUserProfile from "./ViewUserProfile/ViewUserProfile";

interface UserProfileCardProps {
  student: {
    name: string;
    uid: string;
    _id: number;
    // Add other properties of your student object
  };
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ student }) => {
  const { user } = useContext(AuthContext) as AuthContextType;

  const [onlineUsers, setOnlineUsers] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
   const socket = io("https://amused-assorted-bar.glitch.me/");

    if (user) {
      socket.emit("userConnect", { userId: user.uid });

      socket.on(
        "onlineUsers",
        (updatedOnlineUsers: { [key: string]: boolean }) => {
          console.log(updatedOnlineUsers, "connected");
          setOnlineUsers(updatedOnlineUsers);
        }
      );
    }

    return () => {
      if (user) {
        socket.emit("userDisconnect", { userId: user.uid });
      }
      socket.disconnect();
    };
  }, [user]);

  // Check if the connected user's online status is true
  const isUserOnline = onlineUsers[student.uid] === true;

// user profile view
  
  const [showModal, setShowModal] = useState(false);
   const [id,SetId]=useState<number>(0)

  const openModal = (id: number) => {
      SetId(id)
     setShowModal(true);
   };

   const closeModal = () => {
     setShowModal(false);
   };



  return (
    <>
      <div
        onMouseLeave={closeModal}
        className="bg-white shadow-md rounded-md p-4 relative"
      >
        <div className="flex items-center">
          <div
            onClick={() => openModal(student._id)}
            className="w-16 h-16 bg-blue-500 rounded-full"
          >
            <img src={""} className="rounded-full" alt="" />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">{student.name}</h2>
            <p className="text-gray-500">Web Developer</p>
          </div>
          <div
            className={`ml-2 w-2 h-2 rounded-full ${
              isUserOnline ? "bg-green-500" : "bg-gray-400"
            }`}
          ></div>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">
            I'm a passionate web developer with a love for crafting clean and
            efficient code. Let's build amazing things together!
          </p>
        </div>
        <div className="mt-4 flex justify-between">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring">
            Call
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring">
            Message
          </button>
        </div>
        {showModal && (
          <div className=" absolute">
            <ViewUserProfile
              student={student}
              id={id}
              showModal={showModal}
              closeModal={closeModal}
            ></ViewUserProfile>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfileCard;
