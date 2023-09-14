import React, { useState } from "react";
import { FaStop, FaPlayCircle } from "react-icons/fa";

const VoiceToText: React.FC = () => {
  const [result, setResult] = useState<string>("");
  const recognition = new (window as any).webkitSpeechRecognition();

  recognition.lang = window.navigator.language;
  recognition.interimResults = true;

  const handleStart = () => {
    recognition.start();
  };

  const handleStop = () => {
    recognition.stop();
  };

  recognition.addEventListener(
    "result",
    (event: { results: string | any[] }) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setResult(transcript);
    }
  );

  return (
    <div>
      {" "}
      <div
        style={{ backgroundColor: "#D3D3D3" }}
        className="p-4 max-w-md bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg shadow-lg mx-auto"
      >
        <h1 className="text-3xl my-4 underline font-bold text-center">
          Test Your Speaking Skill
        </h1>
        <div className="mb-4">
          <textarea
            id="result"
            rows={8}
            cols={80}
            value={result}
            readOnly
            className="w-full p-2 bg-white bg-opacity-40 border border-white rounded"
            placeholder="Speak here..."
            style={{ color: "white" }}
          ></textarea>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            id="start"
            onClick={handleStart}
            className="hover:text-sky-500 text-gray-200 rounded-full focus:outline-none"
          >
            <FaPlayCircle size={40} className="mr-2" />
            Start
          </button>
          <button
            id="stop"
            onClick={handleStop}
            className="hover:text-red-600 text-gray-200 rounded-full focus:outline-none"
          >
            <FaStop size={40} className="mr-2" />
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoiceToText;
