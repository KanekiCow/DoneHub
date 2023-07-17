// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAd9zM2wBRE4aTEHJ2Nt3C1eoBEugT3yB4",
  authDomain: "test-96aeb.firebaseapp.com",
  projectId: "test-96aeb",
  storageBucket: "test-96aeb.appspot.com",
  messagingSenderId: "588349093363",
  appId: "1:588349093363:web:f879b14f8b4bb6e2ce0e86",
  measurementId: "G-8JB1RQL3HN",
};

// Initialize Firebase
export const provider = new GoogleAuthProvider();
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
