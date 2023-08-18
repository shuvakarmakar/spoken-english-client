import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Course {
    _id: string;
    course_name: string;
    image: string;
    course_details: string;
    price: number;
    instructor: string;
    number_of_students: number;
}

interface EnrollmentData {
    courseId: string;
    courseName: string;
    price: number;
    instructor: string;
    number_of_students: number;
}

const CourseDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [course, setCourse] = useState<Course | null>(null);

    useEffect(() => {
        fetch(`https://spoken-english-server.vercel.app/course/${id}`)
            .then(response => response.json())
            .then(data => setCourse(data))
            .catch(error => console.error('Error fetching course details:', error));
    }, [id]);

    if (!course) {
        return <div>Loading...</div>;
    }

    const enrollmentData: EnrollmentData = {
        courseId: course._id,
        courseName: course.course_name,
        price: course.price,
        instructor: course.instructor,
        number_of_students: course.number_of_students,
    };
    console.log(enrollmentData);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-semibold">{course.course_name}</h1>
            <div>
                <img src={course.image} alt={course.course_name} className="w-full h-auto" />
                <p className="text-gray-600">{course.course_details}</p>
                <p className="items-center font-bold text-xl text-black mt-5">Price: {course.price}</p>
            </div>
            <div className="mt-4 flex justify-center">
                <Link
                    to={{
                        pathname: '/checkout',
                        state: enrollmentData,
                    }}
                    className="text-white font-semibold py-2 px-4 btn btn-outline btn-primary"
                >
                    Enroll Now
                </Link>

            </div>
        </div>
    );
};

export default CourseDetails;
