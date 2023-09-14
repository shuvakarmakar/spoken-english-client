// QuizQuestion.tsx
import React, { useState } from 'react';

interface QuestionProps {
  question: {
    question: string;
    options: string[];
    correctAnswer: string;
  };
  onAnswer: (isCorrect: boolean) => void;
}

const QuizQuestion: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === question.correctAnswer) {
      onAnswer(true);
    } else {
      onAnswer(false);
    }
  };

  return (
    <div className=''>
      <h1 className="text-2xl font-semibold">{question.question}</h1>
      <ul className="mt-4">
        {question.options.map((option, index) => (
          <li
            key={index}
            className={`p-2 cursor-pointer ${
              selectedOption === option ? 'bg-blue-400 text-white' : 'changebg'
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default QuizQuestion;
