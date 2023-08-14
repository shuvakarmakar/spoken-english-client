import { useContext } from "react";

import useAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext, AuthContextType } from "../Provider/AuthProvider/AuthProvider";

const UseStudent = () => {
  // const { user, loading } = useContext(AuthContext);
  const { loading, user } = useContext(AuthContext) as AuthContextType;
  
  const [axiosSecure] = useAxiosSecure();

  const { data: isStudent, isLoading: isStudentLoading } = useQuery({
    queryKey: ["isStudent", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/student/${user?.email}`);
      console.log("isInstructor", res);
      return res.data.student;
    },
  });

  return [isStudent, isStudentLoading];
};
export default UseStudent;
