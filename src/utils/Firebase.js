// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8ULGHVfPzSaKeEibDf3dJtoBgzwGLuVo",
  authDomain: "netflixgpt-30a57.firebaseapp.com",
  projectId: "netflixgpt-30a57",
  storageBucket: "netflixgpt-30a57.appspot.com",
  messagingSenderId: "812476772680",
  appId: "1:812476772680:web:2d597398d46aa50cad037d",
  measurementId: "G-XMR1H3RKNH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
