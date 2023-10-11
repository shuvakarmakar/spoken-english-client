import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const QuizStarter = () => {
    const course=useLocation()?.state
    
    return (
        <div className='flex justify-center items-center h-[calc(100vh-100px)]'>
            <div className="w-[96%] md:w-[50%] mx-auto shadow-xl py-5 text-center border">
                <p className='text-lg md:text-2xl font-bold mb-3'>Quiz for advanced spoken english course</p>
                <p className='mb-3'>1. To purchase this course you must be pass the Quiz</p>
                <p className='mb-3'>2. You need to get at least 5 marks to pass the Quiz</p>
                <p className='mb-3 text-red-500'>We didn't make the fields necessary for testing purposes</p>
                <Link to={'/quiz'} state={course} className='mt-3 py-2 px-3 font-bold bg-transparent border rounded-[1px] border-blue-600'>Start Quiz</Link>
            </div>
        </div>
    );
};

export default QuizStarter;