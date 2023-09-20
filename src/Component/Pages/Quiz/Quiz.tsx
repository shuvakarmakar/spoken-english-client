// App.tsx
import React, { useEffect, useState } from "react";
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
  const [timeLeft, setTimeLeft] = useState(10);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // Decrement the timer
      if(timeLeft>0){
        setTimeLeft(timeLeft - 1);
      }
      

      // If time is up, submit the current question
      
    }, 1000);

    // Clean up the timer on unmount or when the quiz is complete
    return () => clearTimeout(timer);
  }, [timeLeft, currentQuestionIndex]);

  return (
    <div className="h-[calc(100vh-50px)] flex items-center justify-center ">
      <div className=" p-6 rounded-lg shadow-2xl w-[90%] md:w-[50%] border changebg">
        {currentQuestionIndex < quizData.length ? (
          <div className="">
            <div className="flex justify-between items-center pb-2 border-b-2">
            <p className=" pb-3 font-bold text-2xl ">{currentQuestionIndex+1} of {totalQuestions}</p>
            <p className={`${timeLeft >= 4 ? 'darkText' : 'text-red-600'} font-bold text-3xl `}>{timeLeft}</p>
            </div>
          <QuizQuestion
            question={quizData[currentQuestionIndex]}
            onAnswer={handleAnswer}
            timeLeft={timeLeft}
            setTimeLeft={setTimeLeft}
            currentIndex={currentQuestionIndex}
            setCurrentIndex={setCurrentQuestionIndex}
          />
          </div>
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
