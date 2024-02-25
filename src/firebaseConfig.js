// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKgWGGv65OAqK9fvvDspVAoLvcg59ASK0",
  authDomain: "react-store-tailwind.firebaseapp.com",
  projectId: "react-store-tailwind",
  storageBucket: "react-store-tailwind.appspot.com",
  messagingSenderId: "213071723358",
  appId: "1:213071723358:web:637e1204d1345686a2adcf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
