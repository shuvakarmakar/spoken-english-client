
import React, { useContext, useState } from "react";
// import io from "socket.io-client";
import {
  AuthContext,
  AuthContextType,
} from "../../../Provider/AuthProvider/AuthProvider";

// import { Link } from "react-router-dom";
import UserModal from "../UserProfleCard/ViewUserProfile/ViewUserProfile";

interface UserProfileCardProps {
  student: {
    name: string;
    uid: string;
    _id: number;
    // Add other properties of your student object
  };
}

const Suggestion: React.FC<UserProfileCardProps> = ({ student }) => {
  const { user, onlineUsers } = useContext(AuthContext) as AuthContextType;
  // const [disable,setDesabled] =useState({})
  
  // Check if the connected user's online status is true
  const isUserOnline = onlineUsers[student.uid] === true;

  const [showModal, setShowModal] = useState(false);
  const [id, SetId] = useState<number>(0);

  const openModal = (id: number) => {
    SetId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  // send friend  request
const sendFriendRequest = (friendId: string) => {
  try {
           console.log(friendId,user?.uid);

     fetch(
      `http://localhost:5000/send-friend-request/${user?.uid}/${friendId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(res => res.json())
       .then(data => {
         console.log(data);
         if (data.friendRequest) {
             
             // You can update your UI or show a notification here
           } else {
             console.error("Failed to send friend request");
             // Handle error scenario
           }
    })
  
  } catch (error) {
    console.error("Error sending friend request:", error);
  }
};

      

  
console.log();

  return (
    <>
      <div
        onMouseLeave={closeModal}
        className="bg-white shadow-md rounded-md p-4 relative border "
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
            Remove
          </button>

          <button
            onClick={() => sendFriendRequest(student.uid)}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring"
          >
            Add Friend
          </button>
        </div>
        {showModal && (
          <div className=" absolute">
            <UserModal
              student={student}
              id={id}
              showModal={showModal}
              closeModal={closeModal}
            ></UserModal>
          </div>
        )}
      </div>
    </>
  );
};

export default Suggestion;
