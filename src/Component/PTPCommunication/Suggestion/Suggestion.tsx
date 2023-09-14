
import React, { useContext, useEffect, useState } from "react";
// import io from "socket.io-client";
import {
  AuthContext,
  AuthContextType,
} from "../../../Provider/AuthProvider/AuthProvider";

// import { Link } from "react-router-dom";
import UserModal from "../UserProfleCard/ViewUserProfile/ViewUserProfile";
// import useUser from "../../../Hooks/useUser";
import LoadingCard from "../LoadingCardAnim/LoadingAnimation";
import { Helmet } from "react-helmet";
import axios from "axios";

// interface UserProfileCardProps {
//   student: {
//     name: string;
//     uid: string;
//     _id: number;
//     // Add other properties of your student object
//   };
// }
interface MyObject {
  _id: number;
  name: string;
  uid: string;
  profileImage: string;
  request: boolean;
  // other properties
}

const Suggestion: React.FC = () => {
  const { user, onlineUsers } = useContext(AuthContext) as AuthContextType;
  // const [users, isLoading] = useUser();
  const [isLoading,setIsLoading] =useState(true)

  // Check if the connected user's online status is true
  // const isUserOnline = onlineUsers[user?.uid] === true;

  const [showModal, setShowModal] = useState(false);
  const [id, SetId] = useState<number>(0);

  const [request, setRequest] = useState({});

  const openModal = (id: number) => {
    SetId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [data, setData] = useState<MyObject[]>([]);
  // get all user
  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(
        "https://spoken-english-server-xi.vercel.app/GetUsers"
      ); // Replace with your API endpoint
        const shuffledData = [...response.data].sort(() => Math.random() - 0.5);
      setData(shuffledData);

      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // send friend  request
  const sendFriendRequest = (friendId: string) => {
  
    try {
      console.log(friendId, user?.uid);

      fetch(
        `https://spoken-english-server-xi.vercel.app/send-friend-request/${user?.uid}/${friendId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.friendRequest) {
            // You can update your UI or show a notification here
          } else {
            console.error("Failed to send friend request");
            // Handle error scenario
          }
        });
    } catch (error) {
      console.error("Error sending friend request:", error);
    }
  };

  // remove suggestion 
  const RemoveSuggestion = (id: number) => { 
    const reaming = data.filter(item => item._id !== id);
    setData(reaming)


  }


   useEffect(() => {
     
     const polingineterval = setInterval(() => {
       if (user) {
         fetch(
           `https://spoken-english-server-xi.vercel.app/get-friend-requests/${user?.uid}`
         )
           .then((res) => res.json())
           .then((data) => {
             console.log(data);
             setRequest(data);
             
           });
       }
     }, 1000);

     return () => {
       clearInterval(polingineterval);
     };
   }, [user]);

  // console.log();
  const anim = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <Helmet>
        <title>Suggest Friend</title>
      </Helmet>
      ;
      {isLoading ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mx-[5%] my-[2%]">
            {anim.map((a) => {
              return (
                <>
                  <p className="hidden">{a}</p>
                  <LoadingCard></LoadingCard>
                </>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-10 mx-[5%] my-[2%]">
            {data.map((student) => {
              const isUserOnline = onlineUsers[student?.uid] === true;
              return (
                <>
                  <div
                    onMouseLeave={closeModal}
                    className="bg-white shadow-md rounded-md p-4 relative border "
                  >
                    <div className="flex items-center">
                      <div
                        onClick={() => openModal(student._id)}
                        className="w-16 h-16 bg-blue-300 rounded-full"
                      >
                        <img
                          src={student?.profileImage}
                          className="rounded-full w-full h-full"
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <h2 className="text-lg font-semibold">
                          {student.name}
                        </h2>
                      </div>
                      <div
                        className={`ml-2 w-2 h-2 rounded-full ${
                          isUserOnline ? "bg-green-500" : "bg-gray-400"
                        }`}
                      ></div>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-600">
                        I'm a passionate English Learner Lets learn English
                        together.
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <button
                        onClick={() => RemoveSuggestion(student._id)}
                        className="px-4 py-2 bg-blue-300 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring"
                      >
                        Remove
                      </button>
                      {!request? (
                        <>
                          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring">
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => sendFriendRequest(student.uid)}
                            disabled={student.request}
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring"
                          >
                            Add Friend
                          </button>
                        </>
                      )}
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
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Suggestion;
