import React from 'react';
import { useForm } from 'react-hook-form';
import { redirect, useLocation } from 'react-router-dom';

interface BillingData {
    fullName: string;
    email: string;
    address: string;
    city: string;
    country: string;
    postalCode: string;
    contactNumber: string;
}

interface EnrollmentData {
    courseId: string;
    courseName: string;
    price: number;
    instructor: string;
    number_of_students: number;
}

const Checkout: React.FC = () => {
    const location = useLocation();
    const enrollmentData = location?.state;

    const { register, handleSubmit } = useForm<BillingData>();

    const onSubmit = (billingData: BillingData) => {
        const combinedData = {
            ...enrollmentData,
            billingData,
        };

        console.log(combinedData);

       fetch("http://localhost:5000/order", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(combinedData),
       })
         .then((response) => response.json())
         .then((data) => {
           console.log("Redirecting to payment gateway:", data.GatewayPageURL);
           window.location.href=data.GatewayPageURL; // Redirect the user to payment gateway
         })
         .catch((error) => {
           console.error("Error initiating payment:", error);
         });
    };

    if (!enrollmentData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl text-center font-semibold mb-6">Checkout</h1>
            <div className="bg-white shadow-lg rounded-lg p-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Enrollment data */}
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

                    {/* Billing Details Form */}
                    <div className="mb-4 mt-6">
                        <h2 className="text-lg font-semibold mb-2">Billing Details</h2>
                        <label htmlFor="fullName" className="block mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            {...register('fullName')}
                            className="border border-gray-300 p-2 w-full"
                            required
                        />

                        <label htmlFor="email" className="block mb-1 mt-3">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            {...register('email')}
                            className="border border-gray-300 p-2 w-full"
                            required
                        />

                        <label htmlFor="address" className="block mb-1 mt-3">
                            Billing Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            {...register('address')}
                            className="border border-gray-300 p-2 w-full"
                            required
                        />

                        <label htmlFor="city" className="block mb-1 mt-3">
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            {...register('city')}
                            className="border border-gray-300 p-2 w-full"
                            required
                        />

                        <label htmlFor="country" className="block mb-1 mt-3">
                            Country
                        </label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            {...register('country')}
                            className="border border-gray-300 p-2 w-full"
                            required
                        />

                        <label htmlFor="postalCode" className="block mb-1 mt-3">
                            Postal Code
                        </label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            {...register('postalCode')}
                            className="border border-gray-300 p-2 w-full"
                            required
                        />

                        <label htmlFor="contactNumber" className="block mb-1 mt-3">
                            Contact Number
                        </label>
                        <input
                            type="text"
                            id="contactNumber"
                            name="contactNumber"
                            {...register('contactNumber')}
                            className="border border-gray-300 p-2 w-full"
                            required
                        />
                    </div>

                    <div className="mt-6 flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Pay Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;