import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
// import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';

interface BillingData {
    fullName: string;
    email: string;
    address: string;
    city: string;
    country: string;
    postalCode: string;
    contactNumber: string;
}

// interface EnrollmentData {
//     courseId: string;
//     courseName: string;
//     price: number;
//     instructor: string;
//     number_of_students: number;
// }

const Checkout: React.FC = () => {
    const location = useLocation();
    // const { user } = useContext(AuthContext);
    const enrollmentData = location?.state;
    console.log(enrollmentData)

    const { register, handleSubmit } = useForm<BillingData>();

    const onSubmit = (billingData: BillingData) => {
      const combinedData = {
        ...enrollmentData,
        billingData,
      };
      
    //   console.log(combinedData);
      // spoken-english-server-xi.vercel.app
      fetch("https://spoken-english-server-xi.vercel.app/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(combinedData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Redirecting to payment gateway:", data.GatewayPageURL);
          window.location.href = data.GatewayPageURL; // Redirect the user to payment gateway
        })
        .catch((error) => {
          console.error("Error initiating payment:", error);
        });
    };

    if (!enrollmentData) {
        return <div><Spinner></Spinner></div>;
    }

    return (
        <div className="container mx-auto py-8 changebg">
            <h1 className="text-3xl text-center font-semibold mb-6">Checkout</h1>
            <div className="bg-white shadow-lg rounded-lg p-6 changebg">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Enrollment data */}
                    <p className="text-xl font-semibold mb-4">
                        Course Name: {enrollmentData.courseName}
                    </p>
                    <p className="text-lg mb-2">
                        Instructor: {enrollmentData.instructorName}
                    </p>
                    <p className="text-lg mb-2">
                        Instructor Email : {enrollmentData.instructorEmail}
                    </p>
                    <p className="text-lg mb-2">
                        Price: ${enrollmentData.price}
                    </p>
                    <p className="text-lg">
                        Number of Students: {enrollmentData.numberOfStudents}
                    </p>

                    {/* Billing Details Form */}
                    <div className="mb-4 mt-6">
                        <h2 className="text-lg font-semibold mb-2">Billing Details</h2>
                        <label htmlFor="fullName" className="block mb-1 darkText">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            
                            {...register('fullName')}
                            className="border border-gray-300 p-2 w-full lightText"
                            required
                        />

                        <label htmlFor="email" className="block mb-1 darkText mt-3">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                          
                            {...register('email')}
                            className="border border-gray-300 p-2 w-full lightText"
                            required
                        />

                        <label htmlFor="address" className="block mb-1 darkText mt-3">
                            Billing Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            
                            {...register('address')}
                            className="border border-gray-300 text-black p-2 w-full lightText"
                            required
                        />

                        <label htmlFor="city" className="block mb-1 darkText mt-3">
                            City
                        </label>
                        <input
                            type="text"
                            id="city"
                         
                            {...register('city')}
                            className="border border-gray-300 p-2 w-full lightText"
                            required
                        />

                        <label htmlFor="country" className="block mb-1 darkText mt-3">
                            Country
                        </label>
                        <input
                            type="text"
                            id="country"
                           
                            {...register('country')}
                            className="border border-gray-300 p-2 w-full lightText"
                            required
                        />

                        <label htmlFor="postalCode" className="block mb-1 darkText mt-3">
                            Postal Code
                        </label>
                        <input
                            type="text"
                            id="postalCode"
                           
                            {...register('postalCode')}
                            className="border border-gray-300 p-2 w-full lightText"
                            required
                        />

                        <label htmlFor="contactNumber" className="block mb-1 darkText mt-3">
                            Contact Number
                        </label>
                        <input
                            type="text"
                            id="contactNumber"
                            
                            {...register('contactNumber')}
                            className="border border-gray-300 p-2 w-full lightText"
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