// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Danger
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3oGNTEPmvVOZVfc5A5nO_wBGOpkUXS9s",
  authDomain: "module-51-ceacb.firebaseapp.com",
  projectId: "module-51-ceacb",
  storageBucket: "module-51-ceacb.firebasestorage.app",
  messagingSenderId: "184621956655",
  appId: "1:184621956655:web:bfcba7c0fd077960a650da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
