import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext, AuthContextType } from "../Provider/AuthProvider/AuthProvider";



const useAxiosSecure = () => {
  // const { LogOutUser } = useContext(AuthContext);
    const { Logout } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          // await LogOutUser();
          // navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [Logout, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
