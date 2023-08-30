import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";
import "./Messagein.css"; // Import your CSS file

const Messaging: React.FC = () => {
  const location = useLocation();
  const { MyId, userId } = location?.state;

  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");

  const socket = io("http://localhost:8000", {
    query: { MyId, userId },
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
    <div className="containers">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="message-input">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="message-input__input"
        />
        <button type="submit" className="message-input__button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Messaging;
