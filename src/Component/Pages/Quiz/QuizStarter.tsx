import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const QuizStarter = () => {
    const course=useLocation()?.state
    
    return (
        <div className='flex justify-center items-center h-[calc(100vh-100px)]'>
            <div className="w-[96%] md:w-[50%] mx-auto shadow-xl py-5 text-center">
                <p className='text-lg md:text-xl font-bold mb-3'>Quiz for advanced spoken english course</p>
                <p className='mb-3'>You must follow before Quiz start <Link to={'quiz-policy'} className='text-green-500'>Quiz Policy</Link></p>
                <Link to={'/quiz'} state={course} className='py-2 px-3 font-bold bg-transparent border rounded-[1px] border-blue-600'>Start Quiz</Link>
            </div>
        </div>
    );
};

export default QuizStarter;