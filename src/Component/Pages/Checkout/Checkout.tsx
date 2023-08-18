import React from 'react';
import { useLocation } from 'react-router-dom';

interface EnrollmentData {
    courseId: string;
    courseName: string;
    price: number;
    instructor: string;
    number_of_students: number;
}

const Checkout: React.FC = () => {
    const location = useLocation<{ enrollmentData: EnrollmentData }>();
    console.log(location);
    const enrollmentData = location.state?.enrollmentData;
    console.log(enrollmentData);

    if (!enrollmentData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-semibold">Checkout</h1>
            <p>Course Name: {enrollmentData.courseName}</p>
            <p>Price: ${enrollmentData.price}</p>
            <p>Instructor: {enrollmentData.instructor}</p>
            <p>Number of Students: {enrollmentData.number_of_students}</p>

            {/* Stripe Elements form */}
            {/* Add your Stripe payment and billing details form here */}
        </div>
    );
};

export default Checkout;
