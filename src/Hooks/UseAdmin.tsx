import { useContext } from "react";


import { useQuery } from "@tanstack/react-query";
import { AuthContext, AuthContextType } from "../Provider/AuthProvider/AuthProvider";
import useAxiosSecure from "./UseAxiosSecure";

const useAdmin = () => {
  // const { user, loading } = useContext(AuthContext);
    const { loading, user } = useContext(AuthContext) as AuthContextType;
  const [axiosSecure]=useAxiosSecure()

  const { data:isAdmin,isLoading:isAdminLoading} = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled:!loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`)
      console.log("is admin", res);
      return res.data.admin
    }
  })

 return [isAdmin,isAdminLoading]
}
export default useAdmin;