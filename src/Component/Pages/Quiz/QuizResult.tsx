import React from 'react';
import { Link } from 'react-router-dom';

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  course: any
}

const QuizResult: React.FC<QuizResultProps> = ({ score, totalQuestions, course }) => {
  console.log(course)
  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div className="bg-white p-4 rounded-md ">

      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold mb-4">Quiz Result</h2>
        <p className=''>Your scored </p>
        <p className='text-4xl mb-4'>{score}/{totalQuestions}</p>
        {
          percentage >= "10" ? (
            <div className="hello">
              <Link state={course} to={"http://localhost:5173/checkout"} className='border mt-7 shadow-lg px-3 py-2'>Process to enroll</Link>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <p className='text-red-600 mb-3'>You can't enroll this course please enroll our suggested course</p>
              <Link to={"https://spoken-english-65d22.web.app/course-details/64e86a3b555736f3a2722358"} className=' border mt-7 shadow-lg px-3 py-2'>Click Here to go</Link>

            </div>
          )
        }
      </div>

    </div>
  );
};
export default QuizResult