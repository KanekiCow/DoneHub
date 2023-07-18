// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzrcGd3p1WWQKe0zCcgwRrn4SeeVFNb-s",

  authDomain: "valaint-aa920.firebaseapp.com",

  databaseURL: "https://valaint-aa920-default-rtdb.firebaseio.com",

  projectId: "valaint-aa920",

  storageBucket: "valaint-aa920.appspot.com",

  messagingSenderId: "148390222129",

  appId: "1:148390222129:web:166e43a19e630b8855f810",

  measurementId: "G-Y7FW5BR7TV",
};

// Initialize Firebase
export const provider = new GoogleAuthProvider();
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
