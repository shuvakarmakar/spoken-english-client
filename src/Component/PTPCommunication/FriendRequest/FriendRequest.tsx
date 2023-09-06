import React, { useContext, useEffect, useState } from "react";
import UserModal from "../UserProfleCard/ViewUserProfile/ViewUserProfile";
// import useUser from "../../../Hooks/useUser";
import { AuthContext, AuthContextType } from "../../../Provider/AuthProvider/AuthProvider";
import LoadingCard from "../LoadingCardAnim/LoadingAnimation";
// import { changeLanguage } from "i18next";

interface Student {
  _id: number;
  name: string;
  user: {
    name: string;
    profileImage: string;
  };
  userId: string;
  request:boolean;
}


const FriendRequest: React.FC = () => {
  const { onlineUsers, user } = useContext(AuthContext) as AuthContextType;
  // const [users] = useUser();
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [id, SetId] = useState<number>(0);
  const [friends, setFriends] = useState<Student[]>([]);

  const openModal = (id: number) => {
    SetId(id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const anim = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  useEffect(() => {
    setLoading(true);
    if (user) {
      fetch(
        `https://spoken-english-server-xi.vercel.app/get-friend-requests/${user?.uid}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setFriends(data);
          setLoading(false);
        });
    }
  }, [user]);

  const DeleteRequest = (id: number) => {
    if (id) {
      fetch(
        `https://spoken-english-server-xi.vercel.app/delete-friend-requests/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = friends.filter((friend) => friend._id !== id);
          setFriends(remaining);
        });
    }
  };

  // https://spoken-english-server-xi.vercel.app/send-friend-request/${user?.uid}/${friendId}

  const AcceptFriendRequest = (friendId: string,_id:number) => {
    fetch(`https://spoken-english-server-xi.vercel.app/accept/friendRequest/${user?.uid}/${friendId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({id:_id})
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
         const remaining = friends.filter((friend) => friend._id !== _id);
         setFriends(remaining);
      });
  };

  return (
    <>
      {loading ? (
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-[5%] my-[5%] w-full">
            {anim.map((item) => {
              return (
                <>
                  <p className="hidden">{item}</p>
                  <LoadingCard></LoadingCard>
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-[5%] my-[5%]">
            {friends.map((student) => {
              const isUserOnline = onlineUsers[student?.userId] === true;

              return (
                <div
                  key={student._id}
                  onMouseLeave={closeModal}
                  className="bg-white shadow-md rounded-md p-4 relative border"
                >
                  <div className="flex items-center cursor-pointer">
                    <div
                      onClick={() => openModal(student._id)}
                      className="w-16 h-16 bg-blue-500 rounded-full cursor-pointer"
                    >
                      <img
                        src={student.user?.profileImage}
                        className="rounded-full  w-full  h-full cursor-pointer"
                        alt=""
                      />
                    </div>
                    <div
                      className="ml-4 "
                      onClick={() => openModal(student._id)}
                    >
                      <h2 className="text-lg font-semibold">
                        {student?.user.name}
                      </h2>
                    </div>
                    <div
                      className={`ml-2 w-3 h-3 rounded-full ${
                        isUserOnline ? "bg-green-500" : "bg-gray-400"
                      }`}
                    ></div>
                  </div>

                  <div className="my-6"></div>

                  <div className="mt-10 flex justify-between font-serif">
                    <button
                      onClick={() => DeleteRequest(student._id)}
                      className="py-1  px-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring"
                    >
                      Delete
                    </button>

                    <button
                      disabled={student?.request}
                      onClick={() =>
                        AcceptFriendRequest(student?.userId, student?._id)
                      }
                      className="py-1 px-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring"
                    >
                      Accept
                    </button>
                  </div>
                  {showModal && (
                    <div className="absolute">
                      <UserModal
                        student={student}
                        id={id}
                        showModal={showModal}
                        closeModal={closeModal}
                      ></UserModal>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default FriendRequest;
