import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";

const Messaging: React.FC = () => {
  const location = useLocation()
  const { MyId, userId } = location?.state;
  console.log(userId, MyId,"state");
   
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");

   const socket = io("http://localhost:8000", {
     query: { MyId, userId }, // Pass user IDs as query parameters
   });

  useEffect(() => {
    socket.on("message", (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
     if (inputMessage.trim() !== "") {
       socket.emit("privateMessage", {
         sender: MyId,
         recipient: userId,
         text: inputMessage,
       });
       setInputMessage("");
     }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="messages bg-gray-100 p-4 rounded-lg mb-4">
        {messages.map((message, index) => (
          <div key={index} className="message bg-white p-2 rounded-md shadow">
            {message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="flex-grow p-2 rounded-l-md border"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-r-md"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Messaging;
