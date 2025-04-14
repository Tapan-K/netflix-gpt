// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOz-JS39E4_1NYypG7HRgeg3SDroOymqo",
  authDomain: "netflixgpt-7053e.firebaseapp.com",
  projectId: "netflixgpt-7053e",
  storageBucket: "netflixgpt-7053e.firebasestorage.app",
  messagingSenderId: "588208171437",
  appId: "1:588208171437:web:3e57a6eb3f43a5b59a5924",
  measurementId: "G-Q6Q8EY0WE6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
