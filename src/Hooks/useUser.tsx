import { useQuery, useQueryClient } from "@tanstack/react-query";

interface User {
  _id: number;
  name: string;
  email: string;
  Roll: string;
  InstructorDisabled: boolean;
  disabled: boolean;
}

const useUser = (): [User[], boolean, () => void] => {
  const queryClient = useQueryClient();

  const {
    data: users =[],   
    isLoading: loading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://spoken-english-server.vercel.app/GetUsers");
      return res.json();
    },
  });

  const refreshUsers = () => {
    queryClient.invalidateQueries("users");
  };

  return [users, loading, refreshUsers];
};

export default useUser;
