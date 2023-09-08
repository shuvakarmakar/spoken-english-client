import React, { useContext, useState, useRef } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";
import { AuthContext, AuthContextType } from "../../../Provider/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Lottie from 'lottie-react';
import data from './login.json'

interface User {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  // lottie


  const [show, setShow] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const Navigate = useNavigate();

  const { login, ResetPassword, handleButtonClick } = useContext(
    AuthContext
  ) as AuthContextType;

  // Login form
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get("Email") as string;
    const password = formData.get("password") as string;

    const user: User = {
      email,
      password,
    };

    if (!email || !password) {
      alert("Please enter your email and password");
      return;
    }

    try {
      const result = await login(user.email, user.password);
      console.log(result);

      Navigate("/");

      Swal.fire("Good job!", "Login Success", "success");
      form.reset();
    } catch (err) {
      const errorMessage = (err as Error).message;
      if (errorMessage) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorMessage}`,
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }

      setError(errorMessage);
    }
  };

  // Reset Password
  const passRef: React.RefObject<HTMLInputElement> = useRef(null);

  const handelResetPassword = () => {
    if (passRef.current) {
      passRef.current.focus();
    }
    const email = passRef.current?.value;
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
    <div className="w-[96%] md:w-[90%] mx-auto pt-3">
      <div className="grid grid-cols-1 md:grid-cols-2">

        <div
          className="hero  h-full changebg">
          <div className=""></div>
          <div className="hero-content text-neutral-content">
            <div className="w-full  h-full">
              <form
                onSubmit={handleSubmit}
                className="w-full h-full cardbg bg-gradient-to-t to-[#101E41] from-white p-3 md:p-20 rounded shadow-2xl"
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
        <div className="changebg">
          <Lottie
            loop={true}
            autoplay={true}
            animationData={data}
            className="w-full h-[40vh] md:h-[80vh]"
          />
        </div>
      </div>


    </div>
  );
};

export default Login;
