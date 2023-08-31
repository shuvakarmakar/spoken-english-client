import React, { createContext, useEffect, useState, ReactNode } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebase";

import buttonSound from "../../Component/Sound/zapsplat_multimedia_button_click_bright_003_92100.mp3";
import { initializeClickSound, playClickSound } from "../../utils/ClickSound";
import axios from "axios";
import { io } from "socket.io-client";

// TypeScript type definitions
export interface AuthContextType {
  createUser: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  Logout: () => Promise<void>;
  loading: boolean;
  user: User | null;
  ResetPassword: (email: string) => Promise<void>;
  UpdateUserProfile: (Name: string) => Promise<void>;
  handleButtonClick: () => void;
  onlineUsers: { [key: string]: boolean };
}


export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const auth = getAuth(app);

  const createUser = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    return await createUserWithEmailAndPassword(auth, email, password).then(
      () => { }
    );
  };

  const login = async (email: string, password: string): Promise<void> => {
    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, password).then(
      () => { }
    );
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {

      console.log(user);
      if (user) {
        axios
          .post(" https://spoken-english-server-xi.vercel.app/jwt", {
            email: user.email,
          })
          .then((data) => {
            console.log(data.data);
            localStorage.setItem("accessToken", data.data.token);
          });

      } else {
        localStorage.removeItem("accessToken");
      }
      setUser(user);
      setLoading(false);

    });


    return () => {
      unsubscribe();
    };
  }, [auth]);

  const Logout = async () => {
    setLoading(true);
    return await signOut(auth);
  };

  const ResetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const UpdateUserProfile = (Name: string) => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      return updateProfile(currentUser, {
        displayName: Name,
      });
    } else {
      return Promise.reject(new Error("No user is currently logged in."));
    }
  };

  initializeClickSound(buttonSound);

  const handleButtonClick = () => {
    playClickSound();
    // Your button's click handler logic
  };


const [onlineUsers, setOnlineUsers] = useState<{ [key: string]: boolean }>({});
  // get online connected user  
   useEffect(() => {
     const socket = io("https://amused-assorted-bar.glitch.me/");

     if (user) {
       socket.emit("userConnect", { userId: user.uid });

       socket.on(
         "onlineUsers",
         (updatedOnlineUsers: { [key: string]: boolean }) => {
           console.log(updatedOnlineUsers, "connected");
           setOnlineUsers(updatedOnlineUsers);
         }
       );
     }

     return () => {
       if (user) {
         socket.emit("userDisconnect", { userId: user.uid });
       }
       socket.disconnect();
     };
   }, [user]);

  const AuthUser: AuthContextType = {
    createUser,
    login,
    user,
    Logout,
    loading,
    ResetPassword,
    UpdateUserProfile,
    handleButtonClick,
    onlineUsers,
  };

  return (
    <AuthContext.Provider value={AuthUser}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
