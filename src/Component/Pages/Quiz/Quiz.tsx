// App.tsx
import React, { useState } from "react";
import { quizData } from "./quizData";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
import { useLocation } from "react-router-dom";

function Quiz() {
  const course = useLocation()?.state;
  console.log(course);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const totalQuestions = quizData.length;

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="h-[calc(100vh-50px)] flex items-center justify-center ">
      <div className=" p-6 rounded-lg shadow-2xl w-[90%] md:w-[50%] border changebg">
        {currentQuestionIndex < quizData.length ? (
          <QuizQuestion
            question={quizData[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        ) : (
          <QuizResult
            course={course}
            score={score}
            totalQuestions={totalQuestions}
          ></QuizResult>
        )}
      </div>
    </div>
  );
}

export default Quiz;
