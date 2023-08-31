import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Course {
    _id: string;
    imageURL: string;
    courseName: string;
    courseDetails: string;
    price: string;
    instructorName: string;
    instructorEmail: string;
}

const MainComponent: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        // Fetch data from the API
        fetch("https://spoken-english-server-xi.vercel.app/courses")
            .then((response) => response.json())
            .then((data: Course[]) => setCourses(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-semibold mb-4">All Premium Courses</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                {courses.map(course => (
                    <div key={course._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-48 object-cover" src={course.imageURL} alt={course.courseName} />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{course.courseName}</h2>
                            <p className="text-gray-600">{course.courseDetails}</p>
                            <div className="mt-2">
                                <p className="text-gray-800 font-semibold">Course Price: ${course.price}</p>
                                <p className="text-gray-600 mt-3">Instructor: {course.instructorName}</p>
                                <p className="text-gray-600 mt-2">Instructor Email:{course.instructorEmail}</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <Link
                                to={`/course-details/${course._id}`}
                                className="text-white font-semibold py-2 px-4 btn btn-outline btn-secondary"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainComponent;
