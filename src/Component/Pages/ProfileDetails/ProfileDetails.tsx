import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";


interface User {
  uid: string;
  _id: string;
  name: string;
  photoURL: string | null;
  profileBanner: string;
  profileImage: string;

  // Add more properties as needed
}

interface ProfileDetailsProps {}

const ProfileDetails: React.FC<ProfileDetailsProps> = () => {
  const { id } = useParams<{ id: string }>(); // Use useParams with specific type
  console.log(id, "details");
  // const [users] = useUser();
  // const { user } = useContext(AuthContext) as AuthContextType;

  const [AllUsers, setAllUser] = useState<User | null>(null);
  // const {friends}=useFriend();
  useEffect(() => {
    if (id) {
      fetch(`https://spoken-english-server-xi.vercel.app/SingleUser/${id}`)
        .then((res) => res.json())
        .then((data) => setAllUser(data));
    }
  }, [id]);

  const [friends, setFriends] = useState<any[]>([]); // Update this type accordingly

  useEffect(() => {
    const pollingInterval = setInterval(() => {
      if (AllUsers) {
        fetch(
          `https://spoken-english-server-xi.vercel.app/get-friend/${AllUsers?.uid}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (Array.isArray(data)) {
              setFriends(data);
            } else if (data.friend) {
              setFriends([data]);
            }
          });
      }
    }, 1000);

    return () => {
      clearInterval(pollingInterval);
    };
  }, [AllUsers]);

  console.log(AllUsers);

  return (
    <div className="container mx-auto  my-10">
      <div className="flex justify-center w-[100%]">
        <div className="bg-white shadow-lg rounded-lg md:w-[60%]">
          {/* Header */}
          <div className="bg-blue-300 h-[300px] rounded-t-lg w-full">
            <img
              className=" h-full w-full"
              src={AllUsers?.profileBanner}
              alt=""
            />
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center -mt-16">
            <img
              src={AllUsers?.profileImage}
              alt="User"
              className="w-[150px] h-[150px] rounded-full border-4 border-white shadow-lg"
            />
          </div>

          {/* User Info */}
          <div className="text-center pt-4 mb-10">
            <h2 key={AllUsers?._id} className="text-xl font-semibold">
              {AllUsers?.name}
            </h2>
          </div>

          {/* intro List */}
          <div className="intro ">
            <div className=" border-t p-5 md:p-2 bg-white p-5 ">
              <h3 className="text-lg font-semibold my-2">Friends</h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-5">
                {friends.slice(0, 6).map((friend) => (
                  <div
                    key={friend.friend._id}
                    className=" w-[100px] h-[100px] bg-base-100 shadow-md border overflow-hidden rounded-md "
                  >
                    <img
                      className=""
                      src={friend?.friend?.profileImage}
                      alt="friends"
                    />

                    <h2 className="">{friend?.friend?.name}</h2>
                  </div>
                ))}
              </div>
            </div>

            {/* Posts */}
            <div className="p-10 border-t shadow-xl">
              <h3 className="text-lg font-semibold">Intro</h3>
              <div className="mt-2">
                <ul className="flex flex-col gap-4 profile-ul">
                  <li>
                    Running Student at Student Of The Year, Running Student at
                    I'm Student.
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

export default ProfileDetails;
