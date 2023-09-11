import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaVolumeUp, FaCopy, FaExchangeAlt } from "react-icons/fa";

const LanguageTranslator = () => {
  const [fromText, setFromText] = useState<string>("");
  const [toText, setToText] = useState<string>("");
  const [fromLang, setFromLang] = useState<string>("en-GB");
  const [toLang, setToLang] = useState<string>("bn-IN");

  const handleExchange = () => {
    const tempText = fromText;
    const tempLang = fromLang;

    setFromText(toText);
    setToText(tempText);
    setFromLang(toLang);
    setToLang(tempLang);
  };

  useEffect(() => {
    if (!fromText) {
      setToText("");
      return;
    }

    setToText("Translating...");

    axios
      .get(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          fromText
        )}&langpair=${fromLang}|${toLang}`
      )
      .then((response) => {
        const translatedText = response.data.responseData.translatedText;
        setToText(translatedText);
      })
      .catch((error) => {
        console.error("Translation error:", error);
        setToText("Translation error");
      });
  }, [fromText, fromLang, toLang]);

  const countries: Record<string, string> = {
    "en-GB": "English",
    "bn-IN": "Bengali",
    "hi-IN": "Hindi",
    "es-ES": "Spanish",
    "fr-FR": "French",
    "ja-JP": "Japanese",
    "ur-PK": "Pakistani",
    "ar-SA": "Arabic",
  };

  const speakText = (text: string, lang: string) => {
    if (text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      speechSynthesis.speak(utterance);
    }
  };

  const copyText = (text: string) => {
    if (text) {
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <div className="w-1/2 mx-auto mt-10 p-4">
      <div className="bg-blue-200 p-6 rounded-lg shadow-xl">
        <div className="text-input flex flex-col md:flex-row border-b border-gray-300 bg-white p-2 rounded-lg">
          <textarea
            spellCheck="false"
            className="flex-1  md:border-r border-gray-700 outline-none resize-none bg-transparent text-gray-700 placeholder-gray-400 text-lg p-2 mb-2 md:mb-0 rounded-lg"
            placeholder="Enter text"
            value={fromText}
            onChange={(e) => setFromText(e.target.value)}
          ></textarea>
          <textarea
            spellCheck="false"
            readOnly
            disabled
            className="flex-1 border-none outline-none resize-none bg-transparent text-gray-700 placeholder-gray-400 text-lg p-2 rounded-lg"
            placeholder="Translation"
            value={toText}
          ></textarea>
        </div>
        <div className="controls mt-3 flex flex-col md:flex-row justify-between items-center">
          <div className="row from flex items-center mb-2 md:mb-0">
            <div className="icons flex w-full gap-4 md:w-1/3">
              <FaVolumeUp
                className="text-blue-600 text-xl mr-2 cursor-pointer"
                onClick={() => speakText(fromText, fromLang)}
              />
              <FaCopy
                className="text-blue-600 text-xl cursor-pointer"
                onClick={() => copyText(fromText)}
              />
            </div>
            <select
              className="w-full md:w-2/3 border-none outline-none bg-transparent text-gray-700 text-lg rounded-lg"
              value={fromLang}
              onChange={(e) => setFromLang(e.target.value)}
            >
              {Object.entries(countries).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="exchange mb-2 md:mb-0">
            <FaExchangeAlt
              className="text-blue-600 text-xl cursor-pointer"
              onClick={handleExchange}
            />
          </div>
          <div className="row to flex items-center">
            <select
              className="w-full md:w-2/3 border-none outline-none bg-transparent text-gray-700 text-lg rounded-lg"
              value={toLang}
              onChange={(e) => setToLang(e.target.value)}
            >
              {Object.entries(countries).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
            <div className="icons flex gap-4 w-full md:w-1/3">
              <FaVolumeUp
                className="text-blue-600 text-xl ml-2 cursor-pointer"
                onClick={() => speakText(toText, toLang)}
              />
              <FaCopy
                className="text-blue-600 text-xl cursor-pointer"
                onClick={() => copyText(toText)}
              />
            </div>
          </div>
        </div>
      </div>
      <button className="w-full mt-5 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 cursor-pointer">
        Translate Text
      </button>
    </div>
  );
};

export default LanguageTranslator;
