import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext, AuthContextType } from "../../../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

interface CourseVideo {
  courseVideoName: string;
  courseVideoUrl: string;
}

const img_hosting_token: string = import.meta.env.VITE_Image_Upload_Token;
console.log(img_hosting_token);
const AddClasses: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [courseVideos, setCourseVideos] = useState<CourseVideo[]>([
    { courseVideoName: "", courseVideoUrl: "" },
  ]);
  const { user } = useContext(AuthContext) as AuthContextType;

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = async (data: any) => {
    data.price = parseInt(data.price);
    data.numberOfStudents = parseInt(data.numberOfStudents);
    data.availableSeats = parseInt(data.availableSeats);

    const formData = new FormData();
    formData.append("image", data.image[0]);

    try {
      const response = await fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        data.imageURL = responseData.data.url;
        data.courseVideos = courseVideos;

        const backendResponse = await fetch(
          "https://spoken-english-server-xi.vercel.app/addCourses",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (backendResponse.ok) {
          console.log("Course added successfully");
          Swal.fire({
            icon: "success",
            title: "Course Added",
            text: "Your course has been successfully added.",
          });
          reset();
        } else {
          console.error("Failed to add course");
        }
      } else {
        console.error("Image upload failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAddCourseVideo = () => {
    setCourseVideos([
      ...courseVideos,
      { courseVideoName: "", courseVideoUrl: "" },
    ]);
  };

  const handleCourseVideoNameChange = (index: number, value: string) => {
    const updatedVideos = [...courseVideos];
    updatedVideos[index].courseVideoName = value;
    setCourseVideos(updatedVideos);
  };

  const handleCourseVideoUrlChange = (index: number, value: string) => {
    const updatedVideos = [...courseVideos];
    updatedVideos[index].courseVideoUrl = value;
    setCourseVideos(updatedVideos);
  };
  return (
    <div className="bg-slate-400 min-h-screen flex items-center justify-center">
      <div className="bg-slate-500 text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center mb-4">Add Classes</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Course Name */}
          <div>
            <label className="block font-semibold mb-1">Course Name</label>
            <input
              type="text"
              {...register("courseName", { required: true })}
              className="w-full px-4 py-2 text-black border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.courseName && (
              <span className="text-red-500">Course Name is required</span>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="block font-semibold mb-1">Class Image</label>
            <input
              type="file"
              {...register("image", { required: true })}
              name="image"
              className="file-input file-input-bordered text-black w-full"
            />
            {errors.image && (
              <span className="text-red-500">Class Image is required</span>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block font-semibold mb-1">Price</label>
            <input
              type="number"
              {...register("price", { required: true })}
              className="w-full px-4 py-2 border rounded text-black focus:outline-none focus:border-blue-500"
            />
            {errors.price && (
              <span className="text-red-500">Price is required</span>
            )}
          </div>

          {/* Instructor Name */}
          <div>
            <label className="block font-semibold mb-1">Instructor Name</label>
            <input
              type="text"
              {...register("instructorName", { required: true })}
              className="w-full px-4 py-2 border text-black rounded focus:outline-none focus:border-blue-500"
            />
            {errors.instructorName && (
              <span className="text-red-500">Instructor Name is required</span>
            )}
          </div>

          {/* Instructor Email */}
          <div>
            <label className="block font-semibold mb-1">Instructor Email</label>
            <input
              type="email"
              defaultValue={user?.email || ''}
              {...register("instructorEmail", { required: true })}
              className="w-full px-4 text-black py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.instructorEmail && (
              <span className="text-red-500">Instructor Email is required</span>
            )}
          </div>

          {/* Number of Students */}
          <div>
            <label className="block font-semibold mb-1">
              Number of Students
            </label>
            <input
              type="number"
              {...register("numberOfStudents", { required: true })}
              className="w-full text-black px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.numberOfStudents && (
              <span className="text-red-500">
                Number of Students is required
              </span>
            )}
          </div>

          {/* Available Seats */}
          <div>
            <label className="block font-semibold mb-1">Available Seats</label>
            <input
              type="number"
              {...register("availableSeats", { required: true })}
              className="w-full text-black px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.availableSeats && (
              <span className="text-red-500">Available Seats is required</span>
            )}
          </div>

          {/* Course Details */}
          <div>
            <label className="block font-semibold mb-1">Course Details</label>
            <textarea
              {...register("courseDetails", { required: true })}
              className="w-full text-black px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            />
            {errors.courseDetails && (
              <span className="text-red-500">Course Details is required</span>
            )}
          </div>

          {/* Course Videos */}
          {courseVideos.map((video,index) => (
        
            <div key={index}>
              <label className="block font-semibold mb-1">
                Add Course Video {index + 1} Name
              </label>
              <p className="hidden">{ video?.courseVideoName}</p>
              <input
                type="text"
                onChange={(e) =>
                  handleCourseVideoNameChange(index, e.target.value)
                }
                className="w-full  text-black px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <label className="block font-semibold mb-1">
                Add YouTube Video Link {index + 1}
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  onChange={(e) =>
                    handleCourseVideoUrlChange(index, e.target.value)
                  }
                  className="w-full text-black px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                />
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
