// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhRiYBZyDxTtBuISfEjB0gt1juZsKU6xw",
  authDomain: "toyman-b6df9.firebaseapp.com",
  projectId: "toyman-b6df9",
  storageBucket: "toyman-b6df9.appspot.com",
  messagingSenderId: "274747867314",
  appId: "1:274747867314:web:dae288aad80be6c108c9ab",
  measurementId: "G-K8Q3PZ1FHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)
export default Auth