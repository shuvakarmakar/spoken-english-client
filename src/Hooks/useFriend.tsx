import { useContext, useEffect, useState } from "react";
import {
  AuthContext,
  AuthContextType,
} from "../Provider/AuthProvider/AuthProvider";

interface FriendData {
  _id: string;
  friend: {
    InstructorDisabled: boolean;
    Roll: string;
    email: string;
    name: string;
    password: string;
    profileBanner: string;
    profileImage: string;
    uid: string;
    _id: number;
  };
}

interface FriendHookResult {
  friends: FriendData[];
  loading: boolean;
  setFriends: (friends: FriendData[]) => void;
  setLoading: (loading: boolean) => void;
}

const useFriend = (): FriendHookResult => {
  const [loading, setLoading] = useState(true);
  const [friends, setFriends] = useState<FriendData[]>([]);
  const { user } = useContext(AuthContext) as AuthContextType;

  useEffect(() => {
    const pollingInterval = setInterval(() => {
      if (user) {
        fetch(
          `https://spoken-english-server-xi.vercel.app/get-friend/${user?.uid}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (Array.isArray(data)) {
              setFriends(data);
            } else if (data.friend) {
              setFriends([data]);
            }
            setLoading(false);
          });
      }
    }, 1000);

    return () => {
      clearInterval(pollingInterval);
    };
  }, [user]);

  return { friends, loading, setFriends, setLoading };
};

export default useFriend;
