import React, { useContext } from "react";
import {
  AuthContext,
  AuthContextType,
} from "../../Provider/AuthProvider/AuthProvider";
import Spinner from "../../Component/Pages/Spinner/Spinner";
import { Link, Navigate, useLocation } from "react-router-dom";

interface PrivetRouteProps {
  children: React.ReactNode;
}

const PrivetRoute: React.FC<PrivetRouteProps> = ({ children }) => {
  const { user, loading } = useContext(AuthContext) as AuthContextType;
  const location = useLocation();

  if (loading) {
    return (
      <>
        <h1 className="uppercase text-2xl text-center mt-20 font-bold">
          <Link to="/login">Please Login</Link>
        </h1>
        <Spinner />
      </>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return <>{children}</>;
  }
};

export default PrivetRoute;
