import React, { createContext, useEffect, useState, ReactNode } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebase";

// type script type definitions
interface AuthContextType {
  createUser: (email: string, password: string) => Promise<void>;
  Login: (email: string, password: string) => Promise<void>;
  ResetPassword: (email: string) => Promise<void>;
  loginWithGoogle: () =>void;
  FacebookSingIn: () => void;
  Logout: () => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [user, setUSer] = useState<null>(null);
  const [loading, setLoading] = useState<boolean>(true);
 console.log(user,'from');
  const auth = getAuth(app);
  // console.log("auth", auth);
  const provider = new GoogleAuthProvider();

  // create user with email and password
  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user with email and password
  const login = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google sign in user
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Facebook sign
  const FacebookProvider = new FacebookAuthProvider();

  const FacebookSingIn = () => {
    return signInWithPopup(auth, FacebookProvider);
  };

  // get logged in user from firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setUSer(user);
      // console.log("logging user found", user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  // Logout user
  const Logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Reset password

  const ResetPassword = (email:string) => {
    return sendPasswordResetEmail(auth, email);
  };

  // update user profile

  const UpdateUserProfile = (Name:string) => { 
    return updateProfile(auth.currentUser, {
      displayName:Name,
     
    });
  }

  const AuthUser: AuthContextType = {
    createUser,
    login,
    loginWithGoogle,
    user,
    Logout,
    loading,
    FacebookSingIn,
    ResetPassword,
    UpdateUserProfile,
  };
  

  return (
    <div>
      <AuthContext.Provider value={AuthUser}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
