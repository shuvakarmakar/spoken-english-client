import React, { useContext, useState } from "react";
// import io from "socket.io-client";
import {
  AuthContext,
  AuthContextType,
} from "../../../Provider/AuthProvider/AuthProvider";
import ViewUserProfile from "./ViewUserProfile/ViewUserProfile";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

interface UserProfileCardProps {
  student: {
    InstructorDisabled: boolean;
    Roll: string;
    email: string;
    name: string;
    password: string;
    profileBanner: string;
    profileImage: string;
    uid: string;
    _id: number;

    // Add other properties of your student object
  };
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ student }) => {
  const {  onlineUsers } = useContext(AuthContext) as AuthContextType;

  // const [onlineUsers, setOnlineUsers] = useState<{ [key: string]: boolean }>(
  //   {}
  // );

  // useEffect(() => {
  //  const socket = io("https://amused-assorted-bar.glitch.me/");

  //   if (user) {
  //     socket.emit("userConnect", { userId: user.uid });

  //     socket.on(
  //       "onlineUsers",
  //       (updatedOnlineUsers: { [key: string]: boolean }) => {
  //         console.log(updatedOnlineUsers, "connected");
  //         setOnlineUsers(updatedOnlineUsers);
  //       }
  //     );
  //   }

  //   return () => {
  //     if (user) {
  //       socket.emit("userDisconnect", { userId: user.uid });
  //     }
  //     socket.disconnect();
  //   };
  // }, [user]);

  // Check if the connected user's online status is true
  const isUserOnline = onlineUsers[student.uid] === true;
  // const isUserOnline = onlineUsers.some((user) => user.uid === student.uid);

  // user profile view

  const [showModal, setShowModal] = useState(false);
  const [id, SetId] = useState<number>(0);

  const openModal = (id: number) => {
    SetId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const navigate = useNavigate();

  const handleJoinRoom = (uid: string) => {
    navigate(`/Connect/room/${uid}`);
  };

  return (
    <>
      <div className="card-bg border shadow-md rounded-md p-4 relative ">
        <div className="flex items-center">
          <div
            onClick={() => openModal(student._id)}
            className="w-16 h-16  rounded-full"
          >
            {" "}
            {student.profileImage ? (
              <>
                {" "}
                <img
                  src={student?.profileImage}
                  className="rounded-full w-full h-full"
                  alt=""
                />
              </>
            ) : (
              <>
                <FaUserCircle className={"w-10 h-10"}></FaUserCircle>
              </>
            )}
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold">{student.name}</h2>
          </div>
          <div
            className={`ml-2 w-2 h-2 rounded-full ${
              isUserOnline ? "bg-green-500" : "bg-gray-400"
            }`}
          ></div>
        </div>
        <div className="mt-4">
          <p className="text-gray-300">
            I'm a passionate English Learner Lets learn English together
          </p>
        </div>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => handleJoinRoom(student?.uid)}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 mt-5"
          >
            <div className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Call
            </div>
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
