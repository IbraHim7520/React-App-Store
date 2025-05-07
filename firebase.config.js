// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEoEqwdO1nEotQDfSa8_w6QFcvLa3RPis",
  authDomain: "react-app-store-a32af.firebaseapp.com",
  projectId: "react-app-store-a32af",
  storageBucket: "react-app-store-a32af.firebasestorage.app",
  messagingSenderId: "667901861411",
  appId: "1:667901861411:web:bfca2756990112c7cfdb96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);