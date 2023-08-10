import React, { useContext, useState, useRef } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [show, setShow] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const Navigate = useNavigate();

  const { login, ResetPassword, handleButtonClick } = useContext(AuthContext);

  // Login form
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const email: string = (form.Email as HTMLInputElement).value;
    const password: number = parseInt(
      (form.password as HTMLInputElement).value,
      10
    );

    const user = {
      email,
      password,
    };
    console.log(user);
    if (!email) {
      alert("please enter your email or password");
      return;
    }

    login(email, password)
      .then((result) => {
        console.log(result);
          

         

        Navigate("/");

        Swal.fire("Good job!", "Login Success", "success");
        form.reset();
      })
      .catch((err) => {
        const errorMessage = err.message;
        if (errorMessage) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${errorMessage}`,
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }

        setError(errorMessage);
      });

    event.stopPropagation();
  };

  // Reset Password

  const passRef: RefObject<HTMLInputElement> = useRef(null);

  const handelResetPassword = () => {
    if (passRef.current) {
      passRef.current.focus();
    }
    const email = passRef.current.value;
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Enter your email address`,
        footer: '<a href="">Why do I have this issue?</a>',
      });
      return;
    }
    ResetPassword(email)
      .then(() => {
        Swal.fire("Yahoo!", "Check your Email", "success");
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
        <div className="hero-content text-neutral-content">
          <div className="w-full md:w-[600px] ">
            <form
              onSubmit={handleSubmit}
              className="w-[350px] md:w-[600px] bg-white p-3 md:p-20 rounded shadow-lg"
            >
              <div className="flex justify-between">
                <h2 className="text-2xl font-semibold mb-4 uppercase text-blue-500">
                  Log In{" "}
                </h2>
                <Link to={"/SignUp"}>
                  <h2 className="text-2xl font-semibold mb-4 uppercase hover:text-blue-500">
                    Sign Up{" "}
                  </h2>
                </Link>
              </div>
              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className=" block text-gray-700 font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  id="Email"
                  name="Email"
                  ref={passRef}
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
                  required
                  className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  placeholder="Your password"
                />

                <p
                  onClick={() => setShow(!show)}
                  className=" absolute top-8 right-5 font-bold cursor-pointer hover:text-blue-500 "
                >
                  {show ? "hide" : "Show"}
                </p>
                {error && (
                  <small
                    onClick={handelResetPassword}
                    className="text-pink-500 link "
                  >
                    Rest Password..?
                  </small>
                )}
              </div>

              {/* Add other input fields */}
              <button
                onClick={handleButtonClick}
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded w-full"
              >
                Login
              </button>

              <SocialLogin handleButtonClick={handleButtonClick}></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
