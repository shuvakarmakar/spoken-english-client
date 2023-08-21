import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaVolumeUp } from "react-icons/fa";

const Dictionary: React.FC = () => {
  const [word, setWord] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const fetchWordData = () => {
    axios
      .get(`${url}${word}`)
      .then((response) => {
        setData(response.data[0]);
        setError(false);
      })
      .catch(() => {
        setData(null);
        setError(true);
      });
  };

  const playSound = () => {
    if (
      data &&
      data.phonetics &&
      data.phonetics[0] &&
      data.phonetics[0].audio
    ) {
      const sound = new Audio(`https:${data.phonetics[0].audio}`);
      sound.play();
    }
  };

  const handleEnterKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      fetchWordData();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        fetchWordData();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-purple-200 min-h-screen flex justify-center items-center">
      <div className="bg-white w-90vmin p-8 rounded-md shadow-md">
        <input
          type="text"
          placeholder="Type the word here.."
          value={word}
          onChange={(e) => setWord(e.target.value)}
          onKeyDown={handleEnterKeyPress}
          className="p-2 w-3/4 border-b-4 border-purple-600 outline-none"
        />
        <button
          onClick={fetchWordData}
          className="p-4 mt-4 bg-purple-600 text-white rounded-sm"
        >
          Search
        </button>
        {data && (
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl font-semibold">{word}</h3>
              <button onClick={playSound} className="text-black">
                <FaVolumeUp />
              </button>
            </div>
            <div className="flex gap-4 mt-2 text-gray-500">
              <p>{data.meanings[0].partOfSpeech}</p>
              <p>/{data.phonetic}/</p>
            </div>
            <p className="text-purple-900 mt-4">
              {data.meanings[0].definitions[0].definition}
            </p>
            {data.meanings[0].definitions[0].example && (
              <p className="italic border-l-4 border-purple-600 pl-4 mt-4 text-gray-600">
                {data.meanings[0].definitions[0].example}
              </p>
            )}
          </div>
        )}
        {error && (
          <h3 className="mt-8 text-center text-red-600">
            Sorry pal, Couldn't find the word you were looking for.
          </h3>
        )}
      </div>
    </div>
  );
};

export default Dictionary;
