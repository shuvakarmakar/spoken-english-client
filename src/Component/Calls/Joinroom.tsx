import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Joinroom = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/Connect/room/${value}`);
  }, [navigate, value]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 py-8">
        <h1 className="text-2xl mb-6 text-center">Join a Room</h1>
        <div className="flex flex-col items-center">
          <input
            className="border rounded py-2 px-3 mb-4 w-full"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Enter Room Code"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={handleJoinRoom}
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default Joinroom;
