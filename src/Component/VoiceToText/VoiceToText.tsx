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
    <div className="p-4 max-w-md  bg-slate-300 mx-auto">
      <h1 className="text-3xl my-4 underline  ">Improve your Speaking Skill</h1>
      <div className="mb-4">
        <textarea
          id="result"
          rows={8}
          cols={80}
          value={result}
          readOnly
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          id="start"
          onClick={handleStart}
          className="  hover:text-blue-600  text-blue-500 rounded-full"
        >
          <FaPlayCircle size={40} className="mr-2" />
        </button>
        <button
          id="stop"
          onClick={handleStop}
          className=" hover:text-red-600 text-red-500 rounded-full"
        >
          <FaStop size={40} className="mr-2" />
        </button>
      </div>
    </div>
  );
};

export default VoiceToText;
