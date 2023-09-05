// src/UserModal.tsx
import React from "react";
import { Link } from "react-router-dom";

interface User {
  name: string;
  // image: string;
}

interface UserModalProps {
  student: User;
  showModal: boolean;
  closeModal: () => void;
  id: number;
  name: string;
}

const UserModal: React.FC<UserModalProps> = ({
  student,
  showModal,
  closeModal,
  id,
  name
  
}) => {
  if (!showModal) {
    return null;
  }
  console.log(id, "form view");
  return (
    <div className=" fixed inset-0  flex items-center justify-center z-50">
      <div className="relative">
        <div className="bg-white p-6 rounded-md shadow-md w-80">
          <img
            src={""}
            alt="User"
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <div className="flex justify-between">
            <button
              className="px-4 py-2 bg-blue-500 absolute top-2 right-2 text-white rounded-md hover:bg-blue-600"
              onClick={closeModal}
            >
              X
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Add Friend
            </button>
            <Link to={`/profile/${id}`}>
              <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
                View Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
