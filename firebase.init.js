// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-FweHduxd3O-JfFrn6_mXJsaVDX-VnmI",
  authDomain: "app-store-a6cb7.firebaseapp.com",
  projectId: "app-store-a6cb7",
  storageBucket: "app-store-a6cb7.firebasestorage.app",
  messagingSenderId: "1002775456038",
  appId: "1:1002775456038:web:22e67a28e6c34aee2879e7",
  measurementId: "G-QR9HX76DYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);