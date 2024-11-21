// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPgkyrLf7tdMzzOZLvNUInNFDTmMW-GY0",
  authDomain: "auth-moha-milon-27efc.firebaseapp.com",
  projectId: "auth-moha-milon-27efc",
  storageBucket: "auth-moha-milon-27efc.firebasestorage.app",
  messagingSenderId: "1038287167719",
  appId: "1:1038287167719:web:d4dfd62d1a7c1485c9c242"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);