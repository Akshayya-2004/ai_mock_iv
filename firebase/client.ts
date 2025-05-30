// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpdoug6WZexyy37BceypESbmtULPo4ZjA",
  authDomain: "prepwise-46eba.firebaseapp.com",
  projectId: "prepwise-46eba",
  storageBucket: "prepwise-46eba.firebasestorage.app",
  messagingSenderId: "13574486766",
  appId: "1:13574486766:web:a5ebb43aed372f6e60d1ff",
  measurementId: "G-G3J5J0JYM7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);