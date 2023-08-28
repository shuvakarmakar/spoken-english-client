import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider/AuthProvider';

interface Course {
    _id: string;
    courseName: string;
    availableSeats: number;
    imageURL: string;
    // Add other course properties here
}

const AllAddedClasses: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user.email) {
            // Fetch courses based on the logged-in instructor's email
            fetch(`http://localhost:5000/added-courses-by-instructor/${user.email}`)
                .then((response) => response.json())
                .then((data: Course[]) => {
                    console.log('Fetched courses:', data);
                    setCourses(data);
                })
                .catch((error) => {
                    console.error('Error fetching courses:', error);
                });
        }
    }, [user.email]);

    const handleDelete = (courseId: string) => {
        // You can implement the delete logic here
        // For example, send a DELETE request to your backend API
        console.log(`Deleting course with ID: ${courseId}`);
    };

    console.log('Courses state:', courses); // Log courses state

    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-5'>All Added Classes</h1>
            <div className="overflow-x-auto mt-10 flex justify-center items-center">
                <div className="w-full overflow-hidden rounded-lg">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Available Seats</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr key={course._id}>
                                    <td>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </td>
                                    <td>
                                        <img src={course.imageURL} alt={course.courseName} className="mask mask-squircle w-12 h-12" />
                                    </td>
                                    <td>{course.courseName}</td>
                                    <td>{course.availableSeats}</td>
                                    <td>
                                        <button className='btn btn-secondary' onClick={() => handleDelete(course._id)}>
                                            Delete Course
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default AllAddedClasses;
