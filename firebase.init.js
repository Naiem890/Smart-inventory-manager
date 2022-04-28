// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8naHOmtuaGsoXBPT_b2lwIjHTA8VmJAo",
  authDomain: "smart-shop-manager.firebaseapp.com",
  projectId: "smart-shop-manager",
  storageBucket: "smart-shop-manager.appspot.com",
  messagingSenderId: "719971729395",
  appId: "1:719971729395:web:e8daa90c372c31047b1c86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
