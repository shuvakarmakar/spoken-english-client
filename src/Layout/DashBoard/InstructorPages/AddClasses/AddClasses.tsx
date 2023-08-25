import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const AddClasses = () => {
  const { control, register, handleSubmit, formState: { errors } } = useForm();
  const [courseVideos, setCourseVideos] = useState([{ courseVideoName: '', courseVideoFile: null }]);

  const onSubmit = (data) => {
    // Combine course video names and files in the data object
    data.courseVideos = courseVideos;

    // TODO: Add logic to submit data to your backend
    console.log(data);
  };

  const handleAddCourseVideo = () => {
    setCourseVideos([...courseVideos, { courseVideoName: '', courseVideoFile: null }]);
  };

  const handleCourseVideoNameChange = (index, value) => {
    const updatedVideos = [...courseVideos];
    updatedVideos[index].courseVideoName = value;
    setCourseVideos(updatedVideos);
  };

  const handleCourseVideoFileChange = (index, file) => {
    const updatedVideos = [...courseVideos];
    updatedVideos[index].courseVideoFile = file;
    setCourseVideos(updatedVideos);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <h1 className="text-3xl font-semibold mb-4">Add Classes</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Course Name */}
          <div>
            <label className="block font-semibold mb-1">Course Name</label>
            <input
              type="text"
              {...register('courseName', { required: true })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.courseName && <span className="text-red-500">Course Name is required</span>}
          </div>

          {/* Image */}
          <div>
            <label className="block font-semibold mb-1">Class Image</label>
            <input
              type="file"
              {...register('image', { required: true })}
              name="image"
              className="file-input"
            />
            {errors.image && <span className="text-red-500">Class Image is required</span>}
          </div>

          {/* Price */}
          <div>
            <label className="block font-semibold mb-1">Price</label>
            <input
              type="number"
              {...register('price', { required: true })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.price && <span className="text-red-500">Price is required</span>}
          </div>

          {/* Instructor Name */}
          <div>
            <label className="block font-semibold mb-1">Instructor Name</label>
            <input
              type="text"
              {...register('instructorName', { required: true })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.instructorName && <span className="text-red-500">Instructor Name is required</span>}
          </div>

          {/* Number of Students */}
          <div>
            <label className="block font-semibold mb-1">Number of Students</label>
            <input
              type="number"
              {...register('numberOfStudents', { required: true })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.numberOfStudents && <span className="text-red-500">Number of Students is required</span>}
          </div>

          {/* Available Sheets */}
          <div>
            <label className="block font-semibold mb-1">Available Sheets</label>
            <input
              type="number"
              {...register('availableSheets', { required: true })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.availableSheets && <span className="text-red-500">Available Sheets is required</span>}
          </div>

          {/* Course Details */}
          <div>
            <label className="block font-semibold mb-1">Course Details</label>
            <textarea
              {...register('courseDetails', { required: true })}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.courseDetails && <span className="text-red-500">Course Details is required</span>}
          </div>

          {/* Course Videos */}
          {courseVideos.map((video, index) => (
            <div key={index}>
              <label className="block font-semibold mb-1">Add Course Video {index + 1} Name</label>
              <input
                type="text"
                onChange={(e) => handleCourseVideoNameChange(index, e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <label className="block font-semibold mb-1">Add Course Video {index + 1}</label>
              <div className="flex space-x-2">
                <input
                  type="file"
                  onChange={(e) => handleCourseVideoFileChange(index, e.target.files[0])}
                  className="file-input"
                />
                <span className="text-blue-500">{video.courseVideoFile?.name}</span>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddCourseVideo}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Add Course Video
          </button>
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
