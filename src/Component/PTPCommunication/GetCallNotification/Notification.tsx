import React, { useContext, useEffect, useState } from "react";
import {
  AuthContext,
  AuthContextType,
} from "../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

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
      fetch(
        `https://spoken-english-server-xi.vercel.app/getCallMessages/${user?.uid}`
      )
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

  const handleDeleteClick = (notificationId: string) => {
    // Send a DELETE request to your server to delete the notification
    fetch(
      `https://spoken-english-server-xi.vercel.app/deleteNotification/${notificationId}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        // Remove the deleted notification from the local state
        setNotifications((prevNotifications) =>
          prevNotifications.filter(
            (notification) => notification._id !== notificationId
          )
        );
        Swal.fire("Yaa", " Successfully deleted ", "success");
      })
      .catch((error) => {
        console.error("Error deleting notification:", error);
      });
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
                className="border-b border-gray-200 last:border-b-0 mb-4"
              >
                <div className="p-4 border">
                  <p className="text-lg font-semibold">
                   Calling From {notification.link.name}
                  </p>
                  <p className="text-sm text-gray-500 my-4">
                    {notification.link.message}
                  </p>
                  <button
                    onClick={() => handleJoinClick(notification.link.message)}
                    className="bg-blue-500 text-white px-4 py-2 mt-2 rounded mr-2 "
                  >
                    Join
                  </button>
                  <button
                    onClick={() => handleDeleteClick(notification._id)}
                    className="bg-red-500 text-white px-4 py-2 mt-2 rounded"
                  >
                    Delete
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
