import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Checkout: React.FC = () => {
    const location = useLocation();
    const enrollmentData = location?.state;

    if (!enrollmentData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl text-center font-semibold mb-6">Checkout</h1>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <p className="text-xl font-semibold mb-4">
                    Course Name: {enrollmentData.course_name}
                </p>
                <p className="text-lg mb-2">
                    Instructor: {enrollmentData.instructor}
                </p>
                <p className="text-lg mb-2">
                    Price: {enrollmentData.price}
                </p>
                <p className="text-lg">
                    Number of Students: {enrollmentData.number_of_students}
                </p>
            </div>

            {/* Stripe Elements form */}
            {/* Add your Stripe payment and billing details form here */}

            <div className="mt-6 flex justify-center">
                <Link className="btn btn-primary text-white font-semibold py-2 px-4 hover:bg-blue-600">
                    Pay Now
                </Link>
            </div>
        </div>
    );
};

export default Checkout;
