import React from 'react';
import useUser from '../../Hooks/useUser';
import Spinner from '../Pages/Spinner/Spinner';
import UserProfileCard from './UserProfleCard/UserProfileCard';

const PTPCommunication = () => {
  const [users, loading ]= useUser();
 
  // const Student = users.filter((user) => user.Roll=="student");

  return (
    <div className="container mx-auto p-10">
      <>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {users.map((std) => (
                <UserProfileCard key={std._id} student={std}></UserProfileCard>
              ))}
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default PTPCommunication;