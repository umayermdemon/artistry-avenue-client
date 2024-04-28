// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtcILBl9GQe_FS_SfiXtX3X9i7kwaiBYg",
  authDomain: "artistry-avenue-b9a0.firebaseapp.com",
  projectId: "artistry-avenue-b9a0",
  storageBucket: "artistry-avenue-b9a0.appspot.com",
  messagingSenderId: "195502667716",
  appId: "1:195502667716:web:034111983d3251f69d5691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);