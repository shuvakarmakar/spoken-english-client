import React, { useContext, useEffect, useState } from "react";
import {
  AuthContext,
  AuthContextType,
} from "../../../Provider/AuthProvider/AuthProvider";

interface Notification {
  _id: string;
  name: string;
  link: {
    name: string;
    message: string;
  };
}

const Notification: React.FC = () => {
  const { user } = useContext(AuthContext) as AuthContextType;
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/getCallMessages/${user?.uid}`)
        .then((res) => res.json())
        .then((data: Notification[]) => {
          setNotifications(data);
        });
    }
  }, [user]);

  const handleJoinClick = (notificationId: string) => {
    // Handle the join action here
    window.location.href = notificationId;
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Notifications</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {notifications.length === 0 ? (
          <p className="p-4">No notifications available.</p>
        ) : (
          <ul>
            {notifications.map((notification) => (
              <li
                key={notification._id}
                className="border-b border-gray-200 last:border-b-0"
              >
                <div className="p-4 border">
                  <p className="text-lg font-semibold">
                    {notification.link.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {notification.link.message}
                  </p>
                  <button
                    onClick={() => handleJoinClick(notification.link.message)}
                    className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
                  >
                    Join
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Notification;
