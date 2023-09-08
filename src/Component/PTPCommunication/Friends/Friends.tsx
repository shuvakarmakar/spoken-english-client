import React from "react";
import UserProfileCard from "../UserProfleCard/UserProfileCard";
// import useUser from "../../../Hooks/useUser";
import LoadingCard from "../LoadingCardAnim/LoadingAnimation";
// import { set } from "react-hook-form";
// import {
//   AuthContext,
//   AuthContextType,
// } from "../../../Provider/AuthProvider/AuthProvider";
import useFriend from "../../../Hooks/useFriend";
// interface FriendData {
//   _id: string; // Update the type as per your data structure
//   friend: {
//     InstructorDisabled: boolean;
//     Roll: string;
//     email: string;
//     name: string;
//     password: string;
//     profileBanner: string;
//     profileImage: string;
//     uid: string;
//     _id: number;
//   }; // Replace YourFriendType with the actual type of 'friend'
// }

const Friends = () => {
  //  const [searchQuery, setSearchQuery] = useState<string>("");
  //  const [filteredData, setFilteredData] = useState<MyObject[]>([]);

  // const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const query = event.target.value;
  //   setSearchQuery(query);

  //   const filtered = users.filter((item) =>
  //     item.name.toLowerCase().includes(query.toLowerCase())
  //   );

  //   setFilteredData(filtered);
  // };

  // const [users, isLoading] = useUser();
  //  const [loading,setLoading] = useState(true)
  //   const [friend, setFriends] = useState<FriendData[]>([]);
  //   const { user } = useContext(AuthContext) as AuthContextType;
  //   useEffect(() => {
  //    const pollingInterval=setInterval(() => {
  //       if (user) {
  //         fetch(`https://spoken-english-server-xi.vercel.app/get-friend/${user?.uid}`)
  //           .then((res) => res.json())
  //           .then((data) => {
  //             if (Array.isArray(data)) {
  //               setFriends(data);
  //             } else if (data.friend) {
  //               // Convert the 'data' object into an array
  //               setFriends([data]);
  //             }
  //             setLoading(false);
  //           });
  //       }
  //     }, 1000);
  //  return () => {
  //    clearInterval(pollingInterval);
  //  };
  //   }, [user]);
const { friends, loading } = useFriend();



  const anim = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  console.log(friends);
  return (
    <>
      {loading ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-[5%] my-[5%]">
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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-[5%] my-[5%]">
            {/* {searchQuery === "" ? (
        <> */}
            {friends.map((std) => (
              <UserProfileCard
                key={std._id}
                student={std?.friend}
              ></UserProfileCard>
            ))}
            {/* </>
      ) : (
        <>
          {filteredData.map((std) => (
            <UserProfileCard key={std._id} student={std}></UserProfileCard>
          ))}
        </>
      )}
      {filteredData.length < 0 && (
        <>
          <p className="text-center font-bold">Not Found any Friend</p>
        </>
      )} */}
          </div>
        </>
      )}
    </>
  );
};

export default Friends;
