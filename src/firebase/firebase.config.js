// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHw0P9lVn7RAi0bgnCay8abvfGdUH-Vpc",
  authDomain: "crud-barber.firebaseapp.com",
  projectId: "crud-barber",
  storageBucket: "crud-barber.appspot.com",
  messagingSenderId: "1065513432250",
  appId: "1:1065513432250:web:a11e05b853244839b7be83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;