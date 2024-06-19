// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3ym_yBwjKq6FsA-ZCdyKrXrjWJmS8tVk",
  authDomain: "node-app-project-8d379.firebaseapp.com",
  projectId: "node-app-project-8d379",
  storageBucket: "node-app-project-8d379.appspot.com",
  messagingSenderId: "244878506624",
  appId: "1:244878506624:web:7f8c18119b0cfcff40c465",
  measurementId: "G-15L6TTWMR4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
