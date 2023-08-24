import React from 'react';
import { useForm } from 'react-hook-form';


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClasses = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`



  const onSubmit = (data) => {
    // TODO: Add logic to submit data to your backend
    console.log(data);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <h1 className="text-3xl font-semibold mb-4">Add Classes</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Course Name</label>
            <input
              type="text"
              {...register('course_name', { required: true })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.course_name && <span className="error-message">Course Name is required</span>}
          </div>
          <div>
            <label htmlFor="image" className="block font-semibold mb-1">Class Image:</label>
            <input
              type="file"
              {...register('image', { required: true })}
              name="image"
              className="file-input file-input-bordered w-full"
            />
            {errors.image && <span className="error-message">Class Image is required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Price</label>
            <input
              type="number"
              {...register('price', { required: true })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.price && <span className="error-message">Price is required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Instructor Name</label>
            <input
              type="text"
              {...register('instructor_name', { required: true })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.instructor_name && <span className="error-message">Instructor Name is required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Number of Students</label>
            <input
              type="number"
              {...register('number_of_students', { required: true })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.number_of_students && <span className="error-message">Number of Students is required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Available Seats</label>
            <input
              type="number"
              {...register('available_seats', { required: true })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.available_seats && <span className="error-message">Available Seats is required</span>}
          </div>
          <div>
            <label className="block font-semibold mb-1">Course Details</label>
            <textarea
              {...register('course_details', { required: true })}
              rows="4"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.course_details && <span className="error-message">Course Details is required</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Add Class
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClasses;
