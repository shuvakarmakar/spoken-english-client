import React, { useContext, useEffect, useState } from 'react';
import { AuthContext, AuthContextType } from '../../../../Provider/AuthProvider/AuthProvider';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
// import useUser from '../../../../Hooks/useUser';

interface Course {
    _id: string;
    courseName: string;
    availableSeats: number;
    imageURL: string;
    // Add other course properties here
}

const AllAddedClasses: React.FC = () => {
    // const [refreshUsers] = useUser();
    const [courses, setCourses] = useState<Course[]>([]);
    const { user } = useContext(AuthContext) as AuthContextType

    useEffect(() => {
        if (user?.email) {
            // Fetch courses based on the logged-in instructor's email
            fetch(`https://spoken-english-server-xi.vercel.app/added-courses-by-instructor/${user.email}`)
                .then((response) => response.json())
                .then((data: Course[]) => {
                    console.log('Fetched courses:', data);
                    setCourses(data);
                })
                .catch((error) => {
                    console.error('Error fetching courses:', error);
                });
        }
    }, [user?.email]);

    const handleDelete = (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                // DeleteUsers
                fetch(`https://spoken-english-server-xi.vercel.app/deleteCourse/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        Swal.fire('Deleted!', 'The course has been deleted.', 'success');
                        // refreshUsers();
                    })
                    .catch((error) => {
                        console.error('Error deleting course:', error);
                        Swal.fire('Error', 'An error occurred while deleting the course.', 'error');
                    });
            }
        });
    };


    // console.log('Courses state:', courses); // Log courses state

    return (
        <div>
            <h1 className='text-center text-white text-3xl font-bold my-5'>All Added Classes</h1>
            <div className="overflow-x-auto mt-10 flex justify-center items-center">
                <div className="w-full overflow-hidden rounded-lg">
                    <table className="table ">
                        <thead className='text-white'>
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
                                <tr key={course._id} className='text-white'>
                                    <td >
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
                                        {" "}
                                        <span onClick={() => handleDelete(course._id)}>
                                            <FaTrashAlt className="text-blue-500 w-6 h-6 cursor-pointer"></FaTrashAlt>
                                        </span>
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
