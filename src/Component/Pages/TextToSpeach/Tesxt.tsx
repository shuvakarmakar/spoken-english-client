import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import './TextToImageSpeaker.css'; // Create this CSS file for styling


function Text() {
        const [text, setText] = useState('');
        const [selectedLanguage, setSelectedLanguage] = useState('US English Female'); // Default language

        const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setText(event.target.value);
        };

        const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedLanguage(event.target.value);
        };

        const handleSpeak = () => {

            responsiveVoice.speak(text, selectedLanguage);
        };

        return (
            <div className="container">
                <h1 className="title">Text to Image Speaker</h1>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Enter text to speak"
                        className="input"
                        value={text}
                        onChange={handleTextChange}
                    />
                    <select
                        className="select"
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                    >
                        <option value="US English Female">English (US)</option>
                        <option value="US English Male">English (US) Male</option>
                        <option value="UK English Female">English (UK)</option>
                        <option value="UK English Male">English (UK) Male</option>
                        <option value="Spanish Female">Spanish</option>


                        {/* Add more language options */}
                    </select>
                    <button disabled={!text} className="button" onClick={handleSpeak}>
                        Speak
                    </button>
                </div>
            </div>
        );
    }

   


export default Text;
