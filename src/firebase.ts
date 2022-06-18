// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW2EyRXF5oXgPM8Hrb-DgxNq-MBEYullQ",
  authDomain: "cs-inspire.firebaseapp.com",
  projectId: "cs-inspire",
  storageBucket: "cs-inspire.appspot.com",
  messagingSenderId: "39750688985",
  appId: "1:39750688985:web:714688971b142b68981ec8",
  measurementId: "G-RNH7EMXXRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);