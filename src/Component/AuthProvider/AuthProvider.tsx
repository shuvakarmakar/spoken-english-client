import React, { createContext, useEffect, useState, ReactNode } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase";


interface AuthContextType {
  createUser: (email: string, password: string) => Promise<void>;
  Login: (email: string, password: string) => Promise<void>;
  loinWithGoogle: () => Promise<void>;
  user:any; // Update the type for user as needed
  Logout: () => Promise<void>;
  loding: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUSer] = useState<any| null>(null);
  const [loding, setLoging] = useState<boolean>(true);

  const auth = getAuth(app);
  console.log("auth", auth);
  const provider = new GoogleAuthProvider();

  // create user with email and password
  const createUser = (email: string, password: string) => {
    setLoging(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user with email and password
  const Login = (email: string, password: string) => {
    setLoging(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google sign in user
  const loinWithGoogle = () => {
    setLoging(false);
    return signInWithPopup(auth, provider);
  };

  // get logged in user from firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUSer(user);
      console.log("logging user found");
      setLoging(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Logout user
  const Logout = () => {
    setLoging(false);
    return signOut(auth);
  };

  const AuthUser: AuthContextType = {
    createUser,
    Login,
    loinWithGoogle,
    user,
    Logout,
    loding,
  };

  return (
    <div>
      <AuthContext.Provider value={AuthUser}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
