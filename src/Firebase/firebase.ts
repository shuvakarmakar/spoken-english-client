import { FirebaseApp, initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr_oyQWe9RHvfl2qBpwVHZOvDZB7bZTYA",
  authDomain: "spoken-english-65d22.firebaseapp.com",
  projectId: "spoken-english-65d22",
  storageBucket: "spoken-english-65d22.appspot.com",
  messagingSenderId: "997742080295",
  appId: "1:997742080295:web:8e6785b1381ba32aa63902",
  
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

export default app;
