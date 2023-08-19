import React, { useContext } from "react";
import {
  AuthContext,
  AuthContextType,
} from "../../Provider/AuthProvider/AuthProvider";
import Spinner from "../../Component/Pages/Spinner/Spinner";
import { Link, Navigate } from "react-router-dom";

const PrivetRout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useContext(AuthContext) as AuthContextType;

  if (loading) {
    return (
      <>
        <h1 className=" uppercase text-2xl text-center mt-20 font-bold "><Link to={'/login'}>Please Login </Link></h1>
        <Spinner />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Navigate to={"/login"} />
      </>
    );
  } else {
    return children;
  }
};

export default PrivetRout;
