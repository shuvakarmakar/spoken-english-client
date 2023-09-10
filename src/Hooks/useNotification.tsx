import  { useContext, useEffect, useState } from 'react';
import { AuthContext, AuthContextType } from '../Provider/AuthProvider/AuthProvider';
interface Notification {
  _id: string;
  name: string;
  link: {
    name: string;
    message: string;
  };
  isRead: boolean;
}


interface Student {
  _id: number;
  name: string;
  user: {
    name: string;
    profileImage: string;
  };
  userId: string;
  request: boolean;
  isRead: boolean;
}
const useNotification = () => {

  const { user } = useContext(AuthContext) as AuthContextType;
   const [notifications, setNotifications] = useState<Notification[]>([]);

   useEffect(() => {
     const pollingInterval = setInterval(() => { 
        if (user) {
          fetch(
            `https://spoken-english-server-xi.vercel.app/getCallMessages/${user?.uid}`
          )
            .then((res) => res.json())
            .then((data: Notification[]) => {
              setNotifications(data);
            });
        }
     }, 1000)
     return () => {
       clearInterval(pollingInterval);
     };
   }, [user,]);
  

    const unReadNotifications = notifications.filter(
      (notification) => !notification.isRead
  ).length;

  
   // const [users] = useUser();
  //  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState<Student[]>([]);
  
 useEffect(() => {
   const pollingInterval = setInterval(() => {
   
      if (user) {
        fetch(
          `https://spoken-english-server-xi.vercel.app/get-friend-requests/${user?.uid}`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setFriends(data);
          });
      }
     
   }, 1000)
   return () => {
     clearInterval(pollingInterval)
   }
  
 }, [user]);

  const unReadFriendRequest = friends.filter((friend) => !friend.isRead).length;

  return [unReadNotifications, unReadFriendRequest];
};

export default useNotification;