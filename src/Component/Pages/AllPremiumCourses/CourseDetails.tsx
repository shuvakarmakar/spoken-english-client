import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


interface Course {
    _id: string;
    course_name: string;
    image: string;
    course_details: string;
}

const CourseDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [course, setCourse] = useState<Course | null>(null);

    useEffect(() => {
        fetch(`http://localhost:5000/course/${id}`)
            .then(response => response.json())
            .then(data => setCourse(data))
            .catch(error => console.error('Error fetching course details:', error));
    }, [id]);

    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-semibold">{course.course_name}</h1>
            <div>
                <img src={course.image} alt={course.course_name} className="w-full h-auto" />
                <p className="text-gray-600">{course.course_details}</p>
            </div>
            <div className="mt-4 flex justify-center">
                <Link
                    to="/checkout"
                    className="text-white font-semibold py-2 px-4 btn btn-outline btn-primary"
                >
                    Enroll Now
                </Link>
            </div>
        </div>
    );
};

export default CourseDetails;
