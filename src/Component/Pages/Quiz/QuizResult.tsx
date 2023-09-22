import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  course: any
}
interface Course {
  _id: string;
  imageURL: string;
  courseName: string;
  courseDetails: string;
  price: string;
  instructorName: string;
  instructorEmail: string;
}

const QuizResult: React.FC<QuizResultProps> = ({ score, totalQuestions, course }) => {
  console.log(course)
  const [courses, setCourses] = useState<Course[]>([]);
  useEffect(() => {
    // Fetch data from the API
    fetch("https://spoken-english-server-xi.vercel.app/courses")
      .then((response) => response.json())
      .then((data: Course[]) => setCourses(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const suggestedCourse = courses.filter(c => c.courseName == "FluentTalk English Mastery" || c.courseName == "British Spoken English")
  console.log(suggestedCourse)

  const percentage = ((score / totalQuestions) * 100).toFixed(2);

  return (
    <div className="bg-white p-4 rounded-md changebg">

      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl font-semibold mb-4">Quiz Result</h2>
        <p className=''>Your scored </p>
        <p className='text-4xl mb-4'>
          <span className={`${score >= 5 ? 'text-green-500' : 'text-red-600'}`}>
            {score}
          </span>/{totalQuestions}
        </p>

        {
          percentage >= "50" ? (
            <div className="hello">
              <Link state={course} to={"https://spoken-english-65d22.web.app/checkout"} className='border mt-7 shadow-xl px-3 py-2 bg-green-600 rounded-md text-white'>Process to enroll</Link>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center border-t-2">
              <p className='text-red-600 mb-3 pt-2'>You can't enroll this course please enroll our suggested course</p>
              <p className="text-2xl pb-2">Our suggested courses</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
                {
                  suggestedCourse.map(co => (
                    <div className="card shadow-xl border p-5">
                      <img src={co.imageURL} alt="" />
                      <p className="text-lg font-bold">{co.courseName}</p>
                      <p className="">Instructor: {co.instructorName}</p>
                      <p className="">Price: {co.price}</p>
                      <div className="flex justify-center">
                        <Link
                          to={`/course-details/${co._id}`}
                          className="text-white font-semibold py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm transition-colors duration-300"
                        >
                          Enroll Now
                        </Link>
                      </div>
                    </div>
                  ))
                }
              </div>

            </div>
          )
        }
      </div>

    </div>
  );
};
export default QuizResult