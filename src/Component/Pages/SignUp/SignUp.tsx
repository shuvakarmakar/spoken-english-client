import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import Swal from "sweetalert2";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const { createUser, UpdateUserProfile, handleButtonClick } =
    useContext(AuthContext);

  const Navigate = useNavigate();
  const [Roll, setSelectedRole] = useState<string>("student");

  useEffect(() => {
    document.title = "Spoken |  SignUp"; // Set the new title here
  }, []);

  // get selected role handler

  const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const name: string = (form.name as HTMLInputElement).value;
    const email: string = (form.Email as HTMLInputElement).value;
    const password: number = parseInt(
      (form.password as HTMLInputElement).value,
      10
    );

    const user = {
      name,
      email,
      password,
      Roll,
    };
    console.log(user);
    if (!email) {
      Swal.fire("Oh NO!", "Please enter your email", "error");
      return;
    } else if (!password) {
      Swal.fire("Good job!", "Please enter your password", "error");
    }

    createUser(email, password)
      .then((result) => {
        if (result.user) {

          // update user profile name
          UpdateUserProfile(name)
            .then(() => {
              setTimeout(() => {
                Swal.fire("Good job!", "User Name Update Success", "success");
              }, 2000);
            })
          
          // add user information to database

          const saveUser = {
            name,
            email,
            password,
            Roll
          };
          fetch("https://spoken-english-server.vercel.app/AddUsers", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.InsertedId) {
                alert("Inserted successfully");
              }
            })

            .catch((error) => {
              const errorMessage = error.message;
              if (errorMessage) {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: `${errorMessage}`,
                  footer: '<a href="">Why do I have this issue?</a>',
                });
              }
            });
  }
  Navigate("/");
  Swal.fire("Good job!", "Create account Success", "success");

  form.reset();
})
      .catch ((error) => {
  const errorMessage = error.message;
  if (errorMessage) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${errorMessage}`,
      footer: '<a href="">Why do I have this issue?</a>',
    });
  }
});

event.stopPropagation();
  };

return (
  <div className="container mx-auto">
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/flat-design-english-school-background_23-2149487419.jpg?w=900&t=st=1691483418~exp=1691484018~hmac=d182892b644c56375411345c1801fa9b48ba34d7e42f7ff2badde3e9e5dd9397)",
        width: "100%",
        height: "100%",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content  text-neutral-content">
        <div className="w-[350px] md:w-[600px] ">
          <form
            onSubmit={handleSubmit}
            className="w-full  bg-white p-8 rounded shadow-lg"
          >
            <div className=" flex justify-between">
              <h2 className="text-2xl font-semibold mb-4 uppercase text-blue-500">
                Sign Up
              </h2>
              <Link to={"/login"}>
                <h2 className="text-2xl font-semibold mb-4 uppercase hover:text-blue-500">
                  Log in
                </h2>
              </Link>
            </div>
            {/* name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className=" text-gray-700 font-medium mb-3"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1"
              >
                Email
              </label>
              <input
                type="text"
                id="Email"
                name="Email"
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                placeholder="Your Email"
              />
            </div>
            {/* password */}
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-1"
              >
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                id=" password"
                name="password"
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                placeholder="Your password"
              />
              <p
                onClick={() => setShow(!show)}
                className=" absolute top-8 right-5 font-bold cursor-pointer hover:text-blue-500 "
              >
                {show ? "hide" : "Show"}
              </p>
            </div>

            {/* Roll */}
            <div className="mb-4">
              <label
                htmlFor="role"
                className="block text-gray-700 font-medium mb-1"
              >
                Role
              </label>
              <select
                value={Roll}
                onChange={handleRoleChange}
                id="role"
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              >
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
              </select>
            </div>

            {/* Add other input fields */}
            <button
              onClick={handleButtonClick}
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
            >
              Sign Up
            </button>

            <SocialLogin handleButtonClick={handleButtonClick}></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  </div>
);
};

export default SignUp;
