import { useContext } from "react";

import useAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext, AuthContextType } from "../Provider/AuthProvider/AuthProvider";


const UseInstructor = () => {
  // const { user, loading } = useContext(AuthContext);
    const { loading, user } = useContext(AuthContext) as AuthContextType;

  const [axiosSecure] = useAxiosSecure();

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      console.log("isInstructor", res);
      return res.data.instructor;
    },
  });

  return [isInstructor, isInstructorLoading];
};
export default UseInstructor;
