import React from 'react';
import UserProfileCard from '../UserProfleCard/UserProfileCard';
import useUser from '../../../Hooks/useUser';
import LoadingCard from '../LoadingCardAnim/LoadingAnimation';

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

  const [users,isLoading] = useUser()
    
     const anim = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {isLoading ? (
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
            {users.map((std) => (
              <UserProfileCard key={std._id} student={std}></UserProfileCard>
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